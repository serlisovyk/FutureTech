# Plan: Contact and article polish (MY-301)

Branch `my-301-contact-article-polish`. Spec: `ai/superpowers/specs/2026-11-01-contact-article-polish.md`. Records cited:
`borders-inside`, `fluid-ramps`, `image-formats`, `article-data`, `folders-and-barrels`. No minista API is new.

## Contact

- Asterisk: a `RequiredMark` part (`aria-hidden`, `--color-error`) rendered by `FormField` after the label (text, phone and
  message go through it) and by `ConsentField` after its text. Contrast of `--color-error` on `Dark/08` is already
  checked for the error lines.
- Thank-you line: the actions block is the positioning root; from 1024 px up the status is positioned under it, in the
  form's bottom padding, like the floating consent error, so the form keeps its height. Below 1024 px it stays in the flow.
- Cramped 1024: no new breakpoint. The field rows become `repeat(auto-fit, minmax(…, 1fr))`. The contact blocks become
  two groups of two: the groups sit side by side while both fit and stack otherwise, and inside a group the blocks do the
  same, so 4 columns go to 2 x 2 and then to one column by fit, never three and one. The lines are drawn by every block
  (a left line, a top line running to the right edge) and the list clips them to its content box, so the outer edges and
  the first row stay clean at any column count; the two `@media` blocks of `ContactInfo.css` go away.

## Article

- Hero: measure the shipped `srcset` against the sources; use the largest original the design has for a post whose
  committed file was reduced; report the photos whose source is simply small.
- Table of Contents: delete `TableOfContents.jsx` / `.css`, the browser class, its wiring in `ArticleController`, the
  constants and data only it used; the sidebar keeps counters and facts, without the stretch and gap the contents needed.
  A dated record `article-without-contents` supersedes `article-data` (the section anchors stay); the map, the
  design-system sidebar line, `oop.md` and the checklist line lose the contents.

## Verification

The checks under "Verification" in `AGENTS.md`; `npm run size` numbers reported (no limit edited). In the browser: Contact at
1920 / 1440 / 1280 / 1024 / 900 / 768 / 390 (no horizontal scroll, continuous lines), the form with errors, the success line
and the keyboard; an article at 1920 / 1440 / 390 with `#<section>` into the closed region.
