# Plan: the Contact form (MY-278)

Branch `my-278-contact-form`. Spec: `ai/superpowers/specs/2026-10-28-contact-form.md`. Records cited:
`folders-and-barrels`, `borders-inside`, `fluid-ramps`, `oop-javascript`, `image-formats` (no raster here),
`design-is-a-reference`. New record with this task: `contact-form-without-backend`. minista API: `Sprite` through
`Icon` only.

## Where things live (decided here)

- `sections/contact/ContactForm/`: `ContactForm.jsx` (the section; the id `contact-form` is on the `<form>`; the heading
  is an `h2` in the h2 look) and one file per part: `FormField` (label, control slot, error slot), `TextField` (input),
  `MessageField` (textarea), `PhoneField` (country box and number), `ConsentField` (checkbox). The group barrel exists;
  the page renders the section between `ContactInfo` and `Faq`, the design order.
- `data/contact-form.js`: ids, the title, the fields with their `autocomplete` and error texts, the success text, the
  consent text. `data/countries.js`: twelve countries (code, name, dial code, digits). The phone pattern and the phone
  error of each country are built at build time (`utils/get-phone-pattern.js`, `utils/get-phone-error.js`), so the
  script holds no regex and no text.
- Decor: the left icon is the existing two-tone sprite icon `feature/contact`; the design has no raster here.
- Flags: a new sprite folder `assets/icons/flag/` with twelve simple SVGs (an emoji flag is not drawn on Windows, and a
  `<select>` cannot hold an image). New icon `ui/check` for the checked box.
- Button: an `isLarge` modifier for Send (padding 18 x 46 / 14 x 34, line height 24px, radius control), shown on `/ui`.

## Behaviour (browser)

- `scripts/components/FormField.js`: one field. Root `data-form-field` with a `data-form-control` and a `data-form-error`.
  `start()` listens to `blur` (validate), `input` and `change` (revalidate while an error shows). `validate()` trims a
  text value, reads `control.validity`, writes `aria-invalid`, the message and `hidden`; the first failing key of
  `valueMissing`, `typeMismatch`, `patternMismatch` picks the text from the control's `data-error-*`. Also `reset()`,
  `focus()`, `isInvalid`.
- `scripts/controllers/ContactFormController.js`: root `data-contact-form` (the `<form>`). Creates a `FormField` per
  field, sets `novalidate` in `start()` (the form still validates natively if the script never loads), handles `submit`
  (validate all, focus the first invalid, else complete), the country select (`data-form-country`: copies the option's
  `data-pattern` and `data-error` onto the number, shows the matching `data-form-flag`, revalidates a touched number)
  and the status region (`data-form-status`, text from its `data-message`).
- `constants.js`: the validity keys with their `data-error-*` names, the selectors. `main.js`: one row.
- Email: `type="email"` plus a `pattern` (a dot in the domain); both report through the same text.

## Layout

- Section: `border-block-start`; a `container` grid `[title | form]` like the FAQ (title column 412 to 519, capped at
  34%, gap 60 / 80, title centred). The form is the column: start border, padding 60 / 80 (one less on the border
  side), end padding 0; below 1024 px a top border and padding 40 x 20 (one less at the border). Field gap 50 / 30 /
  20, label to field 16 / 12 / 12; rows of two with gap 50, one column below 768 px.
- Fields: fill Dark/10, border, radius control, padding 20 / 16 / 16, text 18 / 14 / 14, label Inter 500; the message is
  163 / 163 / 127 high. The country box is 100 x 67 / 78 x 53, flag 34 / 30 / 30, chevron, 16 / 12 / 12 to the number.
- Footer row: the checkbox (28 / 24 / 24, radius 4) grows, Send beside it with gap 70; stacked below 768 px, Send full width.

## Inventions and deviations (reported)

- No error, focus, filled or checked state is drawn: the error colour is a new token `--color-error`, the check mark is
  `ui/check`, the success text sits under the button.
- Send is yellow at every width (the 1920 frame still has a blue gradient); the 1920 checkbox is dark like the other two.
- The design's borders (Dark/15, 1.15:1) and placeholder (Dark/40, 3:1) are kept; the design system already flags
  them for the accessibility task.

## Verification

The checks under "Verification" in `AGENTS.md`, `npm run size` numbers reported (limits are not edited here). Then
`/contact` in `npm run dev` at 1920, 1440, 390: empty submit, wrong email, short phone, country change, unchecked
consent, a good send, keyboard only, no horizontal scroll, without scripting.
