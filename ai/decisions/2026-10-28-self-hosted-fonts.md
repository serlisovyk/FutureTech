# Fonts are self-hosted static woff2 files, latin subset

Date: 2026-10-28 · Status: accepted

## Context

The design sets headings in Kumbh Sans and text in Inter. The pages use Kumbh Sans 400, 500, 600 and Inter 400,
500, 600; the design guide lists Inter up to Bold, but no page uses it. The site must score 100 on Lighthouse
and should send no visitor data to a third party.

## Decision

- Six static `woff2` files, one per face and weight, in `assets/fonts/`, latin subset only. They were copied
  once from the `@fontsource` packages (both SIL OFL 1.1); the packages are not dependencies.
- The `@font-face` rules are in one stylesheet (`fonts.css`) with `font-display: swap`. The layout preloads
  Inter 400 (the text of every first screen) and Kumbh Sans 500 (its headings); the other weights load when
  a rule asks for them.
- No request to Google Fonts or any font CDN, at build or at run time.
- A weight, a style or a face the design does not use is not added (`ai/rules/assets-performance.md`).

## Consequences

- About 112 KB of fonts in total; a page downloads only the faces it renders.
- A character outside the latin subset (a symbol in a quote, say) falls back to the system font.
- A new weight is a new file, a new `@font-face` rule and the author's decision; a font update is a copy of a
  newer file.
- Rejected: Google Fonts (a third-party connection and visitor data sent to it); the `@fontsource` packages
  as dependencies (a build dependency for six files); variable fonts (one file carries the whole weight axis,
  which pays off from about four weights per family); preloading all six files (it competes with the first
  screen for the same bandwidth).
