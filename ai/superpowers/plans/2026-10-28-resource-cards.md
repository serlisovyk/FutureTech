# Plan: the Resources cards (MY-275)

Branch `my-275-resource-cards`. No spec: no new behavior (the "View Details" links use the URL-hash behavior of `Tabs`).
Records cited: `folders-and-barrels` (where the blocks live), `borders-inside` (the lines), `fluid-ramps` (every size),
`image-formats` (photos go through `Photo`). minista API: none new.

## Author decisions

- "View Details" links to the matching tab of the reports section: `/resources#<tab>`, the tab id picked per card
  (FutureTech Trends 2024 and Space Exploration Ebook: `ebooks`; Quantum Computing Whitepaper: `whitepapers`).
- "Download PDF Now" links to `/contact`, as the resource rows do (`resourceLibrary.downloadHref`).

## Where things live (decided here)

- `sections/resources/ResourceCards/` (`ResourceCards.jsx`, `ResourceCard.jsx`, their stylesheets, `index.jsx`): the section
  (id `resource-cards`) and its part, a line in the group barrel `sections/resources/index.jsx`, and the last block of
  `pages/resources.jsx`.
- `ResourceCard` is a section part, not a `components/cards/` component: nothing else renders it, and its two links
  (a tab of this page, the download) are this page's. If another page needs it, it moves to `components/cards/`.
- `data/resources.js` gets `resourceCardsSection` (id, title id, hidden heading, the "View Details" label) and each
  `resourceCards` item a `titleId` and a `detailsHref`. The title ids carry `-card-` so they never meet the
  `ResourceLibrary` row ids (`quantum-computing-whitepaper-title`). The download label and href are the existing
  `resourceLibrary` ones. `data/card-photos.js` gets the `sizes` of the card photo.
- The design gives the cards no heading band: the section has a visually-hidden `h2` (as `TrendingStories`), each card is an
  `article` named by its `h3`.
- Photos: `vr-business-interface.jpg`, `astronaut-planet-vinyl.jpg` and `light-waves-abstract.jpg` (JPEG q92 4:4:4,
  source size, never upscaled).

## Layout

- A full-width section with a line above it; a `container` grid of three columns, the column gap 60 / 92 with a vertical
  line in the middle of it (the line is a pseudo-element of the item, as in the Latest Podcasts grid). Under 768 px one
  column, a horizontal line above the second and the third card inside the container.
- A card: block padding 80 / 60 / 40 (less the 1 px line above it), gap 30 / 24 / 20; the photo 471 x 290 / 387 x 290 /
  358 x 223 (radius `--radius-card`); a text block (gap 14 / 10 / 10) with the title (`--font-size-card-title`, Inter 600,
  white) and the text; a row of two buttons, "View Details" `outline` and "Download PDF Now" `ghost`, equal width, gap
  20 / 10 / 10.
- The buttons take the design's height (63 / 49 / 49) through the card's own block padding: the kit's `ghost` is 57 high
  below 1920. Between 768 and about 1100 px the columns are too narrow for two buttons: the row wraps, each button no
  narrower than its text.
- Each button's name ends with the card's title (a visually-hidden `: <title>`), so the six links are told apart.

## Deviations and inventions (reported)

- The hidden `h2` text ("Featured resources") is invented: the design has no heading here.
- The design's "Download PDF Now" is 8 px radius at 1920 where the kit's `outline` is 12: each kit variant keeps its own.

## Docs

`ai/map.md` (the Resources sections line, the data line). No rule or decision changes.

## Verification

The checks under "Verification" in `AGENTS.md`, `npm run size` numbers reported. Then `/resources` in `npm run dev` at
1920, 1440 and 390 against the design sizes, the widths between (768 to 1100 especially), the keyboard (Tab through the six
links, a "View Details" link opens its tab and scrolls to it), no horizontal scroll, and without scripting.
