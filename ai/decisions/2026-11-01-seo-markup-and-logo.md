# The Organization logo is a 512 px PNG, an article has dateModified, noindex pages have no canonical

Date: 2026-11-01 · Status: accepted

## Context

`seo-files-and-structured-data` made the 48 px favicon the Organization's logo, but Google asks for at least 112 px
square. A `BlogPosting` lacked `dateModified`, the `noindex` pages printed a canonical, Home's title was the bare name.

## Decision

Still in force from `seo-files-and-structured-data`: the sitemap, `robots.txt` and `llms.txt` are built from the built
pages by our build plugin (no list by hand, origin `site.url`); `404.html` and `/ui` are `noindex` and out of the
sitemap and `llms.txt`, and `robots.txt` allows everything; `lastmod` is the post date; no web manifest, no
`favicon.ico`; JSON-LD is `Organization` on every page and `BlogPosting` on an article, no `BreadcrumbList`, no
`sameAs`; an article's `og:image` is its photo's source JPEG, so the build emits the unused photos' JPEGs too.

What changes:

- `public/logo.png`: 512 x 512, the logo mark on the site's dark background, rendered once from
  `assets/logos/logo-mark.svg` and committed like the other fixed-URL files. `site.logo` holds its path and the
  Organization's `logo` uses it; the 48 px PNG stays the favicon.
- `dateModified` equals `date`: no revision history is kept. An edited post gets a `modified` field in
  `data/posts.js`, read before `date`.
- A page with a `robots` value (`noindex`) prints no canonical; every other page prints its own.
- Every page has a title in `data/pages.js`; the bare site name of `getPageTitle` is a fallback for a page without one,
  not Home's title (`shared-page-head` stands). `<title>` is `<title> | FutureTech` within about 60 characters;
  `og:title` is the title alone.

## Consequences

- The plugin reads `og:title`, `description`, `robots` and `article:published_time` back from the built head, so the
  sitemap and `llms.txt` list the descriptive titles; a change of that meta format is checked against it.
- A new logo is rendered by hand again, like the favicon and the social image.
- Rejected: the favicon scaled up (blurry); the transparent yellow mark as the logo (it vanishes on a light
  background); a `modified` field on every post now (no post has one, an unused field is noise).
