# Plan: the Podcasts latest episodes (MY-272)

Branch `my-272-podcasts-episodes`. Spec: `ai/superpowers/specs/2026-10-28-podcasts-episodes.md`. Records cited:
`folders-and-barrels` (where the section lives), `borders-inside` (the lines), `fluid-ramps` (every size),
`image-formats` (photos go through `Photo`), `video-sources` (the episode videos). minista API: none new.

## Author's answers

- As on the Home testimonials: at 390 three episodes show and a button reveals the other three in place, on
  `Disclosure`; from 768 px and without JavaScript all six show and the button is hidden. The design has no button
  here, so its label is "View All Episodes".

## What changes

- `src/data/podcasts.js`: `latestPodcasts` (the anchor id `latest-podcasts`, `titleId`, the id of the hidden group, tag,
  title, button label, the number shown first) beside the existing `episodes`.
- `src/sections/podcasts/LatestPodcasts/`: `LatestPodcasts.jsx` (the `<section>` is the `Disclosure` root: the button
  sits in the heading band, the second group of three is the region), `EpisodeGroup.jsx` (a list of `VideoCard`s with
  `isEpisode`), their two stylesheets and `index.jsx`; the line in `sections/podcasts/index.jsx`;
  `pages/podcasts.jsx` renders it after `TopPodcasts`.
- Reuse: `VideoCard` already is the episode card (preview, play button, duration, Listen Podcast); the play control and
  the button already carry `data-video-id`, so the existing modal controller opens them. The section is the same
  Disclosure reveal as `Testimonials`, with the same markup and CSS approach.
- `src/data/card-photos.js`: the episode `sizes` get the two-column step (768 to 1023 px), where a card is wider than
  a third of the row.
- Photos: `vr-pod-laptop.jpg` and `vr-headset-couch.jpg`, the two the data names and the repo lacks (JPEG q92 4:4:4,
  the design's own files, never upscaled).
- `ai/map.md`.

## Layout notes

- Row padding is `--space-section` (80 / 60 / 40) with a 1px bottom line; the column gap is 60 at 1440 growing to 92 at
  1920 (the design's 46 plus 46 of card padding), the line sits in the middle of it.
- Two lists (`ul`) carry the six items so that `Disclosure` has one region; both are `display: contents`, so the six
  cards are one grid. The column lines depend on the item's place, which differs per group at two columns.

## Deviations from the design (reported)

- The design's Mobile frame shows three episodes; the site shows three with the reveal (author's decision).
- The Mobile tag is 12 px in the design against 14 px for every other tag; the tag component stays as it is.

## Verification

The checks under "Verification" in `AGENTS.md`, `npm run size` numbers reported. Then `/podcasts` in `npm run dev` at 1920,
1440 and 390 against the design sizes, 800 for two columns, `/podcasts#latest-podcasts`, the button by mouse and keyboard,
no horizontal scroll, the page without JavaScript. The play controls are never clicked: their `data-video-id` and
`data-video-title` are read from the DOM.
