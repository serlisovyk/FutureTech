# Spec: the Contact form (MY-278)

Branch `my-278-contact-form`. What a visitor sees and does; the build is in
`ai/superpowers/plans/2026-10-28-contact-form.md`.

## The section

- A band between the contact details and the FAQ, with a line above it. On the left the two-tone icon and the title
  "Get in Touch with AI Podcasts"; on the right the form, with a line on its left. Below 1024 px the title sits above
  the form; below 768 px the fields are one column.
- Fields, in order: First Name and Last Name, Email and Phone Number, Message, the consent checkbox "I agree with
  Terms of Use and Privacy Policy" and the yellow Send. Every field has a visible label. "Terms of Use" and "Privacy
  Policy" are plain text: the site has no such pages.
- Every field is required. The browser can fill in the name, the email and the phone.
- "Ask Question" in the FAQ scrolls to the form (`#contact-form`).

## Phone number

- A country box with a round flag and a chevron sits left of the number. Opening it lists twelve countries, each with
  the name and the dial code; the chosen flag shows in the box. India is selected at load.
- The number is the national part only. Spaces, dashes, dots and brackets are allowed between the digits. The number
  is valid when it has exactly the digits that country uses (10 for India, 9 for France, and so on).
- Choosing another country checks the number again against the new length, if the visitor has already left the field.

## Checking the form

- A field is checked when the visitor leaves it. Once a field shows an error, it is checked again on every change,
  so the error goes away as soon as the value is right. A field the visitor has not left shows no error.
- A required field left empty says what to enter; a wrong email says it is not an email address; a wrong phone says
  how many digits the chosen country needs; an unchecked consent asks to agree. Text fields are trimmed when checked.
- An invalid field gets a red border and its message under it; a screen reader reads that message with the field and
  hears the field as invalid. The browser's own bubbles do not show.
- Send checks every field at once, shows every message and moves focus to the first invalid field. Nothing is sent
  while any field is invalid.

## Sending

- The site has no server for it (decision `contact-form-without-backend`). A valid Send resets the form (India
  again) and shows a thank-you text under the button, in a polite live region, so a screen reader reads it. The text
  goes away when the visitor starts typing again.
- Nothing leaves the browser.

## Keyboard

- `Tab` goes through the fields in reading order: the country box before the number. `Space` toggles the checkbox,
  `Enter` in a text field or on Send submits. Every control shows the focus ring; the country box shows it on its frame.

## Without JavaScript

- All fields show. Nothing checks them and Send cannot send (it posts to the same page, which has no handler), so the
  form is not usable; the rest of the page is unaffected.
