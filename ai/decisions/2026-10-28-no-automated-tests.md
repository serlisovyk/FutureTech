# No automated tests

Date: 2026-10-28 · Status: accepted

## Context

The site is static and its logic is small DOM interaction whose real risks are layout at several
widths, keyboard behavior and the page without JavaScript, which only a browser shows. The author
decided against a test framework for a project of this size.

## Decision

- The project has no automated test suite, no test framework and no `test` script.
- Verification is the linters, formatting, the build and `minista check`, plus using the change
  in the browser at the three design widths, with the keyboard and the mouse.

## Consequences

- Do not add tests or a test framework unless the author explicitly asks.
- Do not report the absence of tests as a gap in reviews or reports.
- Manual browser verification is mandatory: it is the only check that exercises layout and
  interaction.
- Linters, a formatter, a size budget and CI are not tests and are not forbidden.
- Rejected: unit tests of the widget classes (they would mirror the DOM calls); visual regression
  screenshots (a service and a baseline to keep for a design still being built).
