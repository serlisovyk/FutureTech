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
each with the record that replaced it.

### Project and process

- [minista 5 on Vite 8: JSX rendered to static HTML; no React in the browser, no TypeScript](2026-10-28-minista-jsx-static-html.md)
- [No automated tests](2026-10-28-no-automated-tests.md)
- [Merge locally into `main`, no pull requests](2026-10-28-local-merge-without-pr.md)
- [npm is the package manager; one `package-lock.json`](2026-10-28-npm-package-manager.md)
- [Dependency versions are pinned exactly](2026-10-28-pinned-dependency-versions.md)
- [The MIT license is declared in `package.json` only, no `LICENSE` file](2026-10-28-license-in-package-json.md)
- [Line endings: Prettier `endOfLine: auto`, no `.gitattributes`](2026-10-28-line-endings-auto.md)
- [ESLint (with the JSX plugins), Stylelint and a Husky pre-commit hook; no more rule sets](2026-10-28-linters.md)
- [Deployed on Vercel](2026-10-28-vercel-deploy.md)
- [CI on every push, and a size budget with limits by fact](2026-10-28-ci-size-limit.md)
- [The design is a third-party template: a reference only, never published](2026-10-28-design-is-a-reference.md)

### Code

- [Browser JavaScript in OOP style: a class per widget and per section](2026-10-28-oop-javascript.md)
- [Pages set their head through minista's metadata and `Head`; CSS and one script entry are loaded by the layout](2026-10-28-page-head-and-entries.md)
- [Imports across folders use one alias per folder (`@components`, `@scripts`, …), never `../`](2026-10-28-path-aliases.md)
- [Styles live next to their JSX; `styles/` holds only global CSS](2026-10-28-styles-next-to-components.md)
- [Breakpoints and fluid values: two structural queries, ramps between the drawn widths](2026-10-28-fluid-ramps.md)
- [Photos ship as AVIF with a WebP fallback, through one component](2026-10-28-image-formats.md)
- [Fonts are self-hosted static woff2 files, latin subset](2026-10-28-self-hosted-fonts.md)
- [The Vite config is split into `vite/`, one module per concern](2026-10-28-vite-config-split.md)
- [Article bodies are JS sections in `data/`, no MDX](2026-10-28-article-data.md)

### Superseded

None yet.
