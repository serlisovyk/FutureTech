# Fluid values, hover and breakpoints are short notations that PostCSS plugins expand

Date: 2026-11-01 · Status: accepted

## Context

`fluid-ramps` fixed what the CSS does. Written out it cost about 330 long `calc()` ramps, 15 `@media (hover: hover)`
wrappers and about 90 repeated `@media (width < …)` queries; the author wanted short forms.

## Decision

- **Kept from `fluid-ramps`:** the design is drawn at 390, 1440 and 1920; type, spacing and radii are a size at 390 plus the
  growth of each segment through `--ramp-390-1440` and `--ramp-1440-1920` (defined in the variables stylesheet); media
  queries change structure only, at 1024 and 768, none at 1440.
- **`fluid(Mobile, Laptop, Desktop)`:** always three unitless numbers (`fluid(185, 185, 222)`), expanded to
  `calc(Apx + (B - A) * var(--ramp-390-1440) + (C - B) * var(--ramp-1440-1920))`, a flat segment's term dropped. It works
  inside other functions and custom properties.
- **Hover:** the source writes a plain `&:hover`; a rule with `:hover` is wrapped in `@media (hover: hover)`. A selector list
  is split so `:focus-visible` stays outside; `:not(:hover)` is not wrapped.
- **`@tablet`** is `@media (width < 1024px)`, **`@mobile`** is `@media (width < 768px)`; more conditions follow the name
  (`@mobile and (scripting: enabled)`). No `@desktop`: the base rule is Desktop.
- **Where:** three plugins in `vite/postcss/`, the widths in `vite/constants.js`, wired through `css.postcss.plugins` by
  `vite/parts/css.js`. No `postcss.config.*`, no plugin package, no `postcss` dependency of our own.
- **Stylelint** allows `fluid` and the two at-rules and turns `no-descending-specificity` off: without the media wrapper a
  hover rule nested in a block precedes the child's own rule, and `:hover` raises specificity on purpose.

## Consequences

- The built CSS keeps its rules and values; four declarations differ in text only (a `0px` base term, a nested `calc()`).
  The dev server runs the same plugins.
- A value around the ramp stays hand-written around `fluid()`: `calc(fluid(24, 24, 34) - 1px)`, `-1 * fluid(…)`.
- Rejected: `@mobile { @media (scripting: enabled) { … } }` (Lightning CSS keeps it nested: more bytes); a
  `postcss.config.*` (the inline config is the one Vite documents); a plugin package or a preprocessor (a dependency for
  three small rewrites); reordering child rules for `no-descending-specificity` (it reorders the built CSS).
