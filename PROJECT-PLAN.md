# Timberline Falls — Complete Website Rebuild Plan

## 1. Executive Summary

This document details a premium 27+ page Next.js website for **Timberline Falls**, a pool construction, landscaping, and concrete services company serving Bountiful, Saratoga Springs, and surrounding Utah communities. The rebuild transforms a basic 5-page template site into a conversion-optimized, SEO/AEO-dominant digital presence that positions Timberline Falls as the premier outdoor living builder in northern Utah.

**Why it's premium:**
- Modern design system with luxury outdoor-living aesthetics
- 27 distinct routes with unique content, metadata, and structured data
- Full AEO (Answer Engine Optimization) with FAQ schema on every service page
- LocalBusiness + Service + BreadcrumbList JSON-LD on every page
- Conversion architecture: sticky CTAs, mobile bottom bar, trust strips, estimate forms
- Lighthouse 95+ target via server components, next/image, minimal JS

---

## 2. Sitemap Table (27+ Pages)

| # | Route | Purpose | Primary Keyword |
|---|-------|---------|-----------------|
| 1 | `/` | Homepage — hero, services overview, trust, CTA | pool builder Saratoga Springs UT |
| 2 | `/about` | Company story, team, values, trust signals | Timberline Falls Utah |
| 3 | `/contact` | Contact form, map, phone, hours | contact pool builder Utah |
| 4 | `/projects` | Project gallery/portfolio | pool construction portfolio Utah |
| 5 | `/process` | Design → Build process (3D design approval) | pool construction process Utah |
| 6 | `/financing` | Financing inquiry (ask about options) | pool financing Utah |
| 7 | `/faq` | General FAQ hub | pool construction FAQ Utah |
| 8 | `/services` | Services overview hub | outdoor living services Utah |
| 9 | `/services/swimming-pool-construction` | Pool construction deep page | swimming pool construction Utah |
| 10 | `/services/pool-design-3d` | 3D pool design service | 3D pool design Utah |
| 11 | `/services/water-features` | Water features (fountains, waterfalls) | water features pool Utah |
| 12 | `/services/pool-renovation-remodeling` | Pool remodeling & upgrades | pool remodeling Utah |
| 13 | `/services/landscape-construction` | Landscape construction deep page | landscape construction Utah |
| 14 | `/services/artificial-turf` | Artificial turf installation | artificial turf installation Utah |
| 15 | `/services/outdoor-kitchens` | Outdoor kitchen builds | outdoor kitchen construction Utah |
| 16 | `/services/patios-walkways` | Patio & walkway installation | patio installation Utah |
| 17 | `/services/irrigation-lighting` | Irrigation & outdoor lighting | irrigation installation Utah |
| 18 | `/services/concrete-services` | Concrete services hub | concrete services Utah |
| 19 | `/services/concrete-driveways` | Concrete driveway installation | concrete driveway Utah |
| 20 | `/services/retaining-walls` | Retaining wall construction | retaining wall installation Utah |
| 21 | `/services/stamped-colored-concrete` | Stamped & colored concrete | stamped concrete Utah |
| 22 | `/service-areas` | Service areas hub | pool builder near me Utah |
| 23 | `/service-areas/saratoga-springs-ut` | Saratoga Springs area page | pool builder Saratoga Springs |
| 24 | `/service-areas/bountiful-ut` | Bountiful area page | pool builder Bountiful UT |
| 25 | `/service-areas/lehi-ut` | Lehi nearby area page | pool builder Lehi UT |
| 26 | `/service-areas/eagle-mountain-ut` | Eagle Mountain nearby page | pool builder Eagle Mountain UT |
| 27 | `/service-areas/draper-ut` | Draper nearby area page | pool builder Draper UT |
| 28 | `/blog` | Blog content hub | outdoor living tips Utah |
| 29 | `/blog/how-much-does-pool-cost-utah` | Cost guide blog post | how much does a pool cost Utah |
| 30 | `/blog/best-time-build-pool-utah` | Seasonal timing post | best time to build pool Utah |
| 31 | `/blog/concrete-driveway-vs-asphalt-utah` | Comparison post | concrete vs asphalt driveway |

