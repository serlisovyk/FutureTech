# Styles live next to their JSX; `styles/` holds only global CSS

Date: 2026-10-28 · Status: accepted

## Context

Every component and section is a JSX file that can import its own CSS, and minista bundles all
imported CSS into one file (decision `page-head-and-entries`). The stylesheets could live beside
their JSX or in a mirror tree under `styles/`.

## Decision

- A component's or section's stylesheet sits beside its JSX with the same name (`Button.jsx` +
  `Button.css`, `sections/home/Hero.jsx` + `Hero.css`) and is imported by that file.
- `styles/` holds only global CSS: tokens, reset, base, the `@font-face` rules, utilities.
  `global.css` imports them, and the layout imports `global.css` first.
- The author's choice.

## Consequences

- A block is moved, renamed or deleted together with its styles; no orphan stylesheet is left
  behind in another tree.
- The cascade follows the import order: the global CSS comes before any block, so a block's rules
  win over the base without `!important`. The CSS-base task checks the bundle's order.
- BEM, tokens and the other rules of `ai/rules/css.md` do not change.
- Rejected: a mirror tree `styles/components/` and `styles/sections/` (two places to touch for one
  block, and stylesheets outliving their JSX); CSS Modules (`ai/rules/scope.md`).
