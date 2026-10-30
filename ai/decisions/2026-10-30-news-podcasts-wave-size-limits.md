# The CSS and images limits are raised for the rest of News and the top of Podcasts

Date: 2026-10-30 · Status: accepted

## Context

The News trending cards, news hub and featured videos, and the Podcasts intro and top shows were built in parallel and
are measured together. They add their own styles and four photos (two video posters, two show photos). The images
entry still counts every generated file (decision `cards-and-modal-size-limits`).

## Decision

- CSS: 7 kB → 7.5 kB (measured 7.16 kB gzipped).
- Images: 2.7 MB → 3 MB (measured 2.97 MB).
- JavaScript and fonts do not change. Limits stay by fact, rounded up with small headroom (`ci-size-limit`).

## Consequences

- The next section that grows the CSS or adds photos raises the limit in a new record.
- Rejected: one record per section (each measured alone, none of the numbers would hold once they are merged).
