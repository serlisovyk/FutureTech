# Plan: the Home Resources section (MY-266)

Branch `my-266-home-resources`. No spec: the section has no behavior (no script, no state). Records cited:
`folders-and-barrels` (where a section and its parts live), `borders-inside` (card and panel borders),
`fluid-ramps` (every size), `image-formats` (photos). minista API: none new; `Photo` and `Icon` are the existing wrappers.

## Where things live (decided here)

- `sections/home/Resources/` is the section: `Resources.jsx` (root `<section id="resources">`, the `SectionHeading` with
  its "View All Resources" link, and the two showcases), `ResourceShowcase.jsx` with `ResourceShowcase.css` (one row: icon,
  title, lead, download button and the "Downloaded By" block on the left; overview, photo and facts on the right), and
  `index.jsx`. The row is a part of the section, not a kit component: only Home renders it (the Resources page rows have
  four cells and another button).
- `data/resources.js` gets `resourcesSection` (anchor `id`, `titleId`, tag, title and the link to `/resources`);
  `resourceShowcases` already holds the rows. Both rows link their Download and Preview buttons to `/resources`.
- The page renders `<Resources />` after `<Blogs />`; `sections/home/index.jsx` gets the line.
- Photos copied from the design's sources: `vr-library-students.jpg`, `ai-hand-circuit-board.jpg` (JPEG q92 4:4:4),
  portraits `portrait-woman-beanie-denim`, `portrait-man-black-blazer`, `portrait-man-beard-green-sweater`,
  `portrait-woman-white-tee` (PNG with alpha, as the other portraits).

## Markup and layout

- A row is one `.container` grid `left | right`, as the Features rows: the left column is 413 / 519 px (a ramp) capped
  at 34%, gap 60 / 80, centred vertically. The right column has a left line (1px border, padding minus it), padding 80 / 60.
- Left: `Icon` (80 / 60 / 50, the two palette colours), an `h3` (`Heading`, size `h3`), the lead, a download `Button`
  (outline, restyled to the ghost look: `Dark/10` fill, control radius, full column width), then the audience block:
  "Downloaded By" over "10k + Users" and an `AvatarGroup`.
- Right: the overview row (`h4` title and text side by side, stacked at 390), a `Photo` (917x332 / 747x275 / 358x169,
  `alt=""`: decorative), a facts row (the total in a `MetaGrid` card that hugs its text, the formats card with the Preview
  button, a plain `div` card because a button cannot live inside a `dl`), and the expertise card (`MetaGrid`, one card).
- Below 1024 px the row stacks: the left column, then the right with a top line inside the container's inset (padding 40),
  rows 40 apart; below 768 px the overview and the facts stack (cells 100%).
- The design draws a line on top of the second row at 1440 only; it is not drawn at 1920 or 390, so no line is drawn
  (the Features rows have none either).
- Each row is a `div`; the headings are `h2` (band), `h3` (row), `h4` (overview). No `aria-labelledby` per row: the `h3`
  is its label and the rows are not landmarks.
- Sizes (1920 / 1440 / 390): see the design; written as ramps in the stylesheet.

## Docs

`ai/map.md`: the Home Resources section and the new `resourcesSection` data. No rule, skill or record changes.
`npm run size` numbers are reported, not changed (the orchestrator sets the limits for the wave).

## Verification

The checks under "Verification" in `AGENTS.md`. Then `/` in `npm run dev` at 1920, 1440 and 390: row, cell and photo sizes
against the design, the stacking below 1024 and 768, the `#resources` anchor from the footer link, keyboard focus on the
buttons, no horizontal scroll. No play button is clicked.
