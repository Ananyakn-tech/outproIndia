# Outpro India Website

This repository contains the Outpro India marketing website built with Next.js 13 (App Router), React 19, Tailwind, and shadcn/ui.

## What this repo includes

- Public pages for Home, About, Services, Portfolio, Testimonials, and Contact
- Dynamic service detail pages in `src/app/services/[slug]/page.tsx`
- Contact form API in `src/app/api/contact/route.ts`
- Newsletter signup API in `src/app/api/newsletter/route.ts`
- CRM forwarding support for HubSpot and Zoho
- Documentation and PDF handover assets in `docs/`

## Deployment

The Vercel project must have the following environment variables configured:

- `FORMSPREE_FORM_ID` or (`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`)
- `MAILCHIMP_API_KEY`
- `MAILCHIMP_LIST_ID`
- Optional: `HUBSPOT_API_KEY`, `ZOHO_ACCESS_TOKEN`

See `docs/VERCEL-SETUP.md` for exact Vercel setup and smoke-test commands.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Docs

See the `docs/` folder for handover documentation and generated PDFs.
