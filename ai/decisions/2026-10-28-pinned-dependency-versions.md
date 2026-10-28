# Dependency versions are pinned exactly

Date: 2026-10-28 · Status: accepted

## Context

minista has a small community and a fast release pace (two majors within a year), and models know
an older major of it. An unnoticed minor or patch update can change the build output or the API
that the docs in this repo describe.

## Decision

- Every dependency in `package.json` is pinned to an exact version, without `^` or `~`
  (`npm install --save-exact`).
- An upgrade is a deliberate change: its own task or commit, the changelog read, every check run
  and every page used in the browser.

## Consequences

- Installs are reproducible across worktrees, CI and Vercel, together with the lockfile (decision
  `npm-package-manager`).
- Security and bug fixes arrive only when someone upgrades; an upgrade is not done silently
  inside an unrelated task.
- Rejected: caret ranges (the lockfile pins them too, but a fresh `npm install` of a new
  dependency can move the others); an automated update bot (pull requests nobody reviews,
  decision `local-merge-without-pr`).
