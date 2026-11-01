# Assets and Performance Rules

What holds for images, fonts, the files in `assets/`, the page metadata and the weight of the
build. Where the files are: `ai/map.md`. Why the site is static: decision
`minista-jsx-static-html`.

## Fonts

- Kumbh Sans (headings) and Inter (text) are self-hosted `woff2` files in `src/assets/fonts/`
  with `font-display: swap`. No font CDN, no request to Google Fonts.
- Only the weights the design uses are shipped, latin subset (decision `font-preloads`).
  `FontPreloads` (in the layout) preloads the body face (Inter 400), the medium text face (Inter 500) and the heading face (Kumbh Sans 500).
- A new weight, style or face is a decision for the author, not a drive-by edit.

## Images

- Every `<img>` has `width` and `height` (no layout shift) and `alt`: a decorative image has
  `alt=""` and `aria-hidden="true"`, an informative one says what it shows.
- An image below the first screen has `loading="lazy"`; the first screen's own image does not,
  and a photo there carries `fetchpriority="high"`.
- Photos go through minista's image plugin (`Photo`): AVIF with a WebP fallback and a `srcset` with
  `sizes` that match the layout at the three widths (formats and quality: decision `image-formats`).
  `sizes` repeats the drawn size, a fluid one as the same ramp, an avatar cropped square from a 3:2 source as 1.5 times its box.
  The source file in `assets/images/` is never shipped as it is: keep it near the largest size drawn at 2x. Only the JPEG an
  article's `og:image` names is shipped as a source (decision `og-image-originals`).
- Icons are SVG, a sprite per folder (`assets/icons/ui/`, `social/`, `feature/`, `flag/`), used through `Icon`; an SVG that must be inline
  (the logo) goes through minista's SVG plugin (`assets/logos/`). A decor made of hundreds of vectors is a
  raster. An export from a design tool is cleaned before it is committed (no editor metadata, no embedded
  raster, no needless paths).
- A video is never self-hosted or embedded on page load: a preview image and a play button,
  the player is created when the user asks for it.
- Asset files are named in lowercase with hyphens, by what they show (`mars-landscape.jpg`),
  not by their place in the design, and sorted into subfolders by meaning (`icons/ui/`, `images/portraits/`).
- An asset the code no longer uses is deleted in the same change.

## Page metadata

- Every page and every article has a unique `<title>` and meta `description`, both set in its `metadata` (`data/pages.js`) and printed by the layout, the viewport
  meta, and `lang` equal to the language of its content.
- Absolute URLs (canonical, `og:url`, `og:image`) are built from one site origin constant,
  never written out per page. A `noindex` page has no canonical.
- The head holds only what the page needs: the stylesheets, the script entry, the metadata.

## Bundle and third parties

- No third-party runtime scripts, no analytics, no font or icon CDN. React and minista's island
  runtime never reach the browser (`ai/rules/architecture.md`).
- No source maps in the production build.
- The Content-Security-Policy in `vercel.json` allows the site's own origin and the YouTube privacy domain
  for frames only (decision `security-headers`): no inline style or script, no `data:` URL and no new
  origin without a new record.
- A dependency is added only with the author's yes; the browser runtime has none.
- The size budget (`npm run size`, run by CI on every push) holds the built JS, CSS, fonts and
  images to their limits (decision `size-budget-after-audit`); a change that comes near them is questioned
  first, and raising a limit is a new dated record.
