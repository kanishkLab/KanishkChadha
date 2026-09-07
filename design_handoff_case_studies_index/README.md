# Handoff: Work / "All case studies" index page

## Overview
A redesign of the case-study index page for **kanishkchadha.com** (personal portfolio of a martech / analytics / marketing-automation practitioner). The page lists four case studies with category filtering, gives the flagship study a large featured treatment, and closes with a LinkedIn-recommendations strip and a contact form.

What the redesign changed versus the old page:
1. **Hierarchy** — the flagship case study is a full-width featured panel; the rest sit in an even 3-up card grid.
2. **Cards are uniform** — equal height, stack pills aligned, footer CTA pinned to the bottom of every card.
3. **Filters do something** — sticky filter bar with per-category counts and a live result count.
4. **Proof is attached to its claim** — each metric lives on the case study that earned it, not in a pooled stat panel.
5. **Contact section** is left-aligned two-column instead of a centered island.

## About the design files
The files in this bundle are **design references authored in HTML** — a prototype of the intended look and behaviour, not production code to copy verbatim. The task is to **recreate this design in the target codebase's own environment** (React/Next, Astro, Vue, etc.) using its established component patterns, styling approach, and routing. If no frontend exists yet, pick the framework that best fits the project and implement there.

The prototype is authored in a streaming component format ("Design Components": `<x-dc>` template + a logic class, `{{ }}` value holes, `<sc-for>` / `<sc-if>` control flow, `<x-import>` mounts for design-system components). **Do not port that format.** Read it as markup + data, and rebuild with ordinary components: `.map()` for `<sc-for>`, conditional render for `<sc-if>`, props/state for `{{ }}`.

## Fidelity
**High fidelity.** Colours, type, spacing, radii, shadows, and copy are final and taken from the Kanishk Chadha design system. Recreate pixel-accurately using the codebase's existing primitives where they exist (Button, Tag, Input, Textarea, Eyebrow, Logo all exist in that design system).

---

## Screen: Work — All case studies

Single scrolling page, max content width **1120px**, centered, **40px** horizontal gutters. Page background `#FFFFFF`; the case-study band is `#F9F9F9`.

Vertical order: sticky nav → page header → sticky filter bar → case-study band (featured panel, card grid, LinkedIn strip) → contact section → footer.

### 1. Top navigation (sticky)
- `position: sticky; top: 0; z-index: 40`, background `rgba(255,255,255,.96)`, `border-bottom: 1px solid #E6E9EA`.
- Inner row: max 1120px, height **68px**, `display:flex; align-items:center; justify-content:space-between`.
- Left: **KC monogram + wordmark** lockup at 22px (design-system `Logo`, variant `lockup`). "K" navy, "C" Signal Orange, Inter 800, letter-spacing -.08em; wordmark "Kanishk Chadha" Inter 700, -.04em.
- Right: nav links in a flex row, `gap: 30px`. Manrope **12px / 700**, `letter-spacing:.12em`, uppercase. Items: Home, Work, Stack, Notes, Contact. Inactive `#092634`; **active (Work)** `#FF6E42` with `padding-bottom:4px; border-bottom:2px solid #FF6E42`.

### 2. Page header
- Padding `64px 40px 40px`. Single column.
- Eyebrow "Selected work" — Manrope 12px/600, uppercase, `letter-spacing:.22em`, `#FF6E42`; 14px below it.
- H1 "All case studies." — **Playfair Display 600, 52px**, `line-height:1.04`, `letter-spacing:-.03em`, `#092634`, `max-width:16ch`, `text-wrap:pretty`.
- Lead paragraph — Manrope 500, **17px**, `line-height:1.65`, `#4A5A60`, `max-width:54ch`, margin-top 20px. Copy: "How I approach a marketing problem — diagnosing the constraint, choosing the channel mix, building the AI-powered system, and measuring what actually moved the needle."
- Meta rule — `margin-top:30px; padding-top:20px; border-top:1px solid #E6E9EA`, flex row `gap:20px`, Manrope 13px/600, `#6a7a80`. Items: "4 systems, 2023–2024" · 4px `#E6E9EA` dot · "2 still running today". (Toggleable — see Props.)

