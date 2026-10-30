# Spec: the Contact FAQ section (MY-279)

Branch `my-279-contact-faq`. What a visitor sees and does; the build is in
`ai/superpowers/plans/2026-10-28-contact-faq.md`.

## The section

- A band under the form with a line above it. On the left an icon, the title "Asked question", a short text and
  the button "Ask Question". On the right a list of five questions, each a bar with a "+" at its right.
- The first question is open at load: its bar shows a "-" and, under a thin line, the answer. The others show
  only the question and a yellow "+". Below 1024 px the left part sits above the list.
- "Ask Question" goes to the contact form on the same page (`#contact-form`).

## Opening and closing

- A click, `Enter` or `Space` on a question's bar opens that answer when it is closed and closes it when it is open.
  Each question works on its own: opening one does not close another, and any number can be open.
- The icon follows the state: "+" when closed, "-" when open. The answer grows and shrinks over a short time;
  with reduced motion it appears and disappears at once.
- A closed answer is out of the tab order and out of the reading order.

## What a screen reader hears

- Each bar is a button that says whether it is expanded and names the answer it controls.
- The title is the section's `h2` and names the section.

## Without JavaScript

- Every answer is shown, one under each question, and the "+" and "-" are not drawn: nothing can be opened or
  closed, so nothing suggests it.
