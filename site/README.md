# XIRAEN Public Site — Next.js

XIRAEN public landing, implemented with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Design direction: **Deep Space Neon**, with restrained violet/cyan accents and editorial typography.

## Quick start

Prerequisites: Node.js **22+**, npm, and network access for the first dependency installation and self-hosted Google font build.

```bash
cd site
npm install
npm run dev
```

Visit http://localhost:3000.

## Production build / verification

```bash
cd site
npm run typecheck
npm run build
npm run start
```

Next.js uses `output: "export"`, so the generated static site appears in `site/out/`. `npm run start` serves that export on http://localhost:3000 after a successful build. The included `next/image` visuals use local SVG assets and `images.unoptimized`, compatible with static GitHub Pages output.

## Where to edit

| Purpose | File |
| --- | --- |
| Brand name, URLs, navigation, editorial content, credibility statements | `lib/content.ts` |
| Base palette and responsive layout | `app/globals.css` (`@theme inline` and design selectors) |
| Space Grotesk, Inter and SEO metadata | `app/layout.tsx` |
| Page section order | `app/page.tsx` |
| Navigation / menu | `components/Navbar.tsx` |
| Landing hero | `components/Hero.tsx` |
| Three editorial values | `components/Features.tsx` |
| Social and AI product imagery | `components/Showcase.tsx` |
| Verifiable trust statements (no fabricated testimonials) | `components/Testimonials.tsx` |
| Final CTA | `components/CTA.tsx` |
| Footer | `components/Footer.tsx` |
| Scroll reveal with reduced-motion support | `components/Reveal.tsx` |
| Original vector artwork | `public/visuals/network-field.svg` |
| Favicon | `public/favicon.svg` |

The palette is `#0A0A0F` background, `#121218` surface, `#1A1B22` elevated, `#F4F5F7` text, `#9BA1AC` muted, `#7C5CFF` violet, `#5EE7F5` secondary cyan, and `#26272F` border.

## Publishing safely to xiraen.github.io

The existing public site currently builds from the **`main` branch root** and must not be broken by a source/framework migration. This implementation lives in `site/` until validated.

1. Review and merge the Next.js landing PR once the build/typecheck workflow passes.
2. In repository **Settings → Pages → Build and deployment → Source**, change from **Deploy from a branch** to **GitHub Actions**. This requires repository settings permissions.
3. In **Actions**, manually run the `Next.js landing — validate and optionally deploy` workflow on `main` (the `workflow_dispatch` event). Its artifact is `site/out`.
4. Verify the live website on desktop/mobile, then retire the old root `index.html`, `styles.css`, and `script.js` only after the new static deployment has been checked.

The workflow deliberately does **not** deploy on a normal push or pull request, avoiding accidental replacement of the live page. It always runs static build/typecheck on relevant changes. Site release requires an intentional manual deployment after the Pages source change.

## Product accuracy

Current: Telegram Mini App Stream social, opt-in single-model assistant with quotas, and XIRA Energy internal nontransferable service credit. Aspirational: independently verified multi-agent expert network, paid AI metering, future compute network. Never claim a third-party endorsement, verified fact checking, crypto exchange, platform metrics, or live functionality without direct evidence.

## Performance & accessibility

- Responsive from 360px up with mobile navigation and accessible labels.
- Reduced-motion detection for Framer Motion and CSS. All movement uses transform and opacity.
- Local original vector visual: no heavy WebGL, no external tracking/analytics scripts.
- Next.js self-hosts fonts at build time. No third-party font requests at runtime.
- No fabricated testimonial or metric. The `Testimonials` component renders verifiable product facts.
- A **sub-2-second mobile page load is a target, not an independently measured result**. Run mobile Lighthouse and device QA on the actual deployed release before reporting a pass.
