# Technical Documentation

This repository contains a Next.js 13 (App Router) site. Key points:

- Run locally: `npm install` then `npm run dev` (port 3000)
- API routes:
  - `POST /api/contact` — accepts { name, email, company, message } and sends email via Resend when configured.
  - `POST /api/newsletter` — accepts { email } and subscribes to Mailchimp when configured.
- Environment variables required for full functionality:
  - `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL` — for contact emails via Resend
  - `MAILCHIMP_API_KEY`, `MAILCHIMP_LIST_ID` — for newsletter signup

Files added by handover scripts:
- `src/app/services/[slug]/page.tsx` — dynamic service pages
- `src/marketing/contact-form-section.tsx` — client form that posts to `/api/contact`
- `src/app/api/contact/route.ts` — contact API route
- `src/app/api/newsletter/route.ts` — newsletter API route

To generate PDF handovers locally, see `package.json` scripts and run `npm run generate:pdfs` (requires `markdown-pdf` via npx).
