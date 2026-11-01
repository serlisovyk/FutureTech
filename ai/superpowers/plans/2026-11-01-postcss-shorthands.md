# Plan: PostCSS shorthands, `fluid()`, `&:hover`, `@tablet` / `@mobile` (MY-308)

Branch `my-308-postcss-shorthands`. No spec: the built CSS does not change in meaning. Records cited: `fluid-ramps` (the
notation changes, the ramps do not; a new record refines it), `vite-config-split`, `linters`, `styles-next-to-components`.

## Checked against the docs and by experiment

- Vite, `css.postcss` ("Shared Options"): an inline object with a `plugins` array is the PostCSS config; with it, Vite
  searches no other PostCSS source. So the plugins go through `css.postcss.plugins` and there is no `postcss.config.*`.
- minista, "Styling" guide: CSS imported by pages and layouts is processed by Vite and bundled. A scratch build confirmed it:
  the plugins run on the page CSS, and the Lightning CSS minifier keeps the `calc()` text as written, so a built value
  can be compared with the one before.
- PostCSS is already installed by Vite; the plugins use only the `AtRule` constructor handed to a visitor, so no `import`
  of `postcss` and no new dependency.

## Changes

- `vite/postcss/` (new, one small plugin per file, each a function returning a PostCSS plugin object):
  - `fluid.js`: `fluid(A, B, C)` in a declaration value, three unitless numbers, the px at 390 / 1440 / 1920. It expands to
    `calc(Apx + (B - A) * var(--ramp-390-1440) + (C - B) * var(--ramp-1440-1920))`; a term whose segment does not change is
    dropped, and a constant is `Apx`. It works anywhere in a value (`round(fluid(20, 20, 24), 1px)`, `min(fluid(...), 34%)`,
    custom properties). Anything else named `fluid(` is a build error with the declaration's position.
  - `hover.js`: a rule with `:hover` in a selector is wrapped in `@media (hover: hover)`.
  - `breakpoints.js`: `@tablet` is `@media (width < 1024px)`, `@mobile` is `@media (width < 768px)`.
- `vite/constants.js`: `BREAKPOINTS` (the two widths, the one place), `RAMP_PROPERTIES` (the two ramp names), `HOVER_QUERY`.
- `vite/parts/css.js`: `getCss()` returns `{ postcss: { plugins } }`; `vite/config.js` sets `css: getCss()`.
- `src/**/*.css`: every `calc(... var(--ramp- ...)` becomes `fluid(A, B, C)` (the two ramp definitions in `variables.css`
  stay), the 15 `@media (hover: hover)` wrappers go, every `@media (width < ...)` becomes `@tablet` / `@mobile`. Done with
  a throwaway script that checks each expansion against the original text, then Prettier.
- `.stylelintrc.json`: `at-rule-no-unknown` ignores `tablet` and `mobile`, `function-no-unknown` ignores `fluid`, and
  `declaration-property-value-no-unknown` ignores values with `fluid(` (it fires too, on every property).

## Answers to the points left to the plan

- **Mixed `:hover` selector** (`&:hover, &:focus-visible`): the plugin splits the list. The `:hover` selectors move to a copy
  of the rule inside `@media (hover: hover)`; the rest stay in the original rule, outside, so the focus look never
  disappears on a touch device. A rule already inside `@media (hover: hover)` is left alone (no double wrap, a manual
  wrapper still works), and `:not(:hover)` is not a hover selector: it must keep applying where nothing hovers.
- **Compound media**: `@mobile and (scripting: enabled) { … }` — the text after the name is appended to the query, giving
  `@media (width < 768px) and (scripting: enabled)`. The nested form `@mobile { @media (scripting: enabled) { … } }` was
  tried: Lightning CSS keeps it nested (`@media (width<768px){@media (scripting:enabled){…}}`), so the built CSS would grow
  and differ; the appended form builds the identical rule.

## Built CSS: expected differences

A build of `main` is kept outside the repo and compared with the build after the change (split by rule). Hover wrappers,
`@tablet` and `@mobile` come out identical. Four declarations differ in text, never in value:

- `calc(2 * var(...) + ...)` in two `Stat` rules becomes `calc(0px + (2 - 0) * var(...) + ...)`: `fluid()` has one
  form, with the base term always present, and three other rules already read that way.
- `calc(24px + ... - 1px)` and `calc(-1 * ( 104px + ... ))` become `calc(calc(24px + ...) - 1px)` and
  `calc(-1 * calc(104px + ...))`: `fluid()` nests inside the author's `calc()`; a nested `calc()` is the same value.

## Finding: `no-descending-specificity`

Stylelint did not see the old hover rules next to their neighbours, because each sat inside a media wrapper. Without the
wrapper `&:hover .x` (nested in a block) precedes the plain `.x` rule, and eight places fire. Moving the child rules would
reorder the built CSS; the rule is turned off instead (`:hover` and a parent state raise specificity on purpose here), and
the record says so.

## Docs

- A new record refining `fluid-ramps`: the notation (`fluid()`, `@tablet` / `@mobile`, plain `:hover`), the plugins in
  `vite/postcss/`, the rejected forms (nested compound media, a `postcss.config.*`, a PostCSS plugin package, a SCSS
  mixin) and the lint exception; its line in the `ai/decisions/README.md` index.
- `ai/rules/css.md`, `ai/design-system.md`, `ai/skills/section.md`: the new notation replaces the long forms.
- `ai/map.md`: `vite/postcss/` and `parts/css.js`; the limit of 12 KB is kept by trimming wording elsewhere.

## Verification

The checks under "Verification" in `AGENTS.md`; the built CSS and HTML compared with the build of `main`; in `npm run dev`
(the plugins also run there): the page against the build at 1920 / 1440 / 1024 / 768 / 390, hover with a mouse, and no hover
look under touch emulation.
