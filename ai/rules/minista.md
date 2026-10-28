# minista Rules

minista 5 is the build tool: a set of Vite plugins that render JSX and MDX into static HTML.
Why it was chosen: decision `minista-jsx-static-html`. Where its config lives: `ai/map.md`.

## The source of truth is the docs

- Language models mostly know minista v3 — a different, outdated API. Never write minista
  config, a plugin option, a CLI flag or a page API from memory.
- Check every one against <https://minista.dev> (the docs of the installed major version) and
  the guide `minista agents` prints for the installed package. When the two disagree with the
  code in the repo, the installed package wins: read its types or README in `node_modules`.
- A plan that uses a minista API names the docs page it was checked against.
- When a minista behavior surprises you (a build warning, a missing file in `dist/`), run
  `minista check` and `minista inspect` before changing the config.

## Versions

- `minista`, `vite`, `react` and `react-dom` are pinned exactly in `package.json`, without `^`
  or `~`, like every dependency (decision `pinned-dependency-versions`).
- An upgrade is its own task: read the changelog, run every check, build and use every page.
- The required Node.js range is the one minista declares in its `engines`; `package.json`
  repeats it.

## Plugins

- In use: `pluginSsg` (JSX and MDX → HTML, with the CSS, scripts and images they reference);
  `pluginImage` (`Picture`, used through `Photo`); `pluginSprite` (`Sprite`, used through `Icon`);
  `pluginSvg` (`Svg`, inline SVG).
- Not used: `pluginIsland` (React in the browser, decision `minista-jsx-static-html`),
  `pluginSearch`, `pluginArchive`; `pluginBeautify` indents the output, the opposite of minifying.
  Adding any plugin is a decision for the author.
- Plugin options live in the Vite config, one concern per module, never inline in a page.
  The defaults `loading` and `decoding` of `pluginImage` do not reach `Picture` in the render build:
  `Photo` sets them.
- minista has no HTML minifier and needs none: React writes the pages without whitespace between tags.
- A plugin of ours that edits the built pages (`vite/`) declares `enforce: 'post'` and
  `generateBundle: { order: 'post', handler }`: minista rewrites the pages (images, sprite, SVG) in its own
  `order: 'post'` hook, and an earlier plugin sees them without the `srcset` and the sprite.

## CLI

- `minista` (dev server), `minista build`, `minista preview` and `minista check` run through
  the `npm` scripts named in `AGENTS.md` ("Verification"), never as ad-hoc variants.
- `minista inspect`, `minista explain` and `minista agents` are for reading the project, never
  part of the checks.
