# Aliases cover the `src/` folders others import from; `vite/` reads the `src/` barrels by relative path

Date: 2026-11-01 · Status: accepted

## Context

`path-aliases` lists seven aliases including `@layouts`, but minista picks the layout up itself and no file imports it, while
`@utils` and `@constants` were added later without the list changing. A list in a record that is wrong misleads the next change.

## Decision

- **Kept from `path-aliases`:** one alias per folder, defined in `vite/parts/aliases.js` and repeated in `jsconfig.json` for the editor; an
  import across folders uses the alias, one inside a folder stays `./`, `../` is never written; the root paths of minista's `Sprite`,
  `Svg` and `Picture` and the layout's script URL are the exception, and `pages/` has none.
- **The list is the folders others import from:** `@components`, `@sections`, `@data`, `@styles`, `@scripts`, `@assets`, `@utils`, `@constants`.
  `src/layouts/` and `src/pages/` have no alias. A folder gets one in both files when a first file imports from it.
- **`vite/` has no alias** (Node loads the config before it exists): it imports the `src/` barrels by a relative path. Beyond `data` that
  now includes `constants`, where the breakpoint widths live once (`BREAKPOINTS`), read by the PostCSS plugin and by `MEDIA` of the scripts.

## Consequences

- An unused alias is deleted, not kept for later.
- The two copies of the breakpoint width are one; `vite/constants.js` keeps only what the build alone uses.
- Rejected: keeping `@layouts` for a possible import (the day a file needs it, the line is one change in two files).
