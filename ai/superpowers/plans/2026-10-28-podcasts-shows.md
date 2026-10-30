# Plan: the Podcasts hero and the two shows (MY-271)

Branch `my-271-podcasts-shows`. No spec: the only behavior is the existing video modal, opened by two existing
controls (`PlayButton`, `Button` with `videoId`). Records cited: `folders-and-barrels` (where the blocks live),
`borders-inside` (the lines), `fluid-ramps` (every size), `image-formats` (photos go through `Photo`),
`video-sources` (the show videos). minista API: none new.

## Where things live (decided here)

- `sections/podcasts/PodcastsIntro/` renders the shared `PageIntro` with its data, as `NewsIntro` does; it holds the
  page's only `h1`.
- `sections/podcasts/TopPodcasts/` (`TopPodcasts.jsx`, `PodcastShow.jsx`, `PodcastShow.css`, `index.jsx`): the section
  (id `top-podcasts`, the target of the footer links) maps `podcasts` to `PodcastShow`. A new group barrel
  `sections/podcasts/index.jsx`, re-exported by `sections/index.jsx`.
- `data/podcasts.js` gets `podcastsIntro` (title id, the two title lines, the paragraph) and `topPodcasts` (section id,
  title id, title); each show gets a `titleId` and a `ratingLabel` (the screen-reader text of the five stars).
  `data/card-photos.js` gets the `sizes` of the show photo.
- `pages/podcasts.jsx` keeps `metadata`, drops the placeholder and renders `<PodcastsIntro />` and `<TopPodcasts />`.
- Photos: `assets/images/photos/ai-brain-circuit-hand.jpg` and `robot-human-hand.jpg`, the names `data/podcasts.js`
  already uses (JPEG q92 4:4:4, source 626 px wide: the design's own file, never upscaled). The design draws no host
  portrait, so none is added.

## Layout

- `TopPodcasts`: a `section` labelled by a visually hidden `h2` ("Top Podcasts", the design has no visible heading
  there); each show is an `article` labelled by its `h3`. Heading order: `h1`, `h2`, `h3`, then the lead title `h4`.
- `PodcastShow`: a line above it (full width), a `container` grid `[intro | panel]`. The intro column is
  `min(413 -> 519, 34%)`, the same measure as the Home feature groups, gap 60 / 80, vertically centred. The panel has
  the column divider as its start border and padding 60 / 80 (minus the border on the divider side and the top).
  Under 1024 px the grid is one column, the intro above the panel, row gap 40; the panel becomes a card under a top
  line with padding 40 x 24.
- Intro: the show icon (two-tone, 60 / 80 / 50), the title (Kumbh 600, 40 / 24 / 20) with the five-star pill
  (24 / 20 / 18 stars) beside it, then the host plate (`MetaGrid` with one pair: Host and the name; the outline
  `Button` "Listen Podcast" opens the show video; the plate keeps its design padding and radius).
- Panel: the video preview (height 412 / 297 / 157, radius 20 / 16 / 12, the bottom fade like the video cards) with
  the `PlayButton` centred, the lead title (Inter 600, 26 / 22 / 18) and text, and the three stats as `MetaGrid`
  `isCard` (the design's gap 20 / 16 / 14; stacked under 768 px by `MetaItem`).
- Both controls get the show title as the video title, so the modal and the accessible names say which show opens.

## Deviations from the design (reported)

- The design's host plate is a 4 px gap between text and button; kept. The lead title is a heading (`h4`) in the DOM
  although the design draws only text.

## Verification

The checks under "Verification" in `AGENTS.md`, `npm run size` numbers reported. Then `/podcasts` in `npm run dev` at 1920,
1440 and 390 against the design sizes, widths between, 200% zoom, keyboard (the play button and the link, focus
ring), no horizontal scroll. The play controls are never clicked: their `data-video-id` and `data-video-title` are read
from the DOM.
