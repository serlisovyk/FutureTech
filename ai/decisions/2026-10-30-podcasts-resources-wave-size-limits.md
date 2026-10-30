# The JS, CSS and images limits are raised for the Podcasts episodes and the Resources page

Date: 2026-10-30 · Status: accepted

## Context

The Podcasts latest episodes, the Resources intro with its count-up counters and the Resources reports were built in
parallel and are measured together. `CountUp` is the first script that animates on every page that shows a `Stat`, and
`Tabs` learned to open the tab a URL hash points to. The sections add their own styles and six photos. The images entry
still counts every generated file (decision `cards-and-modal-size-limits`).

## Decision

- JavaScript: 2 kB → 2.5 kB (measured 2.26 kB gzipped).
- CSS: 7.5 kB → 8 kB (measured 7.8 kB gzipped).
- Images: 3 MB → 3.7 MB (measured 3.64 MB).
- Fonts do not change. Limits stay by fact, rounded up with small headroom (`ci-size-limit`).

## Consequences

- The next widget or section that grows a bundle raises its limit in a new record.
- Rejected: one record per section (each measured alone, none of the numbers would hold once they are merged).
