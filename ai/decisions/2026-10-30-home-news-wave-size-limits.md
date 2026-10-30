# The CSS and images limits are raised for the last Home sections and the News first screen

Date: 2026-10-30 · Status: accepted

## Context

The Home resources and testimonials sections and the News first screen (`PageIntro`, the featured story) were built in
parallel and are measured together. They bring their own styles, a ghost `Button` variant, and new photos: two
resource photos, ten portraits and the featured story photo. The images entry still counts every generated file
(decision `cards-and-modal-size-limits`).

## Decision

- CSS: 6 kB → 7 kB (measured 6.75 kB gzipped).
- Images: 2.1 MB → 2.7 MB (measured 2.65 MB).
- JavaScript and fonts do not change. Limits stay by fact, rounded up with small headroom (`ci-size-limit`).

## Consequences

- The next section that grows the CSS or adds photos raises the limit in a new record.
- Rejected: one record per section (each measured alone, none of the numbers would hold once the three are merged).
