# Handoff: Kanishk Chadha — Brand Identity System (Nautical / Playfair)

## Overview
This package documents the personal brand identity for **Kanishk Chadha** (AI · Analytics · Automation) in its "Nautical" colour direction with the Playfair Display + Manrope + Inter type system. It is a 5-page brand guidelines document (cover, colour, typography, logo & monogram, application) intended to drive a consistent website, newsletter, and collateral. The goal of implementation is to translate these brand rules into reusable tokens and components in the target codebase.

## About the Design Files
The file `Brand Guidelines Nautical - Playfair.html` in this bundle is a **design reference created in HTML** — a prototype showing the intended look, type system, and brand rules, not production code to copy directly. It is built on a lightweight paged-document web component (`doc-page.js`) purely for print/preview; **do not port `doc-page.js`**. The task is to recreate the brand system (tokens + logo + example components) in the target codebase's existing environment (React, Vue, SwiftUI, native, etc.) using its established patterns and libraries — or, if no environment exists yet, to choose the most appropriate framework and implement it there.

## Fidelity
**High-fidelity (hifi).** Final colours, typography, spacing, and the logo construction are exact and should be reproduced precisely. The document itself is a spec sheet; the reusable outputs are the design tokens, the KC logo/monogram, and the example header/hero/card components on the Application page.

## Screens / Views
The document has five pages. Only the **Logo** and **Application** pages describe reusable UI; the rest are reference.

### 1. Cover (reference)
- **Purpose:** Title page for the guidelines.
- **Layout:** Full-bleed navy page (`#092634`), 0.9in × 0.8in inner padding, flex column, space-between. Two decorative circles: a 420px blue circle (`#004E72`, opacity .35) off the top-right; a 180px orange circle (`#FF6E42`, opacity .9) lower-right.
- **Components:** Overline "Brand Identity Guidelines · V1.0" (Manrope 600, 12px, uppercase, letter-spacing .24em, white 60%). KC lettermark (96px) + wordmark. H1 "Kanishk / Chadha" (Playfair 600, 60px, −0.03em, white). Orange overline "AI · Analytics · Automation" (Manrope 600, 14px, .14em). Tagline paragraph (Manrope 500, 19px). Footer URL "kanishkchadha.com".

### 2. Colour Palette (reference)
- **Purpose:** Define palette and usage ratio.
- **Layout:** White page, 0.7in padding. Section header (rule + number + Playfair title). Intro paragraph. 2×2 grid of swatch cards (gap 22px). Below: an off-white "Usage ratio" panel with a 4-segment bar.
- **Swatch card:** 12px radius, `0 2px 10px rgba(9,38,52,.08)` shadow; 130px colour block on top (white block gets `inset 0 0 0 1px #e2e5e7`); label area on white — name (Playfair 600, 17px, −0.02em), hex (Manrope, 12px, blue), role (Manrope, 12px, `#6a7a80`).
- **Usage ratio bar:** 34px tall, 7px radius, flex segments 60/25/10/5 → White / Navy / Blue / Orange, each labelled with its % (Manrope 600, 11px).

### 3. Typography (reference)
- **Purpose:** Show the type system.
- **Layout:** White page. Two-column specimen (Playfair vs Manrope), then an off-white "Type scale" panel listing H1, H2, Body, Label, Logo rows.

### 4. Logo & Monogram (REUSABLE)
- **Purpose:** Define the mark and its lockups.
- **Layout:** White page. 2-col grid of two lockup tiles (light off-white tile + dark navy tile), then a horizontal navy lockup bar, then two-column construction/clear-space notes, then an off-white Do/Don't panel.
- **KC monogram (the mark):** An **Inter 800 lettermark**, not a badge. Two inline letters "K" then "C" set at `letter-spacing: -0.08em` so they nest. On light backgrounds: **K = `#092634` (navy)**, **C = `#FF6E42` (orange)**. On navy: **K = `#FFFFFF`**, **C = `#FF6E42`**. Rendered via `display:inline-flex`, `line-height:1`.
- **Wordmark:** "Kanishk Chadha" in **Inter 700, letter-spacing −0.04em**, white on navy / navy on light.
- **Horizontal lockup:** navy bar (`#092634`), 12px radius, padding 22px 26px, flex row, gap 18px: 44px monogram + 22px wordmark.
- **Clear space:** equal to the cap-height of the mark on all sides. **Min size:** 20px digital / 7mm print.
- **Do:** K in ink or white, C in orange; place on navy, white, or off-white. **Don't:** swap letter colours, add a box outline, stretch, or set on busy photography.

