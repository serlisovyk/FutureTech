# Plan: Home blogs section (MY-265)

Branch `my-265-home-blogs`. No spec: the filtering is the existing `PostFeed` behaviour
(`ai/superpowers/specs/2026-10-28-post-feed.md`); the section adds no interaction of its own. Records cited:
`folders-and-barrels` (where a section lives), `shared-page-head` (the page file), `borders-inside`,
`fluid-ramps`. minista API: none new, the section is plain JSX.

## What changes

- `src/data/blogs.js`: the section's anchor id (`blogs`, the target of the footer's `/#blogs` links), the feed id,
  the tag, the title, the "View All Blogs" link (to `/news`, the author's decision) and the number of posts shown (3).
- `src/sections/home/Blogs/` (`Blogs.jsx`, `index.jsx`): a `<section id="blogs">` that renders the shared
  `SectionHeading` and the `PostFeed` with `blogCategories` and the posts of `getPostsByPlacement('blogs')`, limited
  to 3. `src/sections/home/index.jsx` is created (the group barrel) and re-exported by `src/sections/index.jsx`.
- `src/pages/index.jsx` renders `Blogs` after the placeholder (the hero and the features of MY-263 and MY-264
  replace it and sit before the section).
- Avatars: all three portraits the section renders exist; John Techson's blog avatar is the yellow-shirt portrait
  the design draws (`posts.js` pointed at the denim-shirt one, which the News headline uses).
- `ai/map.md`: the Home sections.

## Where it can diverge

- `PostFeed` and `PostRow` are already built from this frame; they change only if the browser check at 1920, 1440
  and 390 shows a difference, and then minimally (reported).

## Verification

The checks in `AGENTS.md`; `npm run dev` at 1920 / 1440 / 390: sizes against the design, the tabs by mouse and
keyboard (empty Biotechnology and Renewable Energy), no horizontal scroll, `/#blogs` lands on the section, and the
page without JavaScript (tab bar hidden, all rows shown).
