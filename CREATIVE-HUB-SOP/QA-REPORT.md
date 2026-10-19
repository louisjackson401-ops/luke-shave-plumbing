# Creative Hub — QA Report

**Project:** Luke Shave Plumbing  
**Repository:** `/Users/louisjackson/luke plumbing web`  
**Commit:** `db9e18c`  
**Run:** 2026-10-19 15:33 UTC  
**Engine:** creative-hub-qa 1.0.0 — 229 checks across 16 page(s)

---

## Production gate: **APPROVED FOR PRODUCTION**

| | |
|---|---|
| Failures | 0 |
| Critical | 0 |
| High | 0 |
| Medium | 36 |
| Low | 155 |
| Warnings | 191 |
| Not verified | 13 |

## Category status

| Category | Status | Fails | Warnings | Not verified |
|---|---|---|---|---|
| AI Search | WARNING | 0 | 3 | 1 |
| Accessibility | WARNING | 0 | 1 | 2 |
| Code Quality | WARNING | 0 | 16 | 0 |
| Content | WARNING | 0 | 21 | 0 |
| Conversion | WARNING | 0 | 4 | 1 |
| Forms | WARNING | 0 | 8 | 1 |
| Images | WARNING | 0 | 117 | 0 |
| Links | PASS | 0 | 0 | 1 |
| Performance | WARNING | 0 | 1 | 2 |
| Privacy | PASS | 0 | 0 | 1 |
| Robots | PASS | 0 | 0 | 0 |
| Schema | WARNING | 0 | 1 | 1 |
| Security | WARNING | 0 | 3 | 2 |
| Sitemap | PASS | 0 | 0 | 1 |
| Technical SEO | WARNING | 0 | 16 | 0 |

## Warnings — below standard (191)

