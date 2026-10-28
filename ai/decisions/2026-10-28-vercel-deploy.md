# Deployed on Vercel

Date: 2026-10-28 · Status: accepted

## Context

The site is static HTML with assets; it needs a live demo for the portfolio and previews of
branches, with clean URLs and a real 404 for unknown paths.

## Decision

- Vercel hosts the site through its Git integration: `main` is production, other branches get
  previews.
- Clean URLs without `.html`, a real 404 page with status 404, and long caching for hashed assets
  are set in the repo's Vercel config, not in the dashboard.
- The deployment task (MY-254) builds it and sets this record to `accepted`.

## Consequences

- A push to `main` is a production deploy: the local checks run before it (decision
  `local-merge-without-pr`).
- Tasks check the live site read-only and never change the Vercel project settings.
- Rejected: GitHub Pages (no clean URLs or headers without workarounds); Netlify (equal for a
  static site, Vercel was the author's pick).
