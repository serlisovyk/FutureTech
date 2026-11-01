# A link to a section or a feed tab is a descriptor of data ids; `getLinkHref` builds the href

Date: 2026-11-01 · Status: accepted

## Context

The footer typed `/news#news-hub-feed-tab-health` and `/podcasts#ai-revolution-title` by hand: the same ids that
`getPostFeedTabId`, `feedId` and `titleId` build for the markup. A renamed slug or id broke the links with no error.
`src/data/` cannot build the href itself: the build plugins in `vite/` load it in Node, where `@utils` does not exist, and
a `../utils` path would leave the folder.

## Decision

- A link into a page is a descriptor in the data: `{ label, path, id }` for a section or a heading, `{ label, path, feedId,
categorySlug }` for a feed tab, `{ label, path }` for a page. Each `id`, `feedId` and slug is read from the data file that
  owns it (`featuresSection.id`, `newsHub.feedId`, `technology.slug`), never typed again; the label may be the item's own
  title or name.
- `getLinkHref` in `@utils` turns a descriptor into the href, with `getPostFeedTabId` for a tab; the component that renders
  the link calls it (`FooterColumn`, `Header` for the banner).
- A `path` is the page's URL and stays a string.

## Consequences

- Renaming an id or a slug changes the footer's href with it; removing an export fails the build.
- A new link into a page is a descriptor, not a string with a `#`.
- Rejected: the helper imported into `data/` by a relative path (`../` out of its folder); the tab id rebuilt in `data/`
  (a second copy of the format); the hrefs typed and checked after the build (the break stays silent until someone looks).
