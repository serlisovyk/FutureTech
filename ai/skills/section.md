---
name: section
description: Use to add or rework a page section or a repeated element in the FutureTech repo — data, JSX component or section, styles, optional controller class, wiring on the page and in main.js, docs.
---

# Section

## When to use

A new page section, a new repeated element (a card, a list row), or a rework of either. The
rules are `ai/rules/architecture.md`, `jsx.md`, `css.md`, `oop.md` and `style.md`; this is the
order of the work.

## Path of a section

1. **Data** — if the section has a list or repeated text: a named export in `data/`. No JSX,
   classes or styles in the data; a computed value is a pure helper beside it.
2. **Components first** — reuse what `components/` already has (button, tag, section heading,
   cards, counters) before writing markup. A new repeated part is a component: one root, props
   in, its BEM block as the class, no hooks or handlers.
3. **Section** — `sections/<page>/<Name>.jsx` (`shared/` when two pages use it): a root
   `<section>` with the block class and a container inside; the heading through the shared
   heading component. Roles and ARIA go in the JSX; the root gets `data-<name>`, the children
   the hooks of the widget that drives them (`ai/rules/oop.md`).
4. **Styles** — `<Name>.css` beside the JSX of each new block, imported by it
   (`import './Name.css'`): BEM, native nesting, colours and shared values from the tokens, the
   block's own values in its stylesheet (`ai/rules/css.md`). Compare the three design widths
   with the design.
5. **Behavior** — only when the section does something: a widget in `scripts/components/`, and a
   controller in `scripts/controllers/` only when the section needs more than one widget or its
   own logic. `constructor(root, options)` and `start()`; the page works without it.
6. **Wiring** — render the section on every page that needs it; add the section's root and its
   class to `main.js`; a section missing from the page is skipped.
7. **Docs** — `ai/map.md` (section, component, stylesheet, script, data file); a decision record
   if a durable decision was made; a rule or this skill if a pattern changed (`ai/rules/docs.md`).

## Check

The checks in `AGENTS.md`; the page in `npm run dev` at the three design widths, with the
keyboard and without JavaScript; then `ai/rules/definition-of-done.md` and the `review` skill.
