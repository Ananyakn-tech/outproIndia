# User Manual

This manual explains how to operate the website and receive leads.

1. Viewing leads
   - Contact inquiries are emailed to the address set in `CONTACT_TO_EMAIL`.
   - Newsletter signups are sent to Mailchimp list set by `MAILCHIMP_LIST_ID`.
   - When `HUBSPOT_API_KEY` or `ZOHO_ACCESS_TOKEN` is configured, contact leads are forwarded to CRM automatically.

2. Figma deliverables
   - The repo includes a Figma handover checklist and generated PDF, but not the source `.fig` file.
   - Upload the actual Figma file to a shared link for the final client handover.
   - If HubSpot or Zoho is configured with `HUBSPOT_API_KEY` or `ZOHO_ACCESS_TOKEN`, new contact leads are forwarded to CRM automatically.

2. Managing content
   - Services are stored in `src/data/service-details.ts` — edit this file to update services.

3. Deployment
   - Push to GitHub and enable automatic deployment with Vercel.
   - Add environment variables in Vercel project settings.
