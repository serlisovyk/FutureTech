# The limits are raised for the cards and the video modal; images are measured as a total

Date: 2026-10-28 · Status: accepted

## Context

The cards (`NewsCard`, `VideoCard`) and the video modal were built in parallel and are measured together. The modal
adds the first controller that every page loads besides the header, the cards add their styles and the first eight
card photos. The images entry counts every file `pluginImage` generates: each photo at every width of its `srcset`, in
AVIF and WebP, although a page loads one file per photo.

## Decision

- JavaScript: 1.5 kB → 2 kB (measured 1.6 kB gzipped).
- CSS: 4 kB → 4.5 kB (measured 4.33 kB gzipped).
- Images: 60 kB → 850 kB (measured 815.92 kB), still the total of all generated files.
- Fonts do not change. Limits stay by fact, rounded up with small headroom (`ci-size-limit`).

## Consequences

- Every section that adds photos raises the images limit in a new record; the number shows how much the build
  emits, not what a page loads, so a page's own weight is judged by `sizes` and by Lighthouse.
- Rejected: dropping the images entry (the author keeps it as a guard against an unexpectedly large source or a
  wrong `pluginImage` setting); measuring one width only (`size-limit` has no glob for one `srcset` step).