### 3. Filter bar (sticky, below nav)
- `position:sticky; top:68px; z-index:30`, background `rgba(255,255,255,.96)`, `border-bottom:1px solid #E6E9EA`. Inner padding `16px 40px`, flex row, space-between.
- **Chips** (left): flex wrap, `gap:8px`. Each chip: Manrope 13px/600, `padding:10px 15px`, `border-radius:999px`, `transition: background .15s, border-color .15s, color .15s`. Trailing count span at `opacity:.55; margin-left:7px`.
  - Inactive: `background:#fff; color:#092634; border:1px solid #E6E9EA`.
  - Active: `background:#092634; color:#fff; border:1px solid #092634`.
  - Chips: All (4), Martech + AI (1), Measurement & Instrumentation (1), Analytics / BI (1), Growth / CRO (1).
- **Result count** (right): Manrope 12px/600, uppercase, `letter-spacing:.12em`, `#9AA6AB`, `white-space:nowrap` — e.g. "4 case studies" / "1 case study".

### 4. Case-study band
`background:#F9F9F9; border-bottom:1px solid #E6E9EA; padding:56px 0 72px`. Inner column: flex column, `gap:44px`.

#### 4a. Featured panel (shown only when the filter is "All")
`<article>`: 2-column grid `minmax(0,1fr) minmax(0,1.05fr)`, `background:#fff`, `border:1px solid #E6E9EA`, `border-radius:14px`, `overflow:hidden`, `box-shadow:0 4px 18px rgba(9,38,52,.12)`.
**Note:** use `minmax(0, …)` tracks — plain `1fr` lets min-content blow out the columns.

**Left cell — flow diagram (built in markup, no image).** `background:#0c2b3b` + diagonal texture `repeating-linear-gradient(135deg, rgba(255,255,255,.03) 0 2px, transparent 2px 22px)`; `padding:36px 32px`; flex column, `gap:14px`, `justify-content:center`.
- Diagram eyebrow "Lead qualification flow" — 11px/700, uppercase, `letter-spacing:.18em`, `#FF6E42`.
- Row of two nodes (grid 1fr 1fr, gap 12px). Node: `border:1px solid rgba(255,255,255,.2)`, `background:rgba(255,255,255,.1)`, `border-radius:10px`, `padding:14px`, text 12px/700 uppercase `letter-spacing:.08em`, `#fff`. Labels: "Inbound form", "Enrichment".
- Arrow row: grid 1fr 1fr, two "↓" glyphs, 16px, `rgba(255,255,255,.5)`, centered.
- Agent node: `border:1px solid rgba(255,110,66,.55)`, `background:rgba(255,110,66,.12)`, `border-radius:12px`, `padding:18px`. Title "Qualify + score agent" 14px/800 uppercase `letter-spacing:.04em` `#fff`; sub "n8n · Make · Anthropic · OpenAI" 12px/600 `rgba(255,255,255,.65)`; score bar (8px tall, `border-radius:999px`, track `rgba(255,255,255,.16)`, fill **78%** `#FF6E42`) with "0.92" 12px/800 `#FF6E42`.
- Second arrow row (same as above).
- Output row: "CRM record" (same node style) and "Eval suite" (`border:1px solid rgba(255,110,66,.5)`, no fill, text `#FF6E42`).
- Footnote: `margin-top:8px; padding-top:14px; border-top:1px solid rgba(255,255,255,.2)`, 12px/600, `rgba(255,255,255,.65)` — "Every run scored before it reaches a rep."

