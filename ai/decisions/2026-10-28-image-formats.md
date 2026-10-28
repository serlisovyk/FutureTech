# Photos ship as AVIF with a WebP fallback, through one component

Date: 2026-10-28 · Status: accepted

## Context

The design has many photos (hero, news, video, podcast and resource cards), and they are the heaviest
part of every page. The sources are PNG files up to 1380 px wide. minista's image plugin can output several
formats and widths, and its defaults (eleven widths up to 3840 px, no quality) are not tuned for this site.

## Decision

- The `Photo` component renders a `<picture>`: an AVIF `<source>` and a WebP `<img>`, no JPEG. AVIF is
  decoded by every browser the site targets; a `type` attribute is added to each `<source>` after the build
  (minista leaves it out) so an older browser skips what it cannot decode.
- Quality, on sharp's scale: AVIF 60, WebP 78. Measured on the first photo against its 4:4:4 JPEG source:
  38.3 dB (AVIF) and 37.3 dB (WebP), no visible difference at 3x zoom; at 1060 px AVIF is 59 KB, WebP 69 KB,
  the source 204 KB.
- Widths 360, 720, 1080, 1440 and 1920 px, never above the source (the cards are 358 to 512 px wide, twice that
  for a 2x screen). An image that is wider on the page passes its own list.
- Lazy by default; the photo of the first screen is `loading="eager"` with `fetchPriority="high"`.
- A source in `assets/images/` is kept near the largest size drawn, not as the design exports it.

## Consequences

- Up to ten files per photo in `dist/`, the browser downloads one.
- A raster of hairlines with alpha (the hero decor) is far heavier as WebP (545 KB at 1306 px) than as AVIF
  (322 KB): such an image is watched in the size budget and may drop the WebP step.
- Changing a quality or a width list changes every photo at once, in `vite.config.js`.
- Rejected: a JPEG fallback (a third more files, for browsers that decode neither AVIF nor WebP); one format
  through `Image` (gives up the 15 % AVIF saves over WebP); minista's default widths (twenty-two files
  per photo); a higher quality (the size grows faster than the look improves).
