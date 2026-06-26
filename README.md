# Tirupati Aircon — Website

Marketing website for Tirupati Aircon (HVAC company), built with **Next.js 15** and **Tailwind CSS 4**.

## Run it locally

```bash
npm install      # first time only
npm run dev      # starts dev server at http://localhost:3000
```

Open http://localhost:3000 in your browser. Edits auto-reload.

## Pages

- `/`          — Home (hero, services, stats, why-us, CTA)
- `/services`  — Services detail
- `/about`     — About + values
- `/projects`  — Project showcase
- `/contact`   — Contact form + details

## Where to edit content

**All your business info lives in one file:** `src/lib/site.js`
Change the name, phone, email, address, services, stats, and projects there — it updates everywhere.

Brand colors live in `src/app/globals.css` (the `@theme` block, `--color-brand-*`).

## Making the contact form actually send email

The form in `src/components/ContactForm.js` currently just shows a success message.
To receive submissions, use a free service (no backend needed):

- **Formspree** (easiest): sign up, get a form ID, point the form `action` at it.
- **Resend** or **Web3Forms**: similar, free tiers available.

Look for the `// TODO: wire this to a real email/API service` comment.

## Going live (free hosting)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com), "Import Project", select the repo.
3. Vercel auto-detects Next.js and deploys. Done — you get a free `*.vercel.app` URL.
4. To use your own domain (e.g. `tirupatiaircon.com`): buy it (~₹800/yr) and add it in Vercel's dashboard.

## Build for production

```bash
npm run build    # checks everything compiles
npm run start    # runs the production build locally
```
