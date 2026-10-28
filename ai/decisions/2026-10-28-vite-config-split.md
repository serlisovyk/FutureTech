# The Vite config is split into `vite/`, one module per concern

Date: 2026-10-28 · Status: accepted

## Context

`vite.config.js` held the aliases, minista's plugins with the image options, our own build plugin and
the build options in one file, and it grows with every plugin and option. A reader had to scan all of
it to find the one thing that changed.

## Decision

- The root `vite.config.js` only re-exports `vite/config.js`, which builds the config from the parts.
- `vite/paths.js` holds the path constants; `vite/parts/` one module per concern (`aliases`, `plugins`,
  `image`, `build`), each exporting one `get…` function; `vite/plugins/` our own build plugins.
- The output of the build is unchanged: the split moves code, it does not change a setting. Where
  `image-formats` and `path-aliases` say `vite.config.js`, they now mean the matching module in `vite/`.
- The author's choice.

## Consequences

- A new alias is one line in `parts/aliases.js` (and `jsconfig.json`); a new plugin is a file in
  `vite/plugins/` and a line in `parts/plugins.js`; an image setting changes in `parts/image.js`.
- ESLint reads `vite/**` as Node code.
- Rejected: one file per plugin with the config still inline (the config stays the long file); a config
  helper library or a `merge` layer (more machinery than a few small modules need).
