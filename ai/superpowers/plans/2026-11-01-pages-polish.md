# Plan: polish after the author's review of the live site (MY-302)

Branch `my-302-pages-polish`. No spec: nothing here adds behavior, it is looks and markup. Records cited:
`borders-inside` (the new line and the paddings), `fluid-ramps` (every size), `image-formats` (the decor still goes
through `Photo`), `grey-text-and-control-borders` (the video duration stays white), `folders-and-barrels` (the new
icon is a sprite file, no new folder).

## What the review found and what changes

1. **Home hero decor.** The rays are drawn in the design with the blend mode `color-dodge` on about 440 groups, over
   the dark page: the grey end of each ray lightens what is under it, the black end changes nothing. The committed
   raster was drawn with the normal blend mode, so the rays came out black and coarse. The raster is replaced by one
   opaque render on `Dark/08` with the dodge applied, unrotated (894 x 606 at 2x). The CSS places it as the design
   does: width, left and top through the ramps, `transform-origin: 0 0` and a 35.4 degree rotation, clipped by the
   aside. This replaces `object-fit: cover`, which stretched the burst to the column at every width. The tone is
   matched to the design as drawn (the render's strength is tuned against the design's own picture).
2. **Home Resources, the line between Ebooks and Whitepapers.** `ResourceShowcase` is its own full-width block with
   `--border` above it from the second one on, its grid inside a `.container`; the panel's vertical line meets it.
   The block above the first is the heading band, which already has its line. The padding that touches the new line
   is reduced by its width (`borders-inside`). `data-reveal` moves to the grid inside.
3. **Preview with the eye.** The sprite already has `ui/eye` (the counter's); the design's Preview uses the same
   glyph in yellow, so the Preview button takes `icon="ui/eye"` and no second file is added. Preview appears only in
   the showcases (Home); the Resources page has none.
4. **VideoCard.** The duration moves to the bottom right of the preview, the play button stays bottom left.
   `.video-card__controls` is `justify-content: space-between`. The duration stays `--white`.
5. **NewsCard.** Cards in one grid row stretch to the row's height; the body fills the card and the footer takes the
   remaining space with `margin-block-start: auto`, so counters and "Read More" sit on one line at the bottom
   however many lines a title takes.

## Not changed

Header, footer, `base.css`, `VideoModal`, Contact and the article page (other tasks). No hover styles.

## Verification

The checks under "Verification" in `AGENTS.md`, `npm run size` numbers reported (the image budget moves with the new
decor). Then in `npm run dev`: Home at 1920, 1440, 390 and between against the design (the rays, the Resources
section, Preview), News, Podcasts and `/ui` for `VideoCard` (duration right, white), `NewsCard` rows on News, an
article's Similar News and `/ui` at 1920, 1440, 1024, 768 and 390; keyboard focus on the changed controls; no
horizontal scroll. No video is played.
