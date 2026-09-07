# Kanishk Chadha — Design System

The brand and product design system behind **kanishkchadha.com** — the personal site of a senior martech, analytics, and marketing-automation practitioner. Every token, type style, and component here builds that presence: a calm, credible, systems-minded portfolio for someone trusted with a company's stack *and* its outcomes.

**Positioning in one line:** *Build smarter. Measure better. Automate with intention.*

## Sources

- `uploads/Design System.dc.html` — the original, self-authored brand spec (foundations, components, and patterns). This is the **ground truth**; every value in this system is copied from it, not invented.
- No external codebase, Figma file, or logo asset was provided. The brand mark is a **typographic monogram** (see Iconography), so it is reproduced in type rather than as an image file.

---

## Brand context

Kanishk Chadha is a martech / analytics / automation specialist (9+ years). The site is a portfolio + newsletter + contact surface — not a SaaS product. Its job is to convey **senior credibility without hype**: proof of outcomes, a clear technical stack, and a distinctive editorial voice.

Represented surfaces (one product):
- **kanishkchadha.com** — the marketing/portfolio website: hero, capability rows, stat band, featured work, notes (blog), a newsletter CTA, and a contact form.

There is one product, so there is one UI kit (`ui_kits/website/`).

---

## CONTENT FUNDAMENTALS

**Voice.** Direct, practical, confident. Short declaratives. Leads with the *outcome*, not the tool. Teaches rather than sells — the reader should leave able to *do* something. Senior peer, not a vendor.

**Person & address.** First person for authorship ("how I know it's right", "the stack I work in"), second person when addressing the reader in CTAs ("What are you building?"). Never corporate "we".

**Casing.** Sentence case for headlines and body ("Build the data layer", "The system behind the site."). ALL-CAPS reserved for small overline/eyebrow labels only, always with wide letter-spacing (`.14em`–`.22em`). Title Case avoided in prose.

**Punctuation & rhythm.** Em dashes and mid-sentence dashes to append a sharpening clause ("— and how I know it's right"). Periods on display headlines are used deliberately ("The system behind the site."). No exclamation marks. Directional links end with an arrow ("Explore the case study →", "Follow →").

**Numbers & proof.** Concrete, quantified, lightly rounded with a `+`: "9+ years", "$250K+", "3.6+ ROAS", "10+ locations". Metrics carry a plain-language caption underneath.

**Say:** "Outcomes, not project names." · "The eval that proves it's right." · "Build smarter, measure better, automate with intention."

**Avoid:** hype adjectives, buzzword stacks, vague "synergy" claims, exclamation marks, and emoji.

**Emoji:** never. The brand uses no emoji anywhere.

---

## VISUAL FOUNDATIONS

**Palette.** Deep Navy `#092634` (primary ink + dark surfaces), Oceanic Blue `#004E72` (secondary text, supporting fills), Signal Orange `#FF6E42` (the single accent), on clean White `#FFFFFF` / Off-White `#F9F9F9`. Rough usage ratio **60% white · 25% navy · 10% ocean · 5% orange**. Orange is an accent *only* — CTAs, links, eyebrows, emphasis, active nav — never a large background wash.

**Type.** Two-family pairing plus a logo face:
- **Playfair Display** (serif) for all headings and display — weights 500/600/700, tight tracking `-0.03em`. Gives editorial authority.
- **Manrope** (sans) for all body and UI — 400–800, tracking `-0.02em`. Clean and legible at length.
- **Inter** (800/700) for the KC monogram and wordmark only, very tight `-0.08em`/`-0.04em`.
Headlines are large, serif, tightly tracked; body is medium-weight (500) Manrope at 15px / line-height 1.6.

**Spacing.** 4px base grid: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64. Generous section padding (56–76px), 24px default card padding.

**Backgrounds.** No photography and no gradients-as-decoration. Backgrounds are flat fills — white, off-white, navy. The one texture in the system is a **subtle 135° diagonal hairline pattern** (`repeating-linear-gradient(135deg, rgba(255,255,255,.03) 0 2px, transparent 2px 22px)`) used on navy featured/media panels and, in a darker variant, as an image-placeholder fill on note cards. No hand-drawn illustrations, no repeating icon patterns.

**Corner radius.** 6px small accent tags · 8px buttons/inputs/stack pills · 12px cards & panels · 14px feature blocks & stat band · full (999px) for dots/avatars. Nothing sharp-cornered; nothing pill-shaped except dots.

**Cards.** The default surface is **white with a 1px hairline border** (`#E6E9EA`) and 12px radius — flat, no shadow at rest. Variants: **oceanic** (`#004E72` fill, white text — pull quotes / secondary emphasis) and **navy** (`#092634` fill — hero/stat/CTA moments). Elevation is used sparingly.

**Shadows.** Navy-tinted only, three steps: subtle `0 1px 3px rgba(9,38,52,.05)` (pills), soft `0 2px 10px rgba(9,38,52,.08)` (resting cards, nav, footer), raised `0 4px 18px rgba(9,38,52,.12)` (hover, feature blocks). No inner shadows except the 1px inset ring used to outline the white swatch.

