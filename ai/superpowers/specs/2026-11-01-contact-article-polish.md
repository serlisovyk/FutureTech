# Spec: Contact and article polish (MY-301)

Branch `my-301-contact-article-polish`. What a visitor sees and does; the build is in
`ai/superpowers/plans/2026-11-01-contact-article-polish.md`.

## Contact form

- Every label ends with a red asterisk, the consent line included: every field is required. The asterisk is only a
  mark: a screen reader does not read it, the required state comes from the control itself.
- Sending the form shows the thank-you line under the Send button. At 1024 px and wider the line sits in the space under
  the form, so the icon and the heading beside the form do not move when it appears or goes away. Below 1024 px the form
  is under the heading and the line takes its own row.
- The two fields of a row (names, email and phone) sit side by side while both fit with room for a phone number, and
  stack otherwise, at any width, not only below 1024 px.

## Contact columns

- The four contact blocks sit in one row while each has room for its longest link, as two rows of two when two fit, and
  as one column otherwise. The lines between them stay continuous: vertical between neighbours in a row, horizontal
  between rows, none at the outer edges.

## Article

- The photo at the top is shown from the largest file the post has; a small source is stretched by the browser and
  stays soft on a wide screen.
- The article has no Table of Contents: the sidebar holds the three counters and the four facts. Sections keep their
  anchors, so a link with `#<section>` still opens "Read Full Blog" and scrolls there.
