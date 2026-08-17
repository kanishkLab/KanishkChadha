# Handoff: Kanishk Chadha — Personal Homepage

## Overview
Marketing-portfolio homepage for **Kanishk Chadha**, a senior, AI-native marketer / marketing-technologist. Its single job: convince a full-time hiring manager or recruiter, in their first 10–20 seconds, that Kanishk is a senior martech hire worth pursuing. Framing is **track record, not a service menu** — no "work with me". Single scrolling page.

Scroll order: Nav → Hero → Tech Stack → Credibility strip → Capabilities → Featured Work (case studies) → Experience → Newsletter → LinkedIn card → Blog → Contact → Footer.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing intended look, layout, and copy. They are **not production code to ship directly**. Recreate this design in the target codebase using its established patterns and component libraries. The existing repo is an **Astro** site (`.astro` components, MDX content collections, global CSS) — implement as Astro pages/components, sourcing copy from content collections where they exist. If starting fresh, Astro or any static-first framework fits.

> The prototype uses a lightweight in-house component runtime (`<x-dc>` / `support.js`), a drag-drop `<image-slot>` web component, and a `<doc-page>` wrapper (present only to make the page export cleanly to PDF). **Ignore all three** — reproduce the visual result, not the mechanism. In production the page is plain markup; there is no `<doc-page>` wrapper.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, and layout. Exact values in **Design Tokens** below.

## Design Tokens

### Colors (Nautical brand v1.0 — usage ratio 60% smoke / 25% navy / 10% teal / 5% orange)
| Token | Hex | Use |
|---|---|---|
| Smoke (base bg) | `#f9f9f9` | Page background |
| White | `#ffffff` | Tech-stack band, cards |
| Navy / Nautical Ink | `#092634` | Nav, dark bands, headings, primary text |
| Signal Orange | `#ff6e42` | **Accent only** — overlines, category labels, numbered index, tool underlines, primary CTA, logo tile, link hover. Never a background wash (except the small CTA buttons + logo tile). |
| Ocean Teal | `#004e72` | Hero subhead, default links, LinkedIn tile |
| Slate body | `#3a4a52` | Body paragraphs |
| Muted slate | `#6b7c85` | Captions, org names, sub-labels |
| Hairline border | `#e6e6e2` | Section dividers, card borders |
| Chip bg (skills intro) | `#eef4f7` | — |
| Sample-tag | border `#c4cdd1` / text `#9aa7ad`; on navy: `#ff6e42` dashed | "Sample data" flags |

### Typography — SINGLE typeface: **Inter**
Per the brand's Typography Implementation Brief: **Inter is the only family.** No second family, no serif. Hierarchy comes from **weight + size + negative letter-spacing** (the signature "tight" look). Load Inter 400/500/600/700 + italic 400/500. Never use weight 900 / faux-bold.

Google Fonts: `Inter:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500`.

Global: body `letter-spacing: -0.01em` (the `--tracking-body` token; applies to all body/UI text).

Type scale (desktop; scale down ~15% below 640px):
| Role | Size / line-height | Weight | Tracking |
|---|---|---|---|
| Hero H1 | 58px / 1.08 | 700 | -0.04em |
| Section H2 | 30–40px | 700 | -0.03em |
| H3 (card titles) | 16–17px | 700 | -0.03em (inherits body -0.01em unless set) |
| Overline | 11px, uppercase | 700 | +0.14em (positive — the one exception) |
| Subhead / hero body | 18px / 1.7 | 400 | -0.01em |
| Body / paragraph | 14–16px / 1.6–1.7 | 400 | -0.01em |
| Buttons | 13.5px | 700 | — |
| Nav links | 12.5px, uppercase | 500 | +0.08em |

### Radius & spacing
- Buttons: radius 10px, padding 14px 30–32px.
- Nav: navy, 64px tall, padding 0 40px. Logo tile 36×36, radius 9px.
- Cards: 14–16px radius; case hero 380px tall, case thumbnails 210px, blog cover 160px.
- Newsletter / dark bands: 18px radius, 52px padding.
- Section horizontal padding: 64px (hero/nav differ). Max page width 1280px, centered.
- Card image overlay: `linear-gradient(to top, rgba(9,38,52,.92) 0%, rgba(9,38,52,.25) 55%, transparent 100%)`.

## Screens / Views

Single page, top to bottom:

1. **Nav** — navy, 64px. Left: orange rounded-square "KC" tile (navy text) + "Kanishk Chadha" wordmark (Inter 700, 16px, white). Right: 5 uppercase links, **solid white**: Skills, Experience, Blog, Newsletter, Contact. A résumé download should also live here (always reachable) in production.

