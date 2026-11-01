# CSS Rules

Plain CSS with native nesting; no preprocessor, CSS Modules, CSS-in-JS or utility framework.
Where the stylesheets live and how they are loaded: `ai/map.md`.

## Naming: BEM

- `block__element--modifier`. The block is the component or section (`.header`,
  `.news-card`), an element is a part of it (`.news-card__title`), a modifier is a variation
  or a state (`.button--outline`, `.news-card--featured`).
- Elements do not nest in the name: `block__element`, never `block__element__sub`; a
  two-word element is hyphenated (`header__nav-link`).
- One block, one stylesheet beside its JSX with the same name (`Button.css` next to
  `Button.jsx` in the component's folder, `Hero.css` next to `Hero.jsx` in `sections/home/Hero/`), imported by that JSX file. A
  shared element is a component with its own stylesheet (`.button`, `.tag`).
- `styles/` holds only global CSS: tokens, reset, base (`body`, `:focus-visible`, the
  container), the `@font-face` rules, utilities — never a component's or a section's rules
  (decision `styles-next-to-components`).
- A global style never outranks a block: the reset's tag rules, `.container` and `.split-layout` are written in
  `:where()` (specificity 0), so a block's own rule on the same element wins whatever the bundle order, and
  `global.css` stays the last style import of the layout. `.visually-hidden` keeps its specificity: it is the one
  global class that must win, no block rule may un-hide it (decision `zero-specificity-globals`).
- A heading is never styled by its tag: the reset zeroes `h1`–`h6`, and the look comes from the
  `Heading` component's class (`heading--display`, `heading--h2`, `heading--h3`) or the block's
  own class.
- An `@import` or `url()` that leaves the stylesheet's folder uses the alias
  (`url('@assets/fonts/inter-latin-400.woff2')`); one in the same folder stays `./`.
- A state a script sets is styled by its native attribute (`[aria-expanded='true']`, `[hidden]`)
  or a BEM modifier, and a script's hook is never a class (`ai/rules/style.md`, "Hooks for scripts").
- A tag selector appears only inside its block (`.faq__button svg`), never globally outside
  the base styles.

## Nesting

- States, pseudo-elements, children and media queries nest inside their rule: `&:hover`,
  `&::after`, `@tablet`. A media query sits inside the selector it changes, written as
  `@tablet` or `@mobile` (below), any other as a range (`@media (scripting: enabled)`).
- Nesting adds the parent's specificity: stay at two levels, and let order or a more
  specific selector win, never `!important`.
- `:hover` is written plain (`&:hover`), never inside `@media (hover: hover)`: the build wraps it, so a tap
  leaves no hover look. A selector list is split, so `:focus-visible` is never wrapped; `:hover` inside `:is()`,
  `:where()` or `:not()` fails the build (list it as its own selector), only `:not(:hover)` is left as it is.

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
  `currentColor` stay keywords. Never hard-code a colour; a size only one block uses is written in
  that block (the heading sizes live in `Heading.css`).
- Names: a colour is its design style in lowercase (`--dark-15`, `--yellow-55`, `--white`; the off-palette
  heart is `--color-like`); a size is `--font-size-<role>`, `--space-<role>` or `--radius-<role>`; the families
  are `--font-kumbh` and `--font-inter`; `--border` is the 1px line. A new token follows these.
- A divider is `--border` on a full-width section, its content in a `.container` inside: the line ignores
  the side padding by construction, no utility class.
- The grid of an intro beside a panel is the utility `.split-layout` of the base styles (the intro's width is
  `--split-intro-width` when a block differs), not a copy in each block.
- A value one block uses is written in that block's stylesheet, not made a token. A value used
  twice in one block is a custom property on its root rule. When a second block needs it, it
  becomes a token on the existing scale.
- A token is one exact value from the design: merging near-duplicates changes the look, so it
  is decided with the result in front of you.
- The fonts are set once (headings and body) and inherited; form controls repeat them only
  because they do not inherit.
- Letter spacing is the property `--letter-spacing` (-3%), read by the base `*` rule. A block that is `ls 0` in
  `ai/design-system.md` sets `--letter-spacing: 0` on itself, never `letter-spacing: 0`, which its children would
  not inherit (decision `letter-spacing-property`).
- Text contrast is at least 4.5:1, large text, icons and control borders at least 3:1, in
  every state, hover and focus included — the design's grey text on dark is checked, not trusted.

## Breakpoints and fluid values

- The design is drawn at three widths: Desktop 1920, Laptop 1440, Mobile 390 (the values at each
  are in `ai/design-system.md`, in that order). The scheme is decision `postcss-notations`.
- Media queries change structure only: `@tablet` (`width < 1024px`) stacks side-by-side
  compositions, `@mobile` (`width < 768px`) makes grids one column and the header a menu button; more
  conditions follow the name as `and (…)` (`@mobile and (scripting: enabled)`), any other form or a query list
  fails the build. The widths are the constant `BREAKPOINTS` in `src/constants`, shared with the scripts;
  there is no query at 1440, no `@desktop` (the base rule is Desktop) and no other breakpoint.
- Type, spacing and radii are fluid: the size at 390 plus the growth of each segment, from the
  design numbers, written `fluid(28, 44, 58)`: always three unitless numbers, the px at 390, 1440 and
  1920 (`fluid(185, 185, 222)` for a flat segment), also inside another function
  (`round(fluid(20, 20, 24), 1px)`). The build expands it through the two ramps of the variables
  stylesheet. Never a bare `vw` coefficient tuned by eye, never a query per width.
- A new rule takes its values from the `ai/design-system.md` tables and is checked at the three
  widths and in between. The base rule is the widest layout; a narrower screen overrides it.
- A block with a border has padding of the design's value minus the border width, so its outer size is the
  design's (a 1px border on 18px padding: `fluid(17, …)`; decision `borders-inside`). A transparent border keeps its width.
- No horizontal scroll at any width from Mobile to Desktop, and none at 200% zoom.

## Motion and focus

- Reduced motion is handled once, in the reset: it sets `--transition-duration` to `0s`. A component
  never adds its own `prefers-reduced-motion` block, and the duration of every transition and animation
  comes from that token.
- A `transition` names its properties, never `all`.
- A state that hides content for an animation applies only under a class a script puts on
  `<html>`, so the page is complete without script.
- Reveal on scroll: mark a block with `data-reveal` in the component that owns it, a block below the first screen and
  never the header, the Home hero, a `PageIntro` or the photo that is the first screen's largest image. Mark the
  content, not a full-width band with lines. Each card of a grid is marked itself: the cascade is the order in which
  they enter, not markup. The look lives in `reveal.css` (opacity and a short shift, only under
  `(scripting: enabled)` and `(prefers-reduced-motion: no-preference)`); a block never styles `[data-reveal]` itself.
- Hover: a step that fits the block and never a jump. A control steps its
  background one level up (Dark/08 to Dark/10, Dark/10 to Dark/15), brightens its border to `--dark-40` and turns its text
  white; a link with the ↗ arrow moves the arrow 2px up and right, and a link card does it for its arrow
  circle; a text link turns white, a social icon yellow. Transitions name `background-color`, `border-color`, `color` or
  `transform` and take `--transition-duration`. Focus is only the base ring: the hover look is not repeated on `:focus-visible`.
- Press: a button, tab or toggle has a plain `&:active` (never wrapped, so a tap shows it) that carries the hover
  look and the background one more level up; a disabled control has none.
- One `:focus-visible` rule in the base styles draws the ring for every control; a hover look
  never sits on `:focus`, and never `outline: none` without a replacement.
- A control drawn under 44 px keeps its drawn size and gets a larger invisible hit area, a `::before` or `::after` of
  its own. Controls closer than 44 px share the gap: the later one in the DOM wins the overlap, the layout is not
  stretched to make room.
- Use `hidden` or `inert` to take an element out of the page; text for assistive technology
  only is a visually-hidden utility class, not `display: none`, which hides it from them too.
- Every `@keyframes` lives in one stylesheet in the base styles.
