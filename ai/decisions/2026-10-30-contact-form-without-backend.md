# The contact form validates in the browser and sends nothing

Date: 2026-10-30 · Status: accepted

## Context

The Contact page has a form (name, email, phone, message, consent). The site has no backend and no third-party
services (`ai/rules/scope.md`), so there is nowhere to send a message to.

## Decision

- The form is checked in the browser and a valid Send does not send: it shows a thank-you text in a live region and
  resets the form. The data goes nowhere.
- The markup has no `action` and uses `method="post"`, so that without JavaScript a submit never puts what was typed
  into the address bar. Without JavaScript the form is not usable; the script adds `novalidate` so only its own messages
  show.
- A real destination (a mail service, a form endpoint, a backend) is a new record that replaces this one.
- Terms of Use and Privacy Policy have no pages, as in the footer: the consent text is plain text, not links.
- The phone's country is a native `<select>` (twelve countries, each with its national digit count); no library.
  The flags are SVG sprite icons: an emoji flag is not drawn on Windows.

## Consequences

- The visitor is told their message was received although nothing is stored; the text is the product's, and this record is
  where the gap is named.
- The checks use the native constraint attributes and `validity`; only the phone's `pattern` changes with the country.
- Rejected: a `mailto:` submit (opens a mail client, leaks the address into the link); a form service (a third-party
  runtime dependency); emoji flags (missing on Windows).
