# CSS Rules

Plain CSS with native nesting; no preprocessor, CSS Modules, CSS-in-JS or utility framework.
Where the stylesheets live and how they are loaded: `ai/map.md`.

## Naming: BEM

- `block__element--modifier`. The block is the component or section (`.header`,
  `.news-card`), an element is a part of it (`.news-card__title`), a modifier is a variation
  or a state (`.button--outline`, `.news-card--featured`).
- Elements do not nest in the name: `block__element`, never `block__element__sub`; a
  two-word element is hyphenated (`header__nav-link`).
- One block, one stylesheet named like its component in kebab-case; a shared element
  (`.button`, `.tag`, headings) is in the shared UI styles.
- A state a script sets is a native attribute (`[aria-expanded='true']`, `[aria-selected]`,
  `[hidden]`, `[inert]`) or a BEM modifier; a hook for a script is a `data-*` attribute,
  never a class (`ai/rules/style.md`).
- A tag selector appears only inside its block (`.faq__button svg`), never globally outside
  the base styles.

## Nesting

- States, pseudo-elements, children and media queries nest inside their rule: `&:hover`,
  `&::after`, `@media (...)`. A media query sits inside the selector it changes, written as a
  range (`@media (width < 768px)`).
- Nesting adds the parent's specificity: stay at two levels, and let order or a more
  specific selector win, never `!important`.
- `:hover` only inside `@media (hover: hover)`, so a tap leaves no hover look.

## Longhands and plain grids

- `background` is never the shorthand: write `background-image`, `background-position`,
  `background-size`, `background-repeat` and `background-color`, each only where needed. A
  `transition` names `background-color`, not `background`.
- Spacing on one side is a longhand: `padding-left: X`, never `padding: 0 0 0 X`. An axis is
  `padding-inline` / `padding-block` / `margin-inline`. A `padding: Y X` that sets both axes stays.
- Grid tracks are written plain: `repeat(3, 1fr)`, `1fr auto`, never `minmax(0, …)`. An item
  that would push its column past its share gets `min-width: 0`.

## Tokens

- Colours (also inside a gradient or a shadow), the font families, radii, the type steps and
  the spacing two or more blocks share are tokens in the variables stylesheet (listed in
  `ai/design-system.md`). `#`, `rgb(` and `hsl(` appear nowhere else; `transparent` and
  `currentColor` stay keywords. Never hard-code a colour or a step of the type scale.
- A value one block uses is written in that block's stylesheet, not made a token. A value used
  twice in one block is a custom property on its root rule. When a second block needs it, it
  becomes a token on the existing scale.
- A token is one exact value from the design: merging near-duplicates changes the look, so it
  is decided with the result in front of you.
- The fonts are set once (headings and body) and inherited; form controls repeat them only
  because they do not inherit.
- Text contrast is at least 4.5:1, large text, icons and control borders at least 3:1, in
  every state, hover and focus included — the design's grey text on dark is checked, not trusted.

## Breakpoints and fluid values

- The design is drawn at three widths: Desktop, Laptop, Mobile (exact numbers and the values
  at each in `ai/design-system.md`). Which media queries exist and how type and spacing move
  between the widths is a decision record (MY-246); no other breakpoint is invented.
- A new rule takes its values from the `ai/design-system.md` tables and is checked at the three
  widths and in between. The base rule is the widest layout; a narrower screen overrides it.
- A `clamp()` is written with readable anchors (the design numbers), never a bare `vw`
  coefficient tuned by eye, and its minimum is below its maximum.
- No horizontal scroll at any width from Mobile to Desktop, and none at 200% zoom.

## Motion and focus

- Reduced motion is handled once, in the base styles; a component never adds its own
  `prefers-reduced-motion` block. A duration comes from a transition token.
- A `transition` names its properties, never `all`.
- A state that hides content for an animation applies only under a class a script puts on
  `<html>`, so the page is complete without script.
- One `:focus-visible` rule in the base styles draws the ring for every control; a hover look
  never sits on `:focus`, and never `outline: none` without a replacement.
- A control drawn under 44 px keeps its drawn size and gets a larger invisible hit area.
- Use `hidden` or `inert` to take an element out of the page; text for assistive technology
  only is a visually-hidden utility class, not `display: none`, which hides it from them too.
- Every `@keyframes` lives in one stylesheet in the base styles.
