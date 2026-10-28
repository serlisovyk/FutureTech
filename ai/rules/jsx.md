# JSX Rules

Pages, layouts, sections and components are JSX that minista renders into HTML at build time.
Where everything lives: `ai/map.md`; how the layers relate: `ai/rules/architecture.md`.

## Build-time only

- A component is a plain function of its props: no hooks (`useState`, `useEffect`, …), no
  context, no refs, no event props (`onClick`), no `dangerouslySetInnerHTML`, no browser API.
- What a user can do on the page is wired by a class in `scripts/` through `data-*` hooks
  (`ai/rules/oop.md`), never by JSX.
- Computation that the markup needs (a reading time, a filtered list, a URL) is a pure helper
  next to the data, called by the component; never logic spread across the JSX.

## Files and names

- Files are JSX (`.jsx`), no TypeScript (decision `minista-jsx-static-html`).
- A component or section file is named in PascalCase after its function (`NewsCard.jsx`
  exports `NewsCard`); its root element carries the kebab-case BEM block (`.news-card`).
- Named exports only; a page exports what minista requires of a page (check the docs:
  `ai/rules/minista.md`).
- One root element per component, with the block's class. A component is used by sections
  only; a section does not render another section.
- An import that crosses folders uses the folder alias (list in `ai/map.md`):
  `import { Icon } from '@components/Icon.jsx'`; one inside the same folder stays `./`; never `../`.
  The one exception is a root path (`/src/assets/…`, `/src/scripts/main.js`): minista's `Sprite`, `Svg`
  and `Picture` read their `src` from the project root, not through Vite's aliases.

## Props and data

- A repeated element takes its data as props, spread from a `data/` item or passed one by one.
- A variation is a prop and a BEM modifier (`isFeatured` → `news-card--featured`); class names
  are joined with `clsx`, not by string concatenation or a ternary in each file.
- Texts and lists that repeat or are rendered by a loop live **only** in `data/` and are
  imported by the section that renders them, never copied into JSX. A literal in a section is
  for text unique to that section.
- A `data/` module exports named constants of plain values; it holds no JSX, class names or
  styles. A list item rendered by `map` has a stable `key` from its data.
- A section's tag, title, text and optional "View All" link are the shared heading component,
  never a per-section title markup.

## Images and icons

- A photo is `<Photo src="/src/assets/images/<name>.jpg" alt sizes />`, never a bare `<img>` for a raster:
  `width` and `height` come from the file, `sizes` states the rendered width at the layouts. It is lazy;
  the first screen's photo passes `loading="eager"` and `fetchPriority="high"`.
- An icon is `<Icon name="arrow-up-right" />`, the file name in `assets/icons/`. It is decorative unless it
  has a `title`. Its block's stylesheet sets the size and the colour (`color`; the symbols use `currentColor`);
  a two-tone feature icon takes `--icon-accent` and `--icon-base`.
- The logo is inline: `<Svg src="/src/assets/logos/logo.svg" title="FutureTech" />` from `minista/assets`; its
  parts carry the classes `logo__mark` and `logo__text`.

## Semantics and ARIA

- Semantic elements for the page regions (`header`, `nav`, `main`, `section`, `article`,
  `footer`); one `h1` per page, headings in order without skipping a level; text that only looks
  like a title is not a heading.
- The first thing in the header is the "Skip to content" link to `<main id="main" tabindex="-1">`.
  Controls come in the DOM in the order they are read: the menu button before the menu it opens.
- A button for an action (`<button type="button">`), a link only for going to an address; a
  link that opens a new tab has `target="_blank"` and `rel="noopener"` and says so.
- Whatever goes to a place is `<a href>` even with the button look; whatever acts on the page
  (open, filter, play, submit) is `<button>`. No control without an action: never `href="#"`.
- The logo is a link to `/` named by its image's `alt`.
- A control with no visible text, or whose text is not enough (▶, a social icon), has an
  accessible name (`aria-label`); an icon next to text is decorative (`alt=""`, `aria-hidden`).
- Widgets (tabs, disclosure, menu, dialog) carry their roles, `aria-controls` and
  `aria-labelledby` in the JSX; the script changes only the states (`ai/rules/style.md`).
- A hook for a script is a `data-<block>-<role>` attribute, not a BEM class.
- No inline `style`, no `<br>` for spacing. Interface texts follow the design; one action has
  one name wherever it shows.
