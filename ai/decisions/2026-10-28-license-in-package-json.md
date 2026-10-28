# The MIT license is declared in `package.json` only

Date: 2026-10-28 · Status: accepted

## Context

A public repository is usually expected to say under which license its code is shared. The
author wants that stated, but does not want one more root file that carries nothing but the
standard text.

## Decision

- `package.json` has `"license": "MIT"`. That is the whole declaration.
- The repo has no `LICENSE` file, and none is added.

## Consequences

- The license is visible to npm tooling and to anyone reading `package.json`; the repo root
  stays free of a file that only repeats the standard MIT text.
- GitHub does not show a license badge for the repository, because it detects one from a
  `LICENSE` file; the author accepts that.
- The site is not published to npm (`"private": true`), so no tool requires the file.
- Rejected: a `LICENSE` file next to the field (the usual convention and what GitHub detects,
  but the author chose not to keep a file for a text the field already names). Adding it later
  is a new record that supersedes this one.
