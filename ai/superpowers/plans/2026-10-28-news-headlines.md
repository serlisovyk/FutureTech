# Plan: the News trending cards and the news hub (MY-269)

Branch `my-269-news-headlines`. No spec: both blocks only render kit components; the one behavior, filtering by tab, is
`PostFeed`'s own. Records cited: `folders-and-barrels` (where the blocks live), `fluid-ramps` (every size),
`borders-inside` (the line the hub heading draws). minista API: none.

## Where things live

- `sections/news/TrendingStories/` (`TrendingStories.jsx`, `TrendingStories.css`, `index.jsx`) and
  `sections/news/NewsHub/` (`NewsHub.jsx`, `index.jsx`); two lines in `sections/news/index.jsx`. `pages/news.jsx` renders
  them after `FeaturedNews`, cards first, then the hub.
- `data/news.js`: `trendingStories` (id `trending-stories`, title id, the visually hidden heading text, placement
  `trending`) and `newsHub` (id `news-hub`, title id, feed id, tag, title, the "View All News" link, placement
  `headlines`). Both ids are the anchors the footer already links to. The cards and the rows are the posts of those
  placements (`getPostsByPlacement`); the tab list is `newsCategories`, the blog list stays `blogCategories`.
- No new photo: the three card photos and the three avatars the section renders are already in `assets/images/`.

## Layout

- `TrendingStories`: a `section` with the block padding `--space-section` (80 / 60 / 40), a `container`, and a grid of
  three `NewsCard`s with a 30 px gap, one column under 768 px. The design gives the row no heading band and no line, so
  the section has none either; it is labelled by a visually hidden `h2` ("Trending Stories"), which keeps the heading
  order `h1`, `h2`, card `h3`s.
- `NewsHub`: the Home `Blogs` pattern. `SectionHeading` (tag "Welcome to Our News Hub", title "Discover the World of
  Headlines", the link) over `PostFeed` with `newsCategories` and the `headlines` posts, no limit.
- The link "View All News" goes to `/#blogs`: there is no all-news page, so it points to the other article list
  (orchestrator decision, the author may change it).
- Mobile tab bar: `PostFeed` already scrolls horizontally with padding on the scroll container; checked that the focus
  ring is not clipped at 390, fixed in `PostFeed.css` only if it is.

## Verification

The checks under "Verification" in `AGENTS.md`, `npm run size` numbers reported. Then `/news` in `npm run dev` at 1920,
1440 and 390 against the design sizes (cards 512 / 407 / 358 wide, the hub rows), widths between, keyboard on the tabs
and the card links, no horizontal scroll, the footer anchors `/news#trending-stories` and `/news#news-hub`, and the page
without JavaScript.
