# The JS, CSS and images limits are raised for the article page and the SEO wave

Date: 2026-10-31 · Status: accepted

## Context

The article layout with its sidebar and table of contents, Similar News, and the meta, sitemap and JSON-LD work were
built in parallel and are measured together. The article adds three scripts (`ArticleController`, `LikeButton`,
`TableOfContents`) and its styles; the article pages now render each post's hero photo and three card photos. The
images entry still counts every generated `avif` and `webp` (decision `cards-and-modal-size-limits`); the hashed JPEG
copies that the `og:image` needs are outside it.

## Decision

- JavaScript: 3.5 kB → 4.5 kB (measured 4 kB gzipped).
- CSS: 10.5 kB → 11.5 kB (measured 10.84 kB gzipped).
- Images: 4.2 MB → 4.5 MB (measured 4.34 MB).
- Fonts do not change. Limits stay by fact, rounded up with small headroom (`ci-size-limit`).

## Consequences

- The next widget or section that grows a bundle raises its limit in a new record.
- Rejected: one record per task (each measured alone, none of the numbers would hold once they are merged).
