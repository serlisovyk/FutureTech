# Line endings: Prettier `endOfLine: auto`, no `.gitattributes`

Date: 2026-10-28 · Status: accepted

## Context

The author works on Windows with git's `core.autocrlf=true`: files are CRLF in the working
copy and LF in the index. Prettier's default `endOfLine` is `lf`, so `prettier --check` would
flag every file in such a working copy, and `prettier --write` would rewrite every file to LF
and fight git's conversion.

## Decision

- `.prettierrc` sets `"endOfLine": "auto"`: Prettier keeps whatever line ending each file has.
- The repo has no `.gitattributes`; line endings are left to each contributor's git settings.

## Consequences

- `npm run format:check` passes the same way in a CRLF working copy (the author's Windows) and
  in an LF one (CI, Vercel, macOS, Linux): the index holds LF either way.
- A file committed with CRLF by a client without `autocrlf` is not flagged; it would show up as
  a diff in review, not as a failing check.
- Rejected: `.gitattributes` with `* text=auto eol=lf` and `endOfLine: lf` (forces LF in every
  working copy, but the author chose not to add the file or change how their git checks files
  out).
