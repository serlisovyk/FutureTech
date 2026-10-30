# Plan: the Resources intro and the counters (MY-273)

Branch `my-273-resources-intro`. Spec: `ai/superpowers/specs/2026-10-28-resources-intro.md`. Records cited:
`folders-and-barrels` (where the blocks live), `borders-inside` (the lines), `fluid-ramps` (every size),
`oop-javascript` (the class). minista API: none new.

## Where things live (decided here)

- `sections/resources/ResourcesIntro/` renders the shared `PageIntro` with its data, as `NewsIntro` does; it holds the
  page's only `h1`. `sections/resources/ResourceStats/` (`ResourceStats.jsx`, `ResourceStats.css`, `index.jsx`) is the strip
  of four large `Stat`s. A new group barrel `sections/resources/index.jsx`, re-exported by `sections/index.jsx`.
- `data/resources.js` gets `resourcesIntro` (title id, the two title lines, the paragraph) and `resourceStats` (id, title
  id, a hidden heading). The numbers are `data/stats.js`, the same four entries Home slices three of.
- `pages/resources.jsx` keeps `metadata`, drops the placeholder and renders `<ResourcesIntro />` and `<ResourceStats />`
  first; the sections of the parallel report task follow them.
- `Stat` always renders the count-up markup (no prop: every stat on the site counts, Home hero included, as the author
  decided). The value is `<p class="stat__value" data-count-up>` holding an `aria-hidden` span (`data-count-up-number`
  with the digits and their suffix, then the yellow plus) and a `visually-hidden` span with the final value: a screen
  reader hears the final number once, never the steps.
- `scripts/components/CountUp.js` owns one value (`root` is `[data-count-up]`). The constructor reads the number text
  ("12k" is 12 and "k") and stores it; `start()` returns at once under `prefers-reduced-motion: reduce` or without
  `IntersectionObserver` (the final value stays), otherwise renders 0, observes the root and, on the first
  intersection, runs a `requestAnimationFrame` loop with an ease-out curve and ends on the exact final text.
  `constants.js` gets `COUNT_UP` (duration, threshold, easing power, number pattern) and `MEDIA.reducedMotion`;
  `main.js` one row.

## Layout

- `ResourceStats`: a full-width section with a line above and below; a `container` list of four columns split by
  vertical lines in the middle of the column gap (160 / 100 at 1920 / 1440; 4 columns of 279 / 245). Block padding of
  a cell 80 / 60 / 17 (the 390 value is the design's row of 97 less the stat's own height). Below 768 px two columns
  with a 20 px gap: a vertical line between the pair, a full-width horizontal line between the rows.
- The lines are absolutely positioned pseudo-elements, as in the Home hero strip, so they add no size.

## Deviations and inventions (reported)

- The intro paragraph is the design's 87-character text; the design's own bottom padding of the intro is 130 at 1920
  where the shared `PageIntro` has 150 (News draws 150): kept shared.
- Whether the strip has lines above and below is not readable in the design data: drawn, as the Home hero strip and
  every full-width section.

## Docs

`ai/map.md` (the Resources sections, the `CountUp` component, the data), `ai/rules/oop.md` (the markup `CountUp` expects).

## Verification

The checks under "Verification" in `AGENTS.md`, `npm run size` numbers reported. Then `/resources` and `/` in `npm run dev`
at 1920, 1440 and 390: sizes against the design, the count from 0 on entering the viewport, reduced motion (final at
once, no 0), no JavaScript (final), the accessibility tree reads the final value once, no horizontal scroll.
