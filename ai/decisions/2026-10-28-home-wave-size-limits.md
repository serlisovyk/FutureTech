# The CSS and images limits are raised for the first Home sections

Date: 2026-10-28 · Status: accepted

## Context

The Home hero, the features and the blog section were built in parallel and are measured together. The features and
the hero bring their own styles. The hero brings the decor, the largest photo so far: a raster in three widths, each in
AVIF and WebP, loaded eagerly on the first screen. The images entry still counts every generated file (decision
`cards-and-modal-size-limits`).

## Decision

- CSS: 5 kB → 6 kB (measured 5.6 kB gzipped).
- Images: 900 kB → 2.1 MB (measured 2.06 MB; the hero decor alone is about 1.2 MB of it, mostly its WebP fallbacks).
- JavaScript and fonts do not change. Limits stay by fact, rounded up with small headroom (`ci-size-limit`).

## Consequences

- The next section that adds photos raises the images limit in a new record.
- A browser that reads AVIF loads one AVIF of the decor (58–165 kB by width); the WebP files only reach browsers without
  AVIF.
- Rejected: dropping the widest decor width (the aside is 653 px wide at 1920, a 2x screen needs it); inlining the
  vector decor (the author chose a raster for the first screen).