- **Schema** · `schema.no-organization` `medium` — No Organization or LocalBusiness node found anywhere on the site
- **Images** · `img.no-priority` `medium` — No image is marked fetchpriority="high" — the LCP image should be prioritised
- **Security** · `sec.csp-unsafe-inline` `medium` — CSP allows 'unsafe-inline' in script-src — inline scripts are not protected against injection
- **Forms** · `form.js-only-submit` `medium` — contact/index.html: form submits only via JavaScript — with JS disabled or broken, the enquiry is silently lost
- **Forms** · `form.no-required` `medium` — contact/index.html: no field marked required — empty submissions will pass client-side
- **Forms** · `form.js-only-submit` `medium` — index.html: form submits only via JavaScript — with JS disabled or broken, the enquiry is silently lost
- **Forms** · `form.no-required` `medium` — index.html: no field marked required — empty submissions will pass client-side
- **Forms** · `form.no-live-region` `medium` — index.html: no aria-live/role="alert" region — validation errors are not announced to screen readers
- **Forms** · `form.js-only-submit` `medium` — quote/index.html: form submits only via JavaScript — with JS disabled or broken, the enquiry is silently lost
- **Forms** · `form.no-required` `medium` — quote/index.html: no field marked required — empty submissions will pass client-side
- **Forms** · `form.no-live-region` `medium` — quote/index.html: no aria-live/role="alert" region — validation errors are not announced to screen readers
- **Conversion** · `cro.phone-below-fold` `medium` — gallery/index.html: phone number is not in the top third of the page
- **Conversion** · `cro.no-cta-above-fold` `medium` — gallery/index.html: no CTA in the top third of the page
- **Conversion** · `cro.no-trust-signal` `medium` — gallery/index.html: no trust signal (insurance, accreditation, experience, reviews) in the visible copy
- **Performance** · `perf.asset-caching` `medium` — No immutable Cache-Control rule for static assets in vercel.json
- **Content** · `content.similar` `medium` — /plumber-beckenham and /plumber-bromley are 87% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-beckenham and /plumber-chislehurst are 87% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-beckenham and /plumber-croydon are 87% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-beckenham and /plumber-orpington are 83% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-beckenham and /plumber-sidcup are 86% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-beckenham and /plumber-west-wickham are 89% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-bromley and /plumber-chislehurst are 88% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-bromley and /plumber-croydon are 88% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-bromley and /plumber-orpington are 83% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-bromley and /plumber-sidcup are 86% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-bromley and /plumber-west-wickham are 89% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-chislehurst and /plumber-croydon are 88% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-chislehurst and /plumber-orpington are 87% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-chislehurst and /plumber-sidcup are 87% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-chislehurst and /plumber-west-wickham are 88% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-croydon and /plumber-orpington are 84% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-croydon and /plumber-sidcup are 87% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-croydon and /plumber-west-wickham are 90% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-orpington and /plumber-sidcup are 85% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-orpington and /plumber-west-wickham are 84% similar — differentiate the copy
- **Content** · `content.similar` `medium` — /plumber-sidcup and /plumber-west-wickham are 87% similar — differentiate the copy
- **Code Quality** · `html.landmark-main` `low` — 404.html: no <main> landmark
- **Code Quality** · `html.heading-skip` `low` — contact/index.html: h1 → h3 skips a level at "Talk To Luke"
- **Code Quality** · `html.heading-skip` `low` — cookies/index.html: h2 → h4 skips a level at "Explore"
- **Code Quality** · `html.heading-skip` `low` — gallery/index.html: h2 → h4 skips a level at "Explore"
- **Code Quality** · `html.heading-skip` `low` — index.html: h2 → h4 skips a level at "Explore"
- **Code Quality** · `html.heading-skip` `low` — plumber-beckenham/index.html: h2 → h4 skips a level at "Explore"
- **Code Quality** · `html.heading-skip` `low` — plumber-bromley/index.html: h2 → h4 skips a level at "Explore"
- **Code Quality** · `html.heading-skip` `low` — plumber-chislehurst/index.html: h2 → h4 skips a level at "Explore"
- **Code Quality** · `html.heading-skip` `low` — plumber-croydon/index.html: h2 → h4 skips a level at "Explore"
- **Code Quality** · `html.heading-skip` `low` — plumber-orpington/index.html: h2 → h4 skips a level at "Explore"
- **Code Quality** · `html.heading-skip` `low` — plumber-sidcup/index.html: h2 → h4 skips a level at "Explore"
- **Code Quality** · `html.heading-skip` `low` — plumber-west-wickham/index.html: h2 → h4 skips a level at "Explore"
- **Code Quality** · `html.heading-skip` `low` — privacy/index.html: h2 → h4 skips a level at "Explore"
- **Code Quality** · `html.heading-skip` `low` — quote/index.html: h1 → h3 skips a level at "Fixed Prices, No Surprises"
- **Code Quality** · `html.heading-skip` `low` — services/index.html: h2 → h4 skips a level at "Explore"
- **Code Quality** · `html.heading-skip` `low` — terms/index.html: h2 → h4 skips a level at "Explore"
- **Technical SEO** · `seo.og-missing` `low` — 404.html: missing og:title
- **Technical SEO** · `seo.twitter-card` `low` — 404.html: no twitter:card
- **Technical SEO** · `seo.title-long` `low` — contact/index.html: title 76 chars, will truncate in SERPs — "Contact | Luke Shave Plumbing &amp; Bathrooms — South East London &amp; Kent"
- **Technical SEO** · `seo.desc-long` `low` — contact/index.html: description 166 chars, will truncate
- **Technical SEO** · `seo.title-long` `low` — gallery/index.html: title 77 chars, will truncate in SERPs — "Our Work | Luke Shave Plumbing &amp; Bathrooms — South East London &amp; Kent"
- **Technical SEO** · `seo.title-long` `low` — index.html: title 77 chars, will truncate in SERPs — "Luke Shave Plumbing &amp; Bathrooms | Plumber in South East London &amp; Kent"
- **Technical SEO** · `seo.desc-long` `low` — index.html: description 201 chars, will truncate
- **Technical SEO** · `seo.desc-long` `low` — plumber-beckenham/index.html: description 169 chars, will truncate
- **Technical SEO** · `seo.desc-long` `low` — plumber-bromley/index.html: description 175 chars, will truncate
- **Technical SEO** · `seo.desc-long` `low` — plumber-chislehurst/index.html: description 171 chars, will truncate
- **Technical SEO** · `seo.desc-long` `low` — plumber-croydon/index.html: description 167 chars, will truncate
- **Technical SEO** · `seo.desc-long` `low` — plumber-orpington/index.html: description 177 chars, will truncate
- **Technical SEO** · `seo.desc-long` `low` — plumber-sidcup/index.html: description 176 chars, will truncate
- **Technical SEO** · `seo.desc-long` `low` — plumber-west-wickham/index.html: description 172 chars, will truncate
- **Technical SEO** · `seo.title-long` `low` — quote/index.html: title 82 chars, will truncate in SERPs — "Instant Quote | Luke Shave Plumbing &amp; Bathrooms — South East London &amp; Kent"
- **Technical SEO** · `seo.title-long` `low` — services/index.html: title 81 chars, will truncate in SERPs — "Our Services | Luke Shave Plumbing &amp; Bathrooms — South East London &amp; Kent"
- **Images** · `img.legacy-format` `low` — 404.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — contact/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — contact/index.html: <img src="/assets/logo-navy.png"> has empty alt — correct only if purely decorative
- **Images** · `img.legacy-format` `low` — contact/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — contact/index.html: below-fold <img src="/assets/logo-navy.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — contact/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — contact/index.html: below-fold <img src="/assets/logo-white.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — contact/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — cookies/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — cookies/index.html: <img src="/assets/logo-navy.png"> has empty alt — correct only if purely decorative
- **Images** · `img.legacy-format` `low` — cookies/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — cookies/index.html: below-fold <img src="/assets/logo-navy.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — cookies/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — cookies/index.html: below-fold <img src="/assets/logo-white.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — cookies/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — gallery/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — gallery/index.html: <img src="/assets/logo-navy.png"> has empty alt — correct only if purely decorative
- **Images** · `img.legacy-format` `low` — gallery/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — gallery/index.html: below-fold <img src="/assets/logo-navy.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — gallery/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — gallery/index.html: <img src=""> has empty alt — correct only if purely decorative
- **Images** · `img.no-lazy` `low` — gallery/index.html: below-fold <img src=""> has no loading="lazy"
- **Images** · `img.no-lazy` `low` — gallery/index.html: below-fold <img src="/assets/logo-white.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — gallery/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — index.html: <img src="/assets/logo-navy.png"> has empty alt — correct only if purely decorative
- **Images** · `img.legacy-format` `low` — index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — index.html: below-fold <img src="/assets/logo-navy.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — index.html: "/assets/about-bathroom.jpg" is .jpg — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — index.html: <img src=""> has empty alt — correct only if purely decorative
- **Images** · `img.no-lazy` `low` — index.html: below-fold <img src=""> has no loading="lazy"
- **Images** · `img.no-lazy` `low` — index.html: below-fold <img src="/assets/logo-white.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — plumber-beckenham/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — plumber-beckenham/index.html: <img src="/assets/logo-navy.png"> has empty alt — correct only if purely decorative
- **Images** · `img.legacy-format` `low` — plumber-beckenham/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — plumber-beckenham/index.html: below-fold <img src="/assets/logo-navy.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — plumber-beckenham/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — plumber-beckenham/index.html: below-fold <img src="/assets/logo-white.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — plumber-beckenham/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — plumber-bromley/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — plumber-bromley/index.html: <img src="/assets/logo-navy.png"> has empty alt — correct only if purely decorative
- **Images** · `img.legacy-format` `low` — plumber-bromley/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — plumber-bromley/index.html: below-fold <img src="/assets/logo-navy.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — plumber-bromley/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — plumber-bromley/index.html: below-fold <img src="/assets/logo-white.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — plumber-bromley/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — plumber-chislehurst/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — plumber-chislehurst/index.html: <img src="/assets/logo-navy.png"> has empty alt — correct only if purely decorative
- **Images** · `img.legacy-format` `low` — plumber-chislehurst/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — plumber-chislehurst/index.html: below-fold <img src="/assets/logo-navy.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — plumber-chislehurst/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — plumber-chislehurst/index.html: below-fold <img src="/assets/logo-white.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — plumber-chislehurst/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — plumber-croydon/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — plumber-croydon/index.html: <img src="/assets/logo-navy.png"> has empty alt — correct only if purely decorative
- **Images** · `img.legacy-format` `low` — plumber-croydon/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — plumber-croydon/index.html: below-fold <img src="/assets/logo-navy.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — plumber-croydon/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — plumber-croydon/index.html: below-fold <img src="/assets/logo-white.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — plumber-croydon/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — plumber-orpington/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — plumber-orpington/index.html: <img src="/assets/logo-navy.png"> has empty alt — correct only if purely decorative
- **Images** · `img.legacy-format` `low` — plumber-orpington/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — plumber-orpington/index.html: below-fold <img src="/assets/logo-navy.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — plumber-orpington/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — plumber-orpington/index.html: below-fold <img src="/assets/logo-white.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — plumber-orpington/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — plumber-sidcup/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — plumber-sidcup/index.html: <img src="/assets/logo-navy.png"> has empty alt — correct only if purely decorative
- **Images** · `img.legacy-format` `low` — plumber-sidcup/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — plumber-sidcup/index.html: below-fold <img src="/assets/logo-navy.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — plumber-sidcup/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — plumber-sidcup/index.html: below-fold <img src="/assets/logo-white.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — plumber-sidcup/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — plumber-west-wickham/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — plumber-west-wickham/index.html: <img src="/assets/logo-navy.png"> has empty alt — correct only if purely decorative
- **Images** · `img.legacy-format` `low` — plumber-west-wickham/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — plumber-west-wickham/index.html: below-fold <img src="/assets/logo-navy.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — plumber-west-wickham/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — plumber-west-wickham/index.html: below-fold <img src="/assets/logo-white.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — plumber-west-wickham/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — privacy/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — privacy/index.html: <img src="/assets/logo-navy.png"> has empty alt — correct only if purely decorative
- **Images** · `img.legacy-format` `low` — privacy/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — privacy/index.html: below-fold <img src="/assets/logo-navy.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — privacy/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — privacy/index.html: below-fold <img src="/assets/logo-white.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — privacy/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — quote/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — quote/index.html: <img src="/assets/logo-navy.png"> has empty alt — correct only if purely decorative
- **Images** · `img.legacy-format` `low` — quote/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — quote/index.html: below-fold <img src="/assets/logo-navy.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — quote/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — quote/index.html: below-fold <img src="/assets/logo-white.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — quote/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — services/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — services/index.html: <img src="/assets/logo-navy.png"> has empty alt — correct only if purely decorative
- **Images** · `img.legacy-format` `low` — services/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — services/index.html: below-fold <img src="/assets/logo-navy.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — services/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — services/index.html: "/assets/gallery-1.jpg" is .jpg — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — services/index.html: "/assets/gallery-4.jpg" is .jpg — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — services/index.html: "/assets/gallery-3.jpg" is .jpg — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — services/index.html: "/assets/gallery-6.jpg" is .jpg — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — services/index.html: below-fold <img src="/assets/logo-white.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — services/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.legacy-format` `low` — terms/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.alt-empty` `low` — terms/index.html: <img src="/assets/logo-navy.png"> has empty alt — correct only if purely decorative
- **Images** · `img.legacy-format` `low` — terms/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — terms/index.html: below-fold <img src="/assets/logo-navy.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — terms/index.html: "/assets/logo-navy.png" is .png — serve WebP/AVIF instead
- **Images** · `img.no-lazy` `low` — terms/index.html: below-fold <img src="/assets/logo-white.png"> has no loading="lazy"
- **Images** · `img.legacy-format` `low` — terms/index.html: "/assets/logo-white.png" is .png — serve WebP/AVIF instead
- **Images** · `img.unreferenced` `low` — 23 image file(s) totalling 2443KB are not referenced by any page
- **Accessibility** · `a11y.no-skip-link` `low` — 404.html: no "skip to content" link
- **Security** · `sec.csp-no-frame-ancestors` `low` — CSP has no frame-ancestors directive
- **Security** · `sec.csp-no-object-src` `low` — CSP has no object-src directive (should be 'none')
- **Conversion** · `cro.weak-h1` `low` — gallery/index.html: <h1> "Recent Projects" is too terse to carry a value proposition
- **AI Search** · `ai.no-question-headings` `low` — contact/index.html: no question-form headings — answer engines extract answers from question/answer structure
- **AI Search** · `ai.no-question-headings` `low` — cookies/index.html: no question-form headings — answer engines extract answers from question/answer structure
- **AI Search** · `ai.no-question-headings` `low` — terms/index.html: no question-form headings — answer engines extract answers from question/answer structure

