---
name: shiftedutech-website
description: >-
  Guides work on the ShiftEduTech Full Stack Java marketing site
  (Vite + React + TypeScript + Tailwind). Use when editing sections,
  SEO/meta, navigation, contact form embed, course content, placement
  copy, or styling in this repo; or when the user mentions ShiftEduTech,
  javacourse.melmaa.tech, Book Demo, or Youform.
---

# ShiftEduTech Website

Marketing single-page site for ShiftEduTech’s Full Stack Java course with placement (Hyderabad / Eluru). Live URL: `https://javacourse.melmaa.tech/`.

## Stack

- Vite 5 + React 18 + TypeScript
- Tailwind CSS 3 + Inter (loaded in `index.html`)
- Icons: `lucide-react`
- Demo booking: Youform embed (`data-form="0k4b6301"`)
- Image optimization: `vite-plugin-image-optimizer` (sharp)

## Commands

```bash
npm run dev        # local server
npm run build      # production build
npm run preview    # preview dist
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
```

## Architecture

One scrollable page. Section order in `src/App.tsx` must stay aligned with Header nav.

| Section ID | Component | Eager / lazy |
|---|---|---|
| `home` | `Hero` | eager |
| `about` | `About` | eager |
| `courses` | `Courses` | lazy |
| `projects` | `Projects` | lazy |
| `testimonials` | `Testimonials` | lazy |
| `placement` | `Placement` | lazy |
| `faq` | `FAQ` | lazy |
| `contact` | `Contact` | lazy |
| (footer) | `Footer` | lazy |

- Header + Hero + About stay eager for LCP / first paint.
- Below-fold sections use `React.lazy` + `Suspense`.
- In-page navigation uses `src/utils/scrollToSection.ts` — do not duplicate scroll logic.
- Third-party embeds (Youform, Elfsight) load via `useLoadScriptWhenVisible` — keep that pattern.

## File layout

```
src/
  App.tsx                 # section composition + skip link
  main.tsx
  index.css               # Tailwind + a11y/base styles
  components/*.tsx        # one section per file
  utils/scrollToSection.ts
src/assets/               # logo, trainer photo, project images (imported in TSX)
public/                   # favicon, robots.txt, sitemap.xml, brochure PDF, og-image
index.html                # SEO meta + JSON-LD (critical)
```

## Editing conventions

1. **One section = one component** under `src/components/`. Keep data arrays (`const COURSE_MODULES`, `NAV_ITEMS`, etc.) at the top of that file.
2. **Default export** functional components; TypeScript interfaces next to their data.
3. **Section root**: `<section id="…" aria-labelledby="…-heading">` with a matching `h2` id (`courses-heading`, etc.). Hero uses `id="home"` and a single page `h1`.
4. **Nav changes**: update `NAV_ITEMS` in `Header.tsx` and the render order in `App.tsx` together. Keep `href="#sectionId"` + `scrollToSection`.
5. **CTAs** (“Book Demo”, “Join Demo Class”) should scroll to `contact`.
6. **Assets**: import WebP/PNG from `src/assets/...` with kebab-case filenames (no spaces). Prefer `public/` only for SEO/static files referenced by absolute URL. Run `npm run optimize:assets` after replacing source photos.
7. **Styling**: Tailwind utility classes only. Brand accent is **orange** (`orange-500` / `#f97316` theme-color). Layout width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`. Preserve existing visual language (gradients, rounded-xl/2xl, orange CTAs) — do not introduce a new design system.
8. **Accessibility**: keep `aria-label` / `aria-labelledby`, decorative icons `aria-hidden="true"`, skip link in `App.tsx`, and `prefers-reduced-motion` behavior in `index.css`.
9. **No router / no backend** in this repo. Do not add React Router unless explicitly requested.

## SEO & content rules

Primary SEO lives in `index.html` (title, description, OG/Twitter, canonical, JSON-LD). When changing claims (years, placement %, student counts, locations, phone, emails):

1. Update visible copy in the relevant component.
2. Update matching meta + JSON-LD in `index.html`.
3. Update `public/sitemap.xml` `lastmod` if the page meaningfully changed.
4. Keep canonical / og URLs on `https://javacourse.melmaa.tech/`.

Key facts currently marketed (verify before inventing new stats):

- 4-month Full Stack Java program
- Locations: Hyderabad (Kondapur / KPHB) and Eluru
- Trainer: Rama Chandra Rao
- Contact: `+91 96405 91713`, `support@melmaa.com`, `hr.shiftedutech@gmail.com`
- Offer: 3 free demo classes / Book Demo → Youform

## Contact / Youform

- Script: `https://app.youform.com/embed.js` loaded once in `Contact.tsx` `useEffect` (guard against double-inject).
- Embed attributes: `data-youform-embed`, `data-form="0k4b6301"`.
- Do not replace with a custom form unless asked; keep height/width attributes working.

## Performance checklist

- Keep Header/Hero/About eager; leave other sections lazy.
- Preserve Vite `manualChunks` for `react` / `lucide-react`.
- Prefer optimized images; new raster assets go through the existing optimizer plugin on build.
- Avoid heavy new client libraries for a marketing SPA.

## Common tasks

**Update course curriculum** → edit data arrays in `Courses.tsx`.

**Add a project** → extend data in `Projects.tsx` + add image under `assets/Projects/`.

**Change nav labels/order** → `Header.tsx` `NAV_ITEMS` + `App.tsx` order + section `id`s.

**Update SEO title/description** → `index.html` (and any mirrored H1/lead in `Hero.tsx`).

**Change phone/email/maps** → `Contact.tsx` `CONTACT_ITEMS` + Footer + JSON-LD in `index.html`.

## Additional resources

- Section IDs, contacts, and SEO touchpoints: [reference.md](reference.md)
