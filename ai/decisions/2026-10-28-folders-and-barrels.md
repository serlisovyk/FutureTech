# Components and sections are folders with barrels; assets sit in subfolders

Date: 2026-10-28 · Status: accepted

## Context

One flat folder per layer stops reading well past a dozen files: `components/` mixed buttons with media, a
section's parts sat beside other sections, and an import named a file (`@components/Icon.jsx`), so a rename
touched every importer. The icons and images had the same problem, and `Icon` took a bare file name.

## Decision

- A component is a folder `components/<group>/<Component>/` with `<Component>.jsx`, `<Component>.css` and an
  `index.js` that exports it. Groups by role: `ui/` (the kit) and `media/` (`Icon`, `Photo`). A group has an
  `index.js`, and `components/index.js` re-exports the groups.
- A section is a folder `sections/<group>/<Section>/` with its `.jsx`, `.css`, its own parts (one component per
  file) and an `index.js` that exports the section only. `sections/<group>/index.js` and `sections/index.js`
  re-export, and `utils/index.js` re-exports the helpers.
- Code outside `components/` imports from the root barrel: `import { Button, Tag } from '@components'`, and
  likewise `@sections` and `@utils`. Inside `components/` a component imports another by its folder
  (`@components/media/Icon`), never the root barrel, which exports the importing component and would be a cycle.
  The alias is the one of `path-aliases`; the stylesheet stays beside its JSX (`styles-next-to-components`).
- Assets are grouped by meaning: `icons/ui/`, `icons/social/`, `icons/feature/` (no `feature-` prefix), and
  `images/portraits/`, `images/photos/`, `images/decor/`. An icon is named by its path under `icons/`:
  `<Icon name="ui/arrow-up-right" />`; the image paths in `data/` carry the folder.

## Consequences

- minista builds a sprite per directory (its builder reads `*.svg` of one folder), so the icons are one sprite
  per folder, `ui-<hash>.svg` and `social-<hash>.svg`, not a single `icons-<hash>.svg`. A page loads the sprites of
  the folders it uses; the symbols and markup are the same.
- A barrel imports every component's stylesheet, so the bundle order follows the barrels; the bundle holds the
  same rules (every page already loaded every block's styles).
- A new component or section is a folder plus a line in its group's `index.js`; a new asset folder needs no
  config.
- Rejected: a root barrel inside `components/` (cycles); a `group` prop on `Icon` (two fields for one file).
