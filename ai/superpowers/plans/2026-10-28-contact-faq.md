# Plan: the Contact FAQ section (MY-279)

Branch `my-279-contact-faq`. Spec: `ai/superpowers/specs/2026-10-28-contact-faq.md`. Records cited:
`folders-and-barrels` (where the blocks live), `borders-inside` (the lines), `fluid-ramps` (every size). minista API:
none new.

## Author decision

- "Ask Question" links to the form anchor `#contact-form` (the form task MY-278 gives the form that id); the href is
  data. Pre-filling the subject belongs to MY-278.

## Where things live (decided here)

- `sections/contact/Faq/` (`Faq.jsx`, `FaqItem.jsx`, their stylesheets, `index.jsx`): the section (id `faq`) and its
  question part. `FaqItem` is a section part, not a kit component: nothing else renders a question, and the kit
  rule is "a repeated element in more than one place". A new group barrel `sections/contact/index.jsx` if the form
  task has not added it, re-exported by `sections/index.jsx`. `pages/contact.jsx` renders the section after the
  placeholder; the orchestrator orders it behind the intro and the form.
- `data/faq.js` gets `faqSection` (id, title id, icon, title, text, the button label and href); each question gets
  an `answerId`. The questions and answers are the existing `faq` list.
- Widget: the existing `Disclosure`, one instance per question: the `FaqItem` `<li>` is its root (`data-disclosure`),
  the bar its trigger, the answer wrapper its region. No controller and no change to `Disclosure` or `main.js`.
  `Disclosure` takes the initial state from the trigger's `aria-expanded`, so the first `FaqItem` renders `true`.

## Markup and states

- `<li data-disclosure>` holds a `<button aria-expanded aria-controls>` (the question text and the "+" and "-"
  sprite icons) and the answer region. The JSX carries no `hidden`: `Disclosure.start()` hides the closed ones, so
  without scripting every answer shows.
- The icon shown follows `aria-expanded`; both icons are in the markup. Under `(scripting: none)` neither is drawn.
- Open item: a thin line between the question and the answer, the radius of the card; closed: the smaller radius.
  The look is selected with `:has([aria-expanded='true'])` on the item, so the script writes only the attribute.
- Smooth open: the region is a one-row grid whose row goes `1fr` to `0fr` while `hidden` is set, with `visibility`
  in the same transition so the closed answer leaves the tab and reading order. The transition duration is
  `--transition-duration`, so reduced motion makes it instant (`ai/rules/css.md`).

## Layout

- Section: a line above, a `container` grid `[intro | list]` like the Resources row (intro `min(413 -> 519, 34%)`,
  gap 60 / 80, intro centred); the list has the start border and padding 60 / 80 (one less on the border side).
  Under 1024 px one column; the intro has block padding 40 and the list a top border (40, the card gap 20 as drawn);
  under 768 px the button fills the width.
- Intro: the two-tone icon (50 / 60 / 80), the `Heading` level 2 in the h3 look (Kumbh 600, 20 / 28 / 40), the text,
  the ghost `Button` with the arrow. Heading order: `h1` of the page, `h2` of the section.
- Items: Dark/10 card with a border, padding 24 / 24 / 34, gap between cards 20 / 24 / 30; question Inter 500 (16 / 18 /
  20, no letter spacing), icon 20 / 20 / 24 at the right and at the top; answer Inter 400 (14 / 16 / 18), Grey/50.

## Deviations from the design (reported)

- The design draws "Ask Qustion"; the site says "Ask Question".
- The ghost button keeps the kit's size (57 high at 1440 and 390; the design's is 49).
- The answer's Grey/50 on Dark/10 is 4.30:1: kept as drawn, already in the design system's contrast flag.

## Verification

The checks under "Verification" in `AGENTS.md`, `npm run size` numbers reported. Then `/contact` in `npm run dev` at
1920, 1440 and 390 against the design sizes, the widths between, 200% zoom, the keyboard (`Tab`, `Enter`, `Space`),
reduced motion, no horizontal scroll, and without scripting.