**Right cell — white text card.** `padding:44px`, flex column, `gap:18px`, `justify-content:center`.
- Meta row (flex, `gap:14px`, wrap): **Tag "Ongoing"** — solid `#FF6E42`, `#fff`, 11px/700 uppercase `letter-spacing:.08em`, `padding:6px 12px`, `border-radius:6px`; then eyebrow "Flagship · Martech + AI · 2024" — 11px/600 uppercase `letter-spacing:.14em`, `#004E72`.
- H2 — Playfair Display 600, **32px**, `line-height:1.14`, `letter-spacing:-.02em`, `#092634`: "The agent that qualifies our inbound leads — and how I know it's right."
- Body — Manrope 500, 15px, `line-height:1.65`, `#4A5A60`, `max-width:52ch`: "Built on n8n + Make calling the Anthropic and OpenAI APIs: qualifies and scores inbound leads, then pushes enriched records into the CRM so sales works the right buyers first. The part most people skip — the eval that proves it's right."
- Outcome line — `padding-top:18px; border-top:1px solid #E6E9EA`, flex `gap:10px`: 6px `#FF6E42` dot + "Eval-gated — drift caught before a rep sees it" 13px/700 `#092634`.
- Stack pills — flex wrap `gap:6px`. Pill: 12px/600, `color:#004E72`, `background:#eef1f2`, `border-radius:6px`, `padding:6px 10px`. Items: n8n, Make, Anthropic API, OpenAI API, then "+1" in `#9AA6AB`, `padding:6px 4px`.
- CTA — primary button "Read the case study →": `background:#FF6E42`, `#fff`, Manrope 14px/700, `padding:13px 24px`, `border-radius:8px`; hover `#f2603a`.

#### 4b. Card grid
Grid `repeat(3, minmax(0,1fr))`, `gap:24px`, `align-items:stretch` (2-column variant available — see Props). Shows the studies matching the active filter, minus the featured one when the filter is "All".

Each card is an `<a>`: flex column, `background:#fff`, `border:1px solid #E6E9EA`, `border-radius:12px`, `overflow:hidden`, `box-shadow:0 2px 10px rgba(9,38,52,.08)`, `transition:box-shadow .15s`; **hover** `box-shadow:0 4px 18px rgba(9,38,52,.12)` (no transform, no underline).
- **Media**: `aspect-ratio:16/10`, `background:#092634`, image `object-fit:cover` filling the box. "Ongoing" Tag absolutely positioned `top:14px; left:14px`, `pointer-events:none` (only for ongoing studies).
- **Body**: `padding:24px 24px 0`, flex column, `gap:12px`, `flex:1`.
  - Eyebrow: category, uppercased — 11px/600, `letter-spacing:.14em`, `#FF6E42`.
  - H3 — Playfair Display 600, **21px**, `line-height:1.2`, `letter-spacing:-.02em`, `#092634`.
  - Body — Manrope 500, 14px, `line-height:1.6`, `#4A5A60`.
  - Outcome plate (when the study has one): `background:rgba(255,110,66,.12)`, `border-radius:6px`, `padding:9px 12px`, flex `gap:9px`: 6px `#FF6E42` dot + text 13px/700 `#c9512c`.
  - Stack pills: same pill style as the featured panel; **first 4** items, then "+N" when more. Wrapper has `margin-top:auto; padding-top:8px` — this is what keeps card bodies aligned.
- **Footer**: `margin-top:18px; padding:14px 24px 18px; border-top:1px solid #f0f2f3`, flex space-between: "View case study →" 13px/700 `#FF6E42`; year 12px/600 `#9AA6AB`.

#### 4c. LinkedIn strip
`<aside>`: `background:#004E72`, `border-radius:12px`, `padding:28px 32px`, flex row `align-items:center`, `gap:26px`, `box-shadow:0 2px 10px rgba(9,38,52,.08)`.
- Tile: 52×52, `border-radius:10px`, `background:#0a66c2`, centered lowercase "in" — Inter 800, 22px, `#fff`, `letter-spacing:-.04em`. (Typographic tile, **not** the official LinkedIn logo.)
- Text block (`flex:1`): H3 "What colleagues & clients say" — Playfair Display 600, 21px, `#fff`; body 14px/500, `line-height:1.6`, `rgba(255,255,255,.88)`, `max-width:62ch`: "Recommendations from people I've worked with — on collaboration, delivery, and impact."
- Ghost-on-dark button "Read on LinkedIn →": `background:rgba(255,255,255,.1)`, `border:1px solid rgba(255,255,255,.2)`, `#fff`; hover fill lifts to `rgba(255,255,255,.16)`.

