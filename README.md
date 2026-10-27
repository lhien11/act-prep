# ACT Prep Course

A complete, self-paced prep course for the **Enhanced ACT** (the format in use since 2025), built as a
React + TypeScript single-page app. Made for a high-school student (hi, Andy) studying on their own.

**Live:** https://act.hienle.info (GitHub Pages, auto-deployed from `main`; also at https://lhien11.github.io/act-prep/).

## What's inside

| Area | What it does |
| --- | --- |
| **Lessons** | 30 lessons across English, Math, Reading and Science. Each teaches the rules the test actually uses, with worked examples and an untimed "check your understanding" quiz with instant explanations. |
| **Strategy guides** | A per-section overview: format, pacing, highest-value strategies, common traps, test-day checklist, and the formula sheet for Math. |
| **Practice** | Build any set: section, topics, number of questions, timed (real ACT pacing) or untimed. Reading, Science and English passages stay together like the real test. |
| **Diagnostic** | A 40-question mixed baseline that feeds the Progress page. |
| **8-week plan** | Week-by-week tasks with checkboxes, linking straight to the lesson or practice set. |
| **Progress** | Topic mastery (weighted to recent answers), estimated section and composite scores, history with full answer review, flagged questions. |

Everything is stored in the browser's `localStorage`. Export/import a JSON backup from Settings.

## Test format baked in

| Section | Questions | Minutes | Notes |
| --- | --- | --- | --- |
| English | 50 | 35 | counts toward composite |
| Math | 45 | 50 | 4 answer choices, calculator allowed |
| Reading | 36 | 40 | 4 passages |
| Science | 40 | 40 | **optional**, reported separately |

Composite = average of English, Math and Reading.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static site in dist/
npm run preview    # serve the build
npm test           # content integrity + logic tests
npm run typecheck
```

## Project layout

```
src/
  content/        all course material, typed (types.ts), one file per section + plan.ts
  lib/            store (localStorage), scoring, quiz-set builder
  components/     quiz runner & review, lesson renderer, passage view, layout
  pages/          Home, Plan, Section, Lesson, Practice, Diagnostic, Progress, Settings
```

## Adding content

Add a `Lesson` to a section's `lessons` array and give questions `topic: '<lesson id>'`.
Add a `Passage` and reference it from questions with `passageId` (English passages mark underlined
portions as `[[n:words]]` and questions use `underlineNumber: n`). Run `npm test`; the content test
checks ids, answer indexes, passage references, and that every lesson has questions.

Score estimates are rough percent-to-scale conversions meant for tracking trends, not predicting a real score.
ACT is a registered trademark of ACT, Inc., which is not affiliated with this project.

## Deploying

Every push to `main` runs `.github/workflows/deploy.yml`: type-check, tests, build, deploy to GitHub Pages.
The custom domain `act.hienle.info` is set in the repo's Pages settings and needs a `CNAME act -> lhien11.github.io`
record at the DNS provider (Cloudflare, DNS-only).

## Shareable hosted copy

`npm run build:artifact` builds a variant with an in-memory router into `dist-artifact/` and writes
`page.html`, the fragment published as a claude.ai artifact (publish `page.html` plus the two files in
`assets/` and `favicon.svg`). The hosted copy stores progress in that viewer's browser, and its
"Export backup" button is disabled by the artifact sandbox; use the local build for backups.
