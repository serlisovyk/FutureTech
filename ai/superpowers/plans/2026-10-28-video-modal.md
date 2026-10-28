# Plan: the video modal (MY-262)

Branch `my-262-video-modal`. Spec: `ai/superpowers/specs/2026-10-28-video-modal.md`. Records cited:
`folders-and-barrels`, `borders-inside`, `fluid-ramps`, `oop-javascript`, `mobile-menu-drawer` (the dialog is its
sibling pattern: the page behind is locked by CSS, nothing else is animated). minista API: none new, the section is
plain JSX that the layout renders.

## Decided (author)

- Every video of `data/videos.js` and every show and episode of `data/podcasts.js` gets a real public YouTube video
  on its topic, from an official channel where there is one, checked through YouTube's oEmbed endpoint (HTTP 200
  with a title; 401 or 404 means it cannot be embedded). Recorded with the criteria in a decision record.
- The play button contract is `<button type="button" data-video-id data-video-title aria-label="Play: <title>">`;
  one document-level listener reads it. MY-260 builds the cards; `/ui` gets two such buttons meanwhile.
- The design does not draw the modal: Dark/10 panel, the `borders-inside` border, 16:9 player, the `ui/close` icon.
- A size over a limit is reported, not fixed: the orchestrator sets one limit for both parallel branches.

## Build

- `sections/shared/VideoModal/`: `VideoModal.jsx` (a `<dialog data-video-modal>` with `aria-labelledby`, the title
  heading, the close button, an empty player slot), `VideoModal.css`, `index.jsx`; exported by the `shared/` barrel
  and rendered once by the layout after the footer. The close label is `data/video-modal.js`.
- `scripts/components/VideoModal.js`: owns the `<dialog>` as `root`: `open(videoId, videoTitle, opener)` fills the
  title, appends the iframe and calls `showModal()`; `close()`; the `close` event (fired by `Escape`, the button and
  the backdrop alike) removes the iframe and returns focus to the opener. The iframe is built from the embed
  constants.
- `scripts/controllers/VideoModalController.js`: creates the component, listens once on the document for clicks on
  the trigger selector and hands the button's two attributes to `open`.
- `scripts/constants.js`: the trigger selector and the embed (base URL, query, `allow`); `main.js`: one row.
- Scroll lock: `:root:has(.video-modal[open])` hides the overflow, as the menu does. The backdrop colour is
  the Header's dim, which becomes the token `--color-backdrop` now that two blocks use it.
- `/ui`: a group "Video modal" in `UiKit` with two play buttons built from the first two entries of `data/videos.js`.
- No animation: the modal appears and disappears at once (so reduced motion needs nothing).

## Docs

`ai/map.md` (`VideoModal` section, component, controller, data file), `ai/rules/oop.md` (the markup the widget
expects), a record for the video sources.

## Verification

The checks under "Verification" in `AGENTS.md`, `npm run size` numbers reported. Then `/ui` in `npm run dev` at
1920, 1440 and 390: mouse, `Enter` and `Space`, `Escape`, the close button, the backdrop, focus back on the button,
the page behind not scrolling, no iframe in the DOM or the network before a click and none after closing, no
horizontal scroll.
