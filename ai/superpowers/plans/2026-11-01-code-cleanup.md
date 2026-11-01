# Plan: code cleanup (MY-319)

Branch `my-319-code-cleanup`. The built site must look as before: the spec
(`ai/superpowers/specs/2026-11-01-code-cleanup.md`) covers the only two visible changes, both small fixes the orchestrator
added. Everything else is structure, so the proof is a diff of the built HTML and of the computed styles.

## Decisions taken here

- **Sibling parts by `../`.** A part imports a sibling part as `../<Part>`; `../` out of the section stays forbidden.
  New record `part-imports-by-parent-folder` restates `section-parts-in-folders` (which becomes superseded); `jsx.md`
  and the `section` skill follow.
- **Import order**, written in `jsx.md` and applied to every file under `src/` (no blank lines between groups, as
  now): packages, then `@components` / `@sections`, `@utils`, `@constants`,
  `@data`, assets, `../`, `./`, stylesheets last; inside a group alphabetical by path. Why this order: it runs from
  outside in (a package, the building blocks, the pure helpers, the fixed values, the texts, the files), the author asked for
  `@utils` above `@data`, and the stylesheet stays last as before. The scripts use the same list (`@scripts`
  sits with the code group). **No ESLint rule:** the installed plugins have none that groups by alias (`sort-imports`
  sorts only by member names) and `eslint-plugin-import` would be a new dependency for a rule a record can hold, so the
  order is documented and applied by a throwaway script, not enforced. A record `import-order` holds the reasons.
- **`ALL_CATEGORY`** (constants) and `allCategory.slug` (data) are two homes for `'all'`. `data/` is loaded by Node as well
  (`vite/`), so it cannot import `@constants`, and `../` is forbidden: the data keeps the slug, the constant goes, and the
  controller learns which tab shows everything from a hook on the tab (`data-tab-all`).
- **Tab index values** `0` / `-1` become `TAB_INDEX` in constants (`NO_INDEX` means "no such index", not a tab stop).
- **`Stat`'s plus sign** is `STAT_PLUS` in constants; a util `splitStatValue` returns the number and `hasPlus`.
- **`NewsCard` props** come from `getNewsCardProps(post)` (util); the four callers spread it, `key` beside.
  Removed after the author's review (c37abf1): a util that only renames fields is not wanted; the props are passed in place.
- **Texts**: `Read More`, `View Blog`, `Listen Podcast`, `Host`, `Play` and the words that join them to a title go to
  `data/ui-labels.js`; the avatar photo `sizes` and breakpoints to `data/card-photos.js`; the menu icon size to
  `data/navigation.js`.
- **`SectionHeading`** takes `link = {}`, destructures `href` and `label` and shows the button when there is an `href`.
- **Early returns**: `getPostFeedStatus` gets its template from `getPostFeedTemplate(count)` (own util file, one function
  per file).

## New shared pieces

- `components/ui/Rating` (stars from a number; the caption is `getRatingLabel(value)` from `data/rating.js`, so the
  `ratingLabel` fields of the data go; `isCompact` for the podcast show's smaller star and wider pill).
- `components/ui/SocialLinks` (`socials`, `isBoxed` for the contact page's boxes); `ContactSocials` is deleted, the footer
  and `ContactInfo` render it.
- `components/ui/ArrowCircle` (the yellow round arrow) and `components/cards/LinkCard` (the card link that moves it on
  hover) for `HeroFeature` and the `CtaRevolution` cards; the arrow icon of both is `--size-icon` (the Cta's was the same
  value unrounded, so it differs from before only between 1440 and 1920).
- `components/cards/CardGroup` (a list of cards, each in an `li` with the dividers) and `components/page/DisclosureSection`
  (the section with its heading, the "View All" disclosure button and the grid of the first N and the rest); it takes the
  data of `testimonialsSection` / `latestPodcasts` as it is. `TestimonialGroup`, `EpisodeGroup` and the two sections'
  grid and button rules go. The sections keep their root class and id.
- `UiKit` is split into one part per demo group (`ButtonDemo`, `TagDemo`, `SectionHeadingDemo`, `StatDemo`, `MetaDemo`,
  `CounterDemo`, `BadgeDemo`, `AvatarDemo`, `NewsCardDemo`, `VideoCardDemo`, `FeedDemo`), each a `section` with its own
  root, using the block's classes (no stylesheets of their own). Every text and placeholder is in `data/ui-kit.js`; the
  placement `trending` is data like the feeds' placements.

## CSS

- Tokens (values two or more blocks write): `--space-panel` (60 / 60 / 80), `--size-icon-feature` (50 / 60 / 80),
  `--font-size-title` (18 / 20 / 24), `--color-yellow-hover`.
- A utility class `.split-layout` in `base.css` for the "intro | panel" grid of `FeatureGroup`, `ResourceShowcase`,
  `PodcastShow`, `ResourceRow`, `ContactForm` and `Faq`; `ContactForm` keeps its own 412 px intro width, as drawn.
- Custom properties used once are written where they are used (`--article-sidebar-width`, `--faq-item-padding`,
  `--testimonial-overlap`, `--footer-link-gap`, the header plate's three, the intro widths that `.split-layout` replaces).
- `Header.css` uses the logical properties.

## Order of commits

1. docs: this plan and the spec.
2. `../` imports of sibling parts + the decision and the `jsx.md` rule.
3. Import order (script) + the decision and the rule.
4. Blank lines between computed `const`s (script, then Prettier).
5. Pointwise fixes: `SectionHeading`, `ArticleSidebar`, `Stat`, `TAB_INDEX`, avatar sizes and menu icon in data, `ALL_CATEGORY`,
   `getPostFeedStatus`, the texts of 5a, `getNewsCardProps`
   (removed after the author's review, c37abf1: the `NewsCard` props are passed in place).
6. `Rating`, `SocialLinks`, `ArrowCircle` + `LinkCard`, `CardGroup` + `DisclosureSection` (one commit each).
7. `UiKit` in parts.
8. CSS: tokens, `.split-layout`, inline one-off properties, logical `Header.css`.
9. The two extra fixes: a `scroll-margin-block-start` on the feed tabs, a shorter phone placeholder (no padding makes the
   long text fit at 320 px).
10. Docs: map, skill, rules, the records and their index.

## Verification

Before the first code commit: `dist/` of `main` is built and copied out of the repo. After each structural step:
`npm run build`, then `dist/**/*.html` of both builds compared with the hashes removed, and the computed style of every
element of the eight pages (`/`, `/news`, `/podcasts`, `/resources`, `/contact`, `/ui`, one article, `404`) at 1920, 1440,
1024, 768 and 390 in headless Chrome over the DevTools protocol, against `minista preview`. Each difference is explained
(a renamed class, an added hook, the two fixes). Then the checks of `AGENTS.md`, `size`, the Definition of Done and the
`review` skill over `git diff main..HEAD`.
