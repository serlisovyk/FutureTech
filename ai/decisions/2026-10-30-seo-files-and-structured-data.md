# The sitemap, robots.txt and llms.txt are built from the built pages; JSON-LD is Organization and BlogPosting

Date: 2026-10-30 · Status: accepted

## Context

The site needs link previews, a sitemap, `robots.txt`, `llms.txt` and structured data, and must keep them right when a
post is added. minista renders every page from a React component to `.html`; its docs describe no sitemap and no non-HTML
page, and `public/` is copied untouched.

## Decision

- **Generated files.** One build plugin of ours (`vite/plugins/site-files.js`, helpers in `vite/site-files/`) reads the
  pages minista has built in `generateBundle` and emits `robots.txt`, `sitemap.xml` and `llms.txt` with `emitFile`. A page's
  URL is its file name (the clean URLs `vercel.json` serves); its title, description, `robots` and `article:published_time`
  are read back from the head the layout printed. Nothing lists pages or posts by hand: a new page or entry of
  `data/posts.js` is in all three files after the next build. The origin is `site.url`.
- **What is public.** `404.html` and `/ui` carry a `noindex` meta and are out of the sitemap and `llms.txt`; `robots.txt`
  allows everything, because a `Disallow` would stop a crawler from reading that `noindex`. The sitemap's `lastmod` is
  the post date for an article and absent for the other pages (no honest date to give).
- **Fixed-URL files in `public/`.** The favicon (SVG and a 48 px PNG), the apple-touch icon and the 1200 x 630
  `og-image.png` are committed there: crawlers and browsers cache them by URL and an icon is asked for by a fixed path. They
  were rendered once from the logo and the site's fonts, not at every build. An article's `og:image` is its photo's source
  JPEG, resolved to its hashed URL with `import.meta.glob`; AVIF and WebP, which the site ships, are not read by every
  crawler. The glob also emits the photos no post uses (twelve files, 1.2 MB of `dist/assets/*.jpg`, outside the images limit).
- **No web manifest** (a PWA is out of scope, `ai/rules/scope.md`) and no `favicon.ico`.
- **JSON-LD.** `Organization` on every page and `BlogPosting` on an article, printed by the layout from `utils/`.
  No `BreadcrumbList`: the site shows no breadcrumbs, and markup must describe what the page shows. No `sameAs`: the
  footer's social links are the networks' home pages, not the site's own profiles.

## Consequences

- The three files depend on the layout's meta format (`og:title`, `description`, `robots`, `article:published_time`); a
  change there is checked against `vite/site-files/read-pages.js`.
- The files are produced by `npm run build` only; `npm run dev` does not serve them.
- `llms.txt` is generated, not static, because it lists the articles.
- Rejected: a minista page that prints XML (a page is always HTML); a hand-written sitemap or a list of routes kept beside
  `data/posts.js` (drifts); a sitemap library (a dependency for sixty lines); rendering the icons and the social image at
  build time (a native renderer and the fonts in every build for files that never change).
