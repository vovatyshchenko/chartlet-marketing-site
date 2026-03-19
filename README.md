# Chartlet Marketing Site

High-performance landing page for Chartlet (WordPress charts without the bloat). Built with **Astro 4.x**, **Tailwind CSS**, and optional **React** islands for the live chart demo and scroll animations.

## Site structure

- **Landing** (`/`) – main marketing page (unchanged)
- **Docs** (`/docs`, `/docs/bar-chart`, `/docs/line-chart`) – shortcode guides; dropdown in nav
- **Blog** (`/blog` archive, `/blog/[slug]` per article) – dropdown in nav with Overview + posts; add entries in `src/data/posts.ts`
- **Changelog** (`/changelog`) – update log; edit `entries` in the page to add versions
- **Pro** (`/pro`) – upsell: Export PDF/PNG, Gutenberg blocks, more chart types; CTA to waitlist
- **Privacy Policy** (`/privacy-policy`), **Terms of Service** (`/terms-of-service`) – required for Stripe/Lemon Squeezy; linked in footer

Header: Home, Docs (dropdown), Blog (dropdown), Changelog, Pro. Footer: same nav links + Privacy Policy, Terms of Service. Mobile: hamburger with same structure. Sitemap via `@astrojs/sitemap@3.5.1`; `sitemap-0.xml` contains all page URLs.

## Stack

- **Astro 4** (static output)
- **Tailwind CSS** (dark, tech-premium palette)
- **Lucide Astro** icons
- **React** (Chart.js demo, Framer Motion) with `client:visible` hydration
- **Netlify Forms** for the Pro waitlist

## Commands

- `npm run dev` – start dev server
- `npm run build` – static build to `dist/`
- `npm run preview` – serve `dist/` locally

## Environment variables

Copy `.env.example` to `.env` and set only what you need. All are optional; the site works with defaults.

- `PUBLIC_ANALYTICS_ID` – e.g. Plausible/Fathom (load script only if set, non-blocking)
- `PUBLIC_DOWNLOAD_URL` – “Download Free” button URL (default: `#download`)
- `PUBLIC_PRO_EXPLORE_URL` – “Explore Pro” button URL (default: `#pro`)
- `PUBLIC_NETLIFY_FORM_NAME` – Netlify form name for the waitlist (default: `waitlist`)

Do not commit `.env`; it is in `.gitignore`.

## Lighthouse

The site is set up for strong Lighthouse scores:

- Local fonts only (no Google Fonts), with preload for the critical font
- Minimal JS; Chart and Framer Motion hydrate with `client:visible`
- Semantic HTML, skip link, ARIA where needed
- No render-blocking external scripts

Run an audit after building: `npm run build && npx serve dist` then use Chrome DevTools Lighthouse (or `npx lighthouse ...`) against the served URL.

## Deploy (Netlify)

Deploy the `dist/` folder (or connect the repo and use build command `npm run build` and publish directory `dist`). Ensure the waitlist form has `data-netlify="true"` and a unique `name`; Netlify will detect it from the built HTML.
