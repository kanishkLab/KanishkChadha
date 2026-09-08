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
`design_handoff_brand_guidelines/` (Playfair + Manrope) is current.

**Updated 2026-09-07 (owner decision): the split is gone — Playfair + Manrope
is now the sitewide type system.** It was applied to the homepage, `/projects`
and `/blog` only, which meant the *index* pages carried the brand faces while
the *detail* pages (case studies, blog posts) fell back to all-Inter. The type
changed under the reader at exactly the moment they clicked into the work.

Playfair + Manrope now load once in `src/layouts/BaseLayout.astro` and the
`--font-display` / `--font-body` tokens are defined at `:root` in
`global.css`, so every page inherits them. `typography.css` already points
`h1`–`h6` at `--font-display`, so the detail pages needed no per-page rules.

**Inter is still reserved for the KC lockup and the nav** (`--font-family`) —
that much of the original brief stands.

> The Typography Implementation Brief in `Kanishkchadha.com/Branding Guidlines /` is now
> **stale everywhere** — its acceptance checklist ("only Inter loads", "no
> serif") is deliberately false across the whole site, not just the homepage.

---

## Two type systems, by scope

### Sitewide — Playfair + Manrope

Loaded once from `BaseLayout.astro` and defined as `:root` tokens in
`global.css`. The homepage additionally re-declares the same families inside
its own `.home` scope, which is harmless duplication.

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
- **One font request covers the whole site** (Inter + Playfair Display +
  Manrope in a single Google Fonts URL from `BaseLayout.astro`). Code blocks
  use the system mono stack; JetBrains Mono was dropped.
- **Images in `src/assets/` go through Astro's pipeline** (`<Picture>`, AVIF +
  WebP + JPEG fallback at the widths the layout actually uses). The portrait
  was a 2.1MB / 1856x2304 JPEG served raw from `public/` into a 452px box and
  was the hero's LCP element; it now ships as an 8KB AVIF at 1x and a 22KB
  AVIF at 2x. Homepage total transfer went 2.7MB -> ~250KB. Put new photos in
  `src/assets/`, not `public/`, unless something needs a stable public URL.
- **Prefetch** is on (`prefetchAll`, `viewport` strategy in `astro.config.mjs`).
  Measured click→painted: 34–51ms.
- **No browser tab throbber, by design.** `<ClientRouter />` fetches and swaps
  the DOM instead of doing a document navigation, and prefetch means the HTML
  is usually already cached (measured: 0 network requests on a nav, and JS
  globals survive it). The browser has no document load to report, so
  `NavProgress.astro` supplies that feedback instead: a 2px orange bar that
  only appears once a navigation has been waiting 180ms. On a warm cache it
  never shows — that is correct, not broken. It creeps toward 90% by closing a
  fraction of the remaining gap each tick, then jumps to 100%. Its `done()` is
  wired to two events and must stay idempotent; without the `finishing` guard
  the second call cancels the first's hide timer and the bar sticks at 100%.
- **View transitions** are custom and *sequenced*, not simultaneous: the old
  page eases out over 160ms, holds 20ms, then the new page lifts in 16px over
  360ms — 540ms total (~580ms measured end to end). Tune the three
  `--kc-nav-*` variables at the top of the transition block in
  `BaseLayout.astro`; past ~600ms clicking through pages starts to feel like
  waiting. The previous 90ms-out / 220ms-in pair started both at once, so two
  half-transparent pages overlapped and it read as a flicker. `mix-blend-mode`
  is forced to `normal` because Chrome's default `plus-lighter` brightens that
  overlap into a flash. The sticky header gets its own `view-transition-name`
  so it stays anchored, and `prefers-reduced-motion` is honoured.
- The header is `transition:persist` while `astro:page-load` fires every
  navigation, so `Navigation.astro` guards listener binding with a
  `data-drawerBound` flag. Removing that guard reintroduces a listener leak.

---

## Known gaps

Grouped by whether they block the **v1 launch** (homepage + case studies +
contact — see the Release scope section in the root `CLAUDE.md`).

### Blocks v1

- **Blog content is still theme demo data** — 22 software-engineering posts
  (Kubernetes, PostgreSQL, microservices) under `src/content/blog/`. They make
  up 68 of the 74 sitemap URLs, including 47 generated tag pages. `/blog` is
  nav-linked as "The Lab", so this is what Google indexes for the domain.
  The homepage Lab section is hidden until at least one real post exists (see
  `DEMO_SLUG_PREFIXES` in `index.astro`).
- **The newsletter signup is on Formspree as a stopgap, not a real ESP.**
  Addresses land in the same inbox as contact messages (tagged "Automated
  Marketer — new subscriber") and share the free tier's 50 submissions/month.
  There is no double opt-in, list management, or sending. Fine for collecting
  interest; replace it before the newsletter actually ships.

  beehiiv's v3 embed was tried and reverted on 2026-09-07: it renders inside a
  cross-origin iframe, so the form came with beehiiv's own white card, black
  button and heading, and no CSS here could restyle it. Any hosted embed will
  have the same constraint — prefer an ESP with a plain POST endpoint or an
  API if keeping this panel's design matters.

### Resolved 2026-09-07

- ~~Case study content is theme demo data~~ — all four files in
  `src/content/projects/` are real martech work.
- ~~`/resume.pdf` 404s~~ — the button is now gated on the file existing.
- ~~Portrait photo~~ — set, and now optimised through `<Picture>`.
- ~~`og-image.png` was the Case theme's own advertisement~~ ("Case-Study-First
  Portfolio Theme for Astro"), shown on every share of every page. Regenerate
  with `node scripts/og-image.mjs` after changing the name or brand colours.
- ~~The homepage/internal type split~~ — Playfair + Manrope is now sitewide.
- ~~Newsletter form posted to `#`~~ and ~~the contact form POSTed to a
  `mailto:` URL~~ — both silently discarded input; both now degrade honestly.
- ~~`testimonials` collection~~ — was registered with 2 entries of theme demo
  data about the theme's author, rendered nowhere. Deleted.

### Not blocking v1

- `/journey` and `/stuff-i-like` stay disabled (`src/pages/_*.astro`).
- All four case studies still end with the body line "Full case study in
  progress." The frontmatter-driven sections carry the substance, but that
  line is visible to a reader.

---

## Gotcha: stale CSS in dev

Adding or removing a `<style>` block in an `.astro` page reindexes the compiled
stylesheets, and Vite may keep serving the old one — surviving both a hard
reload and a cache-buster. If a style change appears to have no effect, check
`dist/_astro/*.css` after a build; if that's correct, the dev server is stale:

```bash
rm -rf node_modules/.vite && npm run dev
```
