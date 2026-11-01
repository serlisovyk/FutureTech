# The footer shows one GitHub link, the credits'; its block of social icons is gone

Date: 2026-11-01 · Status: accepted

## Context

The footer had two GitHub icons a few lines apart: the profile in the bar's social-links block (the design draws three
icons there, `placeholder-content` leaves one) and the source-code link in the credits under the bar (name, year, the icon
to the repository). Two icons for one network read as a duplicate, and the block only existed to fill the design's
middle column.

## Decision

- The footer's only GitHub link is the credits': the author's name, the year and the icon to the repository.
- The bar holds the legal items on the left and the copyright on the right; no icon sits between them, and at 390 the
  bar is the legal list over the copyright.
- The Contact page's "Connect with Us" column keeps its boxed icon, still built from `data/socials.js`.
  `SocialLinks` has one look, the boxed one.

## Consequences

- A visitor finds the profile on Contact and the repository in the footer, one link each.
- A later social network the author joins goes to Contact; it is not added back to the footer without a new record.
- Rejected: keeping both icons (a duplicate); moving the profile into the credits (a second link where one says what the
  site is built from).
