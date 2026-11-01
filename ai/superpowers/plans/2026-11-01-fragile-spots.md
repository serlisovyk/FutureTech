# Plan: fragile spots (MY-324)

Branch `my-324-fragile-spots`. No spec: the only visible changes are two honest captions and native controls drawn dark; the rest keeps the built look. Two records are added: the zero-specificity layout
classes and the footer links built from data (a convention with an obvious alternative each).

## Causes found

- **Global classes last in the bundle.** The layout imports `@styles/global.css` after `@components` and `@sections`, so
  `.container`, `.split-layout` and `.visually-hidden` come after every block's rules and win every tie of specificity.
  A block that sets its own `display`, `grid-template-columns` or `padding-inline` on such an element silently loses.
- **Footer hrefs typed by hand.** `data/footer.js` repeats `#news-hub-feed-tab-health`, `#blogs-feed-tab-…`,
  `#ai-revolution-title`, `#whitepapers`: the ids come from `getPostFeedTabId`, `feedId`, `titleId` and the tab ids, so a
  renamed slug or id breaks them with no error.
- **Footer promises.** "Newsletter" and the header banner "Subscribe to our Newsletter" lead to `/contact`, which has
  no subscription; "Contact Us" sits beside "Newsletter" with the same target; two GitHub marks follow each other (the
  profile in `SocialLinks`, the repository in the credits).
- **No `color-scheme`.** The page is dark but the browser draws the scrollbar, the checkbox and autofill light;
  `PhoneField.css` sets the scheme for its one `select`.

## Changes

- **Global classes: `:where()`, the order stays.** `.container` and `.split-layout` become `:where(.container)` and
  `:where(.split-layout)`: specificity 0, so any block rule on the same element wins in any order, and the import order
  of `import-order` is untouched (`global.css` stays the last style import). Rejected: `global.css` first in the layout
  (breaks "stylesheet last", and an order is a thing a reader must remember; `:where()` is stated in the rule itself).
  `.visually-hidden` stays as it is, on purpose: it is the one class meant to win over a block (a block's `position` or
  `width` must never un-hide it), which `:where()` would reverse; `css.md` says so. Stylelint's
  `selector-class-pattern` and `no-descending-specificity` are checked after the change. The reset was the second half of it: its tag rules (`ul { padding: 0 }`) outranked `:where(.container)` on the four lists that are also a container, which the first comparison showed (Hero features, 1024 and 1440), so every tag rule of the reset is in `:where()` too. The comparison of the final CSS is empty.
- **`color-scheme`.** `html { color-scheme: dark }` in `base.css`; the line in `PhoneField.css` goes.
- **Footer hrefs.** `data/` cannot import `@utils` (Node loads it from `vite/`) and `../` out of a section is
  forbidden, so the data holds a descriptor and the component resolves it: `{ label, path, id }` for a section,
  `{ label, path, feedId, categorySlug }` for a feed tab, `{ label, path }` for a page. `footer.js` takes every `path`
  from `navigationLinks`, every `id`, `feedId` and slug from the data file that owns it (`featuresSection`, `blogs`,
  `newsHub`, `podcasts`, `resourceTabs`, the two category lists); a new `getLinkHref` in `@utils` joins them with
  `getPostFeedTabId`. `FooterColumn` calls it. A renamed id changes the href with it; a removed export fails the build.
- **Newsletter.** The footer item goes (it only duplicated "Contact Us"). The banner is reworded to what it does,
  "Explore our New & latest Blogs and Resources", and leads to the Blogs section of Home (`blogs.id`); the data
  export `newsletter` becomes `banner` and holds `path` and `id` like a footer link.
- **GitHub marks.** Unchanged: the credits keep the GitHub icon from the design for the repository (an asset comes from the
  design, not drawn by hand). The duplicate with the profile icon in the bar is left to the author.

- **Docs.** `css.md` (zero-specificity globals, `color-scheme`), `architecture.md` (links from data ids), `map.md` (the banner strip now leads
  to Home's Blogs), and the records `zero-specificity-globals` and `links-from-data-ids`.
- **Known side effect.** Lightning CSS turns `color-scheme` on `html` into two helper custom properties
  (`--lightningcss-light`, `--lightningcss-dark`) for its `light-dark()` support; nothing reads them, the CSS gets smaller overall.

## Verification

The checks under "Verification" in `AGENTS.md`. Computed styles of every element and its `::before` / `::after` on the 8
pages (Home, News, Podcasts, Resources, Contact, 404, `/ui`, one article) at 1920, 1440, 1024, 768 and 390 in headless
Chrome against `minista preview`, three times: `main` and the build after the `:where()` commit (expected: no
difference), then the final build (expected: `color-scheme` and the colours of native controls, the removed footer item,
the reworded banner). Every footer href checked against the ids of its built page.
