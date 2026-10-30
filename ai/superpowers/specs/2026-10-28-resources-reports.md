# Spec: the Resources reports section (MY-274)

Branch `my-274-resources-reports`. What a visitor sees and does; the build is in
`ai/superpowers/plans/2026-10-28-resources-reports.md`.

## The section

- A heading band "In-Depth Reports and Analysis" with a switch at its right: Whitepapers, Ebooks, Reports. Below
  768 px the switch sits under the title and its three buttons share the width.
- Under it the resources of the selected switch, one row each: on the left the icon, the name and a description; on the
  right a photo, the name and a text beside a "Download PDF Now" button, then three cells: Publication Date,
  Category, Author. Below 1024 px the left part sits above the right one.
- Whitepapers is selected first. "Download PDF Now" goes to the Contact page for now.

## The switch

- A click, or the arrow keys, `Home` and `End` on the focused button, select a button; its rows replace the shown ones at
  once. `Tab` enters the switch on the selected button only and leaves it for the first link of the rows; the arrows wrap
  around.
- A link to `/resources#whitepapers`, `#ebooks` or `#reports` (the footer has them) opens the page on that switch and
  scrolls to its rows; the same links followed on the page do the same.

## What a screen reader hears

- The switch is a tab list named "Resource types"; every row group is a tab panel named by its button. Each resource is
  an article named by its heading (the name on the left); the name repeated above the button is plain text.
- The download button's name carries the resource: "Download PDF Now: <name>".

## Without JavaScript

- The switch is not shown (it cannot work). All three groups show one under another, each starting with a visible label
  (Whitepapers, Ebooks, Reports), so nothing is lost.
