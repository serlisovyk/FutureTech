# Plan: design system document and the breakpoint decision

Issue MY-246, branch `my-246-design-system`. Docs only: no code, no dependencies.

## Scope

- `ai/design-system.md` — the design in words and numbers, so CSS and sections are written
  without opening the design: widths and container, colours, type scale, spacing and radii,
  components, pages, assets. Values are read from the design at three widths and written in the
  order 1920 / 1440 / 390.
- A decision record for breakpoints and fluid values (`fluid-ramps`).
- `ai/rules/css.md` — "Breakpoints and fluid values" gets the decided scheme instead of the
  pending note. `ai/map.md` — link to the document, drop the task number.
  `ai/decisions/README.md` — the new record in the index.

## Settled by the author (not reopened)

- No design link exists (decision `design-is-a-reference`): the design is read from a local file
  and the page screenshots; nothing of it is committed. The "import into the design tool" item is
  dropped.
- Drawn at Desktop 1920, Laptop 1440, Mobile 390.
- Type and spacing are fluid between 390, 1440 and 1920 through ramps; media queries only for
  structure: `width < 1024px` and `width < 768px`; none at 1440.

## Choices where the data is ambiguous

Each is stated in the document next to the value, as a note for the CSS task or the author.

1. Colours come from the shared colour styles the layers point to, not from the stale colour left
   on a layer under its style. The page background is Dark/08, bands and the header Dark/10.
2. Type roles are the distinct (family, weight, size at the three widths, line height) tuples
   found by matching each text across the three frames. Two uses merge into one role only when
   all three sizes, weight, line height and letter spacing match.
3. Off-palette values stay as drawn and are flagged, not merged into a token: the star yellow
   (#FFCE22 next to Yellow/55), the liked-heart orange (#FF5500), the light separators in one
   row of the Home testimonials (#E5EFFF, every other separator is Dark/15).
4. The guide lists Kumbh Sans Regular and Medium and Inter up to Bold; the pages use Kumbh Sans
   SemiBold too and no Inter Bold. The document lists what the pages use; adding a face is the
   author's call (`ai/rules/assets-performance.md`).
5. The 40 px top padding of the Mobile top banner and the mobile menu in its open state are not
   explained or drawn; both are flagged, nothing is invented.
6. Between 390 and 1440 there is no drawing of the stacked layouts at 768–1439; the Mobile
   composition is the model for `width < 1024px`, flagged in the document.
7. The abstract hero decor is about 440 groups of vectors, rotated and clipped by the hero column:
   recommended as one raster through the image plugin, not an inline SVG. The author may overrule.
8. The design's section names (the sitemap) are used for the page order where they match the frames.

## Verification

- Numbers are cross-checked: every type row has its three sizes from the matched texts; contrast
  ratios are computed, not estimated.
- `npx --yes prettier@3 --check --end-of-line auto .` — the only applicable check (no
  `package.json` yet).
- Size limits of `ai/rules/docs.md`: `ai/design-system.md` about 350 lines, the record about 30,
  `ai/rules/css.md` and `ai/map.md` under their limits.
- No design link, file key, node id, exported frame or file path in any committed file; no other
  project named.
- Self-review with `ai/skills/review.md` over `git diff main..HEAD`.
