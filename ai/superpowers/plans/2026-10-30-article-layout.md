# Plan: the article layout (MY-280)

Branch `my-280-article-layout`. Spec: `ai/superpowers/specs/2026-10-30-article-layout.md`. Records cited:
`article-data` (sections in `data/`), `folders-and-barrels`, `borders-inside`, `fluid-ramps`, `image-formats`. minista API: none
new (`Photo` and `Icon` are the existing wrappers).

## Where things live (decided here)

- `sections/blog/Article/` stays the section; its parts, one file each: `ArticleHero` (photo and `h1`), `ArticleBody` (the
  sections, the collapsed region, the fade and the button) and `ArticleSection` (one `h2` and its paragraphs). `Article` renders the
  hero and a `.article__layout` grid; MY-285 adds the sidebar as the grid's second column.
- Data: `data/article.js` gets `previewCount` (sections shown while collapsed), the button label and the region id;
  `data/card-photos.js` gets the hero photo's `sizes` and widths.
- Section ids: the anchor is now the `<section>`'s `id` and the `h2` is `<id>-title`, so the table of contents (MY-285)
  scrolls to, focuses and observes one element.

## Read Full Blog

- The first `previewCount` sections are always shown; the rest are the `Disclosure` region (`hidden` is set by
  `Disclosure.start()`, never in the JSX). The fade is a positioned overlay on the bottom of the body: `Button` outline
  with the arrow and `isCompact` (the design's 55 / 49 px), `aria-expanded`, `aria-controls`. Without scripting the overlay is
  not drawn; it goes away when `aria-expanded` is true (`:has`).
- `ArticleController` (`scripts/controllers/`, root `data-article`) owns the `Disclosure`: the body is `data-article-body`, not
  `data-disclosure`, so `main.js` does not create a second one. It opens the region when the URL hash (on `start()` and on
  `hashchange`) names a section inside it and scrolls there, and moves focus to the first revealed section when the button
  opens the text. `Disclosure` gains `onToggle(handler)` (reports the new state after `open()` and `close()`, like `Toggle`).
- A post with at most `previewCount` sections renders no region, fade or button; the controller then has no `Disclosure`.

## Layout and type

- Hero: a `header` with the `Photo` (`loading="eager"`, `fetchPriority="high"`, `object-fit: cover`) behind a gradient from transparent
  to 88% `Dark/08` at 76% to opaque at the bottom; the `h1` (Inter 600, 64 / 44 / 28, white, centred) at the bottom, 65 / 35 / 17 px up.
  Over the lightest photo pixel the title keeps at least 5:1 against the overlay.
- Body: the introduction is the first section: a line above and below, padding `--space-section` (minus the border).
  The others follow in a block with gap 30 / 24 / 24 and padding `--space-section`. The text insets are 162 / 80 / 24 at the
  start and 80 / 60 / 24 at the end, custom properties on `.article`. `h2` Inter 500, 28 / 22 / 18 (the introduction 20 / 20 / 18);
  paragraphs are the base text (18 / 16 / 14, Grey/60); the gap between title and text 24 / 20 / 14 (the introduction 14 / 6 / 6).
- The line below the body is drawn by the section under it (Similar News, MY-281), so it is not doubled.

## Deviations and inventions (reported)

- "Collapsed" is the first three sections, not a height: the design's preview happens to end inside the third block, and
  a section boundary keeps `hidden` honest for assistive technology. A post of three sections has no button.
- The first section of any post gets the introduction look, not only one titled "Introduction".

## Verification

The checks under "Verification" in `AGENTS.md`, `npm run size` numbers reported (no limit edited). Then the healthcare post and
two others in `npm run dev` at 1920, 1440 and 390 against the design sizes: collapse and expand with the mouse and the keyboard,
a hash into the collapsed part, no scripting, no horizontal scroll, the focus ring.
