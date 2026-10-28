# The CSS limit is raised to 4 kB for the header, the CTA and the footer

Date: 2026-10-28 · Status: accepted

## Context

The header, the CTA block and the footer are rendered by the layout, so their styles are in the one bundle every
page loads. With the borders-inside fix of the kit and the shared tokens they bring, the bundle grew from 2.13 kB to
3.71 kB gzipped, past the 2.5 kB limit that `ui-page-and-size-limits` set. The three blocks were built in parallel and
are measured together.

## Decision

- The CSS limit goes from 2.5 kB to 4 kB gzipped: the measured size rounded up with small headroom
  (`ci-size-limit`).
- The JavaScript (1.22 kB with the header controller), fonts and images limits do not change.

## Consequences

- The next section that grows the bundle past 4 kB questions its CSS first and raises the limit only by a new
  record.
- Rejected: one record per block (each measured alone, none of the numbers would hold once the three are merged);
  loading a block's stylesheet only where it is used (all three are on every page).
