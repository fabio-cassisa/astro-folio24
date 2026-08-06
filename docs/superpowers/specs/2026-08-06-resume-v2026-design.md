# Resume v2026 — Design Spec

**Date:** 2026-08-06
**Status:** Approved direction (aesthetic, content approach, build method, print-IxD hooks all confirmed by Fabio)
**Scope:** New `/resume` route in this repo + print-exported PDF + `npx dagas` npm card. Does NOT touch existing pages, Lab live-embeds, or Photo Dump (separate future work).

## Concept

"Same person, print edition." The resume is a page of this site, printed. A4, one page, off-white paper, near-black ink. The terminal identity is carried by typography, layout language, and surgical accent color — never by dark backgrounds (print + ATS reality).

Research basis (2025/26 maker-resume survey): mono for structure not body; light PDF even for dark-site brands; modern ATS parses styled two-column PDFs fine when text is real and selectable; dual-format (designed + plain) is the standard pattern; HTML/CSS → headless-Chromium print is the dominant maker pipeline.

## Layout

- A4 portrait, single page, asymmetric two-column grid:
  - **Main column (~66%)**: experience, projects.
  - **Rail (~34%)**: stack, education, languages, portrait-QR.
- **One dark element only**: a thin terminal titlebar strip across the top — traffic lights + `fabio@cassisa — resume` — echoing the site's `.win` windows.
- Footer: `$ npx dagas` line + plain URL + generation date (`compiled 2026-08-06`).

## Typography

- **JetBrains Mono** (site's face): header block, section headers, dates, tags, key-value labels, footer.
- **Humanist sans** (Inter or similar): bullet/body text. Full-mono body reads worse on paper — hybrid wins.
- Sizes tuned for print first (pt-based in the print stylesheet), screen inherits.

## Color

- Paper: off-white. Ink: near-black.
- Site's default accent duo — **green + teal** — used surgically only: section prompts, links, horizontal rules, titlebar accents. Everything else achromatic.

## Header

Neofetch-style key-value block instead of a traditional header:

```
fabio@cassisa
─────────────
role      designer · maker · coder
base      malmö / copenhagen
web       dagas-portfolio.vercel.app
mail      <filled at content review>
```

All real selectable text (parseable). Contact details (email, optional phone) are inserted by Fabio at content review — not hardcoded by Carlos.

## Sections

Headers styled as prompts (`$ cat experience.log`, `$ ls projects/`, `$ echo $stack`) but semantically standard — the underlying/accessible text remains "Experience", "Projects", "Skills" so ATS parsers and screen readers read cleanly (visual prompt styling via CSS `::before`/decoration, not by replacing the words).

Content order (reverse-chron, one-page discipline — trim hard):

1. **Experience** — Adnami (Creative Developer; rich-media formats, GSAP animation systems, delivery tooling/automation) as lead role; earlier history (4foodies, DesignDisciplin, ArtValue, IKEA, Pangramma) compressed to one–two lines each or a dense ledger.
2. **Projects (maker block)** — Carlos AI-agent system, this portfolio, selected creative/personal work.
3. **Rail** — stack as grouped code-literal tokens (`gsap · typescript · figma · blender`), never bars; education; languages (en/it/sv/da/es); portrait-QR.

Content workflow: Carlos drafts everything from known context; Fabio edits titles, dates, emphasis.

## Print-IxD hooks (both approved)

1. **`npx dagas` — the runnable resume.** Printed `$ npx dagas` line in the footer. A tiny public npm package (`dagas`) renders an interactive terminal card/mini-resume in the caller's shell (name, role, links, a couple of commands). Lives in this repo as an `npx-card/` folder (own package.json, published independently). The printed document literally executes. Planning must verify the `dagas` name is free on npm; fallback name: `fabiocassisa`.
2. **Portrait-QR fusion.** The rail portrait is a halftone/artistic QR built from `~/WorkFiles/Resume/myPic.png` + ASCII treatment (site's Pillow luminance→char technique), exploiting QR error-correction level H (~30% tolerance). Scans to the live site. One artifact = photo + portal.

Both hooks degrade gracefully: plain-text URL sits next to them for non-technical readers.

## Pipeline / Architecture

- `src/pages/resume.astro` — the page, sharing the site's Layout tokens/fonts where sensible (but `wide`-independent; it's its own print-first layout).
- Resume **content as data** (`src/data/resume.ts`) so the styled page and the plain fallback render from one source.
- **Print stylesheet** (`@media print` + `@page` size A4, margins) tuned so browser/Chromium print yields the final PDF.
- **Export script** (`scripts/export-resume.mjs` or npm script): headless Chromium print → `public/resume.pdf` (and versioned copy). Re-exportable in seconds after any content change.
- **Plain fallback**: `resume-plain` (route or generated .txt/.pdf) — single column, zero styling, same data — for legacy ATS portals (Taleo-class). Two-version strategy.
- PDF must pass the text-selectability check (no rasterized text) and have logical reading order.

## Verification criteria (done = )

1. `/resume` renders correctly on screen (desktop + mobile) without breaking existing pages.
2. Exported PDF: one A4 page, selectable text throughout, correct fonts embedded, prints legibly in grayscale.
3. Copy-paste of the full PDF text into a plain editor yields clean, ordered, complete content (ATS proxy test).
4. Portrait-QR scans successfully from a laser-printed page (test at final print size).
5. `npx dagas` runs on a clean machine (Node ≥18) and renders the card.
6. Plain fallback exists and matches the styled content 1:1.

## Out of scope

- Visibilia blog revival (own phase later).
- Lab live-embeds, Photo Dump canvas (existing roadmap items, untouched).
- Any redesign of existing site pages.
