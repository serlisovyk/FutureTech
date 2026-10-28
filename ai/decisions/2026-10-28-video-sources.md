# Videos are real public YouTube videos, played in a modal from the privacy-enhanced embed

Date: 2026-10-28 · Status: accepted

## Context

The site's videos, shows and episodes are fictional, so no video file belongs to them. The cards need a
player that works, and a modal with a placeholder id would show YouTube's error. How the video is hosted and
how it is loaded had obvious alternatives.

## Decision

- Each video of `data/videos.js` and each show and episode of `data/podcasts.js` carries a `videoId` of a real
  public YouTube video on the card's topic, standing in for its own recording. The id is the only per-video data
  the player needs; the title shown in the modal is the card's own title.
- An id is chosen from an official or established channel (a space agency, a university, TED and TEDx, a major
  newsroom, a software vendor's own channel), a talk or explainer of a few minutes up to a quarter of an hour,
  and kept only if YouTube's oEmbed endpoint answers 200 with a title: 401 or 404 means the owner forbids
  embedding or removed it.
- The player is an `<iframe>` on `youtube-nocookie.com/embed/<id>` that the script creates when the modal opens
  and removes when it closes (`assets-performance`: nothing third-party at page load, no playback after close).

## Consequences

- A card's video is not the episode its text describes: it is a topical stand-in. Replacing one is a one-line
  data edit; no markup or script changes.
- An owner can still remove or restrict a video later, and the modal then shows YouTube's own message; the
  ids are worth re-checking with oEmbed now and then.
- Rejected: self-hosted video files (weight, and the site has no video of its own); YouTube thumbnails as the
  card images (a request to `img.youtube.com` at page load, and the cards use the site's own photos); a
  facade or lazy-embed library (a dependency for what one iframe does); `youtube.com/embed` (sets cookies on
  load, where the privacy-enhanced domain does not until the visitor plays).
