---
name: review
description: Use to self-review a diff in the FutureTech repo for regressions, scope creep, accessibility, responsive layout, and docs drift before reporting a change done.
---

# Review

## When to use

Self-review pass before handing over any non-trivial change, per `ai/workflow.md`.

## Checklist

Walk the diff against `ai/rules/definition-of-done.md` and the rules of the areas it touches
(`architecture`, `minista`, `jsx`, `css`, `oop`, `style`, `scope`, and `assets-performance` for
images, fonts or the metadata). Then check what the rules do not cover:

- **Design**: the change matches the design at the three widths — grid, spacing, type, block
  order, button states; values are the design numbers (a token when two blocks share them), not
  literals tuned by eye.
- **Responsive**: no horizontal scroll at any width or at 200% zoom; the in-between widths do
  not break; the mobile menu opens, closes and is not reachable while closed.
- **Keyboard and ARIA**: Tab order is logical and the focus is visible; tabs move with the
  arrows, `Home` and `End`; the menu, the expander and the dialog close with `Escape` and hand
  the focus back; `aria-expanded`, `aria-selected` and `aria-pressed` match what is on screen;
  hidden content is out of reach (`hidden` or `inert`); one `h1` per page and headings in order.
- **JSX and data**: no hooks, handlers or browser API in a component; loop texts live in
  `data/`; every page that needs a section renders it; links to posts come from the one helper.
- **minista**: every API, option or CLI flag used matches the docs of the installed version;
  no plugin added without a decision.
- **Scripts**: listeners are attached by `start()`, `main.js` only creates and starts, a
  section missing from the page breaks nothing; the page is complete without JavaScript; no
  module-level state, no inline style except a custom property.
- **Motion**: a new animation takes its duration from the token and is off under reduced motion.
- **Build and assets**: every page and every article builds; images have size and `alt` and go
  through the image plugin; icons come from the sprite; no unused asset left behind; no React
  or island runtime in `dist/`.
- **Scope**: nothing from `ai/rules/scope.md` or the decisions behind it slipped in; no
  unrelated rewrites; removed behavior left no unused code, styles or data; no design link or
  key in any file.
- **Docs drift**: the docs still match the code, none went over its limit (`ai/rules/docs.md`),
  and a decision record exists if a durable decision was made.

## Verification gaps to catch

- Build green, but the change was never used in the browser.
- Checked on desktop only — not at Mobile, and not with the keyboard.
- Checked at one width only, not at all three.
- Checked in the default look only: not on hover, not on focus, not at 200% zoom.
- Checked only with JavaScript on, or only with motion enabled.

## Report

State what was checked and what was found — fix it or say plainly why a finding is being left
alone, per `ai/workflow.md`'s report step.
