# Breakpoints and fluid values: two structural queries, ramps between the drawn widths

Date: 2026-10-28 · Status: accepted

## Context

The design is drawn at three widths (1920, 1440, 390) and most sizes differ at each: the section
title is 58 / 44 / 28 px, the side padding 162 / 80 / 16 px. The CSS has to follow all three
without the page jumping at a width the design does not show, and without a block repeating its
values three times.

## Decision

- Media queries change structure only, never sizes: `width < 1024px` (side-by-side compositions
  stack) and `width < 768px` (other grids become one column, the header becomes the menu button).
  There is no query at 1440 or 1920, and no other breakpoint is invented.
- Type, spacing and radii are fluid. A value is its size at 390 plus the growth of each segment,
  written with the design numbers; the section title (28 at 390, 44 at 1440, 58 at 1920) is
  `calc(28px + (44 - 28) * var(--ramp-390-1440) + (58 - 44) * var(--ramp-1440-1920))`.
  A segment where the value does not change leaves its term out.
- The two ramps run from 0 to 1px over their segment and live in the variables stylesheet:
  `--ramp-390-1440: clamp(0px, (100vw - 390px) / 1050, 1px)` and
  `--ramp-1440-1920: clamp(0px, (100vw - 1440px) / 480, 1px)`. Outside 390–1920 a value stays at
  the nearest drawn size.

## Consequences

- At exactly 390, 1440 and 1920 a rule has the drawn sizes, and in between it moves linearly: no
  jumps, and one set of values per rule.
- `100vw` includes a classic scrollbar (about 15 px), so the drawn sizes are reached that much
  early. Accepted; the three widths are checked with the viewport at exactly that width.
- The layouts between 768 and 1439 are not drawn. `width < 1024px` takes the Mobile composition
  with fluid sizes; the in-between widths are checked in the browser, not against the design.
- Rejected: a media query per drawn width (sizes jump between widths, and every block repeats
  three sets of values); one `clamp()` from 390 to 1920 (a straight line cannot pass through the
  three drawn values, 1440 would come out off).
