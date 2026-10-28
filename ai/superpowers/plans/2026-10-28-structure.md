# Plan: structure, assets, page head, code style

Issue MY-299, branch `my-299-structure`. A pure refactor: no observable behavior changes, so no spec.
The built pages stay the same; what the check compares is `dist/*.html` before and after (hashed file names
ignored), and every real difference is reported.

## Scope

- `src/components/`, `src/sections/`, `src/utils/`: one folder per block, groups, `index.js` barrels.
- `src/assets/icons/` and `src/assets/images/` in subfolders; `Icon`, `src/data/` and every root path follow.
- The page head: `site.name` once, `metadata` with a title and a description, the layout builds the head.
- Code style over `src/`: no `...props`, defaults last, no ternary in a `return` or for an optional attribute,
  constants and demo data out of the component and class files.
- `jsconfig.json` loses `baseUrl`; `vite/parts/aliases.js` is checked for the bare `@components`-style imports.
- Docs: map, `jsx.md`, `oop.md`, `style.md`, `architecture.md`, `assets-performance.md`, the `section` skill,
  two new decision records (structure, page head) and their index lines.

Not in scope: styles, tokens, sizes, behavior of any widget, new components, the `pages/` folder layout.

## Components

`src/components/<group>/<Component>/{Component.jsx, Component.css, index.js}`, groups by role:

- `ui/`: `AvatarGroup`, `Badge`, `Button`, `CounterPill`, `Heading`, `MetaGrid`, `MetaItem`, `SectionHeading`,
  `Stat`, `Tag`.
- `media/`: `Icon`, `Photo`. `Photo` has no stylesheet, so its folder holds two files.

A component folder's `index.js` names what the component exports; a group's `index.js` and the root
`components/index.js` are `export * from './<name>/index.js'`. Outside the folder, `import { Button, Tag } from
'@components'`.

**Cycles.** A component that imports another component (`SectionHeading` → `Button`, `Button` → `Icon`) must not
import the root barrel, which exports it: that is a cycle. Inside `components/` an import names the component's
own folder: `@components/media/Icon`, `@components/ui/Heading`. The alias is the same one-per-folder alias
(`path-aliases`), the path below it is the folder, never a file, so the import survives a rename of the file.
Outside `components/` only the root barrel is used. A section's own parts stay `./FooterColumn.jsx`.

**Aliases.** Vite's string alias `@components` matches the bare specifier and `@components/…`, and resolves a
directory to its `index.js`; `vite/parts/aliases.js` does not change. `jsconfig.json` gets the bare form beside
the wildcard for each folder that has a barrel (`@components`, `@sections`, `@utils`); `baseUrl` goes, the
`paths` are already `./`-relative.

## Sections

`src/sections/<group>/<Section>/{Section.jsx, Section.css, <Part>.jsx…, index.js}`: `shared/CtaRevolution/`,
`shared/Footer/` (`Footer`, `FooterColumn`, `FooterTextLink`, `FooterPillLink`), `shared/Header/`,
`ui/UiKit/`. A section's `index.js` exports the section only, never a part. Each group has an `index.js` and
`sections/index.js` re-exports both; the layout and `pages/ui.jsx` import from `@sections`.

## Utils

`src/utils/index.js` re-exports every helper; an import reads `from '@utils'`. One function per file stays.

## Assets

- `icons/ui/` (arrows, chevron, close, comment, eye, heart, heart-filled, menu, minus, play, plus, send, star),
  `icons/social/` (twitter, medium, linkedin), `icons/feature/` (the `feature-*` files with the prefix dropped:
  the folder says it, and the sprite ids stay unique inside a folder).
- `images/portraits/` (every `portrait-*`), `images/decor/` (`hero-decor`), `images/photos/` (the rest).
- **Icon name** is the path under `icons/` without the extension: `<Icon name="ui/arrow-up-right" />`,
  `icon: 'feature/news'` in `data/`. Chosen over a `group` prop: one string, greppable, it is the file path, and
  data keeps a single field. `Icon` builds `/src/assets/icons/${name}.svg`.