## Not verified — needs access or a live URL (13)

_These were not checked. They are not passes. Each one names what access would settle it._

- **Schema** · `schema.google-validation` — JSON-LD syntax was validated locally; Google eligibility for rich results was not
  - _Requires:_ Run the URL through the Google Rich Results Test on the live domain
- **Links** · `links.external-http` — 80 external link(s) to 8 distinct URL(s) were found but not requested over the network
  - _Requires:_ Re-run with --network to check external links return 2xx
- **Accessibility** · `a11y.contrast` — Colour contrast ratios were not computed — they depend on rendered CSS cascade
  - _Requires:_ Run axe DevTools or Lighthouse accessibility audit against the rendered page
- **Accessibility** · `a11y.screen-reader` — Screen reader behaviour was not tested
  - _Requires:_ Manual pass with VoiceOver (Safari) and NVDA (Chrome)
- **Security** · `sec.live-headers` — Headers were read from configuration, not from live HTTP responses
  - _Requires:_ Run `chqa smoke <production-url>` after deployment, or curl -I the live domain
- **Security** · `sec.ssl` — SSL certificate validity was not checked
  - _Requires:_ Verify the certificate on the live domain after DNS propagation
- **Sitemap** · `sitemap.submitted` — Sitemap submission and indexing status in Google Search Console were not checked
  - _Requires:_ Needs Search Console access for the property
