# VS Code learns `@tablet` and `@mobile` from a custom data file in `.vscode/`

Date: 2026-11-01 · Status: accepted

## Context

`postcss-shorthands` added `@tablet` and `@mobile`, which a PostCSS plugin expands at build time.
VS Code's built-in CSS check does not know them and marks every use as "Unknown at rule"
(`css.lint.unknownAtRules`); Stylelint and the build accept them. The author's earlier projects
have no `.vscode/` folder.

## Decision

- `.vscode/settings.json` points `css.customData` at `.vscode/css-data.json`, which describes
  `@tablet` and `@mobile` and what they expand to. Nothing else goes into `.vscode/`.
- The widths in the descriptions are text for the hover hint; the source of truth stays
  `BREAKPOINTS` in `vite/constants.js`, and a change there updates the hint too.

## Consequences

- The warning is gone, a hover shows the expansion, and a typo such as `@tabelt` is still flagged.
- `fluid()` needs no entry: VS Code does not check unknown functions.
- Rejected: `"css.lint.unknownAtRules": "ignore"` (hides typos too) and `"css.validate": false`
  (drops the editor's CSS check entirely).
