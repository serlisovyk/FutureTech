# Plan: section parts in folders, spread of a data item, ContactColumn split (MY-306)

Branch `my-306-section-parts`. No spec: the built HTML and CSS do not change, the check below proves it. Two decision
records are added: parts of a section in folders (refines `folders-and-barrels`) and the spread of a data item
(changes the props rule of `ai/rules/jsx.md`).

## Changes

1. **Parts in folders.** Every part of a section moves with `git mv` to `sections/<group>/<Section>/<Part>/` with
   `<Part>.jsx`, its stylesheet when it has one, and an `index.jsx` (`export { Part } from './Part.jsx'`). The section
   imports it as `./<Part>`; the section's own `index.jsx` still exports the section only. Parts: `ArticleBody`,
   `ArticleHero`, `ArticleSection`, `ArticleSidebar`; `ConsentField`, `FormError`, `FormField`, `MessageField`,
   `PhoneField`, `RequiredMark`, `TextField`; `ContactColumn`; `FaqItem`; `FeatureCard`, `FeatureGroup`; `HeroFeature`;
   `ResourceShowcase`; `TestimonialCard`, `TestimonialGroup`; `EpisodeGroup`; `PodcastShow`; `ResourceCard`;
   `ResourcePanel`, `ResourceRow`; `FooterColumn`, `FooterCredits`, `FooterPillLink`, `FooterTextLink`.
2. **A part that needs a sibling part.** `FormField` uses `FormError` and `RequiredMark`, `ConsentField` the same two,
   `TextField`, `MessageField` and `PhoneField` use `FormField`, `FooterColumn` uses the two footer links. `jsx.md` says
   an import across folders uses the folder alias and never `../`, and a component already imports a sibling by its
   folder (`@components/media/Icon`). A part does the same: `@sections/<group>/<Section>/<Part>`, a folder path and never
   the `@sections` barrel (it exports the importing section, a cycle). No `../`, so no rule is bent; the new record says
   it.
3. **Spread of a data item.** Allowed when the item is made exactly for the component's props: `<TextField {...email} />`,
   `<HeroFeature key={id} {...feature} />`. `key` is always written separately. A key-only `id` the component does not take
   is split off in the callback (`({ id, ...feature }) =>`), so no unknown prop is passed; when the `id` is also a prop
   the callback takes the item and destructures the key in a block body. The rest `...props` of a component stays
   forbidden. Applied to: the six `ContactForm` fields, `FeatureGroup`, `FeatureCard`, `HeroFeature`, `ResourceShowcase`,
   `TestimonialCard`, `FaqItem`, `ArticleSection`, `PodcastShow`, `VideoCard` of the episodes and of the video list,
   `ResourceCard`, `ResourcePanel`, `ResourceRow`, `FooterColumn`, `FooterTextLink` / `FooterPillLink`, `Stat`, and the
   `PageIntro` of News, Podcasts and Resources. Every target destructures its named props and forwards nothing, so an
   extra field of the item is ignored. Left as they are because the item is not the props: `NewsCard` (likes and comments
   come from the nested `counters`), `PostRow` (nested `author` and `counters`), `SectionHeading` (the section data
   holds `id`, `placement`, `feedId`, … too), `ArticleHero`, `CounterPill`. One data rename makes the video list match:
   `poster` becomes `image` in `videos.js`, so `VideoCard` takes the item as it is.
4. **`ContactColumn` split.** `ContactColumn` keeps the shell (`.contact-column`: the gap and the `h2`) and takes
   `children`; three new parts render the content, with the markup of today: `ContactLinks` (the buttons list),
   `ContactOffice` (address and directions), `ContactSocials` (the icon links). `ContactInfo` renders the one a contact
   has (`links`, `address`, `socials`). The three parts have no stylesheet of their own: their elements
   (`contact-column__links`, `__office`, `__socials`, …) belong to the `contact-column` block, and a class rename would
   change the HTML, so the block's rules stay in `ContactColumn.css` (`css.md`: one block, one stylesheet).
5. **404 texts.** The heading and the line of `pages/404.jsx` move to `data/not-found.js` (`notFound`, a line in
   `data/index.js`); the page renders them.
6. **Docs.** `ai/rules/jsx.md` (props and spread, the part folders), `ai/skills/section.md`, `ai/map.md` (kept under
   12288 bytes as stored by git), two records and their lines in `ai/decisions/README.md`.

## Risk

- CSS order in the bundle follows the import graph. Imports keep their order, so the order should stay; the built
  stylesheet is diffed to prove it.
- A spread passes the item's extra fields: each target was checked to destructure by name and to render nothing from
  the rest.
- `minista check` does not look at components no page renders; every moved part is rendered by a page (Article,
  Contact, Home, Podcasts, Resources, the footer on every page, and `/ui`).

## Verification

The checks under "Verification" in `AGENTS.md`. `dist/` is built on `main` before the change and after it: every
`dist/**/*.html` is identical apart from asset hashes, the CSS identical or only reordered with the cascade unchanged.
`npm run dev` on every page at 1920, 1440 and 390: the contact form (validation, phone country), the FAQ, the contact
columns, the Home features, the tabs; no video is played.
