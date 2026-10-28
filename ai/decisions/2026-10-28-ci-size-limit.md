# CI on every push, and a size budget with limits by fact

Date: 2026-10-28 · Status: accepted

## Context

`main` is merged locally without a pull request (decision `local-merge-without-pr`) and the
pre-commit hook can be bypassed. Something has to catch what slips through, and the page weight
has to stay small from the first section on.

## Decision

- GitHub Actions runs one job, `check`, on every push to any branch: `npm ci`, `lint`, `lint:css`,
  `format:check`, `build`, `check` (`minista check`) and `size`. Any failing step fails the run.
- The job runs on Node 24, as Vercel does, with the npm cache; the repo has no `.nvmrc`. `HUSKY` is
  `0` so that `npm ci` does not install hooks, and the token has read-only access to the contents.
- `size-limit` (the `file` plugin) measures the built files in `dist/assets/` against
  `.size-limit.json`: JavaScript and CSS gzipped, fonts as they are (woff2 is already compressed).
- Limits are set by fact: the measured size rounded up to a step with small headroom.
- An images entry is left out: `size-limit` fails on a glob that matches nothing, and no page has a
  photo yet. The first section with a photo adds it, with its own limit.

## Consequences

- A broken `minista check` or a blown budget turns the run red on the branch and on `main`.
- Raising a limit is a new dated record that says what grew and why; limits are not raised to make
  a run green.
- Dependencies `size-limit` and `@size-limit/file` are pinned exactly (decision
  `pinned-dependency-versions`).
- Rejected: required status checks on `main` (the merge is local, nothing would enforce them); CI
  only on pull requests (there are none); a Node matrix or more jobs (one runtime, one deploy
  target, nothing to split); round "comfortable" limits (they stop catching a regression until the
  headroom is eaten).
