# minista 5 on Vite 8: JSX rendered to static HTML; no React in the browser, no TypeScript

Date: 2026-10-28 · Status: accepted

## Context

The site is a multi-page blog drawn from a design: many repeated cards and rows, an article page
per post, and a handful of widgets (tabs, an accordion, a menu, a video dialog, a form). It needs
components and pages generated from data, but nothing on the page needs a framework at runtime.

## Decision

- minista 5 (a set of Vite plugins) on Vite 8 renders JSX pages, layouts, sections and components
  into static HTML at build time; React 19 runs only during the build.
- The browser gets HTML, CSS and the site's own vanilla JavaScript classes (decision
  `oop-javascript`). minista's `pluginIsland` is not used: no React in the browser.
- Components and scripts are JavaScript (`.jsx`, `.js`), no TypeScript (the author's choice).
- Article pages are generated from `data/` through minista's static-data API.
- minista's API is taken from its docs and the installed package, never from memory
  (`ai/rules/minista.md`).

## Consequences

- A JSX component has no hooks, state or handlers; behavior lives in `scripts/`.
- Every page works without JavaScript; scripts only add behavior.
- minista has a small community and models know an older major: pinned versions (decision
  `pinned-dependency-versions`) and checking the docs keep that risk small.
- Rejected: Astro (popular, but the author chose minista's plain JSX-to-HTML model); Vite with
  Handlebars partials (no data-driven routes, weaker components); a React SPA or Next.js (a runtime
  the static site does not need); TSX (more tooling for a site of this size).
