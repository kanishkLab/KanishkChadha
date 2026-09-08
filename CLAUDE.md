# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This repository contains:

1. **`Kanishkchadha.com/`** — Kanishk Chadha's personal portfolio website

---

## Portfolio Site (`Kanishkchadha.com/`)

Built on the [Case Astro theme](https://github.com/erlandv/case) — a case-study-first portfolio for professionals.

**Owner:** Kanishk Chadha — Marketer & Newsletter Founder
**Stack:** Astro 5, TypeScript, MDX, Markdown
**Target deploy:** Vercel

### Release scope

**v1 launches with three surfaces only:**

| Surface | Route | Status |
|---|---|---|
| Homepage | `/` | Built (Playfair + Manrope, see BRANDING.md) |
| Case studies | `/projects`, `/projects/[slug]` | Built, real content |
| The Lab | `/blog`, `/blog/[...slug]` | Built — **content is still theme demo data** |
| Contact | inline `#contact` on every page | Built — `/contact` redirects to `/#contact` |

**Resolved 2026-09-07.** `/blog` was promoted into v1 — it's now "The Lab",
rebuilt on the `/projects` design and linked in the nav. Its *content* is still
theme demo data.

`/journey` and `/stuff-i-like` are **disabled**: their files are
`src/pages/_journey.astro` and `src/pages/_stuff-i-like.astro`. Astro ignores
anything under `src/pages/` starting with `_`, so no route is generated and they
drop out of the sitemap. Both files are otherwise intact, with a header comment
explaining how to bring them back. Neither was in the nav, and nothing links to
them. Their content collections (`journey`, `resources`) stay registered.

Re-enable by renaming the file back — but redesign on the `.kc-page` shell
first (see Layout below), since both are still on the old all-Inter theme
design, and add them to `siteConfig.nav`.

### Layout

Every designed page runs to a **1120px content edge** — a 1200px container
with a 40px gutter, dropping to 24px at 760px wide. That applies to the nav
(`Navigation.astro`), the homepage (`.wrap` + `.sec`), `/projects` and `/blog`.
Change one and the header visibly shifts width between pages.

`/projects` and `/blog` share their palette and type stack via the `.kc-page`
class in `src/styles/global.css`; card treatment across the whole site comes
from the `--card-*` tokens in the same file.

#### v1 launch checklist

Verified 2026-09-07 — several items below were already done and had been left
ticked open, so check the code before trusting any line here.

- [x] ~~Replace the case studies.~~ Done — all four files in
      `src/content/projects/` are real martech/analytics work.
- [x] ~~Portrait photo.~~ Done — `SITE_AUTHOR_PORTRAIT` is set and
      `/Kanishk.jpeg` renders on the homepage.
- [x] ~~Case cover images.~~ Done — all four projects set a `.png` `coverImage`.
- [x] ~~Turn off sample-data flags.~~ Moot — `showSampleFlags` no longer exists.
- [x] ~~Decide the nav/sitemap question above.~~ Resolved — see above.
- [ ] **Replace the blog posts.** All 22 files in `src/content/blog/` are still
      demo software-engineering content. `/blog` is now a prominent, designed
      page, so this is far more visible than it was as a plain list. **This is
      the last real content blocker.**
- [ ] **Add `public/resume.pdf`** (or set `SITE_RESUME_URL`) — the hero
      "Download Résumé" button currently 404s.
- [ ] **Wire the newsletter form** to Beehiiv/ESP — currently visual only.
- [ ] **Set `FORMSPREE_ENDPOINT`** in `.env` — the contact form renders on every
      page but does not submit while it is empty.
- [ ] **Finish the Obsidian setup** (see Editing content below) — open the vault,
      install Obsidian Git, point the attachment folder at `Kanishkchadha.com/public/`.

### Running locally

```bash
cd Kanishkchadha.com
npm install
npm run dev        # → http://localhost:4321
```

### Taking screenshots

Make sure the dev server is running first, then:

```bash
cd Kanishkchadha.com
npm run screenshot                                        # local (desktop + mobile)
SCREENSHOT_URL=https://your-site.vercel.app npm run screenshot  # production
```

Screenshots are saved to `Kanishkchadha.com/screenshots/auto/`.

### Branding

**Read [`Kanishkchadha.com/BRANDING.md`](Kanishkchadha.com/BRANDING.md) before changing any colour, typeface, or surface.**

Two brand documents in this repo contradict each other. `design_handoff_brand_guidelines/`
(Playfair Display + Manrope) is current and applies to the **homepage only**;
internal pages stay on the all-Inter system from `Kanishkchadha.com/Branding Guidlines /`.
That split is intentional. BRANDING.md records the resolved tokens, the type
scales, the logo construction rules, and the known gaps.

### Content structure

All content is Markdown (`.md`) files in `Kanishkchadha.com/src/content/`. Only these five are
registered as collections in `Kanishkchadha.com/src/content.config.ts` — a folder on disk
that isn't listed here is **not** queryable and will render empty. Four such
folders (`decisions/`, `writing/`, `speaking/`, `uses/`) were removed on
2026-08-16; they shadowed live collections with identical filenames, so edits
landed in files that never built.

| Collection | Purpose |
|---|---|
| `projects/` | Case studies (problem → solution → outcomes) |
| `blog/` | Posts, split into `experiments/`, `tool-verdicts/`, `decisions/`, `talks/` via a `type` field |
| `journey/` | Career milestones |
| `resources/` | Books, podcasts, tools ("Stuff I Like") |
| `testimonials/` | Peer and client recommendations |

### Configuration

Site identity and social links are set via environment variables in `.env` (gitignored).
For Vercel, set these in **Project → Settings → Environment Variables**.

Key variables: `SITE_URL`, `SITE_TITLE`, `SITE_AUTHOR_NAME`, `SITE_AUTHOR_TITLE`, `SITE_AUTHOR_BIO`, `SITE_AUTHOR_EMAIL`, `SITE_AUTHOR_LOCATION`, `SOCIAL_LINKEDIN`, `SOCIAL_TWITTER`.

See `.env.example` for the full list.

### Adding a blog post

Create a new `.md` file under `Kanishkchadha.com/src/content/blog/` — in
`experiments/`, `tool-verdicts/`, `decisions/` or `talks/` — following the
existing frontmatter schema (`title`, `description`, `publishDate`, `type`,
`tags`, `draft`, optional `coverImage`). The `type` must be one of
`experiment | tool-verdict | decision | talk`. Posts are served at
`/blog/<folder>/<slug>`.

### Editing content (Obsidian)

Content is authored in **Obsidian over the git repo — there is no headless CMS.**
Open `Kanishkchadha.com/src/content/` as the vault (not the repo root, or Obsidian indexes
`node_modules/` and `dist/`), and let the Obsidian Git plugin commit; Vercel
deploys from there.

Because of this, content files are **`.md`, not `.mdx`** — Obsidian doesn't
recognise the `.mdx` extension. The loaders accept `'**/*.{md,mdx}'`, so switch
an individual file to `.mdx` only if it genuinely needs to import a component.

Two Obsidian caveats:

- **Wikilinks don't render.** `[[post]]` and `![[image.png]]` come out as literal
  text in Astro. Use `[text](/blog/experiments/slug)` and `![alt](/path.jpg)`.
- **Case-study frontmatter is hand-written.** Obsidian's Properties panel handles
  the flat blog schema, but the `projects` schema nests
  `keyDecisions[].alternatives[]` and `impact.metrics[]`, which it can't edit as
  fields — use source mode there.

### Deployment

Push to GitHub → Vercel auto-deploys on every commit to `main`.
Build command: `npm run build` | Output: `dist/`
