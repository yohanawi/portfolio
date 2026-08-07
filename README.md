<div align="center">
  <img src="/public/assets/images/logo.png" alt="Yohan Awishka logo" width="88" height="88" />

  <h1>Yohan Awishka Portfolio</h1>

  <p>
    A fast, animated, SEO-focused personal portfolio for a full stack developer building
    modern web applications with Next.js, Laravel, React, Tailwind CSS, and cloud-ready tooling.
  </p>

  <p>
    <a href="https://yohanawishka.com">Live Site</a>
    |
    <a href="#quick-start">Quick Start</a>
    |
    <a href="#project-structure">Project Structure</a>
    |
    <a href="#customization-guide">Customization Guide</a>
  </p>

  <p>
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16.1.6-000000?style=for-the-badge&logo=nextdotjs" />
    <img alt="React" src="https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=111111" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  </p>
</div>

---

## Snapshot

![Portfolio home preview](public/assets/images/portfolio%20home.png)

This repository powers the portfolio of **Yohan Awishka**, a Sri Lanka-based full stack web developer. It is designed as a polished personal brand site with a strong technical core: metadata-rich pages, structured data for search engines, a working contact form with real email delivery, animated sections, reusable data-driven content, and project case studies.

The site presents Yohan's work through a crisp dark interface, crimson accents, motion details, and a content structure that makes it easy to update professional experience, projects, skills, education, and contact information.

## What Makes It Shine

| Area | Details |
| --- | --- |
| Portfolio storytelling | Hero intro, about section, skills, project highlights, experience timeline, education, testimonials, and contact CTA |
| Project case studies | Data-driven project pages with problem statements, tech stacks, features, challenges, results, galleries, and links |
| Modern app foundation | Next.js App Router, React 19, TypeScript, Tailwind CSS, reusable components, and route-level metadata |
| Interactive feel | Framer Motion-ready setup, Swiper project carousel, typewriter hero text, animated counters, scroll-to-top, and WhatsApp quick contact |
| Working contact form | `/api/contact` route sends real email via Nodemailer + Gmail SMTP, with server-side validation and honeypot spam filtering |
| SEO polish | Per-page metadata, JSON-LD structured data (`Person`/`WebSite`/`ContactPage`/`ProfilePage`), Open Graph/Twitter cards, canonical URLs, and generated `sitemap.xml` / `robots.txt` |
| Quality tooling | Jest + React Testing Library for unit/component coverage, Playwright for end-to-end tests, ESLint 9 |
| Production awareness | Vercel Analytics, optimized fonts, responsive image assets, and deployment-ready Next.js scripts |

## Pages

- `/` - Complete landing page with hero, about, skills, projects, experience, education, testimonials, and contact sections.
- `/about` - Dedicated profile page with summary, stats, competencies, and schema-friendly metadata.
- `/projects` - All project cards and portfolio work.
- `/projects/[singleproject]` - Dynamic project case-study pages powered by `src/data/ProjectData.ts`.
- `/experience` - Full professional journey and timeline.
- `/contact` - Contact page with contact details and a working, validated contact form.
- `/sitemap.xml`, `/robots.txt` - Generated automatically from `src/app/sitemap.ts` and `src/app/robots.ts`.

## API

