# CRM Integration Notes

This document contains integration patterns for HubSpot and Zoho once the contact form is working.

## HubSpot

Use a HubSpot private app token and forward form submissions server-side.

Environment variable:
- `HUBSPOT_API_KEY`

Example contact forwarding code:

```ts
await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
  },
  body: JSON.stringify({
    properties: {
      email: payload.email,
      firstname: payload.name,
      company: payload.company || '',
      description: payload.message || '',
    },
  }),
});
```

## Zoho CRM

Use a Zoho OAuth access token and forward contact submissions to Zoho CRM.

Environment variable:
- `ZOHO_ACCESS_TOKEN`

Example contact forwarding code:

```ts
await fetch('https://www.zohoapis.com/crm/v2/Contacts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
  },
  body: JSON.stringify({
    data: [
      {
        Last_Name: lastName || 'Contact',
        First_Name: firstName,
        Email: payload.email,
        Company: payload.company || 'Self-Employed',
        Description: payload.message || '',
      },
    ],
  }),
});
```

## Notes

- The contact form still sends email via Resend or Formspree.
- CRM forwarding is optional and only occurs when `HUBSPOT_API_KEY` or `ZOHO_ACCESS_TOKEN` is set.
- If CRM forwarding fails, the form still returns success for the lead capture, but errors are recorded in the response for debugging.
- You can also use Zapier / Make / Integromat and connect `/api/contact` as a webhook if you prefer no-code integration.
