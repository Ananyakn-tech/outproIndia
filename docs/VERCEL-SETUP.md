# Vercel Deployment and Smoke Test Guide

This guide explains the exact steps required to make the site live and verify the API flows.

## 1. Add environment variables

In your Vercel project settings, open `Environment Variables` and add:

- `FORMSPREE_FORM_ID` — Formspree form ID (part after `/f/` in your Formspree URL)
- `MAILCHIMP_API_KEY` — Mailchimp API key
- `MAILCHIMP_LIST_ID` — Mailchimp list ID
- Optional: `HUBSPOT_API_KEY` — HubSpot private app token
- Optional: `ZOHO_ACCESS_TOKEN` — Zoho CRM OAuth access token

Set each variable as sensitive and assign it to Production (and Preview if needed).

## 2. Disable deployment protection

If the deployment is still behind authentication:

1. Open your Vercel project.
2. Go to `Settings`.
3. Find `Protection` or `Password Protection`.
4. Disable it for the production deployment.
5. Save changes.

## 3. Redeploy the project

After the variables are added and deployment protection is disabled, redeploy:

- Use the Vercel dashboard `Redeploy` button, or
- Push a no-op commit:

```bash
git commit --allow-empty -m "ci: trigger redeploy"
git push
```

## 4. Smoke test the live site

Use these commands once the public URL is available:

```bash
curl -i https://<your-public-domain>/

curl -i -X POST https://<your-public-domain>/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Smoke Test","email":"test@example.com","company":"Acme","message":"Testing contact"}'

curl -i -X POST https://<your-public-domain>/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

Replace `<your-public-domain>` with the actual Vercel domain.

## 5. What to expect

- The homepage should return `200`.
- `/api/contact` should return `{ ok: true }` or a success response.
- `/api/newsletter` should return `{ ok: true }` or a success response.

If any endpoint still returns an error, check the Vercel env vars and redeploy again.
