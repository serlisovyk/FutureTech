# ESLint 9 with the JSX plugins, Stylelint with guards for the CSS rules, lint-staged 17 on Node 22.22.1

Date: 2026-11-01 · Status: accepted

## Context

`linters` kept lint-staged on 16 because 17 needed a newer Node than `engines`, and ESLint on 9 because the plugins stopped at 9. The
first holds no more (CI and Vercel run Node 24), the second still does. Stylelint checked only the BEM pattern and hex colours, while
`ai/rules/css.md` states more rules a stylesheet can break unseen, and the hook formatted JSON and Markdown but not the YAML that
`prettier --check .` also reads in CI.

## Decision

- **Kept from `linters`:** ESLint flat config with `@eslint/js` recommended, browser and Node globals, `eslint-config-prettier` last;
  `eslint-plugin-react` and `eslint-plugin-jsx-a11y` for `src/**/*.jsx`; `stylelint-config-standard` with the BEM pattern and
  `color-no-hex` (off in the token file); Husky and lint-staged on the staged files, never bypassed; exact versions.
- **ESLint and `@eslint/js` stay on 9.** `eslint-plugin-react` and `eslint-plugin-jsx-a11y` (both on their latest) accept ESLint up to 9
  in their peers. Moving to 10 waits for them; `--legacy-peer-deps` stays rejected.
- **lint-staged 17**, so `engines.node` is `>=22.22.1`, the floor of lint-staged 17. The hook formats `*.{json,md,yml,yaml}`.
- **Stylelint guards**, each a written rule of `css.md` that the code already met: `declaration-no-important`; `rgb`, `rgba`, `hsl`,
  `hsla` disallowed (off in the token file, like hex); `transition` and `transition-property` never name `all` or the bare `background`;
  `property-disallowed-list` for the `background` shorthand; `max-nesting-depth` 2 and at most 3 compound selectors.
- CI: the job has `timeout-minutes: 10`.

## Consequences

- A guard turns a broken rule into a lint error in the hook and in CI; a new one is a record, with its sentence in `css.md`.
- Node older than 22.22.1 cannot run the hook; `npm` only warns, nothing in production changes.
- Rejected: ESLint 10 with an override of the peers (an unsupported resolution); regex guards for `padding` longhands and `minmax(0, …)`
  (they cannot tell the forbidden form from a valid one).
