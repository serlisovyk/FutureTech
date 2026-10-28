# Agent Instructions

This is the canonical instruction file for **every** AI agent working in this repo.
`CLAUDE.md` and any other tool-specific entry point point here — keep shared knowledge
in `ai/`, not duplicated per tool.

## Project

A multi-page tech blog, "FutureTech", built with minista 5 on Vite 8: pages and
components are JSX rendered **at build time** into static HTML, styled with modular plain
CSS (native nesting, design tokens), with behavior in vanilla JavaScript classes (ESM).
React runs only during the build; the browser gets HTML, CSS and the site's own scripts.
Pages: Home, News, Podcasts, Resources, Contact, and an article page per blog post. No
TypeScript, no backend, no automated tests. Keep the code clean, practical, accessible,
and proportional to the project size.

- Tasks: Linear, project **FutureTech** (team `MY`, issues `MY-<n>`)

## Read First

- `ai/map.md` — where pages, components, sections, styles, scripts and data live, and what
  the project deliberately does **not** have. Read it before exploring the code from
  scratch.
- The rules of the area you touch, in `ai/rules/`: `architecture.md` for how a page is
  put together, `minista.md` for the build tool and its API, `jsx.md` and `css.md` for
  markup and styles, `oop.md` and `style.md` for client JavaScript,
  `assets-performance.md` for images, fonts and page metadata, `scope.md` for what not to
  add without an explicit request.
- `ai/rules/definition-of-done.md` — the gate before a change is handed over;
  `ai/rules/docs.md` — one fact one home, size limits, no history in docs.
- `ai/superpowers/` is the archive of past plans and specs: read only the plan or spec of
  the feature you change.

## minista: the docs, not memory

Models mostly know minista v3, which is outdated: v5 is a set of Vite plugins with a
different API. Before writing config or using an API, check it against the official docs
(<https://minista.dev>) and the guide that `minista agents` prints — never against memory.
Run `npx --no-install minista agents` for the installed guide (`--json` for the metadata it
generates). `ai/rules/minista.md` has the details.

## Decisions

`ai/decisions/` records durable decisions and **why** they were made. Start from its
`README.md` index and read the records of what you touch, before proposing to change or
"restore" anything — rules say what to do now, decisions say why. Reversing one means a
new dated record, not editing the old one.

Propose a new record, without being asked, when a decision meets the criteria in that
`README.md`.

## Workflow

`ai/workflow.md` is the end-to-end flow for a Linear task: orient → plan (+ spec when
behavior changes) → implement → docs → verify → Definition of Done → self-review →
report → author approval → local merge into `main`.

The parts that never bend:

- Never commit task work directly on `main` — use a `my-<n>-<slug>` branch.
- Write a **plan** for anything non-trivial, and a **spec** when observable behavior
  changes, under `ai/superpowers/` — one commit, before any code.
- Nothing is merged and no issue is marked `Done` without the author's explicit
  approval.
- Merges happen locally into `main`, then `main` is pushed. No pull requests, and never
  a force-push of `main`.
- Never bypass the pre-commit hook (`--no-verify`).
- No automated tests — do not add them unless explicitly asked.

Prompts to start agent sessions live in `ai/prompts/` (index in `ai/prompts/README.md`):
`orchestrator.md` runs several tasks from one session, `task.md` runs a single task.
Linear issues follow `ai/linear-task-template.md`.

## Skills

Skill playbooks live in `ai/skills/` (tool-agnostic Markdown, index in
`ai/skills/README.md`):

- `section` — how a page section goes from data to JSX, styles, controller, wiring and
  docs.
- `review` — self-review for regressions, scope creep, accessibility, and docs drift.

If a change materially reshapes a pattern, update the matching skill in the same change
(`ai/rules/docs.md`).

## Working Principles

- Prefer small, focused changes.
- A feature lands where `ai/rules/architecture.md` puts it: data in `data/`, markup in a
  JSX component or section, looks in that block's stylesheet, behavior in a class
  (`ai/rules/oop.md`).
- Follow the existing folder structure, file naming and patterns.
- Do not add new abstractions unless they remove real duplication or clarify a boundary.
- Do not rewrite working code just to make it look different.
- Keep UI changes responsive, accessible, and consistent with the current visual language.
- If a request conflicts with these rules, follow the user's explicit request and mention
  the tradeoff.

## Project Defaults

- Package manager: `npm`; keep `package-lock.json`, no other lockfile, and do not edit it
  by hand unless there is no safer option. Dependency versions are pinned exactly, without
  `^` or `~`.
- Stack: Node.js build tooling; minista 5 (Vite plugins) on Vite 8, React 19 at build
  time only; JSX components, plain CSS with native nesting and design tokens, JavaScript
  ESM classes in the browser.
- Sources: everything under `src/`; output in `dist/`. `ai/map.md` shows where each part
  lives.
- Formatting and linting: Prettier, ESLint and Stylelint, a pre-commit hook (Husky,
  lint-staged), and GitHub Actions running the checks under "Verification" on every push.
- The design is a third-party template: a visual reference only. Its link, file key and
  node ids never go into the repo (`ai/decisions/`).

## Language

- Chat with the author in Russian.
- Code, comments, commit messages, specs, plans, prompts, and `ai/` docs stay in English.
- Linear issues are written in Russian, following `ai/linear-task-template.md`.

## Verification

Run before handing over any change:

```bash
npm run lint
npm run lint:css
npm run format:check
npm run build
npm run check
npm run size
```

A script the repo does not have yet is skipped and named as skipped in the report. Then
exercise the change in the browser (`npm run dev`) at the three design widths (Desktop,
Laptop, Mobile — exact numbers in `ai/design-system.md`), with the keyboard and the
mouse — a green build does not prove a UI change works. If a check cannot be run, report
that clearly.
