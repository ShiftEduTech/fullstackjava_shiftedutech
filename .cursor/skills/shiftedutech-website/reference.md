# ShiftEduTech website reference

## Component map

| File | Role |
|---|---|
| `src/components/Header.tsx` | Fixed nav, logo, Book Demo CTA, mobile menu |
| `src/components/Hero.tsx` | Above-fold H1, primary CTAs |
| `src/components/About.tsx` | Trainer / “why us” (`id="about"`) |
| `src/components/Courses.tsx` | Curriculum modules & benefits |
| `src/components/Projects.tsx` | Student project showcases |
| `src/components/Testimonials.tsx` | Success stories / reviews |
| `src/components/Placement.tsx` | Placement process & outcomes |
| `src/components/FAQ.tsx` | Course FAQs (mirrors FAQPage JSON-LD) |
| `src/components/Contact.tsx` | Demo benefits, contact cards, Youform |
| `src/components/Footer.tsx` | Footer links & contacts |

## Section IDs (stable anchors)

`home` · `about` · `courses` · `projects` · `testimonials` · `placement` · `faq` · `contact`

Header `NAV_ITEMS` currently omits `placement` and `contact` from the link list; Contact is reached via Book Demo CTA.

## Brand / UI tokens in use

- Accent: Tailwind `orange-500`–`orange-600` (theme-color `#f97316`)
- Type: Inter via `@fontsource/inter` (self-hosted)
- Container: `max-w-7xl` + responsive horizontal padding
- Focus ring: orange (`index.css`)

## Assets

| Path | Purpose |
|---|---|
| `src/assets/hero-students.webp` | Hero LCP image |
| `src/assets/shiftedutech-logo.png` | Header logo |
| `src/assets/trainer-rama-chandra-rao.webp` | About trainer photo |
| `src/assets/projects/*.webp` | Project card images |
| `public/og-image.png` | Open Graph / Twitter share image |
| `public/ShiftEduTech_Full_Stack_Java_RoadMap_2026.pdf` | Courses roadmap download |

Regenerate WebPs: `npm run optimize:assets`

## Static / SEO files

| Path | Purpose |
|---|---|
| `index.html` | Meta, OG/Twitter, JSON-LD (Organization, Person, Course, FAQ, etc.) |
| `public/robots.txt` | Crawler rules |
| `public/sitemap.xml` | Single URL sitemap for live site |
| `public/favicon.png` | Favicon / apple-touch-icon |

## Third-party embeds

- Youform: form id `0k4b6301` (loads when Contact is near viewport)
- Elfsight Google Reviews widget in Testimonials (loads when near viewport)

## Post-deploy verification checklist

### Refresh / embeds
- [ ] Hard refresh homepage — full React UI mounts (logo image nav, Book Demo, not the Loading shell)
- [ ] Scroll to Testimonials — Elfsight reviews render
- [ ] Scroll to Contact / click Book Demo — Youform embed loads
- [ ] Roadmap download opens from Courses CTA
- [ ] Share URL in WhatsApp/LinkedIn debugger — `og-image.png` preview OK

### Google Business Profile (local SEO)
- [ ] Claim/verify GBP for Hyderabad (Kondapur/KPHB)
- [ ] Claim/verify GBP for Eluru if applicable
- [ ] NAP matches site: phone `+91 96405 91713`, email `support@melmaa.com`, locations KPHB/Kondapur + Eluru
- [ ] Website field set to `https://javacourse.melmaa.tech/`
- [ ] Categories: e.g. Computer training school / Educational institution
- [ ] Upload photos; enable and respond to reviews

### Google Search Console
- [ ] Property for `https://javacourse.melmaa.tech/`
- [ ] Submit `https://javacourse.melmaa.tech/sitemap.xml`
- [ ] URL Inspection on homepage — indexable
- [ ] Rich Results Test: Course + FAQPage JSON-LD
- [ ] Monitor Core Web Vitals after deploy (LCP should not depend on Pexels/Google Fonts)

## Do not invent

Do not fabricate placement percentages, student counts, salaries, company logos, or trainer credentials. Prefer editing existing numbers consistently across components + `index.html`.
