# Spec: the article sidebar (MY-285)

Branch `my-280-article-layout` (with MY-280). What a visitor sees and does; the build is in
`ai/superpowers/plans/2026-10-30-article-sidebar.md`. The text column is MY-280's spec.

## The sidebar

- Beside the text, on the right, behind a vertical line: three counters (likes, views, shares), a 2 x 2 block of facts
  (Publication Date, Category, Reading Time, Author Name) and the Table of Contents. Below 1024 px the sidebar sits above the
  text, full width; at 390 the counters are centred.
- Reading Time is counted from the post's text (200 words a minute, rounded up) and shown as "N Min".
- The Table of Contents is a card with one link per section of the post, in order.
- At 1024 px and wider the card stays in view while the text scrolls (sticky), until the end of the text column.

## Like

- The first counter is a button. A click, `Enter` or `Space` likes the post: the heart fills orange, the pill loses its fill and
  border, and the number grows by one. Pressing again takes the like back.
- The choice is remembered in this browser for this post: after a reload the post is still liked; another post is not.
  When the browser forbids storing, the button still works until the page is left.
- Views and shares are plain numbers.

## Table of Contents

- A click on a link scrolls to that section, smoothly; with reduced motion at once. The section gets focus, and the address gets
  its `#<section>`. If the section is among the ones that "Read Full Blog" holds back, the text opens first.
- The link of the section being read is highlighted (yellow) and is marked as the current location; it follows the scroll
  both ways. Before the first section is reached nothing is highlighted.

## What a screen reader hears

- The sidebar is a complementary region named "Article details"; the Table of Contents is a navigation named by its title.
- The like is a toggle button: "<n> likes, toggle button, pressed" once liked. Views and shares read as "<n> views", "<n> shares".
- The current link is announced as the current location.

## Without JavaScript

- The counters are plain numbers; the like button is disabled, so nothing pretends to work. The facts and the contents links
  work: a link jumps to its section, all of which are shown.
