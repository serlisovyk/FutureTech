# Imports across folders use one alias per folder

Date: 2026-10-28 · Status: accepted

## Context

A relative path across folders (`../../components/Button.jsx`, `../styles/global.css`) is long and breaks when
the file moves. Vite resolves `resolve.alias` in JSX at build time, in the browser scripts and in the CSS
`@import` and `url()`, so one alias set serves every kind of source.

## Decision

- Seven aliases, one per `src/` folder: `@components`, `@sections`, `@layouts`, `@data`, `@styles`, `@scripts`,
  `@assets`. They are defined in `vite.config.js`, and `jsconfig.json` repeats them so the editor completes and
  follows an import.
- An import that crosses folders uses the alias; an import inside the same folder stays `./`; `../` is never
  written. `pages/` has no alias: nothing imports a page.
- The exception is a root path: minista's `Sprite`, `Svg` and `Picture` read `src` as `/src/assets/…` from the
  project root, not through Vite's resolver (an alias there fails the build with `MINISTA_SVG_SOURCE_NOT_FOUND`),
  and the layout's `<script src="/src/scripts/main.js">` is a URL minista rewrites to the hashed file.

## Consequences

- A file moves inside its folder without touching its importers' paths, and an import names the layer it
  reaches (`@data/…` is data, `@scripts/…` is a script).
- A new folder under `src/` that others import from gets its alias in both files in the same change.
- The aliases are the project's own: `jsconfig.json` is only for the editor and changes nothing in the build.
- Rejected: a single `@/` for all of `src/` (the folder is no longer visible at the import, and everything
  looks reachable from everywhere); relative paths (the long chains and the breakage on a move).
