import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

async function sendViaResend(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL || process.env.FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || process.env.TO_EMAIL;

  if (!apiKey || !from || !to) {
    throw new Error("Resend not configured: set RESEND_API_KEY, CONTACT_FROM_EMAIL and CONTACT_TO_EMAIL");
  }

  const html = `
    <h3>New contact inquiry</h3>
    <p><strong>Name:</strong> ${payload.name || "-"}</p>
    <p><strong>Email:</strong> ${payload.email || "-"}</p>
    <p><strong>Company:</strong> ${payload.company || "-"}</p>
    <p><strong>Message:</strong></p>
    <p>${(payload.message || "-").replace(/\n/g, "<br/>")}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from,
      to,
      subject: `New inquiry from ${payload.name || payload.email || "website"}`,
      html,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Resend error: ${res.status} ${body}`);
  }

  return true;
}

async function sendViaFormspree(payload: ContactPayload) {
  const formId = process.env.FORMSPREE_FORM_ID;
  if (!formId) {
    throw new Error("Formspree not configured: set FORMSPREE_FORM_ID");
  }

  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      company: payload.company,
      message: payload.message,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Formspree error: ${res.status} ${body}`);
  }

  return true;
}

async function forwardToHubSpot(payload: ContactPayload) {
  const apiKey = process.env.HUBSPOT_API_KEY;
  if (!apiKey) {
    throw new Error("HubSpot not configured: set HUBSPOT_API_KEY");
  }

  const body = {
    properties: {
      email: payload.email,
      firstname: payload.name,
      company: payload.company || "",
      description: payload.message || "",
    },
  };

  const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const bodyText = await res.text().catch(() => "");
    throw new Error(`HubSpot error: ${res.status} ${bodyText}`);
  }

  return true;
}

async function forwardToZoho(payload: ContactPayload) {
  const token = process.env.ZOHO_ACCESS_TOKEN;
  if (!token) {
    throw new Error("Zoho not configured: set ZOHO_ACCESS_TOKEN");
  }

  const nameParts = payload.name?.trim().split(" ") || [];
  const firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(" ") : payload.name || "";
  const lastName = nameParts.length > 0 ? nameParts.slice(-1).join(" ") : "Contact";

  const res = await fetch("https://www.zohoapis.com/crm/v2/Contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Zoho-oauthtoken ${token}`,
    },
    body: JSON.stringify({
      data: [
        {
          Last_Name: lastName || "Contact",
          First_Name: firstName,
          Email: payload.email,
          Company: payload.company || "Self-Employed",
          Description: payload.message || "",
        },
      ],
    }),
  });

  if (!res.ok) {
    const bodyText = await res.text().catch(() => "");
    throw new Error(`Zoho error: ${res.status} ${bodyText}`);
  }

  return true;
}

export async function POST(req: Request) {
  try {
    const data: ContactPayload = await req.json();

    if (!data.email || !data.name || !data.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    let sent = false;
    if (process.env.RESEND_API_KEY) {
      await sendViaResend(data);
      sent = true;
    } else if (process.env.FORMSPREE_FORM_ID) {
      await sendViaFormspree(data);
      sent = true;
    }

    if (!sent) {
      return NextResponse.json(
        {
          error:
            "No email provider configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL/CONTACT_TO_EMAIL, or set FORMSPREE_FORM_ID for a Formspree fallback.",
        },
        { status: 501 }
      );
    }

    const crmResults: Array<{ provider: string; status: string; error?: string }> = [];

    if (process.env.HUBSPOT_API_KEY) {
      try {
        await forwardToHubSpot(data);
        crmResults.push({ provider: "HubSpot", status: "forwarded" });
      } catch (err: any) {
        crmResults.push({ provider: "HubSpot", status: "failed", error: err?.message || String(err) });
      }
    }

    if (process.env.ZOHO_ACCESS_TOKEN) {
      try {
        await forwardToZoho(data);
        crmResults.push({ provider: "Zoho", status: "forwarded" });
      } catch (err: any) {
        crmResults.push({ provider: "Zoho", status: "failed", error: err?.message || String(err) });
      }
    }

    return NextResponse.json({ ok: true, crm: crmResults });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
