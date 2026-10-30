# Plan: the Resources reports section (MY-274)

Branch `my-274-resources-reports`. Spec: `ai/superpowers/specs/2026-10-28-resources-reports.md`. Records cited:
`folders-and-barrels` (where the blocks live), `borders-inside` (the lines), `fluid-ramps` (every size),
`image-formats` (photos go through `Photo`), `oop-javascript` (the widget contract). minista API: none new.

## Author decision

- "Download PDF Now" links to `/contact` until the real download arrives (MY-287); the href is data.

## Where things live (decided here)

- `sections/resources/ResourceLibrary/` (`ResourceLibrary.jsx`, `ResourcePanel.jsx`, `ResourceRow.jsx`, their
  stylesheets, `index.jsx`): the section (id `resource-library`) and its parts. A new group barrel
  `sections/resources/index.jsx`, re-exported by `sections/index.jsx`. `pages/resources.jsx` renders the section after
  the placeholder; the orchestrator orders it behind the intro and the counters of MY-273.
- `data/resources.js` gets `resourceLibrary` (section id, title id, tag, title, tab list label, the download label
  and href); each entry of `resourceTabs` gets a `tabId`, each item a `titleId`. The panel ids are the existing tab ids
  (`whitepapers`, `ebooks`, `reports`: the footer links point at them). `data/card-photos.js` gets the `sizes` of the
  row photo.
- Tabs: the existing `Tabs` widget on the `<section data-tabs>`: the tab list sits inside `SectionHeading` through its
  `children`, one `tabpanel` per tab below it. No controller. `Tabs` gains one behavior (below).
- `ResourceRow` is a section part (nothing else renders it). Photos: `purple-wave-particles.jpg` and
  `ai-blue-robot-hologram.jpg`, the Whitepapers photos (JPEG q92 4:4:4, source widths 996 and 1060, never upscaled);
  the Ebooks and Reports photos already exist.

## Tabs and the URL hash

The footer links to `/resources#ebooks`; a hidden panel cannot be scrolled to. `Tabs` selects the tab whose
`aria-controls` equals the URL hash on `start()` and on `hashchange`, then scrolls its panel into view. A page without
such a hash behaves as before. The rule in `ai/rules/oop.md` gets one clause.

## Layout

- Heading band: `SectionHeading` with the tab tray as its child; the tray is Dark/08 with a border, tabs hug their
  text (padding 38 x 18 / 24 x 14), the selected tab is Dark/15 with a white label. Under 768 px the tray goes below the
  title and its tabs share the width equally. Without scripting the tray is not rendered; each panel then opens with a
  visible `Tag` naming it.
- `ResourceRow`: a full-width `article` with a line above it and a `container` grid `[intro | panel]` like the Podcasts
  show (intro `min(413 -> 519, 34%)`, gap 60 / 80, centred; the panel has the divider as its start border). Intro: the
  two-tone icon (50 / 60 / 80), the title as `h3` (Kumbh 600, 21 / 30 / 40) and the lead. Panel: the photo (height
  165 / 303 / 332), a line with the title (Inter 600, 18 / 20 / 26) and text beside the ghost `Button`, then the three
  facts as `MetaGrid` `isCard` (two and one under 768 px as drawn). Under 1024 px the grid is one column and the panel
  sits under a top line; under 768 px the text and the button stack, the button full width.
- Heading order: `h1`, `h2` of the section, `h3` per row. The title above the button is a paragraph: the same name is
  already the row's heading. The button's name is "Download PDF Now: <title>".

## Deviations from the design (reported)

- The design draws only Whitepapers; the Ebooks and Reports rows use the data already in `resourceTabs`.
- The ghost button keeps the kit's size (57 high at 1440 and 390; the design's download button is 49).

## Verification

The checks under "Verification" in `AGENTS.md`, `npm run size` numbers reported. Then `/resources` in `npm run dev` at
1920, 1440 and 390 against the design sizes, the widths between, 200% zoom, the keyboard (arrows, `Home`, `End`, `Tab`
into the panel), the hash links, no horizontal scroll, and without scripting.
