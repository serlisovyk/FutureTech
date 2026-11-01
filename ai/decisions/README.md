# Decisions

Durable project decisions: why a choice was made, with a date. One decision per file, named
`YYYY-MM-DD-<slug>.md`. Format: a title, a `Date: … · Status: …` line, then `Context` →
`Decision` → `Consequences`; short and specific (about 30 lines, `ai/rules/docs.md`), rejected
alternatives with their reason, no check logs.

How this differs from `ai/rules/`: **rules** state what to do now (current law, rewritten as it
changes). **Decisions** state _why_, with a date. A record's text is not rewritten or deleted;
only its `Status` line changes.

The point: an agent (or a human) does not relitigate settled questions or "helpfully" restore
something that was deliberately rejected.

## Status

- `accepted` — in force and built.
- `accepted (not implemented)` — agreed now, built by a later task; that task sets it to
  `accepted`.
- `superseded by <file>` — replaced by a newer record; its line in the index moves to the
  Superseded group.

## Changing a decision

A refinement or a reversal is a **new record** that restates what stays in force, so the reader
needs only the newest one. The old record only changes its `Status` line to
`superseded by <file>`.

## When to add a record

Propose one as soon as the decision surfaces, without being asked, and only for:

- a standing constraint ("we will not do X", "always / never Y");
- a feature the author deliberately rejected;
- a tradeoff accepted over a named alternative, one a future agent would likely undo;
- a goal agreed now and built later (`accepted (not implemented)`);
- a convention chosen where an obvious alternative existed.

Not decisions: one-off task details, plain current-state facts, a choice nobody would reverse,
anything `ai/rules/` and `ai/map.md` already cover. Do not create noise records.

## Records

The first groups are the records in force, by topic; the last one lists the superseded records,
each with the record in force at the end of its chain.

### Project and process

- [minista 5 on Vite 8: JSX rendered to static HTML; no React in the browser, no TypeScript](2026-10-28-minista-jsx-static-html.md)
- [No automated tests](2026-10-28-no-automated-tests.md)
- [Merge locally into `main`, no pull requests](2026-10-28-local-merge-without-pr.md)
- [npm is the package manager; one `package-lock.json`](2026-10-28-npm-package-manager.md)
- [Dependency versions are pinned exactly](2026-10-28-pinned-dependency-versions.md)
- [The MIT license is declared in `package.json` only, no `LICENSE` file](2026-10-28-license-in-package-json.md)
- [Line endings: Prettier `endOfLine: auto`, no `.gitattributes`](2026-10-28-line-endings-auto.md)
- [ESLint 9 with the JSX plugins, Stylelint with guards for the CSS rules, lint-staged 17 on Node 22.22.1](2026-11-01-linters-guards.md)
- [Deployed on Vercel](2026-10-28-vercel-deploy.md)
- [Every response carries four security headers, with a strict Content-Security-Policy](2026-11-01-security-headers.md)
- [CI on every push, and a size budget with limits by fact](2026-10-28-ci-size-limit.md)
- [`/ui` ships, noindex and unlinked; the CSS limit is raised and an images limit added](2026-10-28-ui-page-and-size-limits.md)
- [The size limits after the audit fixes: CSS 11.5 kB, images 3.9 MB](2026-11-01-size-budget-after-audit.md)
- [Placeholder contact data use reserved names, and social links go only to real profiles](2026-11-01-placeholder-content.md)
- [The contact form validates in the browser and sends nothing](2026-10-30-contact-form-without-backend.md)
- [The design is a third-party template: a reference only, never published](2026-10-28-design-is-a-reference.md)

### Code