**Borders.** 1px hairlines (`#E6E9EA`) everywhere; faint internal dividers `#f0f2f3`; inputs rest on `#cdd4d7`. A 2px navy rule underlines each foundation section header.

**Hover states.** Buttons darken (orange `#FF6E42`→`#f2603a`, navy `#092634`→`#0d3547`); on-navy ghost fills lift opacity (`.1`→`.16`); ghost buttons darken their border to navy; links underline; cards raise their shadow. No scale/transform on hover.

**Press / focus.** Focus shows an orange ring `0 0 0 3px rgba(255,110,66,.15)` with the border switching to orange. No shrink-on-press.

**Animation.** Restrained. `scroll-behavior:smooth` for in-page nav; simple property transitions on hover. No bounces, no entrance choreography, no parallax.

**Transparency & blur.** No backdrop blur. Transparency is used only for on-navy text ramps (white at 88/65/50%) and on-navy fills (white at 10/16/20%), plus the 12% orange tint behind "new"-style tags.

**Imagery vibe.** There is no real photography in the source. Where imagery would sit (note-card thumbnails, featured panels), the brand uses flat navy/neutral fills with the diagonal hairline texture — cool, restrained, monochrome-leaning. If real imagery is added later, keep it cool-toned and understated.

**Layout.** Max content width ~1080px, centered. Sticky dark sidebar in the style-guide view; sticky top nav on the site. Section headers pair a small orange index number with a serif title over a 2px navy rule.

---

## ICONOGRAPHY

The source uses **almost no icons**. The brand's iconographic vocabulary is deliberately minimal and typographic:

- **Directional arrows as glyphs.** Plain Unicode arrows in text — `→` on links and buttons ("Explore the case study →", "Follow →"), `↓` on download actions ("Download Résumé ↓"). These are set in the running font, not an icon font.
- **The KC monogram** is the primary mark (see below) — Inter 800, "K" in ink/white + "C" in Signal Orange.
- **The LinkedIn "in" tile** is rendered as a typographic tile: a rounded square in LinkedIn blue `#0a66c2` with a bold lowercase "in" in Inter — not the official logo SVG.
- **No icon font, no SVG icon set, no PNG icons, no emoji, no decorative unicode symbols** appear in the source.

**Guidance for extending:** keep iconography minimal. If UI genuinely needs line icons (e.g. a richer product surface), use **Lucide** (CDN) at a 1.5–2px stroke to match the clean, low-ornament feel — and flag it as an addition, since the source defines none. Prefer typographic arrows and labels wherever they suffice.

**Logo / brand mark.** No logo image file was provided. The mark is a **typographic monogram**: `KC` in Inter 800 at `-0.08em`, "K" in navy (or white on dark) and "C" in Signal Orange, optionally followed by the wordmark "Kanishk Chadha" in Inter 700 at `-0.04em`. Reproduce it in type; do not attempt a bitmap/vector logo. Clear space equals the cap-height on all sides. Don't recolour the letters, box it, stretch it, or set it on busy imagery.

---

## Foundation for `styles.css`

`styles.css` (root) is the single entry point consumers link. It `@import`s, in order:
`tokens/fonts.css` → `tokens/colors.css` → `tokens/typography.css` → `tokens/spacing.css` → `tokens/elevation.css`.

All design tokens are CSS custom properties prefixed `--kc-*`, with semantic aliases (`--text-body`, `--surface-card`, `--font-heading`, …). See the token files for the full set.

**Font note (needs your input):** fonts load via the Google Fonts API `@import` in `tokens/fonts.css`. These are the *genuine* brand fonts (Playfair Display, Manrope, Inter), so this is not a substitution — but no self-hosted `.woff2` binaries were provided, so the compiler does not index `@font-face` rules and offline/production use would need the files. **If you want self-hosted fonts, send the `.woff2` files and I'll swap the `@import` for local `@font-face` rules.**

---

## Index / manifest

**Root**
- `styles.css` — global CSS entry point (import list only)
- `readme.md` — this guide
- `SKILL.md` — Agent-Skill wrapper for portable use
- `thumbnail.html` — homepage tile
- `uploads/Design System.dc.html` — original source spec (reference)

**tokens/** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`

**Foundation specimen cards** (Design System tab) — under `guidelines/`, grouped Colors / Type / Spacing / Brand.

**components/** — reusable primitives (`<Name>.jsx` + `.d.ts` + `.prompt.md`, one card HTML per folder):
- `brand/` — **Logo**
- `core/` — **Button**, **Tag**, **StackPill**, **Eyebrow**, **Card**
- `forms/` — **Input**, **Textarea**, **NewsletterSignup**
- `content/` — **StatBlock**, **CapabilityRow**, **FeaturedCard**, **NoteCard**
- `navigation/` — **NavBar**, **Footer**

**ui_kits/website/** — high-fidelity click-through recreation of kanishkchadha.com (Home, Work / case study, Notes, Contact).

### Intentional additions
- **Eyebrow** — the overline/label style appears throughout the source but isn't named as a component; wrapped as a primitive for reuse.
- **NewsletterSignup** — extracted from the repeated newsletter/contact input+button pattern.
Both are compositions of existing source styles, not new visual language.