---

## 3. SEO + AEO Plan

### Schema Types Per Page
- **All pages**: LocalBusiness, BreadcrumbList, WebSite (on homepage)
- **Service pages**: Service schema + FAQ schema
- **FAQ hub**: FAQPage schema
- **Blog posts**: Article schema + FAQ schema
- **Service area pages**: LocalBusiness (area-specific) + Service schema

### Internal Linking Map
- Homepage → All 3 service category pages + process + projects
- Service hub → All individual service pages
- Each service page → Related services (sidebar/bottom), relevant service areas, projects
- Service area pages → All services available in that area
- Blog posts → Relevant service pages + service areas
- Footer → All major pages + service areas

### FAQ Question Sets (AEO Targets)

**Pool Construction:**
- How much does it cost to build a pool in Utah?
- How long does pool construction take?
- Do you handle pool permits in Utah?
- What's included in your pool construction package?
- Can I see a 3D design before building starts?

**Landscape:**
- What's included in landscape construction services?
- How much does landscaping cost in Utah?
- Do you install artificial turf?
- Can you build an outdoor kitchen?

**Concrete:**
- How thick should a concrete driveway be?
- How much does a concrete driveway cost in Utah?
- Do you use rebar in concrete driveways?
- What's the difference between stamped and regular concrete?
- How long does a retaining wall last?

### Featured Snippet Strategy
- Use `<h2>` as question, followed by 40-60 word direct answer paragraph
- Use FAQ accordion with schema markup
- Use comparison tables for "vs" content
- Use numbered process steps for "how" content

---

## 4. Assets Checklist

### Images Needed (place in `/public/images/`)

| Asset | Filename | Dimensions | Location |
|-------|----------|------------|----------|
| Hero pool image (wide) | `hero/pool-hero.jpg` | 1920×1080 | Homepage hero |
| Hero landscape image | `hero/landscape-hero.jpg` | 1920×1080 | Services hero |
| Hero concrete image | `hero/concrete-hero.jpg` | 1920×1080 | Concrete hero |
| Company logo (SVG) | `logo.svg` | Vector | Header/Footer |
| Company logo (dark) | `logo-dark.svg` | Vector | Alt contexts |
| Pool construction (6-8 photos) | `services/pool-*.jpg` | 800×600 | Service pages |
| Landscape projects (6-8 photos) | `services/landscape-*.jpg` | 800×600 | Service pages |
| Concrete work (6-8 photos) | `services/concrete-*.jpg` | 800×600 | Service pages |
| Project gallery (12-20 photos) | `projects/project-*.jpg` | 1200×800 | Gallery grid |
| Team photos (optional) | `team/team-*.jpg` | 600×600 | About page |
| Trust icons (SVG) | `icons/*.svg` | 64×64 | Trust strip |
| OG Image | `og-image.jpg` | 1200×630 | Social shares |

### Image Guidelines
- Format: WebP preferred, JPEG fallback
- Quality: 80-85% compression
- All images must use `next/image` with proper `width`, `height`, `alt`
- Alt text format: "[service] in [city], Utah — Timberline Falls"

---

## 5. Conversion Architecture

### Primary CTAs (every page)
1. "Get Your Free Estimate" → scrolls to form or links to /contact
2. "Call (801) 502-0306" → tel: link

### Trust Strip (appears on every page)
- 20+ Years Experience
- Licensed, Bonded & Insured
- 3D Design Approval
- Free Estimates

### Mobile Bottom Bar (sticky)
- Left: 📞 Call Now
- Right: 📋 Free Estimate

### Estimate Form Fields
- First name (required)
- Last name (required)
- Email (required)
- Phone (required)
- Service interested in (dropdown)
- City / ZIP (required)
- Message (optional)
- Honeypot field (hidden)

---

## 6. Performance Targets

- Lighthouse Performance: 95+
- Lighthouse Accessibility: 95+
- Lighthouse SEO: 100
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Server components for all static content
- Client components only for: mobile menu, form, FAQ accordion
