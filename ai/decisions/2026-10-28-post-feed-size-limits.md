# The CSS and images limits are raised for the post feed

Date: 2026-10-28 · Status: accepted

## Context

The post feed adds two blocks to the one stylesheet every page loads (`PostRow` and `PostFeed`) and the first
avatars the rows render at their own sizes: four portraits, each in three widths and two formats. The images
entry counts every generated file (`cards-and-modal-size-limits`).

## Decision

- CSS: 4.5 kB → 5 kB (measured 4.69 kB gzipped).
- Images: 850 kB → 900 kB (measured 846.67 kB with the post feed avatars).
- JavaScript (1.82 kB of 2 kB) and fonts do not change. Limits stay by fact, rounded up with small headroom
  (`ci-size-limit`).

## Consequences

- The JavaScript limit has 0.18 kB left: the next widget that ships to every page is questioned against it first.
- Rejected: fewer avatar widths (a 2x screen would upscale the 80 px avatar); dropping the images entry.
