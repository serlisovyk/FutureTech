# Borders are drawn inside the design's size

Date: 2026-10-28 · Status: accepted

## Context

The design draws every border inside its frame: a 1px stroke on a button with 18 px padding sits within
that padding, and the button's height (63 px) is the text plus the two paddings. CSS with `box-sizing:
border-box` adds a border to the padding, so copying the design's padding into the stylesheet makes each
bordered block 2 px too tall and wide (the outline `Button` was 65 px instead of 63).

## Decision

- A block with a border has padding equal to the design's padding minus the border width on that side, so
  its outer size equals the design's. A 1px border on a design padding of 18 is `calc(17px …)`, written
  through the ramps like any other value (`fluid-ramps`).
- This holds for every bordered block: the kit's `Button` (outline), `CounterPill`, `MetaItem` card, `Badge`,
  the band of `SectionHeading`, a divider that sits in a block's padding, and every later block.
- A transparent border keeps its width, so a state that hides the border (the liked `CounterPill`) does not
  change the size.
- A sized image with `box-sizing: border-box` already has its border inside (the avatar ring).

## Consequences

- A measured size on `/ui` or on a page equals the number in `ai/design-system.md`.
- The padding in a stylesheet is not the design's number: the reader subtracts the border width to compare.
- Rejected: keeping the design's padding and drawing the border outside it, with `box-sizing: content-box` on
  bordered blocks (a second layout model on one page, and a width set on such a block stops being its outer
  width); a token for the border width inside every `calc` (the number is one pixel, and the subtraction is
  clearer written out).
