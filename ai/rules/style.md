# Style Rules

Prettier decides the formatting; these are the rules it does not. Markup and data:
`ai/rules/jsx.md`; CSS: `ai/rules/css.md`; classes: `ai/rules/oop.md`.

## General

- **No comments in code** — JSX, CSS, JavaScript and the root configs. Names and small
  functions say what the code does; a durable "why" goes to a rule, a skill or a decision
  record.
- Follow the naming and spacing patterns already in the repo before introducing new ones.
- Folders, stylesheets, data and asset files are kebab-case; a JSX component and a class file
  carry their PascalCase name (`ai/rules/jsx.md`, `ai/rules/oop.md`).

## JavaScript

- Early `return` instead of nested `if` / `else`; no nested ternaries.
- **A clean `return`:** a name, a literal, one call or a boolean of names. A chain, a
  comparison, `??` or a ternary is computed into a `const` first. In JSX a conditional element
  is `{isShown && <Tag />}` or a `const` above the `return`.
- **Named conditions:** a long or compound condition becomes a named `const` (`isEmpty`) or
  early returns, one idea per line; no side effect inside a condition.
- **Booleans** start with `is`, `has`, `can` or `should` — fields, props, results and options.
- No magic numbers or strings: a breakpoint, a delay or a key name is a named constant.
- Repeated scaffolding goes into one private helper.
- **Blank lines group steps** (guard, work, result).
- Parameter names say what they are (`selectedTab`, `isExpanded`), not a bare `x` or `result`.
- An empty `catch {}` is not written: return a fallback.
- ARIA state attributes are set as strings: `String(isOpen)`.

## Hooks for scripts

- A script finds its elements by `data-*` attributes (`data-tab-panel`,
  `data-toggle-button`, `data-header-nav`), never by BEM classes. A class says how something
  looks, an attribute says what the code does with it, so renaming a class never breaks a
  script.
- A state is shown to CSS by a native attribute (`aria-expanded`, `hidden`, `inert`) or a BEM
  modifier; JS never writes a style, except a custom property that carries a number.

## ARIA patterns

Roles, `aria-controls` and `aria-labelledby` are in the JSX; the script changes states.

- **Tabs** (`tablist` / `tab` / `tabpanel`): `aria-selected` on the tabs and `tabindex="-1"`
  on the inactive ones; the arrows move the selection, `Home` and `End` go to the ends; a panel
  is named by `aria-labelledby`. A filter that shows and hides list items is tabs only when it
  drives `tabpanel`s; otherwise it is a group of `aria-pressed` buttons with a live count.
- **Disclosure** — a button with `aria-expanded` and `aria-controls`; the hidden content is out
  of the tab order (`inert` or `hidden`); a changed label is text, not only an icon.
- **Menu** (the mobile navigation) — a button with `aria-expanded`, `aria-controls` and a label
  that changes with the state; `Escape` closes it and returns focus to the button; a followed
  link closes it.
- **Dialog** (the video modal) — a native `<dialog>` opened with `showModal()`, named by
  `aria-labelledby`; `Escape` and the close button close it; focus returns to the opener.
- Every control is reachable and usable by keyboard and shows a visible focus.
