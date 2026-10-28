# Scope Rules

This is a small portfolio blog site. Improve it without turning it into a larger application
template.

## Do Not Add Without Explicit Request

- React or another UI framework in the browser, minista islands
- TypeScript
- Test frameworks or automated tests
- A CSS framework, a component library, a CSS preprocessor, CSS-in-JS, CSS Modules
- A backend, an HTTP API, a CMS, a database, a mock server
- Authentication, and login or sign-up pages
- Reader comments on posts, real likes or view counters stored on a server (counters are data
  in `data/`; a like is remembered in the visitor's browser only)
- A client-side router, analytics, third-party runtime scripts
- A service worker or PWA, a web app manifest, i18n
- Site search (minista's `pluginSearch`)

More linter rules beyond the configured ones are a new decision (`ai/decisions/`). A page
beyond Home, News, Podcasts, Resources, Contact, the article page and 404 needs the author's
explicit request.

Third-party scripts and font CDNs: `ai/rules/assets-performance.md`. The decisions behind
these limits are in `ai/decisions/`.

## Prefer

- Small, focused improvements to the existing pages
- Accessibility fixes tied to the existing interface
- Responsive and keyboard improvements
- Build and performance improvements that directly help the site

## Tradeoffs

- If a tool adds more maintenance than value, do not add it.
- If an optimization makes the source harder to understand, reconsider it.
- If a change is only useful for a much larger project, leave it out.
