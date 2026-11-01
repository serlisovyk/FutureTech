# The size limits after the audit fixes: CSS 11.5 kB, images 3.9 MB

Date: 2026-11-01 · Status: accepted

## Context

`size-budget` set the limits by fact. The audit's layout and accessibility fixes (letter spacing as a property, hit
areas, `:active` states) bring the CSS to 10.88 kB of 11 kB, and the content fixes give the testimonials their own
portraits at their own sizes, bringing the images to 3.71 MB of 3.8 MB. Both are under 3% of headroom.

## Decision

- The limits, in `.size-limit.json`, on the files of `dist/assets/`:

  | Entry      | Files                              | Limit   | Measured  |
  | ---------- | ---------------------------------- | ------- | --------- |
  | JavaScript | `*.js`, gzipped                    | 4.5 kB  | 3.97 kB   |
  | CSS        | `*.css`, gzipped                   | 11.5 kB | 10.88 kB  |
  | Fonts      | `*.woff2`, as they are             | 120 kB  | 111.63 kB |
  | Images     | `*.avif` and `*.webp`, as they are | 3.9 MB  | 3.71 MB   |

- Everything else in `size-budget` stays in force: limits by fact with about 3% headroom rounded up to a step (0.5 kB
  for JavaScript and CSS, 0.1 MB for images), raised or lowered in the change that moves them, one new record per change,
  measured by `npm run size` and the `check` job of CI, images summed over every generated file, card photos at 360, 720
  and 1080 px, and the parts of `ci-size-limit` and `ui-page-and-size-limits` that are not numbers.

## Consequences

- The newest size record is the only one to read; `size-budget` is superseded by this one.
- Rejected: leaving CSS at 11 kB (1% headroom, the next block would fail the check for a few bytes).
