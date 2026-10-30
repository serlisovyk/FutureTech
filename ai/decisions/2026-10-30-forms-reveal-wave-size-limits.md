# The JS and CSS limits are raised for the article pages, the reveal and hover states, and the Contact form

Date: 2026-10-30 · Status: accepted

## Context

The article route, `Reveal` with the hover states across the site, and the Contact form with its field validation
were built in parallel and are measured together. `Reveal` and the form add scripts that every page loads, the hover
rules and the form add styles to the one bundle. No photos were added.

## Decision

- JavaScript: 2.5 kB → 3.5 kB (measured 3.15 kB gzipped).
- CSS: 9 kB → 10.5 kB (measured 9.98 kB gzipped).
- Fonts and images do not change. Limits stay by fact, rounded up with small headroom (`ci-size-limit`).

## Consequences

- The next widget or section that grows a bundle raises its limit in a new record.
- Rejected: one record per task (each measured alone, none of the numbers would hold once they are merged); loading the
  form script only on Contact (one entry for the whole site, decision `page-head-and-entries`).
