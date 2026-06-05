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

export async function POST(req: Request) {
  try {
    const data: ContactPayload = await req.json();

    if (!data.email || !data.name || !data.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Attempt to send via Resend if configured
    if (process.env.RESEND_API_KEY) {
      await sendViaResend(data);
      return NextResponse.json({ ok: true });
    }

    // Fallback to Formspree if configured
    if (process.env.FORMSPREE_FORM_ID) {
      await sendViaFormspree(data);
      return NextResponse.json({ ok: true });
    }

    // If no provider configured, return 501 with instructions
    return NextResponse.json(
      {
        error:
          "No email provider configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL/CONTACT_TO_EMAIL, or set FORMSPREE_FORM_ID for a Formspree fallback.",
      },
      { status: 501 }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
