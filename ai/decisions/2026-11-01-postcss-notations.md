# Fluid values, hover and breakpoints are short notations that PostCSS plugins expand; `fluid()` writes each step as a number

Date: 2026-11-01 · Status: accepted

## Context

`postcss-shorthands` gave the notations. `fluid()` expanded each ramp term as `(B - A) * var(…)`: about 485 subtractions in
the built CSS that Lightning CSS does not fold. Writing the difference as a number costs nothing in the source and removes them.

## Decision

- **Kept from `postcss-shorthands`:** the design is drawn at 390, 1440 and 1920; type, spacing and radii are a size at 390
  plus the growth of each segment through `--ramp-390-1440` and `--ramp-1440-1920`; media queries change structure only, at
  1024 and 768, none at 1440. A plain `&:hover` is wrapped in `@media (hover: hover)` (a selector list is split so
  `:focus-visible` stays outside; `:not(:hover)` is not wrapped). `@tablet` is `@media (width < 1024px)`, `@mobile` is
  `@media (width < 768px)`, more conditions follow the name, no `@desktop`. Three plugins in `vite/postcss/`, wired through
  `css.postcss.plugins`, no `postcss.config.*`, no plugin package. Stylelint allows `fluid` and the two at-rules and keeps
  `no-descending-specificity` off.
- **`fluid(Mobile, Laptop, Desktop)`** is still three unitless numbers (`fluid(185, 185, 222)`), but expands to
  `calc(Apx + (B - A) * var(--ramp-390-1440) + (C - B) * var(--ramp-1440-1920))` with the differences computed: `fluid(28, 44, 58)`
  is `calc(28px + 16 * var(--ramp-390-1440) + 14 * var(--ramp-1440-1920))`, a fall is written `- 4 * var(…)`, a flat segment's
  term is dropped, the difference is rounded to four decimals so a float never shows in the CSS. It works inside other
  functions and custom properties.

## Consequences

- Every computed style is the same as before, on every page at 1920, 1440, 1024, 768 and 390; the CSS is 595 bytes smaller
  gzipped. Only the text of the custom properties that hold a ramp (`--space-card`, …) differs, and nothing reads that text.
- A value around the ramp stays hand-written around `fluid()`: `calc(fluid(24, 24, 34) - 1px)`, `-1 * fluid(…)`.
- Rejected: leaving the subtraction to the minifier (Lightning CSS keeps `(44 - 28) * var(…)` as written, so the bytes
  stay); rounding the difference to whole pixels (a step of the design may be fractional).
