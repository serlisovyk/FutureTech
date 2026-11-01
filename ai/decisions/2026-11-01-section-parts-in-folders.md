# The parts of a section are folders, like components

Date: 2026-11-01 · Status: accepted

## Context

`folders-and-barrels` made a section a folder but left its parts as files beside it (`ContactForm/TextField.jsx`,
`FormField.css`, …). A section with seven parts read as a flat list of files, and a part with a stylesheet was two
loose files, while a component of `components/` is a folder with its own `index.jsx`.

## Decision

- Every part of a section is a folder `sections/<group>/<Section>/<Part>/` with `<Part>.jsx`, `<Part>.css` when it has
  styles, and an `index.jsx` that exports it. The section imports it as `./<Part>`; the section's own `index.jsx`
  still exports the section only, so a part is never reachable from `@sections`.
- A part that needs a sibling part imports it by its folder, `@sections/<group>/<Section>/<Part>`: the form `path-aliases`
  already prescribes for crossing folders (`@components/media/Icon` is the same case), a folder path and never the
  `@sections` barrel (it exports the importing section, a cycle). `../` stays forbidden, so no rule changes for it.
- A part with no rules of its own has no stylesheet: the footer parts and the contact column parts use the classes of
  the block their section or shell owns, and a renamed class would change the markup.
- The rest of `folders-and-barrels` stays: groups, barrels, the alias per folder.

## Consequences

- A part is moved, renamed or removed as one folder with its styles; a new part is a folder, and the section gets one
  import line.
- The bundle's CSS order follows the imports, which keep their order: the built stylesheet is unchanged.
- Rejected: parts nested inside the part that uses them (`FeatureGroup/FeatureCard/`): the form parts are shared by
  several parts, so the nesting would be a rule for some and not for others; `../<Part>` for siblings (breaks the
  no-`../` rule for every import).
