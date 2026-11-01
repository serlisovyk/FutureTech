# FutureTech

📰 A fast multi-page tech blog written in JSX and built by minista into static HTML.

**[▶ Open the demo](https://futuretech-cyan.vercel.app)**

A tech blog of five pages and an article page for every post, built from a third-party design template. The pages, layouts and components are JSX that minista 5 renders into plain HTML at build time, so React never reaches the browser: it gets HTML, one stylesheet and one small script of vanilla JavaScript classes. The content lives in `src/data/`, and every article page is generated from it. It keeps production habits from larger projects: a Vite build with optimised images, size budgets, CI, linting hooks, accessibility, and search and link-preview metadata.

## ✨ Features

- Home, News, Podcasts, Resources and Contact pages, a 404, and an article page for every post in `src/data/`, matching the 1920, 1440 and 390px design
- A post feed with category tabs that filters the list in the browser, and Resources tabs (Whitepapers, Ebooks, Reports) that follow the URL hash
- A video modal: any play button or Listen Podcast opens a YouTube player in a dialog, created only on a click
- A contact form checked in the browser with its own messages and a country-aware phone field; nothing is sent
- An article with a "Read Full Blog" expander, a like that is remembered in the browser, and similar news
- Stat numbers that count up when they come into view, and a reveal on scroll
- Cross-fade page transitions (cross-document View Transitions) and a mobile menu drawer; the motion is off for reduced motion
- Accessible: skip link, focus rings, 44px hit areas, keyboard support, and every page readable without JavaScript
- Link previews with an Open Graph image, `robots.txt`, `sitemap.xml` and `llms.txt` built from the pages, JSON-LD, and security headers with a strict Content-Security-Policy
- Optimised AVIF and WebP images, self-hosted preloaded fonts, hashed assets cached for a year, and Lighthouse 100 in all four categories on every page, mobile and desktop (measured on PageSpeed Insights)

## 🧰 Tech Stack

- minista 5
- Vite 8
- React 19 (at build time only)
- JSX
- CSS (native nesting, design tokens, PostCSS plugins of the repo)
- JavaScript (ES modules)
- ESLint
- Stylelint
- Prettier
- Husky
- lint-staged
- size-limit
- GitHub Actions
- Vercel
- npm

## 📁 Project Structure

```text
src/
  pages/             One file per page, its name is its URL; blog/[slug].jsx makes an article page per post
  layouts/           The shell of every page: html, head, main
  sections/
    shared/          Header, footer, call to action, video modal
    home/            Hero, features, blogs, resources, testimonials
    news/            Featured news, trending stories, news hub, featured videos
    podcasts/        Top podcasts, latest podcasts
    resources/       Resource stats, library, cards
    blog/            The article and similar news
    contact/         Contact info, form, FAQ
    not-found/       The 404 intro
    ui/              The UI kit demo
  components/
    ui/              Button, tag, badge, stat, meta grid, counter pill, heading
    cards/           News card, video card, post row
    feeds/           The post feed with category tabs
    page/            The page intro
    media/           Icon and photo
    head/            Title, SEO and social meta, JSON-LD, font preloads
  data/              The content the pages render: posts, authors, podcasts, resources, FAQ, contacts, site
  utils/             Pure build-time helpers: titles, URLs, dates, JSON-LD
  constants/         Values the utils and scripts share: hooks, media queries, storage keys
  scripts/
    main.js          The only entry: finds each root, creates its class, starts it
    components/      Tabs, Disclosure, Toggle, VideoModal, CountUp, FormField, LikeButton, Reveal
    controllers/     One class per section: header menu, post feed, video modal, contact form, article
    services/        Storage item and visibility observer
  styles/            Tokens, reset, base, fonts and reveal; every component and section has its own stylesheet
  assets/
    fonts/           Self-hosted Inter and Kumbh Sans (woff2)
    icons/           Sprite icons: ui, social, feature, flag
    images/          Photos, portraits and decor
    logos/           The logo and its mark
public/              Files with a fixed URL, copied as they are: favicon, logo, link preview image
vite/                Vite config in parts: aliases, plugins, images, CSS, build; the PostCSS plugins and the site files plugin
vercel.json          Clean URLs, security headers and the cache headers
.size-limit.json     The size budgets of the built JavaScript, CSS, fonts and images
ai/                  Agent docs: repo map, rules, decisions, skills, prompts, plans
```

## 🚀 Scripts

Install dependencies, which also installs the pre-commit hook (needs Node.js 22.22.1 or newer):

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the production version into `dist/`, with `robots.txt`, `sitemap.xml` and `llms.txt` made from the built pages:

```bash
npm run build
```

Preview the production build locally (run `npm run build` first):

```bash
npm run preview
```

Check the routes and pages of the project with minista:

```bash
npm run check
```

Lint the JavaScript (`npm run lint:fix` also fixes what it can):

```bash
npm run lint
```

Lint the CSS (`npm run lint:css:fix` also fixes what it can):

```bash
npm run lint:css
```

Format the code with Prettier (`npm run format:check` only checks):

```bash
npm run format
```

Check the bundle sizes against their budgets (run `npm run build` first):

```bash
npm run size
```

## 🔄 CI

Every push runs [GitHub Actions](.github/workflows/ci.yml): lint, CSS lint, format check, build, the minista check, and the size budgets from [`.size-limit.json`](.size-limit.json).

The pre-commit hook (Husky and lint-staged) runs ESLint, Stylelint and Prettier on the staged files.

`main` deploys to Vercel production through its Git integration; other branches get previews.

## 🧱 Architecture Notes

### Why minista

- JSX components, layouts and pages render into static HTML at build time; React 19 runs only during the build, so no React reaches the browser ([decision](ai/decisions/2026-10-28-minista-jsx-static-html.md))
- Components are plain functions with no hooks or handlers: behavior lives in a small vanilla script, and every page works without it
- Article routes come from data: `pages/blog/[slug].jsx` makes one page per entry of `src/data/posts.js`, and the same data feeds the feeds, the similar news, the sitemap and `llms.txt`
- The JavaScript stays small, with its budget in `.size-limit.json`; no router, no hydration, no islands
- The alternatives were Astro, Vite with Handlebars partials and Next.js; minista's JSX-to-HTML model fit a site that needs components and data-driven routes but no runtime. It has a small community, so the versions are pinned and its API is checked against its docs

### Other decisions

- A class per widget and per section, created and started in `main.js` ([decision](ai/decisions/2026-11-01-script-helper-classes.md))
- Styles sit next to their component ([decision](ai/decisions/2026-10-28-styles-next-to-components.md)); two breakpoints change the structure and sizes are fluid between the three drawn widths, written as short notations that PostCSS plugins expand ([decision](ai/decisions/2026-11-01-postcss-notations.md))
- Page transitions are cross-document View Transitions in CSS, with no router ([decision](ai/decisions/2026-11-01-page-view-transitions.md))
- The contact form validates in the browser and sends nothing, because the site has no backend ([decision](ai/decisions/2026-10-30-contact-form-without-backend.md))
- Every response carries four security headers, set in `vercel.json` ([decision](ai/decisions/2026-11-01-security-headers.md))
- Lighthouse is measured on PageSpeed Insights, on the deployed site ([decision](ai/decisions/2026-11-01-lighthouse-on-pagespeed.md))
- No automated tests, by design ([decisions](ai/decisions/README.md))

## 🤖 AI Workflow

The site is built and maintained by AI agents (Claude Code) under the author's review. Everything they need lives in the repo, written for any agent rather than one tool:

| Part                                      | What it gives an agent                                                    |
| ----------------------------------------- | ------------------------------------------------------------------------- |
| [`AGENTS.md`](AGENTS.md)                  | The entry point: project defaults and the rules that never bend           |
| [`ai/map.md`](ai/map.md)                  | Where every page, section, component, style, script and data file lives   |
| [`ai/rules/`](ai/rules)                   | How to write the code and the docs, and the Definition of Done            |
| [`ai/decisions/`](ai/decisions/README.md) | Why things are the way they are, so nothing settled gets "fixed" back     |
| [`ai/skills/`](ai/skills/README.md)       | Playbooks: adding a page section, self-review                             |
| [`ai/prompts/`](ai/prompts/README.md)     | Session prompts: one task, or an orchestrator running several in parallel |
| [`ai/superpowers/`](ai/superpowers)       | The plan (and spec) of every past task                                    |

Every change follows [one workflow](ai/workflow.md): a Linear issue → a plan → the code on its own branch → checks and a run in the browser → self-review → the author's approval → a local merge into `main`.
