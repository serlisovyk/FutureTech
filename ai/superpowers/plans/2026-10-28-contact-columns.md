# Plan: the Contact info columns (MY-277)

Branch `my-277-contact-columns`. Records cited: `folders-and-barrels` (where the blocks live), `borders-inside`
(the lines), `fluid-ramps` (every size). minista API: none new. No spec: the section has no behavior, only a layout.

## Where things live (decided here)

- `sections/contact/ContactInfo/` (`ContactInfo.jsx`, `ContactInfo.css`, `ContactColumn.jsx`, `ContactColumn.css`,
  `index.jsx`): the section is a `container` list of four items, each one `ContactColumn`: a title and a body of
  pills (email, phone), an address with the directions pill, or the socials. A new group barrel
  `sections/contact/index.jsx`, re-exported by `sections/index.jsx`.
- The section holds the page's only `h1`: visually hidden, its text and ids in `data/contacts.js` (`contactInfo`);
  the `section` is labelled by it. The column titles are `h2`, as the footer's, set by the block's own class.
- `data/contacts.js` already has the four columns and `data/socials.js` the three socials; only `contactInfo` is new.
- `pages/contact.jsx` keeps `metadata`, drops the placeholder and renders `<ContactInfo />` first; the form and the FAQ
  of the parallel tasks follow it.
- Pills are the kit's ghost `Button` with `ui/arrow-up-right`: email `mailto:`, phone `tel:`, directions a maps link
  from data. The ghost button takes the design's contact-button fill and radius but its block padding is the download
  button's (57 high at 1440 and 390); the contact pill is 49 there, so the kit gets `isCompact` (13 / 17 block
  padding, the outline's), shown on `/ui`.
- Socials are the footer's data (name, icon, href): a square link with `aria-label` and `rel="noopener"`, in the same
  tab as the footer's.

## Layout

- 1920 / 1440: four columns of 324 / 275, split by vertical lines in the middle of the column gap (100 / 60). Block
  padding of an item 80 / 60; the title and the body are 50 / 30 apart. A line is a pseudo-element, so it adds no size.
- Below 1024px: 2 x 2, a vertical line between the pair and a horizontal line between the rows (not drawn, kept to the
  mobile line's width: the container).
- Below 768px: one column with a horizontal line between items, 20px block padding, 20px between title and body, and
  the body indented 50px as drawn (the design indents the pills, the address and the socials, not the title).
- Pills hug their text; the address is 18 / 16 / 16; socials are 84 x 60 / 85 x 48 / 96 x 48 squares of radius 6
  with a 24 / 20 / 20 icon.

## Deviations and inventions (reported)

- The 2 x 2 layout between 768 and 1023px is not drawn.
- The section has no line below it: the next section draws its own line above.
- The directions link opens in the same tab, like every link of the site (`Button` has no new-tab option).

## Docs

`ai/map.md` (the Contact sections).

## Verification

The checks under "Verification" in `AGENTS.md`, `npm run size` numbers reported. Then `/contact` and `/ui` in `npm run dev`
at 1920, 1440 and 390 and in between: sizes against the design, links by keyboard with a visible focus, no horizontal
scroll, the heading tree (one `h1`).
