# Plan: article routes `/blog/<slug>` (MY-276)

Branch `my-276-blog-routes`. Records cited: `article-data` (body sections in `data/posts.js`), `shared-page-head`,
`folders-and-barrels`. minista API used: a dynamic page file name and `getStaticData` returning `paths` and `props`,
checked against minista.dev (Page generation from APIs, Static data) and the installed package's `getStaticData` types.
No spec: the page is static markup, nothing a user does changes.

## Scope

- `src/pages/blog/[slug].jsx`: `getStaticData` maps `posts` to `{ paths: { slug }, props: { title, description, post } }`.
  A key of `props` reaches the layout and the page and wins over `metadata`, so the layout builds the `<title>` and the
  description `<meta>` from the post (title, excerpt) with no change to the layout.
- The URL of each page is `/blog/<slug>`, the same string `getPostUrl(slug)` returns; the build writes
  `dist/blog/<slug>.html`, which `cleanUrls` in `vercel.json` serves as `/blog/<slug>`.
- Section `sections/blog/Article/` (`Article`, `ArticleSection`): the `h1`, the `MetaGrid` of category, date and
  author, and each body section as an `h2` with its `id` (the anchor of the future table of contents) and its
  paragraphs. Texts (the title id, the meta labels) are in `data/article.js`. The article layout of the design
  comes in later tasks; this is the minimal page.
- `sections/blog/index.jsx` group barrel, a line in `sections/index.jsx`.

## Verify

Every post has a non-empty body without placeholder text; every link to an article goes through `getPostUrl`;
a crawl of `dist/**/*.html` finds every `/blog/` href backed by a built page; `npm run check` and the checks of
`AGENTS.md`; the page in the browser at 1920 / 1440 / 390.

## Docs

`ai/map.md` (the route, the section, the data file), `ai/rules/jsx.md` (a new article is one entry in `data/posts.js`).
