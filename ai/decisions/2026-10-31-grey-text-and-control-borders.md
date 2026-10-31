# Grey text is raised to AA, form controls get a 3:1 border, other borders stay

Date: 2026-10-31 · Status: accepted

## Context

An automated audit found text under 4.5:1 on the dark backgrounds: nav links, the CTA and FAQ text on `Dark/10`
(`Grey/50`, 4.30), and the footer, the hero eyebrow, the testimonial places and the placeholders (`Dark/40`, 3.21 / 3.03).
The video duration sat in `Grey/50` over photos, 1.1 to 4.4 measured on the pixels under the text. Form fields and the
checkbox had a 1.15 : 1 border. The author chose a minimal raise over a redesign.

## Decision

- `--grey-50` is `#828285` (was `#7e7e81`): 4.54 on `Dark/10`, 4.81 on `Dark/08`. It is a text token only.
- Text that was `--dark-40` (footer links and legal, hero eyebrow, testimonial places, placeholders) uses `--grey-50`.
  `--dark-40` stays for what is not text: the hover borders, the avatar ring and the counter icon (3.03, needs 3).
- `--border-control` (1px `--dark-40`, 3.03 on `Dark/10`, 3.21 on `Dark/08`) is the border of the text fields, the phone
  country box and the checkbox (WCAG 1.4.11). Every other border stays `--border`: buttons, tabs, pills and cards are
  named by their text, not by the line.
- The duration over a photo is `--white` (7 to 18 on most photos, 4.57 on the worst): no grey passes on every photo.
- A new foreground colour needs the ratio on the background it sits on, not on a token's usual one.

## Consequences

- Footer, eyebrow, places and placeholders are no dimmer than the lead text: the hierarchy between the two greys is gone.
- Placeholders are close to the typed text's grey; they differ by value, not by colour (a field is never judged by its
  placeholder).
- Rejected: a second text token for the `Dark/40` role (its minimum, `#7e7e7e`, differs by four steps and still fails
  on `Dark/10` placeholders); raising `--dark-40` itself (it would lighten hover borders and the avatar ring); a 3:1
  border on every control (outline buttons, tabs and pills keep their text as the identifier).
