# Plan: reveal on scroll and hover states (MY-284)

Branch `my-284-reveal-hover`. Spec: `ai/superpowers/specs/2026-10-30-reveal-hover.md`. Records cited:
`oop-javascript` (the class), `styles-next-to-components` (hover lives in each block's stylesheet). minista API: none.

## Reveal

- `Reveal` (`scripts/components/`), root `<html data-reveal-root>`, one row in `main.js`. It finds `[data-reveal]`
  inside the root; `start()` returns early under reduced motion or without `IntersectionObserver`, skips the items already
  on the first screen (`top < innerHeight`), observes the rest, and only then puts `is-reveal-ready` on the root.
- When items intersect it numbers those of one callback batch 0, 1, 2 … (capped) into `--reveal-index`, adds
  `is-revealed` and unobserves them: a cascade without markup, and a lone item has index 0.
- CSS in `styles/base.css`, with the one `@keyframes`: under `(scripting: enabled)` and `(prefers-reduced-motion:
no-preference)` a `[data-reveal]` under `.is-reveal-ready` and not yet `is-revealed` is `opacity: 0`; `is-revealed` runs the
  keyframes (`from` only, `backwards` fill, delay from `--reveal-index`). An animation, not a transition, so the
  block's own hover transitions are never overridden and nothing is left behind after it ends. The duration is
  three times `--transition-duration`. `transform` and `opacity` only: no layout shift.
- Safe by construction: the hidden state needs the root class, set after the observer exists; items on screen are never
  hidden, so a late or failing script cannot hide the first screen or leave the page blank.
- Markup: `data-reveal` on the blocks, written in the component that owns the block: `SectionHeading` inner,
  `NewsCard`, `VideoCard`, `PostFeed`, `TestimonialCard`, `FeatureGroup` intro and `FeatureCard`, `ResourceShowcase`,
  `PodcastShow` inner, `ResourceStats` item, `ResourceRow` inner, `ResourceCard`, `Faq` intro and `FaqItem`,
  `CtaRevolution` intro and items, `FooterColumn`. Not marked: header, `Hero`, every `PageIntro`, `FeaturedNews`
  (eager photo), `ContactInfo` (the first screen of Contact has no intro).

## Hover

- Per block stylesheet, `:hover` inside `@media (hover: hover)`, transitions on named properties from
  `--transition-duration`: `Button` (variants, arrow nudge), `HeroFeature` and CTA cards (background, border, arrow),
  header links and banner, footer links and socials, contact socials, the two tab kinds.
- Focus is the one base ring; the hover look is not repeated on `:focus-visible`.

## Verification

The checks under "Verification" in `AGENTS.md`, `npm run size` numbers reported (no limit edited). Then every page in
`npm run dev` at 1920, 1440 and 390: reveal once, the cascade, reduced motion (emulated) and no scripting show
everything, no layout shift on load, hover on each listed element, keyboard focus still visible.
