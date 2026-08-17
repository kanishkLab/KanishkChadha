# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This repository contains:

1. **`case/`** — Kanishk Chadha's personal portfolio website

---

## Portfolio Site (`case/`)

Built on the [Case Astro theme](https://github.com/erlandv/case) — a case-study-first portfolio for professionals.

**Owner:** Kanishk Chadha — Marketer & Newsletter Founder
**Stack:** Astro 5, TypeScript, MDX, Markdown
**Target deploy:** Vercel

### Release scope

**v1 launches with three surfaces only:**

| Surface | Route | Status |
|---|---|---|
| Homepage | `/` | Built (Playfair + Manrope, see BRANDING.md) |
| Case studies | `/projects`, `/projects/[slug]` | Built — **content is still theme demo data** |
| Contact | `/contact` | Built |

**Deferred to a later release** — these pages exist and build, but are out of
scope until they're planned: `/blog`, `/journey`, `/stuff-i-like`.

They are still linked in the main nav (`siteConfig.nav` in `src/config.ts`) and
still appear in the sitemap. **Decide before launching v1** whether to trim them
from the nav and exclude them from the sitemap, or ship them as-is.

#### v1 launch checklist

- [ ] **Replace the case studies.** All 8 files in `src/content/projects/` are
      the Astro theme's demo content — software-engineering write-ups ("Senior
      Backend Engineer", Node.js/PostgreSQL). Kanishk's are marketing/martech.
      The homepage "Featured Work" section reads from this collection, so this
      blocks both launch surfaces.
- [ ] **Add `public/resume.pdf`** (or set `SITE_RESUME_URL`) — the hero
      "Download Résumé" button currently 404s.
- [ ] **Portrait photo** — set `SITE_AUTHOR_PORTRAIT`; a placeholder shows now.
- [ ] **Case cover images** — add `coverImage:` to project frontmatter.
- [ ] **Turn off sample-data flags** — `showSampleFlags = false` in
      `src/pages/index.astro`, once the credibility metrics and timeline are real.
- [ ] **Wire the newsletter form** to Beehiiv/ESP — currently visual only.
- [ ] Decide the nav/sitemap question above.
- [ ] **Finish the Obsidian setup** (see Editing content below) — open the vault,
      install Obsidian Git, point the attachment folder at `case/public/`.

### Running locally

```bash
cd case
npm install
npm run dev        # → http://localhost:4321
```

### Taking screenshots

Make sure the dev server is running first, then:

```bash
cd case
npm run screenshot                                        # local (desktop + mobile)
SCREENSHOT_URL=https://your-site.vercel.app npm run screenshot  # production
```

Screenshots are saved to `case/screenshots/auto/`.

### Branding

**Read [`case/BRANDING.md`](case/BRANDING.md) before changing any colour, typeface, or surface.**

Two brand documents in this repo contradict each other. `design_handoff_brand_guidelines/`
(Playfair Display + Manrope) is current and applies to the **homepage only**;
internal pages stay on the all-Inter system from `case/Branding Guidlines /`.
That split is intentional. BRANDING.md records the resolved tokens, the type
scales, the logo construction rules, and the known gaps.

### Content structure

All content is Markdown (`.md`) files in `case/src/content/`. Only these five are
registered as collections in `case/src/content.config.ts` — a folder on disk
that isn't listed here is **not** queryable and will render empty. Four such
folders (`decisions/`, `writing/`, `speaking/`, `uses/`) were removed on
2026-08-16; they shadowed live collections with identical filenames, so edits
landed in files that never built.

| Collection | Purpose |
|---|---|
| `projects/` | Case studies (problem → solution → outcomes) |
| `blog/` | Posts, split into `articles/`, `decisions/`, `talks/` via a `type` field |
| `journey/` | Career milestones |
| `resources/` | Books, podcasts, tools ("Stuff I Like") |
| `testimonials/` | Peer and client recommendations |

### Configuration

Site identity and social links are set via environment variables in `.env` (gitignored).
For Vercel, set these in **Project → Settings → Environment Variables**.

Key variables: `SITE_URL`, `SITE_TITLE`, `SITE_AUTHOR_NAME`, `SITE_AUTHOR_TITLE`, `SITE_AUTHOR_BIO`, `SITE_AUTHOR_EMAIL`, `SITE_AUTHOR_LOCATION`, `SOCIAL_LINKEDIN`, `SOCIAL_TWITTER`.

See `.env.example` for the full list.

### Adding a blog post

Create a new `.md` file in `case/src/content/blog/articles/` following the
existing frontmatter schema (`title`, `description`, `publishDate`, `type`,
`tags`, `draft`, optional `coverImage`). Posts are served at
`/blog/articles/<slug>`.

### Editing content (Obsidian)

Content is authored in **Obsidian over the git repo — there is no headless CMS.**
Open `case/src/content/` as the vault (not the repo root, or Obsidian indexes
`node_modules/` and `dist/`), and let the Obsidian Git plugin commit; Vercel
deploys from there.

Because of this, content files are **`.md`, not `.mdx`** — Obsidian doesn't
recognise the `.mdx` extension. The loaders accept `'**/*.{md,mdx}'`, so switch
an individual file to `.mdx` only if it genuinely needs to import a component.

Two Obsidian caveats:

- **Wikilinks don't render.** `[[post]]` and `![[image.png]]` come out as literal
  text in Astro. Use `[text](/blog/articles/slug)` and `![alt](/path.jpg)`.
- **Case-study frontmatter is hand-written.** Obsidian's Properties panel handles
  the flat blog schema, but the `projects` schema nests
  `keyDecisions[].alternatives[]` and `impact.metrics[]`, which it can't edit as
  fields — use source mode there.

### Deployment

Push to GitHub → Vercel auto-deploys on every commit to `main`.
Build command: `npm run build` | Output: `dist/`
