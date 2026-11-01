# The size limits: the current budget, set by fact

Date: 2026-11-01 · Status: accepted

## Context

The size budget (`ci-size-limit`) was raised by eleven records, one per wave of sections, each
restating the same numbers and reasons; a reader had to follow the chain to find the last ones.
This record is the one place for the budget, and the eleven are superseded.

## Decision

- The limits, in `.size-limit.json`, on the files of `dist/assets/`:

  | Entry      | Files                              | Limit   | Measured  |
  | ---------- | ---------------------------------- | ------- | --------- |
  | JavaScript | `*.js`, gzipped                    | 4 kB    | 3.79 kB   |
  | CSS        | `*.css`, gzipped                   | 11.5 kB | 11.31 kB  |
  | Fonts      | `*.woff2`, as they are             | 120 kB  | 111.63 kB |
  | Images     | `*.avif` and `*.webp`, as they are | 3.7 MB  | 3.58 MB   |

- A limit is set by fact: the measured size plus about 3% headroom, rounded up to a step (0.5 kB
  for JavaScript and CSS, 0.1 MB for images). It is raised in the change that needs it and lowered
  when a change makes a bundle lighter, so a regression cannot hide in unused room.
- A change that moves a limit writes one new record with the full list, which supersedes this
  one (`ai/decisions/README.md`): the newest record is the only one to read.
- The budget is measured by `npm run size` after `npm run build`, and by the `check` job of CI on
  every push (`ci-size-limit`).
- The images entry sums every generated file: each photo at every width of its `srcset`, in AVIF
  and WebP. It shows what the build emits, not what a page loads, which `sizes` and Lighthouse
  judge. An article's hashed `og:image` JPEG is outside it.
- Still in force: the CI job of `ci-size-limit` and `/ui` shipping noindex and unlinked
  (`ui-page-and-size-limits`). Those two records mixed these with limits, so they stay
  `accepted`; only their limit numbers are replaced by this record.

## Consequences

- A widget, section or photo that comes near a limit is questioned first; the limit is raised in
  its own change, with a new record.
- Rejected: one record per wave (the chain this replaces); round "comfortable" limits (a
  regression would stay under them); dropping the images entry (the author keeps it as a guard
  against a very large source or a wrong `pluginImage` setting).
