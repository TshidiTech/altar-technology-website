# Altar Technology Website

Official website for **Altar Technology** — a South African technology company: *Build. Transform. Grow.*

**AI • Data • Cloud • Software** — plus technology, training and staffing for IT Support and Customer Service, purpose-built for contact centre and BPO operations.

- **Live site:** https://altar.technology
- **Headline service:** QAaaS — Quality Assurance as a Service for Contact Centres & BPOs

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

- **Email:** admin@brandhype.co.za
- **WhatsApp:** 067 062 2953
- **Book a call:** https://calendar.app.google/pkkvMSJBS3DQLPSW8

---

This project was built with [Lovable](https://lovable.dev). Continue developing in the [Lovable editor](https://lovable.dev/projects/a567665e-60dc-486e-9071-9fc57b55b10f).
