# The CSS limit is raised for the footer

Date: 2026-10-28 · Status: accepted

## Context

The footer is on every page and brings its own stylesheet, the small outline `Button` and the shared tokens
with it, so the one CSS bundle that every page loads grew past the limit that `ui-page-and-size-limits` set
(2.5 kB gzipped, measured 2.13 kB then). `npm run size` now measures 2.65 kB.

## Decision

- The CSS limit goes from 2.5 kB to 2.7 kB gzipped: the measured size rounded up with small headroom
  (`ci-size-limit`). The JavaScript, fonts and images limits do not change.

## Consequences

- The next section that grows the bundle past 2.7 kB questions its CSS first and raises the limit only by
  a new record, as before.
- Rejected: leaving the limit and failing CI (the growth is the footer's own, wanted CSS); a round 3 kB (a
  regression of 0.35 kB would stay under it).
