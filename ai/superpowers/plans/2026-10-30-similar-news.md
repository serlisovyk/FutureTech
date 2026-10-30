# Plan: Similar News under every article (MY-281)

Branch `my-281-similar-news`. No spec: nothing interactive, the section is static markup. Records cited:
`folders-and-barrels` (section folder, barrels), `shared-page-head` (the page passes no head). minista API: none.

## Choice of posts

- `getSimilarPosts(post, count)` in `utils/`, a pure function of `data/posts.js`: the other posts of the same category,
  newest first, then the newest of the rest, cut to `count`. The current post is never in the result and no post
  repeats. Equal dates keep the order of the data.
- A category with one post (most of them) therefore gets the newest posts of the site; a category with several shows
  its own first. Every article page gets exactly `count` cards because there are more than `count + 1` posts.
- The healthcare article has one same-category sibling, `covid-19-variants`, which lists it first. No data is touched.

## Section

- `sections/blog/SimilarNews/`: `<section aria-labelledby>` with a container: a header row (`Heading` level 2, the
  `minor` size, and the "View All News" outline `Button` to `/news`), then the cards in a grid of `NewsCard`
  (3 columns, 1 below 768px). `NewsCard` already carries `data-reveal`.
- The design has no tag and no bordered band over this title, so `SectionHeading` is not used; the title is the design's
  minor h2. `Heading` gets the `minor` size (Grey/80, Kumbh 500, 28 / 22 / 20), already a role in `ai/design-system.md`.
- Texts, ids and the count (3) in `data/article.js`; the page renders the section after `Article` with the same `post`.

## Docs

`ai/map.md`: the `Blog sections` line (the section), `utils/` (`getSimilarPosts`), `Heading` (`minor`).

## Verification

The checks under "Verification" in `AGENTS.md`, `npm run size` numbers reported (no limit edited). A crawl of
`dist/blog/*.html`: three card links each, distinct, not the page itself, all resolving to a built page; the healthcare
article is linked from another. Then three articles of different categories in `npm run dev` at 1920, 1440 and 390
against the design, keyboard focus, no horizontal scroll.
