# Placeholder contact data use reserved names, and social links go only to real profiles

Date: 2026-11-01 · Status: accepted

## Context

The site is a portfolio piece with no company behind it. The template's contact data named another project and a
real domain (`ai-podcasts.com`), and its social links led to the roots of Twitter, Medium and LinkedIn. A `mailto:` on a
domain the author does not own sends a visitor's mail to a stranger; a link to a site root is not a profile.

## Decision

- An email in the content is on `futuretech.example` (reserved by RFC 2606), a phone number is in the fiction range
  `555-0100` to `555-0199`, an address is a made-up street. None of them is a real person's or company's.
- A social link goes only to a real profile of the author. Today that is GitHub, `github.com/serlisovyk`; a network the
  author has no profile on gets no icon and no link. An icon that is not a link is not added to fill the block.
- Anything else the site shows about the author stays what it was: the name, the year and the GitHub link.

## Consequences

- The Contact page has no address that reaches anyone; the form validates and sends nothing
  (`contact-form-without-backend`), and the data says so by using names that cannot belong to anyone.
- A real address, phone or profile is added by the author as a new entry, not by an agent.
- Rejected: keeping the template's own domain and numbers "as placeholders" (they can belong to someone);
  keeping dead icons for the look of the block (a control with no action).