### 5. Contact section (`id="contact"`)
White background, `padding:80px 40px`, grid `.9fr 1.1fr`, `gap:64px`, `align-items:start`.
- **Left**: eyebrow "Get in touch" (12px/600, `.22em`, `#FF6E42`); H2 — Playfair Display 600, **38px**, `line-height:1.1`, `letter-spacing:-.03em`, `max-width:20ch`: "Own your tracking, CDP, and the agents on top of it."; body 16px/500, `line-height:1.65`, `#4A5A60`, `max-width:44ch`: "That's the job I do. Tell me what you're building and where the measurement breaks down."; availability line `margin-top:28px; padding-top:22px; border-top:1px solid #E6E9EA` — 8px `#FF6E42` dot + 13px/600 `#6a7a80`: "Open to Martech, Marketing Analytics, and Marketing Ops roles in Calgary and remote."
- **Right (form card)**: `background:#fff`, `border:1px solid #E6E9EA`, `border-radius:12px`, `padding:32px`, `box-shadow:0 2px 10px rgba(9,38,52,.08)`, flex column `gap:18px`.
  - Row of two inputs (grid 1fr 1fr, gap 18px): **Name** ("Your name"), **Email** ("you@example.com").
  - **Message** textarea, 5 rows, "Tell me about your project or role...".
  - Field styling: label 12px/600 `#092634`, 7px gap above the control; control Manrope 14px/500 `#092634`, `padding:12px 14px`, `border:1px solid #cdd4d7`, `border-radius:8px`, `background:#fff`, `outline:none`. **Focus**: `border-color:#FF6E42` + `box-shadow:0 0 0 3px rgba(255,110,66,.15)`.
  - Action row: primary button "Send message →" + 12px/500 `#9AA6AB` note "I reply within two business days."

### 6. Footer
- 4px `#FF6E42` top rule, then `background:#092634`; inner row max 1120px, `padding:30px 40px`, flex space-between, `gap:24px`.
- Left: KC lockup on dark, 22px. Center: 12px/500 `rgba(255,255,255,.5)` — "Build smarter. Measure better. Automate with intention." Right (right-aligned column, `gap:4px`): "LinkedIn" link 12px/600 `#FF6E42`; "© 2026 Kanishk Chadha" 12px/500 `rgba(255,255,255,.5)`.

---

## Interactions & behaviour
- **Filtering** — clicking a chip sets `filter`. `All` shows the featured panel + the remaining 3 as cards. Any other category hides the featured panel and renders every match (including the flagship) as a normal card. The result count updates with the match count and pluralises.
- **Hover** — buttons darken (orange `#FF6E42`→`#f2603a`; navy `#092634`→`#0d3547`); on-dark ghost fill `.1`→`.16`; cards raise from the soft to the raised shadow; links underline. **No scale or transform on hover** anywhere.
- **Focus** — orange ring `0 0 0 3px rgba(255,110,66,.15)` with the border switching to orange.
- **Animation** — restrained: `scroll-behavior:smooth` on `html`, property transitions only (.15s). No entrance choreography, no parallax.
- **Sticky stacking** — nav at `top:0 / z-40`; filter bar at `top:68px / z-30`. Keep the offset equal to the nav height if you change it.
- **Cards are whole-card links** to the case study; the footer "View case study →" is not a separate link.
- **Form** is presentational in the prototype — wire submit, validation (name required, valid email, non-empty message), and success/error states to the real backend. No loading or error visuals are specified; use the codebase's conventions.
- **Responsive** — not specified in the prototype (desktop-first). Suggested: below ~1080px the card grid goes 2-up, below ~760px everything goes single-column, the featured panel stacks (diagram above text), and the filter bar scrolls horizontally.

## State
| State | Type | Notes |
|---|---|---|
| `filter` | one of `'All' | 'Martech + AI' | 'Measurement & Instrumentation' | 'Analytics / BI' | 'Growth / CRO'` | Default `'All'`. Drives chips, grid contents, featured visibility, result count. |

Derived (no extra state): `matched` (filtered list), `showFeatured` (`featuredHero && filter === 'All'`), `gridItems`, per-card `pills` (first 4 of `stack`) and `more` (`+N`), `countLabel`.

