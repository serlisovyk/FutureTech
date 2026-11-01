# Lighthouse is measured with PageSpeed Insights on the deployed site

Date: 2026-11-01 · Status: accepted

## Context

The site must score 100 in all four Lighthouse categories on every page, mobile and desktop
(`self-hosted-fonts`). It gets there with what is already built: static HTML, one CSS bundle,
one small script, two preloaded fonts, the first-screen photo loaded eagerly with
`fetchpriority="high"` and every other photo lazy, AVIF and WebP with `sizes`, and no YouTube
iframe before a click. On 2026-11-01 PageSpeed Insights gave 100 on all pages. A local
Lighthouse run against production gave 100 for desktop, but 97 to 100 for mobile: the same page
moved between 0.9 s and 3.7 s of Speed Index from run to run, and a build from before the last
changes scattered the same way.

## Decision

- The Lighthouse score that counts is the one from PageSpeed Insights on the production URL.
- A local Lighthouse run is used to find a cause, not to judge the score; a mobile Speed Index
  that moves between runs is noise, not a regression.

## Consequences

- A change to a page, images, fonts, scripts or the page head is checked on PageSpeed Insights
  after it is deployed (`ai/rules/definition-of-done.md`).
- Rejected: tuning the site until a local mobile run is stable at 100. The scatter comes from
  the machine and the network, not from the page.
