# Plan: News Featured Videos (MY-270)

Branch `my-270-news-videos`. No spec: the section has no behavior of its own, the ▶ is the `PlayButton` contract that
`VideoModalController` already serves. Records cited: `folders-and-barrels` (where the section lives),
`borders-inside` (the lines between the cards), `fluid-ramps` (every size), `image-formats` (the posters go through
`Photo`). minista API: none new.

## What changes

- `data/news.js`: `featuredVideos` (anchor id `featured-videos`, title id, tag, title and the "View All" link). The four
  videos are `data/videos.js`, unchanged.
- `sections/news/FeaturedVideos/` (`FeaturedVideos.jsx`, `FeaturedVideos.css`, `index.jsx`): a
  `<section id="featured-videos">` with the shared `SectionHeading` (tag, title, link) and a list of `VideoCard`s; a line in
  `sections/news/index.jsx`; `pages/news.jsx` renders it after `FeaturedNews`.
- `assets/images/photos/`: `puzzle-head-brain.jpg` and `stock-chart-open-hand.jpg`, the two posters that were missing
  (JPEG q92 4:4:4; the first one scaled down to 1080 px wide, the widest `Photo` width, the second is 1060 px).
- `ai/map.md`: the section, the `news` data line.

## Layout

- The grid is 2 x 2 above 768 px and one column below; the pattern is the Home testimonials': every cell has the block
  padding `--space-section` (80 / 60 / 40, which is the drawn 702 / 555 row against the card), a line under it, and a
  vertical line in the middle of the column gap on the second column's cells. The column gap is 160 / 100 (the `/ui`
  video grid's), so the poster is 718 / 590 wide; at 390 the cards stack with a line under each.
- The cells are the items of a `<ul>`; the card is the `VideoCard` as it is (poster, ▶, duration, title, text).
- The heading link is "View All" to `/podcasts`: there is no all-videos page and the Podcasts page has more videos (the
  orchestrator's decision, the author may change it); it is a field of the data.

## Verification

The checks under "Verification" in `AGENTS.md`, `npm run size` numbers reported. Then `/news` in `npm run dev` at 1920,
1440 and 390: the poster 718x412 / 590x331 / 358x210, the lines, no horizontal scroll, `/news#featured-videos` lands on
the section, the ▶ buttons carry the right `data-video-id` and `data-video-title` (read from the DOM, never clicked).
