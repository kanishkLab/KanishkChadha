# Branding Reference — Kanishk Chadha

The implemented state of the brand system, and the decisions behind it.
Read this before changing any colour, typeface, or surface on the site.

Last updated: 2026-07-28

---

## ⚠️ Read first: there are two conflicting brand documents

The repo contains two brand specs that **directly contradict each other**.

| | `Kanishkchadha.com/Branding Guidlines /` | `design_handoff_brand_guidelines/` |
|---|---|---|
| Typeface | **Inter only** — "no second family, no serif" | **Playfair Display + Manrope** (+ Inter for the logo) |
| Manrope | listed under "find & replace → **remove**" | the body/UI font |
| Page ground | off-white `#f9f9f9` | **white `#ffffff`** |
| Buttons | radius 10px | radius 8px |
| Body grey | `#3a4a52` | `#4a5a60` |

**Resolution (owner decision, 2026-07-28):**
`design_handoff_brand_guidelines/` (Playfair + Manrope) is current, and it was
applied to the **homepage only**. Internal pages stay on the all-Inter system.

This split is **intentional, not a bug**. Do not "fix" the homepage to match the
internal pages or vice versa without asking.

> The Typography Implementation Brief in `Kanishkchadha.com/Branding Guidlines /` is now
> **stale for the homepage** — its acceptance checklist ("only Inter loads",
> "no serif") is deliberately false there. It still governs internal pages.

---

## Two type systems, by scope

### Homepage (`src/pages/index.astro`) — Playfair + Manrope

Scoped entirely to the page's `<style>` block. Fonts load from a `<link>` in
this page's `head` slot, so **internal pages never download them**.

| Role | Family | Size | Weight | Tracking |
|---|---|---|---|---|
| Hero H1 | Playfair Display | 56px / 1.12 | 600 | −0.03em |
| Section H2 | Playfair Display | 34px / 1.15 | 600 | −0.03em |
| Card / panel titles | Playfair Display | 19px | 600 | −0.02em |
| Body | Manrope | 16–18px / 1.6 | 500 | normal |
| Overline | Manrope | 13px uppercase | 600 | +0.16em |
| Buttons | Manrope | 15px | 700 | normal |
| Meta / caption | Manrope | 13.5px | 500 | normal |

### Internal pages (`src/styles/typography.css`) — Inter only

| Role | Size / line-height | Weight | Tracking |
|---|---|---|---|
| H1 | 3.5rem / 1.12 | 700 | −0.04em |
| H2 | 2.25rem / 1.15 | 700 | −0.035em |
| H3 | 1.5rem / 1.2 | 600 | −0.03em |
| Body / prose | 1.125rem / 1.5 | 400 | −0.01em |
| UI / button | 0.9375rem | 600 | −0.03em |

Tokens: `--tracking-display: -0.04em`, `--tracking-heading: -0.03em`,
`--tracking-body: -0.01em`. Body sets `font-feature-settings: 'cv11','ss01'`.

**Never use weight 900.** Inter has no 900 — it renders as faux-bold and is an
explicit "Don't" in the brief. Display weight caps at 800 (`--font-weight-display`).

---

## Colour

Both systems share the Nautical core; the greys differ slightly.

| Token | Homepage | Internal | Role |
|---|---|---|---|
| Deep Navy | `#092634` | `#092634` | Primary ink, dark surfaces |
| Oceanic Blue | `#004e72` | `#004e72` | Secondary text, links, callouts |
| Signal Orange | `#ff6e42` | `#ff6e42` | **Accent only** — CTAs, links, highlights |
| Orange hover | `#ed5a2e` | `#f0592c` | darken ~8% |
| Off-white | `#f9f9f9` | `#f9f9f9` | Tinted panels *(homepage)* / page ground *(internal)* |
| Body grey | `#4a5a60` | `#3a4a52` | Body copy |
| Muted grey | `#6a7a80` | `#6b7c85` | Captions, sub-labels |
| Hairline | `#e6e9ea` | `#e6e6e2` | Card/panel borders |

**Usage ratio: White 60 / Navy 25 / Blue 10 / Orange 5.**
Orange is never a background wash — only CTA buttons and the monogram "C".

Measured on the homepage as built: white 54.5%, navy 13.2%, off-white 12.9%.

### The panel-vs-band rule (learned the hard way)

- **Full-bleed bands and the page ground → white.** A band spans the full
  viewport, so tinting it doesn't read as a surface *on* the page — it reads as
  the page itself being grey.
- **Discrete panels and cards → off-white `#f9f9f9` + 1px `#e6e9ea` hairline.**
  Capabilities matrix, LinkedIn card, blog cards, tool chips.

Tinting the hero and tech-stack bands dropped white from 60% to 42% and made the
whole page read grey. Don't repeat it.

