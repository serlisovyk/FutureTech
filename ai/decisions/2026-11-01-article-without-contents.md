# Article bodies are JS sections in `data/`, and an article has no table of contents

Date: 2026-11-01 · Status: accepted

## Context

`article-data` put each post's text in `data/` and asked for a table of contents built from it. The posts have two or
three sections, so a list of links to them gives the reader nothing a scroll does not, and it cost a script, a
stylesheet and a sticky block in the sidebar.

## Decision

- A post in `data/posts.js` carries its text as `body: [{ id, title, paragraphs }]`: a section has a stable `id` (the
  anchor), a `title` (its heading) and its paragraphs as plain strings. No MDX, no plugin generates ids.
- An article page has no table of contents. The sidebar holds the counters and the facts of the post.
- The anchors stay: a link with `#<section>` opens "Read Full Blog" when the section is in the closed region and scrolls
  to it.
- Paragraphs are plain text: no inline markup, no links, no images inside the body. A need for it later is a new record.
- Every post has a body of at least one section, so every post can have a page.
- The author's choice.

## Consequences

- The post list, the cards, the rows and the article page read the same objects; a new post is one entry.
- A post that grows to many sections needs a new record before a contents comes back.
- Rejected: keeping the contents for long posts (no post is long); MDX with `rehype-slug` and frontmatter (a compiler and
  a plugin for ids one array already gives).