No data fetching in the prototype — the four case studies are a static array (below). Move to CMS/MDX if the codebase has one.

## Props (design-time toggles in the prototype)
| Prop | Type | Default | Effect |
|---|---|---|---|
| `featuredHero` | boolean | `true` | Show the large featured panel (only ever visible on the "All" filter). |
| `gridColumns` | `'2' | '3'` | `'3'` | Card-grid column count. |
| `showProofBand` | boolean | `true` | Show the header meta rule ("4 systems, 2023–2024 · 2 still running today"). |

Keep or drop these as suits the codebase — they are authoring conveniences, not user-facing features.

## Content data
```js
const CASE_STUDIES = [
  {
    cat: 'Martech + AI', year: '2024', ongoing: true,
    img: 'assets/cs-agent.png',
    outcome: 'Eval-gated — drift caught before a rep sees it',
    title: "The agent that qualifies our inbound leads — and how I know it's right",
    desc: "Built on n8n + Make calling the Anthropic and OpenAI APIs: qualifies and scores inbound leads, pushes enriched records into the CRM so sales works the right buyers first. The part most people skip — the eval that proves it's right.",
    stack: ['n8n', 'Make', 'Anthropic API', 'OpenAI API', 'HubSpot']
  },
  {
    cat: 'Measurement & Instrumentation', year: '2024', ongoing: true,
    img: 'assets/cs-cdp.png',
    outcome: 'One event schema governing every downstream tool',
    title: 'The tracking plan that governs a CDP',
    desc: 'Segment end-to-end: event design, identity resolution, server-side GTM, and the governance that keeps it clean.',
    stack: ['Segment', 'Google Tag Manager (server-side)', 'GA4', 'Consent Mode v2', 'BigQuery']
  },
  {
    cat: 'Analytics / BI', year: '2023', ongoing: false,
    img: 'assets/cs-bi.png',
    outcome: '40% less reporting time',
    title: 'Five spreadsheets to one source of truth',
    desc: 'A live dashboard on synthetic data — CAC, LTV, ROAS, MER, contribution margin, anomaly detection. 40% less reporting time.',
    stack: ['Looker Studio', 'GA4', 'Google Ads', 'Meta Ads', 'BigQuery']
  },
  {
    cat: 'Growth / CRO', year: '2023', ongoing: false,
    img: 'assets/cs-cro.png',
    outcome: '35% lift in inbound leads across 10+ builds',
    title: 'Owning a CRO program',
    desc: 'Hotjar → Optimizely testing loop across 10+ builds → 35% lift in inbound leads, with release QA and consent checks before anything ships.',
    stack: ['Hotjar', 'Optimizely', 'GA4', 'Google Tag Manager', 'Consent Mode v2']
  }
];
```

---

## Design tokens (Kanishk Chadha design system)

### Colour
| Token | Value | Use |
|---|---|---|
| `--kc-ink` | `#092634` | Primary ink, headlines, dark surfaces |
| `--kc-ink-2` | `#0c2b3b` | Featured / textured navy panels |
| `--kc-ink-hover` | `#0d3547` | Navy button hover |
| `--kc-ocean` | `#004E72` | Secondary text, supporting fills, pill text |
| `--kc-accent` | `#FF6E42` | Signal Orange — accent only |
| `--kc-accent-hover` | `#f2603a` | Orange hover |
| `--kc-accent-deep` | `#c9512c` | Orange text on light orange tint |
| `--kc-accent-tint` | `rgba(255,110,66,.12)` | Outcome plates, soft accent fills |
| `--kc-accent-ring` | `rgba(255,110,66,.15)` | Focus ring |
| `--kc-white` | `#FFFFFF` | Page background |
| `--kc-surface` | `#F9F9F9` | Off-white band |
| `--kc-surface-2` | `#eef1f2` | Neutral pill fill |
| `--kc-line` | `#E6E9EA` | Hairline borders |
| `--kc-line-2` | `#f0f2f3` | Faint internal dividers |
| `--kc-input-border` | `#cdd4d7` | Input resting border |
| `--kc-body` | `#4A5A60` | Body text |
| `--kc-body-2` | `#6a7a80` | Secondary caption text |
| `--kc-muted` | `#9AA6AB` | Meta, captions, disabled |
| on-dark ramps | `rgba(255,255,255,.88 / .65 / .5)` | Text on navy |
| on-dark fills | `rgba(255,255,255,.1)` fill, `rgba(255,255,255,.2)` line | Ghost elements on navy |
| `--kc-linkedin` | `#0a66c2` | LinkedIn tile only |