| Route | Method | Purpose |
| --- | --- | --- |
| `/api/contact` | `POST` | Validates a contact submission server-side, rejects honeypot-filled (bot) submissions, and emails it via Gmail SMTP. Requires `CONTACT_EMAIL_USER` and `CONTACT_EMAIL_APP_PASSWORD` to be set - see [Environment Variables](#environment-variables). |

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 App Router |
| UI | React 19, TypeScript, Tailwind CSS |
| Motion and UI polish | Framer Motion, Swiper, React Simple Typewriter, tsParticles |
| Icons | Lucide React, React Icons |
| Email | Nodemailer (Gmail SMTP) via a Next.js API route |
| SEO and analytics | Next metadata API, JSON-LD structured data, next-seo, Vercel Analytics |
| Testing | Jest, React Testing Library, Playwright (e2e) |
| Tooling | ESLint 9, PostCSS, Autoprefixer, TypeScript |

## Quick Start

```bash
npm install
cp .env.local.example .env.local   # then fill in your Gmail App Password - see below
npm run dev
```

Open the local site at:

```text
http://localhost:3000
```

The site runs fine without `.env.local`, but the contact form will return a real "email service is not configured" error instead of sending mail until it's set up.

## Environment Variables

The contact form (`/api/contact`) sends email through Gmail SMTP. Copy `.env.local.example` to `.env.local` (already gitignored - never commit real credentials) and fill in:

| Variable | Required | Description |
| --- | --- | --- |
| `CONTACT_EMAIL_USER` | Yes | The Gmail address the form sends from and delivers to. |
| `CONTACT_EMAIL_APP_PASSWORD` | Yes | A 16-character [Gmail App Password](https://myaccount.google.com/apppasswords) (not your normal password). Requires 2-Step Verification enabled on the Google account. |
| `CONTACT_EMAIL_TO` | No | Where submissions are delivered, if different from `CONTACT_EMAIL_USER`. |

For production, add the same variables in your hosting provider's environment variable settings (e.g. Vercel Project Settings -> Environment Variables) - they are not read from `.env.local` at deploy time.

## Available Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server. |
| `npm run build` | Creates a production build. |
| `npm run build:clean` | Clears the `.next` cache, then builds. |
| `npm run start` | Starts the production server after building. |
| `npm run lint` | Runs ESLint for the project. |
| `npm test` | Runs the Jest unit/component test suite. |
| `npm run test:watch` | Runs Jest in watch mode. |
| `npm run test:coverage` | Runs Jest with a coverage report. |
| `npm run test:e2e` | Builds the app, then runs the Playwright end-to-end suite against it. |
| `npm run test:e2e:ci` | Runs the Playwright suite without rebuilding (for CI, against an already-running/built app). |
| `npm run test:e2e:ui` | Opens the Playwright UI runner. |

## Project Structure

```text
.
|-- public/
|   |-- assets/
|   |   |-- images/          # Portfolio and project visuals
|   |   |-- js/              # Static particle script
|   |   `-- logo/            # Brand logo
|   |-- cv/                  # Downloadable CV (add yohan-awishka-cv.pdf here)
|   |-- favicon.ico
|   |-- icon-32.png
|   |-- icon-48.png
|   `-- apple-icon.png
|-- src/
|   |-- app/
|   |   |-- api/contact/     # Contact form API route (Nodemailer + Gmail SMTP)
|   |   |-- sitemap.ts       # Generated /sitemap.xml
|   |   |-- robots.ts        # Generated /robots.txt
|   |   `-- ...              # App Router pages and per-route metadata
|   |-- components/          # Page sections and shared UI
|   |-- data/                # Project and experience content
|   `-- hooks/               # Reusable animation hooks
|-- e2e/                     # Playwright end-to-end specs
|-- jest.config.ts, jest.setup.ts
|-- playwright.config.ts
|-- tailwind.config.js       # Brand colors, fonts, breakpoints
|-- next.config.ts
|-- .env.local.example       # Contact form env var template
`-- package.json
```

## Content System

Most portfolio content is intentionally separated from the UI, so updates stay tidy.

| Content | File |
| --- | --- |
| Projects and case studies | `src/data/ProjectData.ts` |
| Work experience timeline | `src/data/ExperienceData.ts` |
| Home sections | `src/components/Home/*` |
| About page sections | `src/components/About/*` |
| Contact page sections | `src/components/Contact/*` |
| Navigation and footer | `src/components/Common/Header.tsx`, `src/components/Common/Footer.tsx` |
| Global styles | `src/app/globals.css` |
| Brand colors | `tailwind.config.js` |

## Featured Projects Included

The project data currently includes case studies for:

- InteriorFilm - premium interior design e-commerce platform.
- AM Group Holding - automotive innovation and premium solutions platform.
- Shoppable Flipbook Platform - Laravel and Livewire document workflow system.
- Yakadaweda - metal fabrication portfolio and quotation platform.
- Hub & Spoke Solution - multi-industry consulting platform.
- Italy UMA Academy - online learning platform with payments.

Only projects with `is_featured: true` in `src/data/ProjectData.ts` appear in the Home page carousel - currently just InteriorFilm, since it's the only case study with verified images checked into `public/`. Add real screenshots for the others before featuring them, or the carousel will show broken images.

## Customization Guide

### Update profile details

Edit the profile copy, email, phone number, CV path, and stat cards in:

```text
src/components/Home/AboutSection.tsx
src/components/Home/HeroSection.tsx
src/components/About/HeroSeCtion.tsx
src/components/Contact/MainSection.tsx
src/components/Common/Footer.tsx
src/components/Common/WhatsAppButton.tsx
```

### Add or edit projects

Update the `projects` array:

```text
src/data/ProjectData.ts
```

Each project supports:

- Title, slug, category, role, and description.
- Tech stack and feature list.
- Problem, challenges, solutions, and results.
- Gallery images.
- Demo, frontend GitHub, and backend GitHub links.
- `is_featured: true` to include it in the Home page carousel.

### Add project screenshots

Place new images inside:

```text
public/assets/images/projects/
```

Then reference them with a public path, for example:

```ts
image: "/assets/images/projects/my_project/home.png"
```

### Change the visual identity

Brand colors live in:

```text
tailwind.config.js
```

Current palette:

| Token | Color |
| --- | --- |
| `brand-dark` | `#0B0B0B` |
| `brand-gray` | `#121212` |
| `brand-crimson-red` | `#B4182D` |
| `brand-soft-red` | `#FF2C2C` |
| `brand-muted-gray` | `#B3B3B3` |
| `brand-light-gray` | `#E5E5E5` |
| `brand-white` | `#FFFFFF` |

## Deployment

The project is ready for a standard Next.js deployment flow.

```bash
npm run build
npm run start
```

For Vercel, connect the repository and use the default Next.js settings. The app already includes `@vercel/analytics` through `src/app/layout.tsx`. Before going live, add `CONTACT_EMAIL_USER` and `CONTACT_EMAIL_APP_PASSWORD` in your host's environment variable settings (see [Environment Variables](#environment-variables)) so the contact form can actually send email in production.

## Notes For Future Polish

- Add a real CV PDF at `public/cv/yohan-awishka-cv.pdf` - both "Download CV" buttons (Home and About) already point here.
- Set `CONTACT_EMAIL_USER` / `CONTACT_EMAIL_APP_PASSWORD` on your production host - until then the contact form correctly reports an error instead of sending mail.
- Replace the stand-in Open Graph image (currently reusing the hero photo across pages) with a dedicated, branded 1200x630 graphic.
- A few social icons in `src/components/Common/Footer.tsx` (Facebook, Instagram, YouTube) still point to `#` placeholders - add real profile URLs or remove them.
- The WhatsApp button (`src/components/Common/WhatsAppButton.tsx`) uses a different phone number than the rest of the site - worth reconciling to one number.
- Add real screenshots for more case studies in `public/assets/images/projects/` so more than one project can be marked `is_featured` on the Home page.

---

<div align="center">
  <strong>Built to look sharp, load fast, and tell the story behind the code.</strong>
</div>
