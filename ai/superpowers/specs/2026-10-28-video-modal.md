# Spec: the video modal (MY-262)

Branch `my-262-video-modal`. What a visitor sees and does; the build is in `ai/superpowers/plans/2026-10-28-video-modal.md`.

## Opening

- Any button that carries a video id (`data-video-id`, with the video's title in `data-video-title` and the
  name "Play: <title>") opens the modal, from a mouse click, `Enter` or `Space`. Every page has the modal; the
  cards that carry the buttons arrive with their own tasks, and `/ui` shows two of them meanwhile.
- The modal is a panel over a dimmed page: the video's title on the left, a close button (the close glyph) on the
  right, and the 16:9 player below. It is centred and at most 1000 px wide; below that it is the page width minus
  the side gutters, and a short window scrolls the panel.
- The player is YouTube's privacy-enhanced embed (`youtube-nocookie.com`) and starts playing at once, since
  the click asked for it. It does not exist before a click: opening the page requests nothing from YouTube.
- The dialog is named by the title it shows (`aria-labelledby`); the player frame carries the title too.
- While it is open the page behind does not scroll and cannot be reached by keyboard or by assistive technology;
  focus starts on the close button, and `Tab` stays inside the modal.

## Closing

- `Escape`, the close button and a click on the dimmed area close it. While the player has focus, `Escape` goes
  to the player first: `Tab` out of it, or click the dimmed area.
- Closing removes the player, so the video stops and nothing keeps playing or loading. Focus returns to the
  button that opened the modal.

## Without JavaScript and with reduced motion

- The modal is not in the page until a script opens it. The play buttons need the script, so they are not
  shown where scripting is off.
- The modal opens and closes without any animation.
