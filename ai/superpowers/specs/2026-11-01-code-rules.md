# Spec: code rules (MY-326)

Branch `my-326-code-rules`. The steps are in `ai/superpowers/plans/2026-11-01-code-rules.md`. The task is a code cleanup:
the built site looks and reads as before, except the two points below.

## Behaviour

- **Tabs.** Moving between tabs with the arrow keys, `Home` or `End` never scrolls the page vertically, also when the page
  was opened on a tab's own anchor (`/news#news-hub-feed-tab-health`), where the tab carries a `scroll-margin` for the
  footer links. When the tab list scrolls sideways (a narrow screen), the focused tab is still brought into view inside
  the list. A footer link to a tab still lands with the section's heading visible.
- **Footer.** The bottom bar shows the legal items on the left and the copyright on the right; the GitHub profile icon is
  gone. The credits line (name, year, the GitHub icon to the repository) is the only GitHub link of the footer. The
  Contact page's "Connect with Us" column keeps its icon.

## Layout

- No empty gap where the footer's icon was, at 390, 1440 and 1920: at 390 the bar is the legal list over the copyright.
- No other element changes size, position or style at 1920, 1440, 1024, 768 or 390.

## Accessibility

- The accessible names of the menu buttons, the navigations and the counters are the same strings as before.
- Focus still follows the arrows by the tabs pattern in `ai/rules/style.md`; only the scroll side effect goes.
