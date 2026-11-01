# The JS and images limits are lowered after the review fixes

Date: 2026-11-01 · Status: accepted

## Context

The fixes after the author's review of the live site removed the table of contents script and re-rendered the Home
hero decor as an opaque raster, while one article hero went back to its full-size source. Measured together, the
JavaScript and the images now sit well under their limits, which would let a regression grow unnoticed.

## Decision

- JavaScript: 4.5 kB → 4 kB (measured 3.61 kB gzipped).
- Images: 4.5 MB → 3.7 MB (measured 3.58 MB).
- CSS (11.29 kB of 11.5 kB) and fonts do not change. Limits stay by fact, rounded up with small headroom
  (`ci-size-limit`).

## Consequences

- A limit goes down when a wave makes a bundle lighter, not only up when it grows.
