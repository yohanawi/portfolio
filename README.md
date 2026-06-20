<div align="center">
  <img src="public/assets/logo/logo.png" alt="Yohan Awishka logo" width="88" height="88" />

  <h1>Yohan Awishka Portfolio</h1>

  <p>
    A fast, animated, SEO-focused personal portfolio for a full stack developer building
    modern web applications with Next.js, Laravel, React, Tailwind CSS, and cloud-ready tooling.
  </p>

  <p>
    <a href="https://www.yohanawishka.com">Live Site</a>
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

This repository powers the portfolio of **Yohan Awishka**, a Sri Lanka-based full stack web developer. It is designed as a polished personal brand site with a strong technical core: metadata-rich pages, animated sections, reusable data-driven content, responsive layouts, and project case studies.

The site presents Yohan's work through a crisp dark interface, crimson accents, motion details, and a content structure that makes it easy to update professional experience, projects, skills, education, and contact information.

## What Makes It Shine

| Area | Details |
| --- | --- |
| Portfolio storytelling | Hero intro, about section, skills, project highlights, experience timeline, education, testimonials, and contact CTA |
| Project case studies | Data-driven project pages with problem statements, tech stacks, features, challenges, results, galleries, and links |
| Modern app foundation | Next.js App Router, React 19, TypeScript, Tailwind CSS, reusable components, and route-level metadata |
| Interactive feel | Framer Motion-ready setup, Swiper project carousel, typewriter hero text, animated counters, scroll-to-top, and WhatsApp quick contact |
| SEO polish | Metadata, Open Graph/Twitter configuration, canonical URLs, robots settings, and structured route content |
| Production awareness | Vercel Analytics, optimized fonts, responsive image assets, lint script, and deployment-ready Next.js scripts |

## Pages

- `/` - Complete landing page with hero, about, skills, projects, experience, education, testimonials, and contact sections.
- `/about` - Dedicated profile page with summary, stats, competencies, and schema-friendly metadata.
- `/projects` - All project cards and portfolio work.
- `/projects/[singleproject]` - Dynamic project case-study pages powered by `src/data/ProjectData.ts`.
- `/experience` - Full professional journey and timeline.
- `/contact` - Contact page with contact details and a validated client-side form.

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 App Router |
| UI | React 19, TypeScript, Tailwind CSS |
| Motion and UI polish | Framer Motion, Swiper, React Simple Typewriter, tsParticles |
| Icons | Lucide React, React Icons |
| SEO and analytics | Next metadata API, next-seo, Vercel Analytics |
| Tooling | ESLint 9, PostCSS, Autoprefixer, TypeScript |

## Quick Start

```bash
npm install
npm run dev
```

Open the local site at:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after building.

```bash
npm run lint
```

Runs ESLint for the project.

## Project Structure

```text
.
|-- public/
|   |-- assets/
|   |   |-- images/          # Portfolio and project visuals
|   |   |-- js/              # Static particle script
|   |   `-- logo/            # Brand logo
|   |-- favicon.ico
|   |-- icon-32.png
|   |-- icon-48.png
|   `-- apple-icon.png
|-- src/
|   |-- app/                 # App Router pages and metadata
|   |-- components/          # Page sections and shared UI
|   |-- data/                # Project and experience content
|   `-- hooks/               # Reusable animation hooks
|-- tailwind.config.js       # Brand colors, fonts, breakpoints
|-- next.config.ts
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

## Customization Guide

### Update profile details

Edit the profile copy, email, phone number, CV path, and stat cards in:

```text
src/components/Home/AboutSection.tsx
src/components/Home/HeroSection.tsx
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

For Vercel, connect the repository and use the default Next.js settings. The app already includes `@vercel/analytics` through `src/app/layout.tsx`.

## Notes For Future Polish

- Replace placeholder social URLs in some page metadata/components with the final GitHub, LinkedIn, and Twitter/X handles.
- Add the final Open Graph image at `public/og-image.jpg`.
- Connect the contact form to a real API route or email provider when moving beyond simulated submission.
- Mark selected projects with `is_featured: true` if they should appear in the home carousel.

---

<div align="center">
  <strong>Built to look sharp, load fast, and tell the story behind the code.</strong>
</div>
