# Spec: code cleanup (MY-319)

Branch `my-319-code-cleanup`. The cleanup itself changes no behavior; the build is in
`ai/superpowers/plans/2026-11-01-code-cleanup.md`. Two small visible fixes ride along.

## Footer links to a category tab

- A link from the footer to a category of a feed (`/news#news-hub-feed-tab-health`, `/#blogs-feed-tab-ai-ethics`) opens the
  page with the tab selected and the section's heading band (tag and title) in view above the tab bar, not scrolled past.
- The same holds when the link is followed on the page that holds the feed (the hash changes), at every width.

## Phone field

- The placeholder of the phone field reads "Enter Phone" at every width: the longer "Enter Phone Number" does not fit the
  field at 320 px (about 111 px of text room for 138 px of text), and no padding change could make it. The field's width
  and padding are as before.
