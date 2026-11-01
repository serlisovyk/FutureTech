# Page changes use the browser's cross-document view transition, in CSS only

Date: 2026-11-01 · Status: accepted

## Context

The site is a set of static pages, so every link is a full navigation and the page flashes. A smooth change needs
either a script that fetches and swaps pages or the browser's own transition between documents.

## Decision

- `@view-transition { navigation: auto }` in `base.css`, only under `prefers-reduced-motion: no-preference`; the
  group animation lasts `--transition-duration`, the same token as every other transition.
- The header is its own group (`view-transition-name: header` with no animation) so the navbar stays put while the
  page content cross-fades. Its stylesheet holds that part.
- `scrollbar-gutter: stable` on `html` keeps the layout width the same while a modal or the drawer locks the page,
  so neither the page nor the transition jumps.

## Consequences

- No script, no router, no extra dependency; a browser without the feature navigates as before.
- A second shared element (the footer, the CTA) would need its own `view-transition-name` in its stylesheet.
- Rejected: a script that swaps the page body (a router for a static site, and it breaks the browser's history
  and scroll handling); no transition (the flash the author wanted gone).
