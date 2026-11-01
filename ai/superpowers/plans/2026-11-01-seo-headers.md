# Plan: SEO fixes and security headers (MY-316)

Branch `my-316-seo-headers`. Spec: `ai/superpowers/specs/2026-11-01-seo-headers.md`. The author approved every item of
the issue; RSS and Speculation Rules are out. Related records: `shared-page-head`, `seo-files-and-structured-data`,
`vercel-deploy`, `page-view-transitions`, `video-sources`.

## Checked against the docs

- Viewport: minista's Head guide (<https://minista.dev/docs/guide/head>) says a `viewport` meta in `Head` takes
  priority over the one of the layout; `minista agents` shows the same, and `ssg/utils/html.js` in the package adds its
  default `width=device-width` only when the page has no viewport meta.
- Headers: `headers` in `vercel.json` (<https://vercel.com/docs/project-configuration/vercel-json#headers>) is a list of
  `{ source, headers: [{ key, value }] }`; `source` is a path pattern, `/(.*)` matches every path.

## Changes

1. **Canonical.** `SeoMeta` prints `<link rel="canonical">` only when the page has no `robots` value: `robots` is set
   only for the `noindex` pages (`/404`, `/ui`).
2. **Viewport.** `BrowserMeta` prints `width=device-width, initial-scale=1`; the string is `site.viewport`.
3. **Titles.** `data/pages.js`: a descriptive `title` and `description` for Home, News, Podcasts, Resources and
   Contact; `<title>` stays `getPageTitle(title)` (`<title> | FutureTech`, at most about 60 characters), `og:title` stays
   the page's `title`. Home gets a title, so the fallback of `getPageTitle` (the bare site name) is no longer used by a
   page, and stays for a page without one. The sitemap and `llms.txt` read `og:title`, so they follow.
4. **Logo.** `public/logo.png`: a 512 x 512 square, the logo mark on the site's dark background, rendered once from
   `assets/logos/logo-mark.svg` with the `sharp` copy that minista already installs (a one-off script outside the
   repo, no new dependency). `site.logo` holds its path; `getOrganizationJsonLd` uses it instead of the 48 px favicon.
5. **`dateModified`.** `getArticleJsonLd` adds `dateModified`. A post has no revision history, so it equals `date`;
   a post that is edited later gets a `modified` field in `data/posts.js` that is read first (not added now: no post
   has one).
6. **Headers.** `vercel.json`, for every path (`/(.*)`): `X-Content-Type-Options: nosniff`,
   `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`,
   and `Content-Security-Policy: default-src 'self'; frame-src https://www.youtube-nocookie.com; object-src 'none';
base-uri 'self'; form-action 'self'; frame-ancestors 'none'`. The built pages have no inline style, no inline script
   and no `data:` URL, so no `unsafe-inline` or extra source is needed; the check below confirms it.
7. **Cache.** The four files of `public/` (`favicon.svg`, `favicon.png`, `logo.png`, `og-image.png`) get
   `Cache-Control: public, max-age=86400`; their URLs are fixed, so the default (revalidate every time) is replaced by
   one day, not by a year.
8. **Records and docs.** New `security-headers`; new `seo-markup-and-logo` that supersedes
   `seo-files-and-structured-data` and restates what stays; the decisions index; the map line of `public/`; one line in
   `assets-performance` (a new origin or an inline style or script is a change to the CSP record).

## Verification

- The checks under "Verification" in `AGENTS.md`; `dist/404.html` and `dist/ui.html` have no canonical, the other pages
  and the articles do; the JSON-LD of Home and of one article parses as JSON, the logo is at least 112 px.
- The CSP is tried before it is trusted: a small Node server (outside the repo) serves `dist` with `vercel.json`'s
  headers (clean URLs, the 404 page), headless Chrome opens every kind of page (Home, News, Podcasts, Resources
  with its tabs, Contact with the form submitted empty, an article, 404, `/ui`) over the DevTools protocol and collects
  console and `Security` violations; the video modal is opened with the request to YouTube answered by the server's own
  stub (`Fetch.fulfillRequest`), so nothing plays, and the frame is checked for being allowed. A cross-page navigation
  covers the view transition.
- After the merge the orchestrator checks the live headers with `curl -I`; the Vercel dashboard is not touched.
