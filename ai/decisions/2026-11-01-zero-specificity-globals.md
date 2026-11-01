# Global layout classes and the reset are written in `:where()`; `.visually-hidden` stays a normal rule

Date: 2026-11-01 · Status: accepted

## Context

The layout imports `@styles/global.css` after the components and the sections, so `.container` and `.split-layout` landed
at the end of the CSS bundle and won every tie of specificity: a block that set its own `display`, `grid-template-columns`
or `padding-inline` on an element with those classes lost without a warning. The reset's tag rules had the same
weakness the other way: `ul { padding: 0 }` outranked `:where(.container)` on the four lists that are also a `.container`.

## Decision

- `.container`, `.split-layout` and every tag rule of the reset are written in `:where()`: specificity 0, so a block's rule
  on the same element wins in any bundle order.
- The import order is not changed: `global.css` stays the last style import (`import-order`).
- `.visually-hidden` keeps its specificity and its place at the end of the bundle: it is the utility that must win, since a
  block's `position`, `width` or `margin` on a hidden element must never show it again.

## Consequences

- A block styles an element that is also a `.container` or `.split-layout` with one class and no order to remember.
- A new global layout class is written in `:where()`; a new tag rule of the reset too.
- Rejected: `global.css` first in the layout (breaks "stylesheet last" and an order is a thing to remember); `!important`
  on the utilities (`css.md` forbids it); `:where()` on `.visually-hidden` (a block could un-hide it).
