# Spec: Home testimonials (MY-267)

Branch `my-267-home-testimonials`. What a visitor sees and does; the build is in
`ai/superpowers/plans/2026-10-28-home-testimonials.md`.

## Layout

- A heading band (the tag "What Our Readers Say", the title "Real Words from Real Readers", the button "View All
  Testimonials") over a grid of six testimonials. The section is the target of `/#testimonials`.
- A testimonial is the reader's avatar with the name and the city beside it, a plate of five stars, and the quote in a
  card the plate overlaps. The cards are split by lines: a vertical one between columns, a horizontal one under every
  row.
- Columns: three from 1024 px, two from 768 px, one below 768 px.

## "View All Testimonials"

- From 768 px all six testimonials show and the button is not shown.
- Below 768 px three testimonials show and the button reveals the other three in place. It is a button that controls
  that group and says whether it is expanded; pressing it again hides the group. Its label does not change.
- Without JavaScript all six show at every width and the button is not shown.

## Screen readers

- The stars are decoration; each testimonial says its rating in text ("Rated 5 out of 5").
- A testimonial is a figure: the quote is a blockquote, the reader is its caption. The avatar is decoration, the name
  is read.
