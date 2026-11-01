# JSX Rules

Pages, layouts, sections and components are JSX that minista renders into HTML at build time.
Where everything lives: `ai/map.md`; how the layers relate: `ai/rules/architecture.md`.

## Build-time only

- A component is a plain function of its props: no hooks (`useState`, `useEffect`, …), no
  context, no refs, no event props (`onClick`), no `dangerouslySetInnerHTML`, no browser API.
- What a user can do on the page is wired by a class in `scripts/` through `data-*` hooks
  (`ai/rules/oop.md`), never by JSX.
- Computation that the markup needs (a reading time, a filtered list, a URL, the current year)
  is a pure helper in `utils/`, one function per file, called by the component; never logic
  spread across the JSX.

## Files and names

- Files are JSX (`.jsx`), no TypeScript (decision `minista-jsx-static-html`).
- A component or section file is named in PascalCase after its function (`NewsCard.jsx`
  exports `NewsCard`); its root element carries the kebab-case BEM block (`.news-card`).
- Named exports only; a page exports what minista requires of a page (check the docs:
  `ai/rules/minista.md`): its component and `metadata = pages.<name>`: the title and description (both unique on the site;
  a new page adds them to `data/pages.js`), plus `robots` when the page needs it. The page has no `Head`, no site name and no
  text of its metadata: the layout builds the head (decision `shared-page-head`).
- A component is a folder: `components/<group>/<Component>/` holds `<Component>.jsx`, `<Component>.css` and an
  `index.jsx`; a section is `sections/<group>/<Section>/` with `<Section>.jsx`, its stylesheet, an `index.jsx` that
  exports the section only, and a folder per part. Each group has an `index.jsx`, and the root `index.jsx` of
  `components/` and `sections/` re-exports the groups (decisions `folders-and-barrels`, `section-parts-in-folders`).
- One file holds one component and nothing else: a part of a section is a folder built like a component
  (`FooterColumn/` with `FooterColumn.jsx`, `FooterColumn.css` when it has styles, `index.jsx`), a helper goes to
  `utils/`, a text or an id to `data/`.
- One root element per component, with the block's class. A component is used by sections
  only; a section does not render another section.
- An import that crosses folders uses the folder alias (list in `ai/map.md`): `import { Button, Tag } from '@components'`,
  `from '@sections'`, `from '@utils'`, `from '@data'`, `from '@constants'` (the barrels, never a file of them); one inside the same folder stays `./`; never `../`. A component of
  `components/` imports another by its folder (`@components/media/Icon`), never the root barrel: that is a cycle.
  The one exception is a root path (`/src/assets/…`, `/src/scripts/main.js`): minista's `Sprite`, `Svg`
  and `Picture` read their `src` from the project root, not through Vite's aliases.
- A section imports its part as `./<Part>`; a part imports a sibling part by its folder, `@sections/<group>/<Section>/<Part>`,
  never through the `@sections` barrel (a cycle).

## Props and data

- A repeated element names its props in its signature and forwards none: no `...props` rest in a component. A data
  item made exactly for the component's props is spread, `<TextField {...email} />`, `key` always beside it
  (`<FeatureGroup key={id} {...group} />`); an `id` the component does not take is split off in the callback
  (`({ id, ...group }) =>`). An item that is not the props (it nests the values or holds the section's own fields)
  is passed by name (decision `spread-of-a-data-item`).
- Props with a default come last in the destructuring list (`{ icon, children, variant = 'primary' }`).
- A signature whose props do not fit on one line takes `props` and destructures them on the next line, followed
  by a blank line: `function NewsCard(props)`, then `const { slug, title, … } = props`.
- Blank lines split the blocks: a destructuring line from the statements after it, the computed `const`s from
  each other, and sibling blocks in the JSX (a section's heading band and its main blocks, an element and the
  conditional block after it).
- A nested field is destructured, not read by path: `author: { name: authorName }`, then `authorName`, not
  `post.author.name` in the JSX; a `data/` object the same way, at the top of the component
  (`const { id, titleId } = featuresSection`), not `featuresSection.id` in the JSX.
- A data attribute that is only a hook gets `undefined` when off (`isToggleDismiss || undefined`): React writes
  `false` as the string `"false"`, and `[data-toggle-dismiss]` would still match.
- The stylesheet import comes last.
- A `map` callback destructures its item (`({ label, href }) =>`); when that does not fit on one line, the callback
  takes the item and destructures it in a block body the same way.
- No ternary in a `return` and none for an optional attribute: compute a named `const` above the `return`, or
  return early (`ai/rules/style.md`).
- A variation is a prop and a BEM modifier (`isFeatured` → `news-card--featured`); class names
  are joined with `clsx`, not by string concatenation or a ternary in each file.
- Texts and lists that repeat or are rendered by a loop live **only** in `data/` and are
  imported by the section that renders them, never copied into JSX. A literal in a section is
  for text unique to that section.
- A `data/` module exports named constants of plain values; it holds no JSX, class names or
  styles. A list item rendered by `map` has a stable `key` from its data.
- A new article is one entry in `data/posts.js` with a unique `slug` and a `body` of at least one section: its page,
  `/blog/<slug>`, is generated; a link to it is always `getPostUrl(slug)`, never a typed path.
- A section's tag, title, text and optional "View All" link are the shared heading component,
  never a per-section title markup.
- UI kit first, then your own markup: a button, tag, badge, stat, meta pair, counter pill or avatar group is
  the kit's component (`ai/map.md`), never a copy of its markup or styles. A variant the kit lacks is added to
  the kit and to `/ui`, not drawn in the section.

## Images and icons

- A photo is `<Photo src="/src/assets/images/photos/<name>.jpg" alt sizes />`, never a bare `<img>` for a raster:
  `width` and `height` come from the file, `sizes` states the rendered width at the layouts. It is lazy;
  the first screen's photo passes `loading="eager"` and `fetchPriority="high"`.
- An icon is `<Icon name="ui/arrow-up-right" />`, its path in `assets/icons/` without the extension. It is decorative unless it
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