**Usage ratio ≈ 60% white · 25% navy · 10% ocean · 5% orange.** Orange is an accent only — never a large background wash.

### Type
- **Playfair Display** (serif) — all headings/display. 500/600/700, `letter-spacing:-.03em` (display) / `-.02em` (headings).
- **Manrope** (sans) — all body and UI. 400–800.
- **Inter** — 800/700, monogram and wordmark **only** (`-.08em` / `-.04em`).
- Scale used here: 52 (h1) · 38 (contact h2) · 32 (featured h2) · 21 (card h3, strip h3) · 17 (lead) · 16 · 15 · 14 · 13 · 12 · 11 (eyebrow).
- Uppercase labels always carry wide tracking: `.14em`–`.22em`. Sentence case everywhere else — no Title Case in prose.

### Spacing
4px base grid: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64. Section padding 56–80px; 24px default card padding; 44px featured-panel padding.

### Radius
6px small tags/pills · 8px buttons/inputs · 10px diagram nodes · 12px cards & panels · 14px feature blocks · 999px dots and filter chips.

### Shadow (navy-tinted only)
- subtle `0 1px 3px rgba(9,38,52,.05)`
- soft `0 2px 10px rgba(9,38,52,.08)` — resting cards, nav, footer, strip
- raised `0 4px 18px rgba(9,38,52,.12)` — hover, featured panel

### Texture
The one allowed texture: `repeating-linear-gradient(135deg, rgba(255,255,255,.03) 0 2px, transparent 2px 22px)` on navy panels. No gradients as decoration, no photographic backgrounds.

### Iconography
Almost none by design. Directional Unicode arrows in running text ("→", "↓"), the KC typographic monogram, and the typographic LinkedIn tile. **No icon font, no icon set, no emoji.** If line icons become genuinely necessary, use Lucide at 1.5–2px stroke and flag it as an addition.

## Assets
`assets/cs-cdp.png`, `assets/cs-bi.png`, `assets/cs-cro.png`, `assets/cs-agent.png` — **placeholder** card thumbnails generated for this prototype (flat navy + the diagonal hairline texture + one orange accent, per the system's imagery guidance). They are stand-ins: replace with real product screenshots, keeping them cool-toned and understated. Aspect 16:10 to match the card media box.

The featured panel's flow diagram uses **no image** — it is markup, so it never crops and stays sharp at any size.

No logo file exists: the KC mark is typographic (Inter 800, "K" ink/white + "C" orange). Reproduce it in type; do not trace a bitmap.

Fonts load from Google Fonts (Playfair Display, Manrope, Inter) — the genuine brand faces. Self-host `.woff2` for production.

## Files in this bundle
- `All Case Studies.dc.html` — the design prototype (read as reference; do not port the format).
- `assets/*.png` — placeholder card thumbnails.
- `design-system/` — the design-system tokens and component sources (`tokens/*.css`, `styles.css`, `_ds_bundle.js` with Button, Tag, Eyebrow, StackPill, Card, Input, Textarea, StatBlock, Logo, NavBar, Footer, and more) plus `readme.md`, the full brand guide (voice, colour, type, layout rules).

## Implementation order (suggested)
1. Wire the design tokens into the codebase's theme layer (CSS variables or the equivalent).
2. Build primitives if absent: Button (primary/secondary/ghost, on-dark), Tag, Eyebrow, Input, Textarea, Logo.
3. Static page shell: nav, header, band, footer.
4. CaseStudyCard, then the card grid from the data array.
5. FeaturedCaseStudy panel (markup diagram).
6. Filter bar + `filter` state, counts, and featured visibility rule.
7. Contact form wiring and validation.
8. Responsive passes and focus/hover state audit.
