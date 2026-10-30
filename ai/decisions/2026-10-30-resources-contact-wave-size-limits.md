# The CSS and images limits are raised for the Resources cards and the first Contact sections

Date: 2026-10-30 · Status: accepted

## Context

The Resources cards, the Contact info columns and the Contact FAQ were built in parallel and are measured together.
They add their own styles, a compact ghost `Button`, and three card photos. The images entry still counts every
generated file (decision `cards-and-modal-size-limits`).

## Decision

- CSS: 8 kB → 9 kB (measured 8.72 kB gzipped).
- Images: 3.7 MB → 4.2 MB (measured 4.08 MB).
- JavaScript and fonts do not change. Limits stay by fact, rounded up with small headroom (`ci-size-limit`).

## Consequences

- The next section that grows the CSS or adds photos raises the limit in a new record.
- Rejected: one record per section (each measured alone, none of the numbers would hold once they are merged).
