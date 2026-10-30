# Spec: reveal on scroll and hover states (MY-284)

Branch `my-284-reveal-hover`. What a visitor sees and does; the build is in
`ai/superpowers/plans/2026-10-30-reveal-hover.md`.

## Reveal on scroll

- Blocks below the first screen (section headings, cards, rows, feeds, footer columns) fade in with a small
  upward shift the first time they enter the viewport, then stay. Scrolling back never repeats it.
- Blocks that enter together appear one after another, in page order, a short step apart: a row of cards cascades,
  a lone block appears at once. The step count is capped so a long batch never waits.
- The first screen of every page is never animated: the header, the Home hero, every page intro and the featured
  News story are not marked, and a block that is already on screen when the page loads is left as it is.
- A block that is hidden at load (a closed "more" group, an inactive resource tab) animates when it first shows.

## Without animation

- Without JavaScript, or with `prefers-reduced-motion: reduce`, or in a browser without `IntersectionObserver`,
  everything is visible at once and nothing moves.
- Content is hidden only after the script has found its blocks and set up the observer; if the script fails
  earlier, the page stays complete. No block changes size or position, so no layout shift.

## Hover and focus

- A pointer over a control gives a soft step, never a jump: a button's background steps up (outline Dark/08 to
  Dark/10, ghost Dark/10 to Dark/15), its border brightens, the primary button's yellow lightens; the ↗ arrow in
  a button or a card moves 2 px up and right.
- Link cards (the Home feature strip, the CTA cards) step their background and border the same way.
- The header links and the footer links turn white; the footer and contact social icons turn yellow and the
  contact socials step their plate; the filter tabs brighten their border and text.
- Hover applies only to devices that hover: a tap leaves no hover look. Keyboard focus keeps the one yellow ring.
- With reduced motion the changes are instant.
