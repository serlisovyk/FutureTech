# The layout builds the page head from the page's metadata

Date: 2026-10-28 · Status: accepted

## Context

Every page repeated the same head: `metadata.title` with ` | FutureTech` typed in, and a `Head` with a
description `<meta>`. The site name was written in each file, and a change to the head meant editing every page.
minista merges every key of a page's `metadata` into the props of the layout and the page, and its Layouts guide
names custom metadata as the way to vary the shared layout.

## Decision

- The site name is `site.name` in `data/site.js`, the one place; the title, the logo's title, the home heading
  and the copyright use it.
- A page exports `metadata = { title, description }`, and `robots` where the page needs it (`/ui`: `noindex`).
  It holds no `Head` and no site name.
- The layout reads `title`, `description` and `robots`. The `<title>` is `getPageTitle(title)` from `utils/`:
  `News | FutureTech`, and the site name alone when a page has no title (Home). The description and the `robots`
  `<meta>` go through `Head` from `minista/head` inside the layout, which keeps them where the pages had them.
- The rest of `page-head-and-entries` stands: the layout owns `<html lang>`, the head and `<main>`; CSS is
  imported by the JSX that needs it and bundled into one file; browser JavaScript has one entry, `main.js`.

## Consequences

- A new page is a `metadata` object and its content; the head is not touched.
- `metadata` has no type here (no TypeScript): the keys are the three above, and a new one is read in the layout.
- A canonical URL or JSON-LD later reads `site` and the same `metadata`.
- Rejected: a `PageHead` component each page renders (the boilerplate stays in every page); passing the
  description through `getStaticData` props (indirection for one string).