### 5. In Application (REUSABLE examples)
- **Site header:** navy bar (`#092634`), padding 16px 22px, flex space-between. Left: 30px KC monogram + wordmark (Inter 700, 16px, −0.04em, white). Right: "kanishkchadha.com" (Manrope 600, 11px, white 60%, letter-spacing .06em).
- **Hero card:** off-white body (`#F9F9F9`), padding 30px 26px. Orange overline (Manrope 600, 11px, .18em, uppercase). H3 (Playfair 600, 30px, line-height 1.12, −0.03em, navy). Body (Manrope 500, 14px, `#004E72`, max-width 5.4in). Two buttons.
  - **Primary button:** bg `#FF6E42`, white text, Manrope 700, 13px, padding 12px 22px, radius 8px.
  - **Secondary button:** bg `#092634`, white text, same metrics.
- **Content card:** white, 1px `#e6e9ea` border, 12px radius, padding 22px. Title (Playfair 600, 17px, −0.02em). Body (Manrope 500, 13px, `#6a7a80`). Link "Explore the case study →" (Manrope 600, 12px, orange).
- **Callout card:** bg `#004E72`, white text, 12px radius, padding 22px. Title (Playfair 600, 17px). Body (Manrope 500, 13px, white 85%).

## Interactions & Behavior
The reference is a static print document; it has no interactions. In the real app:
- **Buttons:** add hover (suggest primary → darken orange ~8%, e.g. `#ED5A2E`; secondary → lighten navy ~10%) and a visible focus ring (2px, `#004E72`).
- **Links:** default and hover colours must be defined from the palette — default Signal Orange `#FF6E42`, hover darken ~8%. Do not leave browser-default blue.
- **Responsive:** scale display type down ~15% below 640px; keep the logo lockup horizontal but drop the wordmark below ~360px (mark only).

## State Management
None — this is a static identity/brand spec. No state variables, transitions, or data fetching.

## Design Tokens

### Colours
| Token | Hex | Role |
|---|---|---|
| Deep Navy | `#092634` | Primary ink, headlines, logo ground, dark surfaces |
| Oceanic Blue | `#004E72` | Secondary text, links, supporting fills, callouts |
| White | `#FFFFFF` | Page background, negative space |
| Off-White (panel) | `#F9F9F9` | Tinted panels, hero body surface |
| Signal Orange | `#FF6E42` | Accent only — CTAs, highlights, links, monogram "C" |
| Body grey | `#4a5a60` | Body copy on light |
| Muted grey | `#6a7a80` | Secondary body/caption |
| Hairline border | `#e6e9ea` | Card/panel borders |
| Label grey | `#9aa6ab` | Overlines/footers on light |

**Usage ratio:** White 60% / Navy 25% / Blue 10% / Orange 5%. Orange is accent-only — never a background wash.

### Typography
- **Headings & display — Playfair Display** (serif). Weights 500 / 600 / 700. Weight 600 is default. Letter-spacing −0.03em (large) to −0.02em (smaller headings). Line-height ~1.12–1.2.
- **Body & UI — Manrope** (sans). Weights 400 / 500 / 600 / 700 / 800. Body 500; labels/links 600; buttons 700; heavy display "Aa" 800. Body line-height 1.5–1.6.
- **Logo & wordmark — Inter.** Wordmark: 700, −0.04em. Monogram lettermark: 800, −0.08em.
- **Overlines/labels:** Manrope 600, ~11–12px, uppercase, letter-spacing .14–.24em.

Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&family=Inter:wght@700;800&display=swap" rel="stylesheet">
```

### Spacing / radius / shadow
- **Page padding:** 0.7in content pages; 0.9in × 0.8in cover.
- **Radius:** cards/panels 12px; hero container 14px; buttons 8px; horizontal lockup 12px.
- **Grid gap:** 22px (card grids), 34px (specimen columns).
- **Shadows:** swatch `0 2px 10px rgba(9,38,52,.08)`; hero container `0 4px 18px rgba(9,38,52,.12)`.
- **Borders:** hairline `1px solid #e6e9ea`.

## Assets
No external image assets. The KC monogram and wordmark are pure type (Inter) — reproduce with live text/CSS, or export as SVG for favicon/app-icon use. No icons or photography are used in this reference.

## Files
- `Brand Guidelines Nautical - Playfair.html` — the 5-page brand guidelines reference (this is the source of truth for all values above).
- `doc-page.js` — print/preview shell only; **not** to be ported.

Related versions in the parent project (not included here) explore alternate colour grounds and the all-Inter type system: `Brand Guidelines Nautical - Inter.html`, `Brand Guidelines Nautical - Inter (White).html`.
