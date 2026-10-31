# Plan: the article sidebar (MY-285)

Branch `my-280-article-layout` (after MY-280). Spec: `ai/superpowers/specs/2026-10-30-article-sidebar.md`. Records cited:
`article-data` (the contents come from `body`), `oop-javascript` (the classes), `borders-inside`, `fluid-ramps`. minista API: none.

## Decisions here

- Mobile: the Table of Contents is a plain list, as drawn (no `Disclosure`). The sidebar comes first in the DOM, so it is above
  the text at every width below 1024 px; from 1024 px the grid puts it in the second column.
- Reading time: `getReadingTime(body)` in `utils/` (words of the paragraphs over `READING_SPEED.wordsPerMinute` in
  `utils/constants.js`, rounded up); `getArticleMeta(post, labels)` builds the four facts in the design's order. The data's `readingTime`
  is removed from every post. The healthcare post now reads "5 Min" where the design shows "10 Min": the design's text is
  placeholder, the count is of the real text.
- The like is the kit's `CounterPill` as a `<button aria-pressed>` (props `likeKey`, `likedCount`) plus a large size (`isLarge`: 130 x
  54, icon 34, fill `Dark/08`, as drawn on this page); both are added to `/ui`. Both counts are formatted at build
  (`formatCount(likes)`, `formatCount(likes + 1)`), so the browser holds no formatter. The button renders `disabled`; `LikeButton.start()`
  enables it.

## Scripts

- `LikeButton` (`scripts/components/`, root the button `data-like="<slug>"`, `data-like-count` inside, `data-liked-count` on the
  root): `start()` reads `localStorage` (key from `STORAGE.likePrefix` plus the slug; every access in `try`/`catch`
  with a fallback), renders `aria-pressed` and the count, and toggles on click. One row in `main.js`.
- `TableOfContents` (`scripts/components/`, root `data-table-of-contents`, links `data-table-of-contents-link` whose `hash`
  names the section; the option `scope` is where the sections are looked up). `onNavigate(handler)` reports the target before the scroll;
  a click scrolls (`smooth`, `auto` under reduced motion), focuses the section, pushes the hash. An `IntersectionObserver` over the
  sections, with `rootMargin` `0px 0px -80% 0px` (the top fifth of the screen), keeps the set of sections in that band; the last of
  them in document order is current and gets `aria-current="location"`, and with none in the band the mark stays.
- `ArticleController` creates it with `scope: root` and opens the `Disclosure` from `onNavigate` when the target is in the closed region.

## Markup and styles

- `ArticleSidebar` (`aside`, `aria-label`) holds the counters row, then a block of the `MetaGrid` (2 x 2 grid) and
  `TableOfContents` (`nav` named by its `h2`, a list of links in a `Dark/10` card). Data: `data/article.js` (labels, the title and ids).
- `.article__layout` is a grid `1fr | sidebar` from 1024 px (the sidebar 682 / 570 wide at 1920 / 1440, a line at its start),
  one column below. The sidebar is a flex column; its details block stretches to the column's height so the sticky card has room.
  Paddings 80 / 60 / 24 at the start and 162 / 80 / 24 at the end of the body, mirrored in the sidebar; the custom properties
  are on `.article`.
- The links get a larger invisible hit area; the toggle too.

## Deviations (reported)

- Between 1024 and 1440 the sidebar width is interpolated (the design draws only 570 and 682); the current link is yellow (not drawn).
- The counter order is likes, views, shares: the design's 24.5k, 50k, 206 are the post's likes, views and shares.

## Verification

The checks under "Verification" in `AGENTS.md`, `npm run size` numbers reported. Then the healthcare post and two others in
`npm run dev` at 1920, 1440 and 390: like (mouse, keyboard, reload, storage blocked), contents clicks with the text collapsed and open,
highlight while scrolling both ways, sticky, reduced motion, no scripting, no horizontal scroll.
