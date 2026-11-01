# Constants live in one folder, data is a barrel, page metadata is data

Date: 2026-11-01 · Status: accepted

## Context

The build helpers' numbers sat in `utils/constants.js` and the browser scripts' in `scripts/constants.js`: two homes
for one kind of thing, each a single file of unrelated constants. Data was the one layer imported by file
(`@data/site.js`) while components, sections and utils come from a barrel, and every page typed its own title and
description although the texts live in `data/`.

## Decision

- `src/constants/` (`@constants`) holds every shared constant, one file per meaning (`keys`, `selectors`, `media`,
  `storage`, `format`, …) behind `index.js`; utils and scripts import `from '@constants'`, never a file of it.
- `src/data/` has an `index.js` that re-exports its files; code imports `from '@data'`. The build plugins in `vite/`
  cannot use the alias (Node loads the config before it exists), so they import the barrel by a relative path.
- A page's title, description and `robots` are `pages` in `data/pages.js`; a page is `export const metadata = pages.<name>`.
  The article route keeps its own, built in `getStaticData` from the post.
- Both barrels use `export * from`: a new file is one line, a new export in a file needs none.
- The aliases, the barrel rule and the head stay as `path-aliases`, `folders-and-barrels` and `shared-page-head` say;
  only the folders they cover grow.

## Consequences

- A new constant goes to the file of its meaning, a new data file is a line in `data/index.js`, a new page an entry
  in `pages.js`.
- rolldown does not treat `Object.freeze` as pure, so `vite/parts/build.js` lists it in
  `rolldownOptions.treeshake.manualPureFunctions`: without it every unused constant of the barrel stays in the browser
  bundle. Do not remove it.
- Rejected: one `constants.js` kept per layer (two homes); `sideEffects` in `package.json` (it must list every CSS
  import); an explicit named list in each barrel (a second place to edit for every export).