- **Privacy** · `privacy.legal-review` — Technical consent controls were inspected; legal adequacy of the policies was not assessed
  - _Requires:_ Client or their solicitor must confirm the policy text reflects actual data processing
- **Forms** · `form.end-to-end` — No test submission was made, so backend delivery, success state and duplicate handling are unproven
  - _Requires:_ Submit a real test enquiry against the deployed site and confirm the email arrives
- **Conversion** · `cro.real-behaviour` — Actual conversion rate, scroll depth and form abandonment were not measured
  - _Requires:_ Needs GA4 / Clarity data from the live site over a meaningful traffic window
- **Performance** · `perf.lighthouse` — No Lighthouse run was performed, so there is no performance score for this build
  - _Requires:_ Run `npx lighthouse <url> --preset=desktop` and `--form-factor=mobile` against the deployed URL, or PageSpeed Insights
- **Performance** · `perf.core-web-vitals` — LCP, INP and CLS were not measured — static analysis cannot produce them
  - _Requires:_ Read field data from the CrUX report in PageSpeed Insights or Search Console once the site has traffic
- **AI Search** · `ai.citation` — Whether ChatGPT, AI Overviews, Gemini, Claude, Perplexity or Copilot cite this site was not tested and cannot be guaranteed
  - _Requires:_ Manually query the assistants for the target questions after the site has been live and indexed

