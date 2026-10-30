# Spec: the article layout (MY-280)

Branch `my-280-article-layout`. What a visitor sees and does; the build is in
`ai/superpowers/plans/2026-10-30-article-layout.md`. The sidebar beside the text is MY-285, its own spec.

## The page

- A full-width photo of the post under the header, 598 / 439 / 281 px high, fading into the page colour at its
  bottom edge; the post's title, centred, sits over the faded lower part in white.
- Under the photo the text column: the first section (the introduction) with a line above and below, then the other
  sections one after another. Each section is an `h2` and its paragraphs. At 1920 the text starts 162 px from the left
  edge, at 1440 80 px, at 390 24 px; the column ends where the sidebar's line will be.
- The introduction's title is smaller than the other sections' titles, as drawn.

## Read Full Blog

- A post with more than three sections shows the first three. Under the third, the text fades into the page colour and the
  button "Read Full Blog" with a down arrow sits over the fade, centred.
- A click, `Enter` or `Space` on the button shows the rest of the sections at once and removes the fade and the button.
  Focus moves to the first section that appeared, so a keyboard user continues reading where the button was.
- A post with three sections or fewer shows all of them, with no fade and no button.
- The collapsed sections are out of the tab order and out of the reading order until they are shown.

## Links into the hidden part

- A link to `/blog/<slug>#<section>` whose section is among the collapsed ones opens the text and scrolls to that
  section; so does a link to such an anchor followed on the page. A link to a visible section just scrolls.

## What a screen reader hears

- The page has one `h1`, the title; the article is named by it. Every section is a region named by its `h2`.
- The button says whether it is expanded and names the sections it controls.

## Without JavaScript

- All sections are shown, the fade and the button are not drawn: nothing can be opened, so nothing suggests it.
- Reduced motion changes nothing: the text appears at once.
