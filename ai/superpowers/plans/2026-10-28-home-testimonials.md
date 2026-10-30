# Plan: Home testimonials section (MY-267)

Branch `my-267-home-testimonials`. Spec: `ai/superpowers/specs/2026-10-28-home-testimonials.md`. Records cited:
`folders-and-barrels` (where a section lives), `borders-inside`, `fluid-ramps`, `image-formats`. minista API: none
new, the section is plain JSX; the browser side is the existing `Disclosure`.

## Author's answers

- At 390 three testimonials show and "View All Testimonials" reveals the other three in place, on `Disclosure`. From
  768 px all six show and the button is hidden; without JavaScript all six show and the button is hidden
  (`@media (scripting: none)`).

## What changes

- `src/data/testimonials.js`: `testimonialsSection` (the anchor id `testimonials`, `titleId`, the id of the hidden
  group, tag, title, button label, the number shown first) beside the list; every testimonial gets its rating text.
  The avatar paths use the extensions the files really have.
- `src/sections/home/Testimonials/`: `Testimonials.jsx` (the `<section>` is the `Disclosure` root: the button sits in
  the heading band, the second group of three is the region), `TestimonialCard.jsx` (a `<figure>`: caption with the
  avatar, name and city, the stars plate, the `<blockquote>`), their two stylesheets and `index.jsx`; the line in
  `sections/home/index.jsx`; `pages/index.jsx` renders it last.
- `TestimonialCard` is a section part, not a kit card: no other page shows testimonials (the kit's cards are
  reused across pages).
- `SectionHeading` takes `children`, an action beside the title next to the `link`; `Button` takes `ariaControls`,
  `ariaExpanded` and `isDisclosureTrigger` (the `data-disclosure-trigger` hook), as it already takes
  `isToggleDismiss`. No label swap: `main.js` creates `Disclosure` without options, and a controller only to pass two
  labels is more than the swap is worth.
- `src/data/card-photos.js`: the `sizes` and widths of the avatar.
- Portraits: the six images of this section, centred square crops (as the design draws them), JPEG, since none has
  alpha.
- `ai/map.md`.

## Where it can diverge

- Two lists (`ul`) carry the six items so that `Disclosure` has one region; both are `display: contents`, so the
  six cards are one grid. The column lines depend on the item's place, which differs per group at two columns.

## Verification

The checks in `AGENTS.md`; `npm run dev` at 1920 / 1440 / 390 against the design, 800 for two columns, the button by
mouse and keyboard, `/#testimonials`, no horizontal scroll, the page without JavaScript.
