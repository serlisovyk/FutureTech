# Browser JavaScript in OOP style: a class per widget and per section

Date: 2026-10-28 · Status: accepted

## Context

The JSX renders at build time only, so every interaction (tabs, filters, the menu, the accordion,
the video dialog, the form, the table of contents) is browser JavaScript written by hand. The
author writes in OOP style and wants every widget to land in an obvious place with one shape.

## Decision

- All browser JavaScript is ES classes with encapsulated state (`#private` fields and methods),
  one class per file, named exports.
- `scripts/components/` holds reusable widgets; `scripts/controllers/` holds a controller per
  section that needs one; `main.js` is the composition root that creates instances and calls
  `start()`.
- One constructor shape, `constructor(root, options)`; `start()` attaches the listeners; one
  method vocabulary (`render*`, `show*` / `hide*`, `open` / `close`, `select`).
- Composition over inheritance: no base classes, factories or DI containers.
- The details are `ai/rules/oop.md`.

## Consequences

- New browser JavaScript is a class or a method in the right folder, never a loose function or
  module-level state.
- Scripts find markup by `data-*` hooks, so JSX and CSS can change classes without breaking them.
- The `review` skill and the Definition of Done check the OOP conventions.
- Rejected: a function per section (it repeats root lookup, state and listeners and gives no
  place for a shared widget); custom elements (a second lifecycle for a handful of widgets);
  minista islands (React in the browser, decision `minista-jsx-static-html`).
