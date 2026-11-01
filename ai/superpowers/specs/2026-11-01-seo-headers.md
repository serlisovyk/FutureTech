# Spec: SEO markup and response headers (MY-316)

Branch `my-316-seo-headers`. What a crawler, a browser and a visitor get; the build is in
`ai/superpowers/plans/2026-11-01-seo-headers.md`.

## Head

- The pages that are `noindex` (`/404`, `/ui`) have no `<link rel="canonical">`; every other page and article has its own.
- Every page has `<meta name="viewport" content="width=device-width, initial-scale=1">`, first after the charset.
- Home, News, Podcasts, Resources and Contact have a descriptive title and description, unique on the site. The tab
  and the search result read `<title> | FutureTech`; the link preview (`og:title`) reads the title alone.
- The Organization in the JSON-LD has a square PNG logo of at least 112 px (`/logo.png`, 512 px); a `BlogPosting`
  has `datePublished` and `dateModified`, the same day until an article is edited.

## Response headers

Every response, the 404 page included:

- `X-Content-Type-Options: nosniff`.
- `Referrer-Policy: strict-origin-when-cross-origin`: the YouTube embed gets an origin to check against.
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`: the site asks for none of them.
- `Content-Security-Policy`: only the site's own origin loads or runs anything, `frame-src` allows the privacy-enhanced
  YouTube domain, no plugin (`object-src 'none'`), no `<base>` or form posting elsewhere, and no page can frame the site.
- The icons, the logo and the social image are cached for a day.

## What must keep working

The JSON-LD, the fonts, the sprite icons, the images, the page view transitions and the video modal (its iframe opens
and is not blocked) show no policy violation in the browser console, on any page. Nothing plays during the check.
