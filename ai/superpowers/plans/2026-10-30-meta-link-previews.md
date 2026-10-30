# Plan: meta and link previews (MY-282)

Branch `my-282-seo`. No spec: the pages look and behave the same, only the head changes. Records cited: `shared-page-head`
(the layout builds the head from `metadata`), `minista-jsx-static-html`. minista API checked against
<https://minista.dev> (Head, Layouts, Static data, Public files, Image bundling) and `minista agents`: the layout receives
`url`, `title`, `description`, the page's own `metadata` keys and the `props` of `getStaticData`; `Head` collects its
children into the layout's `<head>`; `public/` is copied to `dist/` untouched; a default image import is the hashed URL.

## Head

- `data/site.js` gains the production origin (`url`), the locale, the theme colour and the social image's file, size and
  alt. Every absolute URL is `getAbsoluteUrl(path)` from that one origin.
- The layout prints, for every page: `<title>`, `description`, `canonical` (origin + the page's `url`), `theme-color`,
  the icon links, `og:site_name`, `og:locale`, `og:type`, `og:title`, `og:description`, `og:url`, `og:image` (+ width,
  height and alt where known) and `twitter:card=summary_large_image`. `og:title` is the page title without the site name.
- An article page (the layout gets the `post` that `getStaticData` already passes) adds `og:type=article`,
  `article:published_time`, `article:author` and the post's photo as `og:image` with the photo's alt. The page file is
  not touched: titles and descriptions already come from the post.
- `getSocialMeta(post)` (`utils/`) decides the type and the image: the site image without a post, the post's photo with one.

## Images

- The post photo is the source JPEG, resolved to its hashed absolute URL with `import.meta.glob` (`?url`) over
  `assets/images/photos/*.jpg`: crawlers read JPEG and PNG, not AVIF, and the optimized files have no fixed name. The
  glob also emits the photos no post uses; they are not counted by the images limit (`*.{avif,webp}`).
- Files that need a fixed URL sit in `public/`: `favicon.svg` (the logo mark), `favicon.png` (48 px), `apple-touch-icon.png`
  (180 px, dark square with the mark) and `og-image.png` (1200 x 630: dark background, the logo, the tagline). They are
  generated once from the logo and the site's fonts (sharp, a headless browser for the text) and committed; the layout
  links them by their fixed paths.
- No web manifest (`ai/rules/scope.md`: no PWA); no `favicon.ico` (every current browser takes the SVG or PNG link).

## Docs

`ai/map.md` (where the meta is set, `public/`), `ai/rules/jsx.md` (a new page gives a title and a description).

## Verification

The checks under "Verification" in `AGENTS.md`; `dist/` heads of Home, News, Contact, 404, `/ui` and two articles read by
hand; `npm run size` numbers reported (no limit edited).
