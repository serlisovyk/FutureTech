# Pages set their head through minista's metadata and `Head`; CSS and one script entry are loaded by the layout

Date: 2026-10-28 · Status: superseded by 2026-10-28-shared-page-head.md

## Context

minista 5 renders every page inside one layout. It offers several ways to put a title, a
description, a stylesheet or a script into the head, and an obvious alternative to each, so the
choice has to be one, or every page and component would do it differently.

## Decision

- The layout (`src/layouts/index.jsx`) owns `<html lang>`, the head and `<main id="main">`. It
  prints the page's `<title>` from the page's exported `metadata`; charset and viewport are minista's
  defaults.
- A page's meta description is a `<meta>` inside the `Head` component from `minista/head`, because
  the `metadata` type holds only `title` and `draft`. A page passes nothing else to the layout.
- CSS is imported by the JSX module that needs it (the layout for the global stylesheet, a component
  for its own). minista bundles all of it into one hashed file linked from every page.
- Browser JavaScript has one entry, `main.js`, a module script in the layout's head. Scripts import
  each other; nothing imports React, so no React runtime reaches `dist/`. The entry and its tag
  come with the first widget (MY-250): an empty entry is not rewritten to its hashed file.
- The packages were installed by hand (`npm install --save-exact`), not with `npm create minista`
  (the author's choice): the structure is the one in `ai/map.md`, not a template's.

## Consequences

- One stylesheet and one script for the whole site: every page loads every block's styles, and the
  cascade follows import order.
- A new page needs `metadata.title` and a `Head` description, nothing else in the layout.
- Rejected: a `<link>` per stylesheet in `Head` (each file becomes its own entry, no merging); a
  description passed to the layout through `getStaticData` props (indirection for one string); a
  script per section (a page would load code for sections it does not have).
