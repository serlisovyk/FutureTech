# The mobile menu is a drawer on `Toggle` and `inert`, with a `scripting: none` fallback

Date: 2026-10-28 · Status: accepted

## Context

The design shows the navbar at 1440 and a menu glyph at 390 but not the opened menu. The menu is the one
widget that covers the page, so it needs a modal behaviour, and the page has to keep its links without
JavaScript. Each point had an obvious alternative.

## Decision

- The opened menu is a drawer from the right over a dimmed page, built on `Toggle` (`aria-expanded`,
  `aria-controls`, `hidden`) with a `HeaderController` that marks the rest of the page `inert` while it is
  open, moves focus in and closes it when the viewport reaches 768 px. The page behind is locked by CSS.
- One element is both looks: from 768 px the menu wrapper is `display: contents` and its links sit in the
  navbar; below it the wrapper is the overlay. The links are never written twice.
- `hidden` is in the markup (closed before the script runs, so nothing flashes open). The stylesheet
  overrides it where the drawer does not apply: from 768 px, and under `@media (scripting: none)`, where
  the links show as a plain list below the logo.
- It slides with `@starting-style` and a discrete `display` transition, so no script writes a style.

## Consequences

- A browser without `scripting` or `@starting-style` support shows the plain list or an instant menu:
  nothing is lost.
- `Toggle` stays generic: `data-toggle-dismiss` and `onToggle` are its only additions.
- Rejected: a native `<dialog>` (the dialog pattern is for the video modal, and a menu keeps its button
  state); a second copy of the links for the drawer (two landmarks, two sets to keep equal); a script class
  on `<html>` for the no-JS state (the page flashes the wrong layout before the script runs).
