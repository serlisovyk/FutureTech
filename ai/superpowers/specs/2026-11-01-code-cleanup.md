# Spec: code cleanup (MY-319)

Branch `my-319-code-cleanup`. The cleanup itself changes no behavior; the build is in
`ai/superpowers/plans/2026-11-01-code-cleanup.md`. Two small visible fixes ride along.

## Footer links to a category tab

- A link from the footer to a category of a feed (`/news#news-hub-feed-tab-health`, `/#blogs-feed-tab-ai-ethics`) opens the
  page with the tab selected and the section's heading band (tag and title) in view above the tab bar, not scrolled past.
- The same holds when the link is followed on the page that holds the feed (the hash changes), at every width.

## Phone field

- The placeholder of the phone field ("Enter Phone Number") is fully visible at 320 px wide; the field's width, padding and
  the placeholder text at the other widths are as before.
