# Plan: polish of the shared blocks (MY-300)

Branch `my-300-shared-polish`. No spec: there is no new behavior beyond the page transition, which the browser runs from
CSS alone. A record is added for the page transition (a convention with an obvious alternative: a script-driven or
no transition).

## Causes found

- **Nav jump.** On desktop only the `aria-current` link has padding, a border and a heavier weight, so the plate adds
  36 px of width and the centred nav shifts differently on every page; the 500 weight also widens the text by up to
  1 px. The drawer links already reserve the plate.
- **Social icons.** The design draws the glyphs in a 24 px frame at 24 / 20 / 20: the LinkedIn square is 20.8 px at
  1.6 and the bird 22.8 px at 0.6, so at 20 px their edges fall on fractions of a pixel. `--size-icon` is also
  fractional between 1440 and 1920.
- **GitHub icon.** It is centred on the line box, which sits about 1 px above the optical middle of the text.
- **Modal jump.** The scrollbar disappears when the modal locks the page.

## Changes

- `Header.css`: every desktop link keeps the plate (padding, transparent border, radius) and the list gap shrinks by
  the plate's padding plus border, so the active pill sits as drawn; a hidden copy of the label in the 500 weight
  reserves the text width (`data-label`).
- `base.css`: `scrollbar-gutter: stable` on `html`; `-webkit-tap-highlight-color: transparent`; the cross-document
  view transition (`prefers-reduced-motion: no-preference`) with the group duration from `--transition-duration`.
  `Header.css`: `view-transition-name: header` and no animation on that group, so the header stays put.
- `variables.css`: `--size-icon` rounded to whole pixels.
- Social sprites: `viewBox` cropped to the glyph's width (Twitter) or scaled so the glyph is a whole number of pixels at
  20 px (LinkedIn), Medium already spans the frame.
- `Footer.css`: the GitHub link nudged down 1 px to the optical middle of the text.

## Verification

The checks under "Verification" in `AGENTS.md`; the header measured on every page at 1440 / 1920 and in the drawer;
the modal opened with the YouTube source stubbed to `about:blank` (no video plays); the icons compared pixel by pixel
before and after at 20 px; `npm run size` numbers reported.
