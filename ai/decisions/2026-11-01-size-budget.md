# The size limits: the current budget, set by fact, after the avatars and the fluid() change

Date: 2026-11-01 · Status: accepted

## Context

`size-limits` is the one record of the budget. The CSS is 0.6 kB lighter since `fluid()` writes a number
(`postcss-notations`), and the avatars are asked for 1.5 times wider (their source is a 3:2 photo cropped square), which
adds 0.07 MB of images; the unused JPG originals leave `dist/` but were never in a limit. The numbers move, so this record
replaces it.

## Decision

- The limits, in `.size-limit.json`, on the files of `dist/assets/`:

  | Entry      | Files                              | Limit  | Measured  |
  | ---------- | ---------------------------------- | ------ | --------- |
  | JavaScript | `*.js`, gzipped                    | 4 kB   | 3.79 kB   |
  | CSS        | `*.css`, gzipped                   | 11 kB  | 10.71 kB  |
  | Fonts      | `*.woff2`, as they are             | 120 kB | 111.63 kB |
  | Images     | `*.avif` and `*.webp`, as they are | 3.8 MB | 3.65 MB   |

- A limit is set by fact: the measured size plus about 3% headroom, rounded up to a step (0.5 kB for JavaScript, 1 kB
  for CSS here, 0.1 MB for images). It is raised in the change that needs it and lowered when a change makes a bundle
  lighter, so a regression cannot hide in unused room.
- A change that moves a limit writes one new record with the full list, which supersedes this one: the newest record is the
  only one to read.
- The budget is measured by `npm run size` after `npm run build`, and by the `check` job of CI on every push.
- The images entry sums every generated file: each photo at every width of its `srcset`, in AVIF and WebP. It shows what the
  build emits, not what a page loads, which `sizes` and Lighthouse judge. The `og:image` JPEGs of the articles are outside it.
- Still in force: the CI job of `ci-size-limit` and `/ui` shipping noindex and unlinked (`ui-page-and-size-limits`); only
  their limit numbers are replaced by this record.

## Consequences

- A widget, section or photo that comes near a limit is questioned first; the limit is raised in its own change, with a
  new record.
- Card photos stay at 360, 720 and 1080 px. A 540 px step, which would serve a 1x screen at 1440 or 1920 px (a 406 to 512 px
  slot) instead of the 720 px file, adds 0.83 MB (+23%) of emitted images, helps no 2x or phone screen, and half of the card
  sources are only 626 px wide; it was measured and left out.
- Rejected: one record per wave; round "comfortable" limits (a regression would stay under them); dropping the images
  entry (the author keeps it as a guard against a very large source or a wrong `pluginImage` setting).
