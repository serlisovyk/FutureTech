# Plan: scroll jump on feed tabs, article overflow at 320 (MY-323)

Branch `my-323-scroll-overflow`. No spec: both are bug fixes that restore the intended behavior (a tab focus does not move
the page, no page is wider than the viewport); no new behavior. No decision record: nothing a rule or a record says changes.

## Causes found (measured in headless Chrome before the change, scrollbars hidden)

- **Scroll jump.** `.post-feed__tab` carries `scroll-margin-block-start: fluid(330, 330, 460)`. The margin is meant for the
  footer links (`/news#news-hub-feed-tab-health`, `/#blogs-feed-tab-<slug>`), which target the tab and need the section
  heading to stay in view, but it also applies when a script or the keyboard focuses a tab. With the tab list in the top
  330 px of the viewport, ArrowRight / ArrowLeft and Shift+Tab move the page by 190-213 px (1440 and 390, `/news` and `/`).
- **Overflow at 320.** `.article-sidebar__counters` is a flex row that does not wrap, so its three counters push the page
  wider than the viewport: `the-rise-of-artificial-intelligence-in-healthcare` by 9 px and
  `tech-giants-announce-new-product-line` by 1 px (the other nine articles and every other page fit).

## Changes

- `PostFeed.css`: the `scroll-margin-block-start` moves from `.post-feed__tab` to `.post-feed__tab:target`, so only the
  fragment navigation to a tab uses it. Check that a tab that stays `:target` after a footer link does not jump when it
  is focused again; if it does, the rule is narrowed further.
- `ArticleSidebar.css`: `flex-wrap: wrap` on `.article-sidebar__counters` (the `row-gap` stays the 14 px `gap`).
- No doc changes expected: no rule, map entry or record mentions either declaration.

## Verification

Headless Chrome (DevTools port 9571) against `npx minista preview --port 5171`, before and after, with YouTube requests
blocked:

- `/news` and `/`: focus a tab with the tab list in the top 330 px, press ArrowRight / ArrowLeft / Tab / Shift+Tab,
  `window.scrollY` must not change. Load `/news#news-hub-feed-tab-health` and `/#blogs-feed-tab-<slug>` and click the
  footer links on the same page: the section heading stays visible (top >= 0) at 390 and 1440.
- Every page at 320, 390 and 1440: `scrollWidth <= clientWidth` (all 11 articles at 320).
- `npm run lint`, `lint:css`, `format:check`, `build`, `check`, `size`.