- **Sprites.** minista builds a sprite per directory (the builder globs `*.svg` in the `src` directory, not
  recursively; read in `node_modules/minista/src/adapters/sprite/node.js`), so the single `icons-<hash>.svg`
  becomes one sprite per used folder: `ui-…`, `social-…` (and `feature-…` once a page renders one). Same icons,
  same markup, other `<use href>` file names; a page loads two small files instead of one. This is the one
  output change the structure causes and it is reported.
- Image paths in `data/` follow the folders. Most photos named in `data/` are not in the repo yet; their paths are
  written where the file will land (`photos/`, `portraits/`).

## Page head

- `src/data/site.js`: `export const site = { name: 'FutureTech' }`; used by the head, the home `h1`, the logo's
  title and the copyright in `data/footer.js`.
- A page exports `metadata = { title, description }` (plus `robots` on `/ui`). minista merges every key of a
  page's `metadata` into the props its layout and page receive (`renderHtmlDocument` in
  `plugins/ssg/utils/html.js`), and the Layouts guide names custom metadata keys as the way to vary the shared
  layout: checked on minista.dev (`/docs/guide/layouts`, `/docs/guide/head`, `/docs/guide/pages-routing`).
- The layout receives `title`, `description`, `robots`. `<title>` comes from `getPageTitle(title)` in `utils/`:
  `News | FutureTech`; with no title (Home) the site name alone, so Home's `<title>` stays `FutureTech`. The
  description and `robots` meta go through `Head` from `minista/head` in the layout, so they land where they
  do today (after the script, before the stylesheet) and the markup is byte-identical.
- 404 and the others carry no `robots`; `/ui` keeps `noindex`. Descriptions are page prose and keep the name
  as text.
- A new dated record supersedes the head part of `page-head-and-entries`; that record's `Status` points to it.

## Code style

- No `...props`. `Button` gains `ariaCurrent` and `isToggleDismiss`; `Heading` gains `id`; `Photo` gets `src`,
  `alt`, `sizes`, `breakpoints`, `ariaHidden`, `fetchPriority` (the first-screen photo passes it, `jsx.md`),
  `className`, `formats`, `loading`; `Icon` keeps `name`, `title`,
  `size`, `className`. minista's own `Svg` and `Sprite` take attributes from the caller by design and are not
  ours. `{...column}`-style spreads of a data item do not exist in the repo.
- A prop with a default is last in the destructuring list.
- No ternary in a `return` or for an optional attribute: `Button`, `CounterPill` and `Icon` compute a named `const` above the
  `return`. The class's `#stepIndex` returns early.
- `NO_INDEX` moves to `scripts/constants.js`. The other controllers have only value-assignment ternaries, which stay.
- `UiKit`'s demo lists move to `data/ui-kit.js`.

## Steps

1. Plan (this commit, `docs:`).
2. Move the components into groups and folders with barrels (`refactor:`).
3. Move the sections into folders with barrels, add the `utils` barrel (`refactor:`).
4. Move the icons and images into subfolders, update `Icon`, data and root paths (`refactor:`).
5. Shared page head and `site.name` (`refactor:`).
6. Explicit props, defaults last, no ternary in a `return`, `UiKit` data (`refactor:`).
7. `Tabs`: `NO_INDEX` to the constants, early return (`refactor:`).
8. `jsconfig.json` (`build:`).
9. Docs and decisions (`docs:`).

## Verification

- Before any change: `npm run build`, `dist/` kept; at the end the new `dist/*.html` are diffed against it,
  hashed names ignored; the CSS bundle is compared rule by rule, since a barrel can change import order.
- `npm run lint`, `lint:css`, `format:check`, `build`, `check`, `size`; the limits must not need raising.
- Browser (`npm run dev`): every page and `/ui` at 1920, 1440 and 390; the mobile drawer opens, closes with
  `Escape` and returns focus to the burger.
- Grep over `src/`: no `...props`, no `?` inside a `return`, no `baseUrl` in `jsconfig.json`, no `../`.
- The Definition of Done and the `review` skill over `git diff main..HEAD`.
