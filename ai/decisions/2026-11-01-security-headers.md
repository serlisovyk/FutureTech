# Every response carries four security headers, with a strict Content-Security-Policy

Date: 2026-11-01 · Status: accepted

## Context

The site is static: no inline script or style, no `data:` URL, no third-party request at load, and one third-party
frame, the YouTube player the video modal creates on demand (`video-sources`). Vercel adds no security headers by
default, and the headers are set in `vercel.json` (`vercel-deploy`).

## Decision

`vercel.json` sets, for every path (the 404 page included):

- `X-Content-Type-Options: nosniff`;
- `Referrer-Policy: strict-origin-when-cross-origin`: with `no-referrer` the YouTube embed fails;
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`: the site uses none of them;
- `Content-Security-Policy: default-src 'self'; frame-src https://www.youtube-nocookie.com; object-src 'none';
base-uri 'self'; form-action 'self'; frame-ancestors 'none'`.

The CSP has no `unsafe-inline` and no extra source because the build needs none; it was tried against every page type,
with the video modal open, before it shipped. `frame-ancestors 'none'` stands in for `X-Frame-Options`.
The four files of `public/` are cached for a day: their URLs are fixed, so a year would keep a changed logo for a year.

## Consequences

- An inline `style` or script, a `data:` URL, a font, script or `fetch` from another origin and a second embed domain are
  blocked until a new dated record gives them a source.
- The Vercel dashboard is untouched: the headers live in the repo. A preview deployment injects Vercel's own toolbar
  script, which this policy may block; production has none.
- Rejected: `unsafe-inline` for styles (nothing needs it); `no-referrer` (breaks the embed); `X-Frame-Options` beside
  `frame-ancestors` (one mechanism is enough); `Strict-Transport-Security` (Vercel sets it); a CSP `report-uri` (no
  backend, `ai/rules/scope.md`).
