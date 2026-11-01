# Only the JPG originals an article names reach `dist/`

Date: 2026-11-01 · Status: accepted

## Context

An article's `og:image` is its photo's source JPEG, resolved to its hashed URL with `import.meta.glob`
(`seo-files-and-structured-data`), because AVIF and WebP, which the site ships, are not read by every crawler. The glob
imports every `*.jpg` of `assets/images/photos/`, so Vite emitted all 23, 12 of them (1.27 MB) named by no page: the other
photos only feed cards and the video previews, and a photo shared by an article and a card cannot move to a folder of its own.

## Decision

- A build plugin of ours, `unused-originals` (`vite/plugins/`), runs after the pages are written and removes from the bundle
  every `assets/*.jpg` that no built page names. Nothing else changes: the glob, the `og:image` URLs and `get-social-meta.js`
  stay as they are, and a new article's photo is shipped the moment a page points to it.
- This narrows one consequence of `seo-files-and-structured-data`, which stays in force: its sentence that the glob "also
  emits the photos no post uses" is no longer true.

## Consequences

- `dist/assets/` holds 11 JPEGs (1.45 MB), one per article; every `dist/blog/*.html` `og:image` file exists.
- A JPG that a page references in any attribute is kept; the plugin looks for the file's name in the page text.
- Rejected: moving the article photos into their own folder (several are also card photos, so the split would be arbitrary
  and break the "by meaning" folders); emitting copies from a plugin (a second source of the URL besides the glob); leaving the
  files (1.27 MB in every deploy for nothing).
