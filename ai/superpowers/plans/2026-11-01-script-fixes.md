# Plan: script bugs and cleanup (MY-312)

Branch `my-312-script-fixes`. Spec: `ai/superpowers/specs/2026-11-01-script-fixes.md`. Records cited: `oop-javascript`,
`script-helper-classes`, `mobile-menu-drawer`, `constants-folder-data-barrel`. Parallel with MY-314 and MY-316: this task
touches `scripts/`, `constants/`, `styles/reveal.css` and two small JSX hooks (`Header`, `FormError`), nothing of theirs.

## Reproduced before the fix

Headless Chrome over the DevTools protocol against `minista preview`, a real mouse and keyboard, the YouTube hosts blocked:

1. A click on empty drawer space puts focus on `body`; `Escape` then leaves the menu open (focus on the close button works).
2. Widening 390 to 1000 with the drawer open closes it and leaves focus on `body`.
3. `/resources#ebooks`, a manual switch to Whitepapers, then the "View Details" link to `#ebooks` does nothing: the hash
   is still `#ebooks`, so no `hashchange` fires.
4. `Alt`, `Ctrl`, `Meta`, `Shift` plus `ArrowRight` select the next tab and `preventDefault` the key.
5. `location.hash = '#news-hub-feed-panel'` throws `Cannot read properties of undefined (reading 'scrollIntoView')`.
6. After a successful send, a second submit with empty fields shows the six errors and the success text together.
7. Press on the modal title, release on the backdrop: the dialog closes.
8. Under print media a below-the-fold `[data-reveal]` item has `opacity: 0`.
9. No `[data-form-error]` carries `aria-live`.
10. Opening the video modal logs Chrome's "Allow attribute will take precedence over 'allowfullscreen'" (added by the
    orchestrator).

## Changes

- `Toggle`: `keydown` is listened on `document` (the handler still checks `Escape` and the open state), so `Escape` closes
  the drawer wherever focus is. No other Toggle exists, so no page is affected.
- `HeaderController`: when the viewport leaves the mobile query with the drawer open, it closes it and focuses the first
  nav link. Decided here: the author's wording is "return focus to the burger", but the burger is `display: none` from
  768px, so `focus()` on it does nothing; the links are what moved into the navbar. Hook: `data-header-link` on the nav
  links (`Header.jsx`). `Toggle.isOpen` stays, because this guard uses it (it is no longer dead).
- `Tabs`: a click or key selection also writes `#<aria-controls>` with `history.replaceState`, only when the instance has
  its own panels (a feed's tabs all control one panel, so they write no hash); load does not write it, so a plain URL stays
  plain. Arrows, `Home` and `End` with `Alt`, `Ctrl`, `Meta` or `Shift` are ignored (no `preventDefault`). `hashchange`
  guards a missing panel. The `shouldWrap` option and `#options` go: the arrows always wrap.
- `ContactFormController`: `#handleSubmit` clears the status first.
- `VideoModal`: a `pointerdown` records whether it began on the dialog itself; the backdrop closes only when it did and the
  click is also on the dialog.
- `VideoModal`: `frame.allowFullscreen` goes; `fullscreen` stays in `VIDEO_EMBED.allow`.
- `reveal.css`: the media query starts with `screen and`, so print shows everything.
- `FormError.jsx`: `aria-live="polite"`, so every field's error is read, not only the focused first one.
- Dead code: `labels` and `#label` / `#renderLabel` of `Toggle` and `Disclosure` (and their `options`), `LikeButton.isLiked`,
  the `[data-toggle]` row of `main.js`.
- Constants: `constants/aria.js` (`ARIA`: the `aria-*` names the scripts read and write) and the hooks the classes wrote
  as strings join `SELECTORS` (`Tabs`, `Toggle`, `Disclosure`, `HeaderController`, `VideoModal`, `CountUp`, `FormField`;
  `LikeButton` and `PostFeedController` take `ARIA`). `main.js` keeps its table of root hooks.

## Size

JS is at 3.79 of 4 kB. Dead code goes, the moved strings and the fixes come in; measured after the build. If the build
crosses 4 kB the work stops and is reported, the limit is not raised.

## Docs

`ai/rules/oop.md`: the `Disclosure` line (no label option), `Toggle` (`Escape` heard on `document`), `Tabs` (hash written on
selection), the form errors and the header focus; the constants line names the `aria-*` names. `ai/map.md` only if the
constants line needs a word. No record: nothing durable is reversed.

## Verification

The checks under "Verification" in `AGENTS.md`; the ten scenarios above repeated on the built bundle (each must be gone),
plus the controls: `Escape` and the close button with focus in the drawer, a plain backdrop click closes the modal, the
close button closes it, arrows without modifiers still move the tabs, a first visit to `/resources` keeps a clean URL.
