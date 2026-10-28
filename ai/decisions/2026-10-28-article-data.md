# Article bodies are JS sections in `data/`, no MDX

Date: 2026-10-28 · Status: accepted

## Context

Every post needs a body, and its page needs a table of contents with anchors. minista 5 can read MDX and
frontmatter, so the text could live in content files instead of data. The same posts are also listed on Home and
News and shown as Similar News, so their metadata must be one source.

## Decision

- A post in `data/posts.js` carries its text as `body: [{ id, title, paragraphs }]`: a section has a stable `id`
  (the anchor), a `title` (the heading and the table of contents entry) and its paragraphs as plain strings.
- The table of contents and the anchors are built from `body` by the article page; no plugin generates ids.
- Paragraphs are plain text: no inline markup, no links, no images inside the body. A need for it later is a new record.
- Every post has a body of at least one section, so every post can have a page.
- The author's choice.

## Consequences

- The post list, the cards, the rows and the article page read the same objects; a new post is one entry and needs
  no new file.
- Text has no formatting beyond paragraphs and section headings; the build needs no MDX compiler.
- `posts.js` is the longest data file, and it grows with every post.
- Rejected: MDX with `rehype-slug` and frontmatter (a compiler and a plugin to get ids and a table of contents that
  one array already gives, and a second place for each post's metadata); one file per article (a file for each post,
  and the lists on Home and News would need an index or a glob to collect them).