2. **Hero** — two-column. Left: orange overline "AI · ANALYTICS · AUTOMATION"; H1 "I don't just run campaigns. I build AI-powered marketing systems that compound."; teal subhead ("senior, AI-native marketer blending AI, analytics, and automation…"); two buttons — orange **See My Work** (→ #cases), navy **Download Résumé ↓**. Right: portrait image (4:5, 20px radius) with a navy name/title badge bottom-left.

3. **Tech Stack** — white band, hairline borders. Label "Tech Stack" + a centered row of tool names, each with a brand logo (18px, monochrome navy) and dot-separator. Tools shown: Notion, HubSpot, Salesforce, n8n, Segment, Google Analytics, Looker Studio, Google Ads, Meta, Zapier, Make, Anthropic, OpenAI, Airtable, Figma, Slack (extendable). Logos come from Simple Icons (`cdn.simpleicons.org/<slug>/092634`); brands missing from the CDN fall back to a navy monogram tile. In production, self-host real brand SVGs.

4. **Credibility strip** — navy band, two-column. Left: orange overline "5+ YEARS SENIOR MARTECH" + statement H3 "Senior enough to trust with the stack — and the outcomes." + uppercase trusted-by line. Right: 3 hard metrics (value 700/32px white + muted label). **Metrics carry a "Sample data" flag** — placeholders; confirm/replace and remove flags.

5. **Capabilities** — centered intro (overline "Capabilities" + H2 + one-line description). Then a bordered matrix table: **4 rows**, one per cluster. Each row: left = orange 2-digit index (01–04) + title (Inter 700, 17px) + description; right = the cluster's tools as **navy text labels underlined in orange** (`border-bottom:2px solid #ff6e42`), right-aligned. Rows separated by hairlines. Clusters:
   - **01 Automation & AI Systems** — n8n, HubSpot, Salesforce, GPT / Claude
   - **02 Analytics & Attribution** — SQL, GA4, Looker Studio, Meta / Google Ads
   - **03 Customer Data / CDP** — Segment, Salesforce Data Cloud, Event Tracking, Audiences
   - **04 AI Enablement & Governance** — Prompt Systems, Guardrails, Enablement, Governance

6. **Featured Work** (`#cases`) — centered overline "Featured Work" + H2 "Outcomes, not project names". One large flagship card (380px) with an orange "Flagship · Agentic System" pill, then 3 outcome-led thumbnail cards (3-col). Each: image + navy gradient overlay + orange category + white outcome-first title. All images are **user-supplied** (drop zones in the prototype; sample Unsplash photos stand in). Outcome-led headlines lead with the result, flagship agentic project first.

7. **Experience** (max-width 820px) — overline "Experience" + H2 "The path so far" + "Sample data" flag. 4 rows: orange period (150px fixed col) | role · org (navy) + slate description. Placeholder history — replace.

8. **Newsletter** (`#newsletter`) — navy rounded band, centered. Overline "The Newsletter" + "Join 5,200+ marketers" + subhead + email input (visual only) + orange Subscribe. Kanishk's newsletter is *Automated Marketer* — an authority signal. Wire to Beehiiv/ESP.

9. **LinkedIn card** — white bordered card: teal "in" tile + heading "Let's connect on LinkedIn" + blurb + teal "Follow →" button. Prominent verify-the-person link.

10. **Blog** (`#blog`) — header "From the Blog" / "Recent writing" + "View all →". 3 cards: cover image + orange category + title + read-time/date meta. Placeholder posts/covers — replace.

11. **Contact** — centered H2 "Get in Contact", slate paragraph, orange "Start a Conversation" mailto button. Include a subtle "open to senior roles" availability line here in production.

12. **Footer** — navy. Left: small KC tile + wordmark + copyright/tagline. Right: LinkedIn, Twitter/X, Blog, Newsletter links.

## Interactions & Behavior
- Anchor buttons scroll to `#cases`, `#newsletter`, `#blog`.
- Links: default ocean teal `#004e72`, hover Signal Orange `#ff6e42`.
- Buttons: add a subtle darken/lift on hover (orange → ~`#f0592c`, navy → ~`#0d3346`).
- Newsletter email + Subscribe are visual only — connect to Beehiiv; add submit, validation, success/error.
- Résumé download (hero + nav) → one-click PDF.
- `showSampleTags` is a boolean toggle in the prototype that shows/hides all "Sample data" flags — production should simply drop the flags once numbers are real.
- Responsive: prototype is desktop (1280px). Mobile — collapse nav to a menu, single-column hero/stats/case grid/blog, reduce H1 to ~34–40px, reduce section padding, scale type ~15%.

## State Management
Minimal. Only real dynamic piece is the newsletter form (input value, submitting, success/error). All content (tools, stats, capabilities, cases, timeline, blog) is static/CMS-driven — source from Astro content collections rather than hardcoding.

## Assets
- **Font:** Inter (Google Fonts) — the only typeface.
- **Tool logos:** Simple Icons CDN in the prototype; self-host real brand SVGs (monochrome navy `#092634`) in production.
- **Portrait + case/blog images:** owner-supplied. Prototype hotlinks sample Unsplash photos as placeholders — replace before launch.
- **Logo:** "KC" monogram is CSS text on an orange tile; swap for an SVG mark if one exists.

## Files
- `Homepage.dc.html` — the design reference (open in a browser). All layout, copy, colors, spacing. Contains a `<doc-page>` print wrapper and the DC runtime — both are prototype-only; ignore them.
- `image-slot.js` — prototype support only; not needed in production.

## ⚠️ Placeholder content to replace before launch
- Credibility metrics + experience timeline (flagged "Sample data").
- Case-study titles/images, portrait photo.
- Blog posts + covers.
- Tool logos (self-hosted SVGs).
- Add "open to senior roles" availability line; wire résumé PDF + newsletter form.
