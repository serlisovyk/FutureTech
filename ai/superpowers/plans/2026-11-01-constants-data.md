# Plan: constants folder, `@data` barrel, page metadata in data (MY-303)

Branch `my-303-constants-data`. No spec: the built HTML does not change, the check below proves it. A decision record is
added for the convention (constants in one folder, data as a barrel, page metadata as data).

## Checked against the docs

`npx --no-install minista agents` and the Layouts guide (<https://minista.dev/docs/guide/layouts>) name `metadata` as a
named export of a page and do not require a literal. The installed package reads `pageModule.metadata` from the
evaluated page module and spreads it (`features/ssg/resolve.js`), so `export const metadata = pages.news` works; the
build output confirms it (head compared byte for byte).

## Changes

1. **`src/constants/`, alias `@constants`.** The alias goes into `vite/parts/aliases.js` and `jsconfig.json` (ESLint
   declares no aliases). `utils/constants.js` and `scripts/constants.js` are split by meaning, one file each, and
   re-exported by `index.js` with `export * from`; both old files are deleted:
   `count-up.js` (`COUNT_UP`), `format.js` (`COUNT_FORMAT`, `DATE_FORMAT`, `READING_SPEED`), `form.js` (`PHONE_PATTERN`,
   `VALIDITY_ERRORS`), `keys.js` (`KEYS`), `media.js` (`MEDIA`), `reveal.js` (`REVEAL`), `selectors.js` (`SELECTORS`),
   `sentinels.js` (`ALL_CATEGORY`, `NO_INDEX`), `storage.js` (`STORAGE`), `video.js` (`VIDEO_EMBED`). Every importer
   reads `from '@constants'`.
2. **`src/data/index.js`.** `export * from './<file>.js'` for every data file (no name is exported twice). Every
   `@data/<file>.js` import becomes `from '@data'`. The three `vite/site-files/build-*.js` files import
   `../../src/data/site.js` relatively: the Vite config is loaded by Node before any alias exists, so `@data` cannot
   resolve there. They switch to the relative barrel `../../src/data/index.js` (a relative path, as today); if the build
   or the plugin run shows a problem, they keep `site.js` and the reason goes into the report.
3. **`src/data/pages.js`.** `pages` holds the `title` / `description` (and `robots`) of Home (no title), News, Podcasts,
   Resources, Contact, the 404 page (`notFound`) and `/ui`. Each page is `export const metadata = pages.<name>`. The
   article route keeps its metadata from `getStaticData`.
4. **`get-social-meta.js`.** `import.meta.glob` moves into the post branch of the function; Vite still hoists the
   eager imports, the output is the same.
5. **Docs.** `ai/map.md` (constants folder, data barrel, `pages.js`, aliases; trimmed to stay under 12288 bytes as stored
   by git), `ai/rules/oop.md`, `jsx.md`, `architecture.md`, `assets-performance.md` where they name the old files or
   the literal `metadata`; a new record `2026-11-01-constants-folder-data-barrel` and its line in the index.

## Risk

The browser scripts now import constants through a barrel with build-time constants beside them. The bundle must keep
only what the scripts use: the built `main-*.js` is checked for `READING_SPEED`'s and `COUNT_FORMAT`'s values and
`npm run size` is compared with the 3.61 kB baseline (limit 4 kB).

Found while building: rolldown does not treat `Object.freeze(...)` as pure, so every unused frozen constant of the barrel
stayed in `main-*.js` (+0.2 kB). `vite/parts/build.js` sets `rolldownOptions.treeshake.manualPureFunctions` to
`['Object.freeze']` (rolldown's option, typed in `rolldown/dist`); the bundle is then byte-for-byte the size it was.
Rejected: `sideEffects` in `package.json` (it must then list every CSS import) and a comment annotation (no comments).

## Verification

The checks under "Verification" in `AGENTS.md`. `dist/` is built on `main` before the change and after it, and every
`dist/**/*.html` is diffed (identical apart from asset hashes), as are `robots.txt`, `sitemap.xml` and `llms.txt`.
`npm run dev` on every page: tabs, the contact form validation, the like button and the mobile menu work; no video is
played.
