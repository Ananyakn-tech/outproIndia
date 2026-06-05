# CRM Integration Notes

This document contains integration patterns for HubSpot and Zoho once the contact form is working.

HubSpot example (server-side POST after receiving form):

```ts
// Example: forward form to HubSpot
await fetch('https://api.hubapi.com/contacts/v1/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}` },
  body: JSON.stringify({ properties: [{ property: 'email', value: email }, { property: 'firstname', value: name }] })
});
```

Alternatively use Zapier or Make to connect the `/api/contact` webhook to HubSpot/Zoho without server changes.
