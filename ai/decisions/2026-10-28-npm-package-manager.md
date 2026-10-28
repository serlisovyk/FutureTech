# npm is the package manager; one `package-lock.json`

Date: 2026-10-28 · Status: accepted

## Context

Agents run in parallel worktrees and CI installs from scratch; two lockfiles or mixed package
managers would make installs differ between them.

## Decision

- npm is the only package manager; `package-lock.json` is the only lockfile and is committed.
- Installs in a worktree and in CI use `npm ci`; a dependency change uses `npm install` and
  commits the lockfile with it.

## Consequences

- No `yarn.lock` or `pnpm-lock.yaml`; a stray one is deleted.
- The lockfile is not edited by hand unless there is no safer option.
- Rejected: pnpm or Yarn (no gain for a project of this size, and one more tool to install).
