# Fonts are self-hosted static woff2 files, latin subset; Inter 400, Inter 500 and Kumbh Sans 500 are preloaded

Date: 2026-11-01 · Status: accepted

## Context

`self-hosted-fonts` preloaded two faces: Inter 400 (the text of every first screen) and Kumbh Sans 500 (its headings).
Inter 500 is also on the first screen of nearly every page (the active menu item, the Contact Us button), and the browser met it only after it had read the stylesheet. The author asked for a third preload.

## Decision

- **Kept from `self-hosted-fonts`:** six static `woff2` files, one per face and weight (Kumbh Sans 400, 500, 600; Inter 400,
  500, 600), latin subset only, copied once from the `@fontsource` packages (SIL OFL 1.1), which are not dependencies. The
  `@font-face` rules are in one stylesheet with `font-display: swap`. No request to Google Fonts or any font CDN, at build or at
  run time. A weight, a style or a face the design does not use is not added.
- **Three preloads**, in `FontPreloads`: Inter 400, Inter 500, Kumbh Sans 500. The other three weights load when a rule asks
  for them.

## Consequences

- About 112 KB of fonts in total; a page downloads only the faces it renders, and three of them are asked for at once.
- A page whose first screen has no Inter 500 (News at 390 px, Podcasts at 1920 px) still uses it further down, so the preload is
  not wasted.
- A character outside the latin subset falls back to the system font. A new weight is a new file, a new `@font-face` rule and
  the author's decision.
- Rejected: preloading all six files, or the Inter 600 and Kumbh Sans 400 and 600 that some first screens also draw (each
  competes with the first screen's image and stylesheet for the same bandwidth; a fourth preload is a new decision); Google
  Fonts (a third-party connection and visitor data sent to it); the `@fontsource` packages as dependencies (a build dependency
  for six files); variable fonts (one file carries the whole weight axis, which pays off from about four weights per family).
