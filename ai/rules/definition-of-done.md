# Definition of Done

A change is done when all of the following hold. Use it as the gate before handing a change
over for approval.

## Code

- New code follows `ai/rules/architecture.md`, `minista.md`, `jsx.md`, `css.md`, `oop.md` and
  `style.md`: data in `data/`, a JSX file per section or component with no hooks or handlers,
  BEM, tokens, classes with `constructor(root, options)` and `start()`, `main.js` only creating
  and starting.
- Every minista API or option used was checked against its docs, not memory.
- Shared values come from one source: texts from `data/`; colours, radii, the type scale and
  values two blocks share from the tokens; a breakpoint a script reads is one constant.
- A change to images, fonts, `assets/` or the page metadata follows
  `ai/rules/assets-performance.md`.
- No comments, no inline styles, no inline event handlers, no state on `window`.
- Stale code, styles, data and assets left behind by the change are removed.
- Nothing from `ai/rules/scope.md` or the decisions it points to slipped in.

## Accessibility and responsive

- Checked in the browser at the three design widths (Desktop, Laptop, Mobile) against the
  design: grid, spacing, type, block order, the menu; no horizontal scroll at any width in
  between, none at 200% zoom.
- Controls are real elements with an accessible name; everything works from the keyboard
  (Tab order, `Enter`/`Space`, `Escape`, arrows by the pattern in `ai/rules/style.md`) and the
  focus ring is visible; after opening or closing something, focus lands somewhere meaningful.
- Text contrast is at least 4.5:1, icons and the border of a form field or checkbox at least 3:1, in every state,
  hover and focus included.
- The page works without JavaScript: the content is there, nothing is stuck hidden.
- New animation takes its duration from the transition token and is off under
  `prefers-reduced-motion: reduce` (no transition, animation or smooth scroll).
- Touch targets are at least 44 px: a smaller drawn control gets a larger hit area.
- A new page or section keeps the skip link first and `main#main` as its target, one `h1` and
  headings in order.

### Accessibility checklist

For a change to markup, colour or a widget; the ratios and patterns are in `ai/design-system.md` and `ai/rules/style.md`.

- axe-core (the copy in `node_modules`, never added to `package.json`) on the built page at 1440 and 390, with the widget
  opened (menu, accordion, form with errors, modal with its iframe `src` stubbed): 0 violations.
- A colour new to the page has its ratio computed on the background it sits on (text 4.5, large text and icons 3, the
  border of a form control 3). Text over a photo is measured on the pixels under it, axe cannot.
- Tab through the page: the order follows the layout, every control is reached, the ring is visible and not clipped, and
  only the modal and the open menu hold focus.
- Landmarks `header`, `nav`, `main`, `footer`, a name on every repeated one; one `h1`, no skipped level.
- A widget's role, name and state are right in the accessibility tree (`Accessibility.getFullAXTree`): tabs, accordion,
  fields with `aria-invalid` and their error as the description, the dialog's name, the table of contents.

## Docs (in the same change, within `ai/rules/docs.md`)

- `README.md`: a short line, only if what a user sees, the scripts or the structure changed and
  the repo has one.
- `ai/map.md`: only if a page, layout, section, component, stylesheet, script, data file or
  asset folder was added, renamed, removed or moved.
- `ai/rules/*` or `ai/skills/*`: only if the change reshaped a pattern.
- `ai/decisions/`: a new dated record if the change meets the criteria in its `README.md`.
- No doc went over its limit; one that did was trimmed in this change.

## Verification

- Every check under "Verification" in `AGENTS.md` that the repo has passes; a missing script is
  named as skipped. The commit went through the pre-commit hook, never `--no-verify`.
- A change to a page was used in the browser (`npm run dev`) — keyboard and mouse, the three
  widths — not just built.
- Reported: what changed, which commands were run, whether they passed, and anything that could
  not be verified. Never claim the project builds or is formatted unless the command was run
  and passed.
- No automated test suite exists — do not add one unless explicitly asked, and do not report
  its absence as a gap.
