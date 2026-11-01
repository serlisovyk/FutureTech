# Spec: script behavior fixes (MY-312)

Branch `my-312-script-fixes`. What a visitor, a keyboard user and a screen reader get; the build is in
`ai/superpowers/plans/2026-11-01-script-fixes.md`.

## Menu (below 768px)

- With the drawer open, `Escape` closes it and puts focus on the burger, wherever focus is, also after a click on empty
  space inside the drawer.
- If the window is widened to 768px or more with the drawer open, the drawer closes, the page is usable again and focus goes
  to the first link of the navigation (the burger is hidden at that width).

## Tabs

- Choosing a tab with the mouse or the keyboard puts its panel id in the URL hash (`/resources#ebooks`) without adding a
  history entry or scrolling. A page opened with that hash shows that tab. A plain visit keeps a plain URL.
- A link to another tab of the same page ("View Details" to `/resources#reports`) always switches to it and scrolls to it,
  also after tabs were chosen by hand.
- The category tabs of a post feed filter as before and write no hash.
- The arrows, `Home` and `End` move the selection only without `Alt`, `Ctrl`, `Meta` or `Shift`: `Alt` + left arrow is the
  browser's Back and works.

## Contact form

- Sending the form again after a successful send clears the success text before checking; if a field is wrong, only the
  errors show.
- Every field's error text is announced politely by a screen reader when it appears, not only the field that gets focus.

## Video modal

- A mouse selection that starts inside the dialog and ends on the dimmed backdrop does not close it. A click that starts and
  ends on the backdrop, the close button and `Escape` close it as before.

## Print

- Printing a page shows every block; the scroll reveal does not apply to print.
