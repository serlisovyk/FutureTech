# Plan: performance, hero decor `sizes`, shorter `fluid()`, avatars, unused originals, Inter 500 (MY-314)

Branch `my-314-performance`. No spec: nothing a user sees changes (same layout, same computed styles; images get
sharper or lighter). Records cited: `postcss-shorthands`, `image-formats`, `self-hosted-fonts`, `size-limits`,
`seo-files-and-structured-data`, `lighthouse-on-pagespeed` (a local Lighthouse run finds the cause, it does not judge the score).

## Checked against the docs and by experiment

- minista, `pluginImage` (<https://minista.dev/docs/plugins/image>, `minista agents`, the installed `types.d.ts`): the `Picture`
  props `sizes`, `breakpoints`, `formats`, `aspect`, `fit`, `position`; a candidate wider than the source is not made by upscaling.
  Nothing in the config changes: only the values passed to `Photo`.
- minista, "Image bundling": a source image referenced by the page code is emitted; `meta[content]` is not rewritten, so an
  `og:image` takes its URL from an import. The glob in `get-social-meta.js` is therefore what emits the originals.
- `sizes` takes `calc()`, `min()` and `clamp()` of lengths, so the hero decor can repeat the ramp of `fluid(423, 622, 894)`.

## Baseline (build of `main`, kept outside the repo)

Computed styles of every element on the 8 pages (Home, News, Podcasts, Resources, Contact, `/ui`, 404, one article) at
1920 / 1440 / 1024 / 768 / 390, in headless Chrome over the DevTools protocol, once on the built `dist` and once on the
dev server, reduced motion on, lazy images forced to load, custom properties left out (they hold the text of the
ramps). The CSS gzip size, the file list and sizes of `dist/assets`, Lighthouse mobile of `/`.

## Changes, one commit each

1. **`fluid()` writes the difference as a number** (`vite/postcss/fluid.js`): `calc(28px + 16 * var(--ramp-390-1440) + 14 * var(--ramp-1440-1920))`,
   a negative step as `- 4 * var(…)`, decimals without float noise. Same values, about 485 `(b - a) *` terms shorter. Compared
   with the baseline right after, before any image change. A new record supersedes `postcss-shorthands`.
2. **Hero decor `sizes`** (`data/hero.js`): the ramp of `fluid(423, 622, 894)` written as `clamp()` terms of the two ramps. The
   `breakpoints` stay (423, 622, 894, 1788: the 1788 is for 3x screens). Lighthouse mobile: the image-delivery insight on the decor is gone.
3. **Unused JPG originals**: the glob emits all 23 `*.jpg`, 11 are an article's `og:image`. A build plugin of ours,
   `unused-originals`, removes from the bundle the JPG that no built page names. The glob and the `og:image` URLs stay as they are
   (no change to `get-social-meta.js`, a photo shared by an article and a card stays in one folder). Every
   `dist/blog/*.html` `og:image` file is checked to exist. Rejected: moving the article photos to a folder of their own
   (several are also card photos); emitting copies from a plugin (a second source of the URL).
4. **Portrait sources** (`assets/images/portraits/`): the 612 px PNG and 626 px JPG are cut to 320 px wide, same format, alpha kept.
   The largest drawn avatar is 80 px; cropped square from a 3:2 source it needs 120 px of source width, 240 px at 2x
   (`image-formats`: a source is kept near the largest size drawn). Checked at 2x next to the old file.
5. **Avatars**: `object-fit: cover` makes a 3:2 source 1.5 times wider than the box, so `sizes` and `breakpoints` of the
   `PostRow` and testimonial avatars grow 1.5 times (`data/card-photos.js`): 90 / 120 px with 120, 180, 240; 75 / 90 px with 90, 180, 270.
   `AvatarGroup` already asks for 150 and 225 under `50px`, and stays.
6. **Card photos**: the measure is the trending `NewsCard` at 1440 and 1920 (a 406 and a 512 px slot take the 720 w file now).
   Candidates `[360, 540, 720, 1080]` against the present list, judged by the image budget; if it passes 3.7 MB the limit is raised.
   Result: the 540 step adds 0.83 MB (3.65 to 4.48 MB), serves only a 1x screen and does nothing for the 626 px sources, so the
   list stays `[360, 720, 1080]` and the limit is not raised for it.
7. **Inter 500 preload**: `interMedium` in the `fonts` barrel and a third `<link rel="preload">` in `FontPreloads`. Checked
   with the network log that every page's first screen asks for the file (the active menu item, Contact Us). A new record
   supersedes `self-hosted-fonts`.
8. **Size limits by fact** from the final build; a new record only if a number moves. They move: CSS 11.5 to 11 kB, images
   3.7 to 3.8 MB (the avatars).

## Docs

- Records: `postcss-notations` (supersedes `postcss-shorthands`), `font-preloads` (supersedes `self-hosted-fonts`),
  `og-image-originals` (narrows one sentence of `seo-files-and-structured-data`, which stays in force), `size-budget`
  (supersedes `size-limits`, and the eleven records that pointed to it now point to it); the index in `ai/decisions/README.md`
  and the lines of `ai/map.md` are merged by the orchestrator.
- `ai/rules/assets-performance.md`: the preloaded faces; the originals sentence. `ai/map.md`: the new plugin in `vite/plugins/`.
- Within `ai/rules/docs.md` limits; `ai/map.md` stays under 12288 bytes as git stores it.

## Verification

The checks under "Verification" in `AGENTS.md`. Computed styles before and after step 1 on `dist` and on `npm run dev`; the CSS
gzip size; Lighthouse mobile and desktop on `/` and `/news` against `npx minista preview --port 5195`; the file list of
`dist/assets` and every `og:image` file; the first screen of Home and News at 2x in the browser; the network log for the fonts.