- [Letter spacing is a custom property, not a value set on `*` or inherited from `body`](2026-11-01-letter-spacing-property.md)
- [Browser scripts are all classes; browser-API wrappers are classes in `scripts/services/`](2026-11-01-script-helper-classes.md)
- [The layout builds the title and the head meta from the page's `metadata`; the site name lives in `data/site.js`](2026-10-28-shared-page-head.md)
- [The Organization logo is a 512 px PNG, an article has dateModified, noindex pages have no canonical](2026-11-01-seo-markup-and-logo.md)
- [Aliases cover the `src/` folders others import from; `vite/` reads the `src/` barrels by relative path](2026-11-01-path-aliases-imported-folders.md)
- [Components and sections are folders with barrels (`@components`, `@sections`, `@utils`); assets sit in subfolders](2026-10-28-folders-and-barrels.md)
- [Imports have one order in every file; the order is documented, not enforced by a linter](2026-11-01-import-order.md)
- [Constants live in one folder (`@constants`), data is a barrel (`@data`), page metadata is data](2026-11-01-constants-folder-data-barrel.md)
- [The parts of a section are folders, like components; a part imports a sibling part as `../<Part>`](2026-11-01-part-imports-by-parent-folder.md)
- [A data item made for a component's props is spread; the rest `...props` stays forbidden](2026-11-01-spread-of-a-data-item.md)
- [Styles live next to their JSX; `styles/` holds only global CSS](2026-10-28-styles-next-to-components.md)
- [Fluid values, hover and breakpoints are short notations that PostCSS plugins expand; `fluid()` writes each step as a number](2026-11-01-postcss-notations.md)
- [VS Code learns `@tablet` and `@mobile` from a custom data file in `.vscode/`](2026-11-01-vscode-css-data.md)
- [Borders are drawn inside the design's size: padding is the design's value minus the border](2026-10-28-borders-inside.md)
- [Grey text is raised to AA, form controls get a 3:1 border, other borders stay as drawn](2026-10-31-grey-text-and-control-borders.md)
- [Photos ship as AVIF with a WebP fallback, through one component](2026-10-28-image-formats.md)
- [Only the JPG originals an article names reach `dist/`](2026-11-01-og-image-originals.md)
- [Fonts are self-hosted static woff2 files, latin subset; Inter 400, Inter 500 and Kumbh Sans 500 are preloaded](2026-11-01-font-preloads.md)
- [Lighthouse is measured with PageSpeed Insights on the deployed site](2026-11-01-lighthouse-on-pagespeed.md)
- [The Vite config is split into `vite/`, one module per concern](2026-10-28-vite-config-split.md)
- [Article bodies are JS sections in `data/`, and an article has no table of contents](2026-11-01-article-without-contents.md)
- [The mobile menu is a drawer on `Toggle` and `inert`, with a `scripting: none` fallback](2026-10-28-mobile-menu-drawer.md)
- [Videos are real public YouTube videos, played in a modal from the privacy-enhanced embed](2026-10-28-video-sources.md)
- [Page changes use the browser's cross-document view transition, in CSS only](2026-11-01-page-view-transitions.md)

### Superseded

- [The size limits: the current budget, set by fact, after the avatars, the fluid() change and the script fixes](2026-11-01-size-budget.md) — replaced by `size-budget-after-audit`
- [Pages set their head through minista's metadata and `Head`; CSS and one script entry are loaded by the layout](2026-10-28-page-head-and-entries.md) — replaced by `shared-page-head`
- [The sitemap, robots.txt and llms.txt are built from the built pages; JSON-LD is Organization and BlogPosting](2026-10-30-seo-files-and-structured-data.md) — replaced by `seo-markup-and-logo`
- [Article bodies are JS sections in `data/`, no MDX](2026-10-28-article-data.md) — replaced by `article-without-contents`
- [Browser JavaScript in OOP style: a class per widget and per section](2026-10-28-oop-javascript.md) — replaced by `script-helper-classes`
- [Browser scripts are classes, with pure helper functions in `scripts/utils/`](2026-11-01-script-helpers.md) — replaced by `script-helper-classes`
- [Breakpoints and fluid values: two structural queries, ramps between the drawn widths](2026-10-28-fluid-ramps.md) — replaced by `postcss-notations`
- [The CSS limit is raised to 4 kB for the header, the CTA and the footer](2026-10-28-shared-blocks-css-limit.md) — replaced by `size-budget-after-audit`
- [The limits are raised for the cards and the video modal; images are measured as a total](2026-10-28-cards-and-modal-size-limits.md) — replaced by `size-budget-after-audit`
- [The CSS and images limits are raised for the post feed](2026-10-28-post-feed-size-limits.md) — replaced by `size-budget-after-audit`
- [The CSS and images limits are raised for the first Home sections](2026-10-28-home-wave-size-limits.md) — replaced by `size-budget-after-audit`
- [The CSS and images limits are raised for the last Home sections and the News first screen](2026-10-30-home-news-wave-size-limits.md) — replaced by `size-budget-after-audit`
- [The CSS and images limits are raised for the rest of News and the top of Podcasts](2026-10-30-news-podcasts-wave-size-limits.md) — replaced by `size-budget-after-audit`
- [The JS, CSS and images limits are raised for the Podcasts episodes and the Resources page](2026-10-30-podcasts-resources-wave-size-limits.md) — replaced by `size-budget-after-audit`
- [The CSS and images limits are raised for the Resources cards and the first Contact sections](2026-10-30-resources-contact-wave-size-limits.md) — replaced by `size-budget-after-audit`
- [The JS and CSS limits are raised for the article pages, the reveal and hover states, and the Contact form](2026-10-30-forms-reveal-wave-size-limits.md) — replaced by `size-budget-after-audit`
- [The JS, CSS and images limits are raised for the article page and the SEO wave](2026-10-31-article-seo-wave-size-limits.md) — replaced by `size-budget-after-audit`
- [The JS and images limits are lowered after the review fixes](2026-11-01-review-wave-size-limits.md) — replaced by `size-budget-after-audit`
- [The size limits: the current budget, set by fact, with one record to read](2026-11-01-size-limits.md) — replaced by `size-budget-after-audit`
- [Fluid values, hover and breakpoints are short notations that PostCSS plugins expand](2026-11-01-postcss-shorthands.md) — replaced by `postcss-notations`
- [Fonts are self-hosted static woff2 files, latin subset](2026-10-28-self-hosted-fonts.md) — replaced by `font-preloads`
- [ESLint (with the JSX plugins), Stylelint and a Husky pre-commit hook; no more rule sets](2026-10-28-linters.md) — replaced by `linters-guards`
- [The parts of a section are folders, like components; a part imports a sibling by its folder path](2026-11-01-section-parts-in-folders.md) — replaced by `part-imports-by-parent-folder`
- [Imports across folders use one alias per folder (`@components`, `@scripts`, …), never `../`](2026-10-28-path-aliases.md) — replaced by `path-aliases-imported-folders`
