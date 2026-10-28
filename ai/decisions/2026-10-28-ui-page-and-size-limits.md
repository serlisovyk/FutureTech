# `/ui` ships, noindex and unlinked; the CSS limit is raised and an images limit added

Date: 2026-10-28 · Status: accepted

## Context

The UI kit (`Button`, `Tag`, `SectionHeading`, …) needs one page that shows every component in every
variant. `minista build` and `minista check` validate only the components a page renders, so a component no
page uses is never checked. The kit's styles and its first photos (the avatars) also enter the size budget
(decision `ci-size-limit`), whose limits were measured on a bundle without them.

## Decision

- `/ui` is a page of the site, `src/pages/ui.jsx`: committed and deployed, `<meta name="robots"
content="noindex">` in its `Head`, linked from no page and absent from the navigation and footer data.
- It renders every kit component with every variant. A new kit component or variant is added to it in the same
  change.
- The CSS limit goes from 1.5 kB to 2.5 kB (measured 2.13 kB gzipped): the kit is in the one bundle that every
  page loads. The JavaScript and fonts limits do not change.
- The images entry that `ci-size-limit` deferred is added: `Images`, `dist/assets/*.{avif,webp}`, no gzip or
  brotli, 60 kB (measured 54.99 kB, the four avatars).
- Limits stay by fact: the measured size rounded up to a step with small headroom.

## Consequences

- Every kit component is built and checked on every push, even before a section uses it.
- `/ui` is public by its URL; `noindex` asks crawlers to skip it and hides nothing.
- Later sections reuse the kit, so its CSS is not a cost of the demo page alone.
- Rejected: a demo only in `npm run dev` (the build and the checks would not see the kit); a stylesheet loaded
  only by `/ui` (the site's own sections use the same styles); rounding the limits up generously (a regression
  would stay under them).
