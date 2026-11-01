# A part imports a sibling part as `../<Part>`; `../` out of its section stays forbidden

Date: 2026-11-01 · Status: accepted

## Context

`section-parts-in-folders` made every part of a section a folder and had a part import its sibling by the full path,
`@sections/<group>/<Section>/<Part>`: three segments that repeat the section's own place, so moving or renaming a section
meant editing the import of every part that has a sibling. The author chose `../<Part>` for that one case.

## Decision

- **Kept from `section-parts-in-folders`:** a part is a folder `<Part>/` with `<Part>.jsx`, `<Part>.css` when it has styles and
  an `index.jsx`; the section imports it as `./<Part>`, its own `index.jsx` exports the section only, so a part is never
  reachable from `@sections`; a part with no rules of its own has no stylesheet and uses the block's classes; groups, barrels
  and the alias per folder stay as `folders-and-barrels` says.
- **A part imports a sibling part as `../<Part>`**, the parent folder being the section. Never through the `@sections`
  barrel (it exports the importing section, a cycle).
- **`../` stops at the section:** never `../../`, never a path into another section or into `components/`; those use the
  aliases. This is the one place `../` is written, the exception to the rule in `path-aliases-imported-folders`.

## Consequences

- A section moves or is renamed without touching the imports of its parts.
- An import line tells at a glance that the part is a sibling and not another section's.
- Rejected: the full `@sections/<group>/<Section>/<Part>` path (tied to where the section sits); `../` as a general
  permission (every import would have two forms).
