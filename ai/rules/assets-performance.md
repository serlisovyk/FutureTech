# Assets and Performance Rules

What holds for images, fonts, the files in `assets/`, the page metadata and the weight of the
build. Where the files are: `ai/map.md`. Why the site is static: decision
`minista-jsx-static-html`.

## Fonts

- Kumbh Sans (headings) and Inter (text) are self-hosted `woff2` files in `src/assets/fonts/`
  with `font-display: swap`. No font CDN, no request to Google Fonts.
- Only the weights the design uses are shipped, latin subset (decision `self-hosted-fonts`).
  The layout preloads the body face (Inter 400) and the heading face (Kumbh Sans 500).
- A new weight, style or face is a decision for the author, not a drive-by edit.

## Images

- Every `<img>` has `width` and `height` (no layout shift) and `alt`: a decorative image has
  `alt=""` and `aria-hidden="true"`, an informative one says what it shows.
- An image below the first screen has `loading="lazy"`; the first screen's own image does not,
  and a photo there carries `fetchpriority="high"`.
- Photos go through minista's image plugin (`Photo`): AVIF with a WebP fallback and a `srcset` with
  `sizes` that match the layout at the three widths (formats and quality: decision `image-formats`).
  The source file in `assets/images/` is never shipped as it is: keep it near the largest size drawn.
- Icons are SVG, a sprite per folder (`assets/icons/ui/`, `social/`, `feature/`), used through `Icon`; an SVG that must be inline
  (the logo) goes through minista's SVG plugin (`assets/logos/`). A decor made of hundreds of vectors is a
  raster. An export from a design tool is cleaned before it is committed (no editor metadata, no embedded
  raster, no needless paths).
- A video is never self-hosted or embedded on page load: a preview image and a play button,
  the player is created when the user asks for it.
- Asset files are named in lowercase with hyphens, by what they show (`mars-landscape.jpg`),
  not by their place in the design, and sorted into subfolders by meaning (`icons/ui/`, `images/portraits/`).
- An asset the code no longer uses is deleted in the same change.

## Page metadata

- Every page and every article has a unique `<title>` and meta `description`, both set in its `metadata` and printed by the layout, the viewport
  meta, and `lang` equal to the language of its content.
- Absolute URLs (canonical, `og:url`, `og:image`) are built from one site origin constant,
  never written out per page.
- The head holds only what the page needs: the stylesheets, the script entry, the metadata.

## Bundle and third parties

- No third-party runtime scripts, no analytics, no font or icon CDN. A video embed is loaded
  only after a click.
- No React, no minista island runtime in the browser (decision `minista-jsx-static-html`).
- No source maps in the production build.
- A dependency is added only with the author's yes; the browser runtime has none.
- The size budget (`npm run size`, run by CI on every push) holds the built JS, CSS and fonts to
  their limits (images join with the first photo); a change that comes near them is questioned
  first, and raising a limit is a new dated record.