`body` is off-white globally (internal palette), so the homepage overrides it:
`body:has(.home) { background-color: #ffffff }`.

---

## Logo & monogram

An **Inter 800 lettermark — explicitly NOT a badge.** The brand guide's Don't
list rules out a box or outline around the mark, which overrides the orange
rounded-tile shown in the older homepage handoff.

- Letters set at **`letter-spacing: -0.08em`** so K and C nest; `display: inline-flex`.
- On navy: **K white, C `#ff6e42`**. On light: **K `#092634`, C `#ff6e42`**.
- Wordmark "Kanishk Chadha": **Inter 700, −0.04em**, 16px in the site header.
- Clear space = cap-height of the mark. Min size 20px digital / 7mm print.
- Below 360px the wordmark hides; the mark stands alone.

**Don't:** swap the letter colours, add a box, stretch, or place on busy photography.

---

## Type sizing: why it doesn't match the guide's px values

The brand guide is a **print spec** — its page padding is in *inches* and body
copy is 14px for an 8.5in PDF page. Rendered at 1440px those values came out
undersized: 16 of 25 homepage text styles measured under 16px, labels at 10px.

Sizes were scaled up against web standards, keeping the guide's hierarchy and
ratios intact:

- **16px minimum for body copy** — browser default, Material 3 `body-large`,
  Tailwind/Bootstrap base
- **WCAG 2.2 SC 1.4.12** — body line-height ≥ 1.5×
- **12px floor** for labels and metadata (Material 3 `body-small`)

If you re-derive sizes straight from the guide, you will reintroduce this.

---

## No dark mode

Removed deliberately. The brand book specifies one light palette and no dark
variant.

The previous `[data-theme="dark"]` block referenced tokens that no longer
existed (`--color-black`, `--color-cream`, `--color-orange`). Invalid `var()`
references compute to `unset`, so every surface fell back to transparent — any
visitor whose OS was set to dark got black-on-black, unreadable cards. The
auto-switch in `BaseLayout.astro` was also removed.

Verified: both `prefers-color-scheme: light` and `dark` render `#f9f9f9`/`#092634`.

---

## Performance & navigation

- **Fonts load via `<link>` + preconnect in `<head>`**, never a CSS `@import` —
  an `@import` inside CSS forces a serialised second round-trip before paint.
- **Internal pages load exactly one font file** (Inter latin). Code blocks use
  the system mono stack; JetBrains Mono was dropped.
- **Prefetch** is on (`prefetchAll`, `viewport` strategy in `astro.config.mjs`).
  Measured click→painted: 34–51ms.
- **View transitions** are custom: 90ms fade-out + 220ms fade-up-8px. The sticky
  header gets its own `view-transition-name` so it stays anchored, and
  `prefers-reduced-motion` is honoured.
- The header is `transition:persist` while `astro:page-load` fires every
  navigation, so `Navigation.astro` guards listener binding with a
  `data-drawerBound` flag. Removing that guard reintroduces a listener leak.

---

## Known gaps

Grouped by whether they block the **v1 launch** (homepage + case studies +
contact — see the Release scope section in the root `CLAUDE.md`).

### Blocks v1

- **Case study content is theme demo data.** All 8 files in
  `src/content/projects/` are the Astro theme's software-engineering examples.
  They drive both `/projects` *and* the homepage "Featured Work" section.
- `/resume.pdf` **404s** — the hero "Download Résumé" button points at it.
  Add the file to `public/`, or set `SITE_RESUME_URL`. Prefetch surfaces this
  on page load, not just on click.
- **Portrait photo** — set `SITE_AUTHOR_PORTRAIT`; a branded placeholder shows
  until then.
- **Sample-data flags removed.** Credibility stats and timeline now use real data.
- **Newsletter form** is visual only — wire to Beehiiv/ESP.
- **Case cover images** — add `coverImage: "/path.jpg"` to project frontmatter
  (optional field on the `projects` and `blog` schemas).

### Not blocking v1

- The homepage/internal type split is visible when crossing from the homepage
  to a case study. Case studies use the internal Inter system; only the
  homepage is Playfair + Manrope. Revisit if it reads as inconsistent once the
  real case studies are in.
- `/blog`, `/journey`, `/stuff-i-like` are deferred to a later release but are
  still linked in the nav and present in the sitemap.
- Blog post content is also theme demo data — irrelevant until `/blog` ships.

---

## Gotcha: stale CSS in dev

Adding or removing a `<style>` block in an `.astro` page reindexes the compiled
stylesheets, and Vite may keep serving the old one — surviving both a hard
reload and a cache-buster. If a style change appears to have no effect, check
`dist/_astro/*.css` after a build; if that's correct, the dev server is stale:

```bash
rm -rf node_modules/.vite && npm run dev
```
