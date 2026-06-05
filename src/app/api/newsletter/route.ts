import { NextResponse } from "next/server";

type NewsletterPayload = { email?: string };

export async function POST(req: Request) {
  try {
    const data: NewsletterPayload = await req.json();

    if (!data.email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;

    if (!apiKey || !listId) {
      return NextResponse.json({ error: "Mailchimp not configured" }, { status: 501 });
    }

    // Mailchimp API requires datacenter from API key suffix
    const dcMatch = apiKey.split("-").pop();
    const dc = dcMatch;

    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: data.email, status: "subscribed" }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      return NextResponse.json({ error: `Mailchimp error: ${body}` }, { status: res.status });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
