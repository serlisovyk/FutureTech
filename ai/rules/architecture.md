# Architecture Rules

The site is static: minista renders the JSX pages into HTML at build time, and Vite bundles
the CSS, the browser scripts and the assets into `dist/`. `ai/map.md` says where every folder
lives; `ai/rules/jsx.md`, `css.md` and `oop.md` cover markup, styles and scripts.

## Layers

Content flows one way: data → component → section → page, and each block's look and behavior
sit beside it. Each folder has one job:

| Layer         | Owns                                                              | Must not                               |
| ------------- | ----------------------------------------------------------------- | -------------------------------------- |
| `data/`       | the texts and lists the JSX renders, as plain exported values     | hold markup, classes or styles         |
| `components/` | a repeated element as a JSX function: props in, one root out      | know which page or section uses it     |
| `sections/`   | one page section; composes components with data                   | hold another section's markup          |
| `layouts/`    | the page shell: head, header, `<main>`, the CTA, the footer       | hold a section of one page             |
| `pages/`      | a page: its metadata and the list of sections it renders          | contain section markup                 |
| `styles/`     | tokens, shared UI elements, one stylesheet per component, section | style another block's elements         |
| `scripts/`    | browser behavior: a class per widget and per section, `main.js`   | build markup that a component can hold |

## Build time and browser

- JSX runs only in the build. A component is a pure function of its props and `data/`: no
  hooks, no state, no event handlers, no effects, no browser API (`ai/rules/jsx.md`).
- Everything interactive is a class in `scripts/` that finds its markup by `data-*` hooks
  after the page loads (`ai/rules/oop.md`). React never reaches the browser; minista's
  `pluginIsland` is not used (decision `minista-jsx-static-html`).
- A page is complete without JavaScript: content is in the HTML, a script only adds behavior
  (filtering, expanding, opening).

## Pages and routes

- A page file renders the layout with its metadata (title, description) and its sections,
  nothing else. The same section on two pages is one file in `sections/shared/`, not a copy.
- A page generated per item (the article route) gets its list of paths and its data from
  `data/` through minista's static-data API, so a new post needs no new page file.
- Links between pages are root-relative clean URLs without `.html` (`/news`, `/blog/<slug>`);
  a link to a post is built by one helper, never written out by hand.
- A new page needs the author's request (`ai/rules/scope.md`), an entry in the navigation data
  when it is in the menu, and its metadata.

## Behavior

- Markup carries the roles, states and relations (`aria-*`, `data-*` hooks, `hidden`,
  `inert`); a script only changes states and reads hooks. It never builds a section's markup.
- A script that a page does not need does nothing there: a section missing from the page is
  skipped by `main.js`, never an error.
- A value that JS hands to CSS is a custom property, not an inline style. A breakpoint a
  script reads (`matchMedia`) is one constant that equals the stylesheet's.

## Boundaries

- No inline `style` attribute and no inline event handler in the output HTML.
- No state on `window`, no global event bus, no singletons.
- No client-side router: pages are plain links.
- Do not rename existing CSS classes only for cosmetic reasons; class names are part of the
  block's styling contract.
- Content that is not real (a login link, a button with no action) is not added to look
  complete: `ai/rules/scope.md`.
