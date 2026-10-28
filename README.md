# Altar Technology Website

Official website for **Altar Technology** — a South African technology company: *Build. Transform. Grow.*

**AI • Data • Cloud • Software** — plus technology, training and staffing for IT Support and Customer Service, purpose-built for contact centre and BPO operations.

- **Live site:** https://altar.technology
- **Headline service:** QAaaS — Quality Assurance as a Service for Contact Centres & BPOs

## What's in the Current Build

- **Altar Technology rebrand** — all copy, header, footer and page metadata updated from the previous Brand Hype branding; typography refreshed to Sora (headings) and Manrope (body) in the Altar purple / baby pink / white / black design system, with light and dark mode.
- **New positioning** — technology solutions first, supported by training and staffing for IT Support & Customer Service, aimed at contact centre / BPO operations. Approved AI • Data • Cloud • Software messaging preserved.
- **QAaaS announcement banner** — site-wide "NOW ONBOARDING: Quality Assurance as a Service (QAaaS) for Contact Centres & BPOs" banner with a Book Discovery Call link.
- **Form + chatbot submissions wired to Formspree** — the lead capture form and the floating FAQ chatbot submit to `https://formspree.io/f/mqpergdz` (`src/lib/formspree.ts`). Submissions arrive by email with no backend to maintain.
- **Team section on About** — leadership first (CEO, CTO, Operations Manager, Project Delivery Lead, Senior Developer) followed by the software developers, with the correct photo-to-person mapping and a head-and-shoulders crop for the CEO portrait.
- **Images optimised for speed** — all photos and screenshots compressed (roughly 95% smaller, no visible quality loss) and lazy-loaded so pages open fast on mobile data.
- **Netlify fix applied** — all images now bundle locally with the build (no external CDN paths) and `public/_redirects` restores the SPA rule, so images and page refreshes work on https://altar.technology, not only on the Lovable preview.

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS v3 (custom Altar design system: purple / baby pink / white / black, light & dark mode)
- shadcn/ui components

## Project Structure

```
src/
  components/   # Header, Hero, ServicesGrid, FAQChatbot, LeadForm, etc.
  pages/        # Index, About, Services, Industries, Tools, Calculator,
                # Case Studies, Lead Capture, Blog, legal pages
  assets/       # Optimised images (team photos, hero visuals, tool screenshots)
  lib/          # Formspree form submission helper
public/
  _redirects    # SPA routing rule (all routes → index.html)
```

## Development

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

The dev server runs at `http://localhost:8080`.

## Deployment

The site deploys to **Netlify** (https://altar.technology).

- `public/_redirects` contains `/* /index.html 200` — this is required so that refreshing or directly opening any route (e.g. `/about`, `/services`) does not return a 404. Do not remove it.
- All images are bundled locally with the build (no external CDN paths), so they load on any host.
- Lead forms and the FAQ chatbot submit to **Formspree** (`src/lib/formspree.ts`).

## Contact

- **Email:** hello@altar.technology
- **WhatsApp:** 067 062 2953
- **Book a call:** https://calendar.app.google/pkkvMSJBS3DQLPSW8

---

This project was built with [Lovable](https://lovable.dev). Continue developing in the [Lovable editor](https://lovable.dev/projects/a567665e-60dc-486e-9071-9fc57b55b10f).
