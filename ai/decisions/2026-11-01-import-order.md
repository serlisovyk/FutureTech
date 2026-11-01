# Imports have one order in every file; the order is documented, not enforced by a linter

Date: 2026-11-01 · Status: accepted

## Context

Files ordered their imports by habit: the data above the helpers in some, the helpers above the data in others, a sibling
part among the aliases. The author asked for `@utils` above `@data` as the more logical order. A linter rule would pin it,
but no installed plugin groups imports by alias.

## Decision

- **The order**, no blank line between groups: packages (`clsx`, `minista/…`); `@components` and `@sections`; `@utils`;
  `@constants`; `@data`; `@assets`; `../`; `./`; the stylesheet last. Inside a group alphabetical by path, a barrel before
  its subpaths. Scripts use the same list with `@scripts` beside `@components`.
- **Why this order:** it runs from the general to the particular. A package comes from outside; the components and sections
  are the building blocks the file uses; the helpers say what the file computes and the constants and the data what it computes with, the data last because
  they are the texts and lists the helpers and components work on; assets and the neighbours in the folder are local; the stylesheet stays last, as `jsx.md` had it.
- **Not enforced by ESLint:** core `sort-imports` sorts only by member names, `eslint-plugin-import` is a new dependency
  for one rule, and a plugin to enforce a sort is a tool this project does not otherwise need. A new file follows `jsx.md`,
  the review checks it.

## Consequences

- One order to read and to write, in every file under `src/`.
- Rejected: leaving the order free (it drifted); a new ESLint plugin for it (a dependency for a convention a record holds).
