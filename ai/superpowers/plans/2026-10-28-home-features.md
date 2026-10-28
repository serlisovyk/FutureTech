# Plan: the Home Features section (MY-264)

Branch `my-264-home-features`. No spec: the section has no behavior (no script, no state). Records cited:
`folders-and-barrels` (where a section and its parts live), `borders-inside` (the card and panel borders),
`fluid-ramps` (every size). minista API: none new; `Icon` and the kit are the existing wrappers.

## Where things live (decided here)

- `sections/home/Features/` is the section: `Features.jsx` (root `<section id>`, the `SectionHeading` and the two groups),
  `FeatureGroup.jsx` (one row: icon, title and text on the left, the grid of cards on the right) with `FeatureGroup.css`,
  `FeatureCard.jsx` (one `<li>` of the grid; it carries the `feature-group` card classes, like the footer's parts carry
  `footer`), and `index.jsx`. The group is a part of the section, not a kit component: only Home renders it.
- `sections/home/index.jsx` is the new group barrel; `sections/index.jsx` re-exports it. The page renders
  `<Features />` after the hero placeholder.
- `data/features.js` gets `featuresSection` (the anchor `id` the footer links to as `/#features`, the tag and the
  title); `featureGroups` already holds the rows. The research group gets `hasWideIcon`.

## Markup and layout

- `<section id="features">`, no accessible name of its own: `SectionHeading` has no id for its `h2`, and a kit prop for one
  is left to the task that needs it. Headings in order: `h2` (the band), `h3` (a group's title), `h4` (a card's title).
- A group is one `.container` grid: `intro | cards`. The intro is centred vertically; its width is the design's 413 /
  519 px (a ramp), capped at 34% so a narrow window keeps room for the cards; the gap is 60 / 80.
- The cards panel is a 2 x 2 grid with a left line (a 1px border, padding minus it); it starts after the line with
  padding 60 / 80 and reaches the content edge, as drawn. The first row at 1920 is drawn without the line: both rows
  have it, as at 1440.
- Below 1024 px the group stacks: intro (block padding 50), then the panel with a top line, padding 30 / 16; below
  768 px the grid is one column. The panel's top line is inside the container's inset, as the design draws it.
- The research icon is wider than tall (69.29 x 60 in its sprite): `hasWideIcon` widens its box by that ratio so it
  renders at the design's scale (92 x 80 at 1920); the square icons stay square. Colours come from the tokens through
  `--icon-accent` and `--icon-base`.
- Sizes (1920 / 1440 / 390): icon 80 / 60 / 50; icon to text 50 / 40 / 20; title to text 16 / 10 / 6; card padding
  `--space-card` 40 / 30 / 24; card gap 30 / 20 / 10; title to text in a card 20 / 16 / 4; card title 24 / 20 / 18.

## Docs

`ai/map.md`: the Home sections and `FeatureGroup`. No rule, skill or record changes. `npm run size` numbers are reported,
not changed (the orchestrator sets the limits for the wave).

## Verification

The checks under "Verification" in `AGENTS.md`. Then `/` in `npm run dev` at 1920, 1440 and 390: the group, card and
panel sizes against the design, the icon sizes, the stacking below 1024 and the one column below 768, the `#features`
anchor from the footer link, no horizontal scroll. No play button is clicked.