## Not applicable (1)

- **Privacy** · `privacy.no-trackers` — No third-party tracking technology detected in the markup

## Passed (24)

_Each of these was actually inspected or measured in this run._

- **Technical SEO** · `seo.title-unique-count` — 15 indexable page(s) carry a <title>
- **Schema** · `schema.parsed` — 133 JSON-LD node(s) parsed successfully across 16 page(s)
- **Links** · `links.internal-resolved` — 598 internal link(s) resolved across 16 page(s)
- **Images** · `img.inspected` — 66 image reference(s) resolved to real files and measured
- **Accessibility** · `a11y.static-checks` — Static accessibility checks run across 16 page(s): control labels, accessible names, focus order, zoom, motion
- **Security** · `sec.secret-scan` — 20 text file(s) scanned against 11 credential patterns
- **Security** · `sec.header` — vercel.json sets strict-transport-security
- **Security** · `sec.header` — vercel.json sets x-content-type-options
- **Security** · `sec.header` — vercel.json sets content-security-policy
- **Security** · `sec.header` — vercel.json sets referrer-policy
- **Security** · `sec.header` — vercel.json sets x-frame-options
- **Security** · `sec.header` — vercel.json sets permissions-policy
- **Robots** · `robots.sitemap-declared` — robots.txt declares https://lukeshaveplumbing.com/sitemap.xml
- **Robots** · `robots.crawlable` — robots.txt permits crawling of the site
- **Sitemap** · `sitemap.matches-site` — sitemap.xml lists exactly the 15 indexable page(s) in the build
- **Privacy** · `privacy.policy-page` — Privacy Policy page present at /privacy
- **Privacy** · `privacy.policy-page` — Cookie Policy page present at /cookies
- **Privacy** · `privacy.policy-page` — Terms page present at /terms
- **Forms** · `form.inspected` — 3 form(s) inspected for method, handler, spam protection, privacy notice and validation
- **Conversion** · `cro.static-checks` — Conversion path checked on 16 page(s): phone reachability, CTA presence and position, value proposition, trust signals
- **Performance** · `perf.css-weight` — Total CSS 40KB (budget 120KB)
- **Performance** · `perf.js-weight` — Total JS 24KB (budget 180KB)
- **Content** · `content.claims-confirmed` — 5 factual claim(s) present; claimsVerifiedByClient is true, so the client has signed these off: rating claim: "Rated 10/"; review count claim: "24 reviews"; rating claim: "Rated 5.0"; insurance/accreditation claim: "Fully insured"; insurance/accreditation claim: "fully insured"
- **AI Search** · `ai.structure-checked` — Answer-engine readiness checked on 15 indexable page(s): question headings, semantic landmarks, schema-backed entities

---

### Honesty statement

Every line above is the output of a check that ran against this build. Nothing in this report is estimated.
No Lighthouse score, Core Web Vitals figure, ranking, traffic number or indexing status appears here unless it was measured — where it could not be, the item is recorded as NOT VERIFIED with the access required to settle it.
