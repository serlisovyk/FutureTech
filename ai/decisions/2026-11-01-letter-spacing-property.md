# Letter spacing is a custom property, not a value set on `*` or inherited from `body`

Date: 2026-11-01 · Status: accepted

## Context

The base styles set `letter-spacing: -0.03em` on `*, ::before, ::after`. Every element therefore gets it itself, and a block
that the design draws with no letter spacing (`ls 0` in `ai/design-system.md`) set `letter-spacing: 0` on itself only: its
children (the FAQ question inside its button, the checkbox text, the required mark) took -3% again. Moving the value to
`body` and inheriting it does not work either: `em` is inherited as the computed length, so every heading would get the
body's -0.48px instead of 3% of its own size.

## Decision

- `--letter-spacing: -0.03em` is a token in the variables stylesheet, and the base rule reads it:
  `letter-spacing: var(--letter-spacing)` on `*, ::before, ::after`. A custom property inherits as text, so each element
  resolves the `em` against its own font size.
- A block that is `ls 0` in the design sets `--letter-spacing: 0` on its root, and everything inside it is 0. It never
  sets `letter-spacing: 0` for that purpose.
- Computed styles checked on `/contact` and `/`: the `ls 0` rows read 0, body text and headings -3% of their own size.

## Consequences

- A new `ls 0` role is one custom property; no child needs its own rule.
- Rejected: `body { letter-spacing }` with inheritance (the `em` problem above); `letter-spacing: inherit` on each child
  (a rule per child and easy to forget); a `0` token for the roles (they are the exception, the property is the mechanism).
