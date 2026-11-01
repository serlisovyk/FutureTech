# Plan: code rules (MY-326)

Branch `my-326-code-rules`. What a visitor sees differs in two places (the tabs' focus scroll, the footer's social
icon): `ai/superpowers/specs/2026-11-01-code-rules.md`. Everything else keeps the built site as it is.

## Cause

The code drifted from `jsx.md`, `style.md` and `css.md`: texts and ids typed in JSX, data read by path, magic indexes and
strings, sibling blocks with no blank line, the same `fluid()` value written in five or six blocks. Separately, `Tabs`
focuses a tab without `preventScroll`, so the tab that is `:target` scrolls the page by its `scroll-margin`.

## Changes, one commit per item

1. **Texts and ids to `data/`.**
   - `data/navigation.js`: `mainId` (the skip link and the layout's `<main>`), and a `header` object with `menuId`,
     `skipLabel`, `openLabel`, `closeLabel`, `navLabel`; `Header` and the layout read them.
   - `data/footer.js`: `navLabel`; `Footer` reads it.
   - `data/ui-labels.js`: `counterLabels` (`likes`, `comments`, `shares`, `views`), read by `NewsCard`, `PostRow`,
     `ArticleSidebar`, `FeaturedNews`; `/ui` data keeps its own demo strings.
2. **Data by path to destructuring.** `PostFeed` (`postFeed.tabListLabel`, `postFeed.emptyText`) and the same reads in
   `utils/` (`site.*`, `postFeed.status`, `labels.*`, `author.name`, `category.name`) and the article route.
3. **Magic indexes and strings.**
   - `Hero`: `data/stats.js` exports `heroStats`, the first three stats named by destructuring.
   - `ContactInfo`: `data/contacts.js` exports `contactGroups` (`{ id, items }`), two columns each; the component maps them.
   - `Faq`: the first item of `faq` carries `isOpen: true`. `ResourceLibrary`: `resourceLibrary.selectedId` is the first
     tab's id, read from the data.
   - `CounterPill`: the filled heart is `ICONS.heartFilled` in `src/constants`.
   - `VideoCard`: the separator is `uiLabels.separator`.
   - `FormField.js`: `INPUT_TYPES.checkbox` in `src/constants/form.js`.
4. **Blank lines between sibling JSX blocks**, `src/` wide: a sibling pair gets a blank line when either is more than
   one line (a script on the `espree` AST, then Prettier). Single-line neighbours stay together.
5. **Tokens.** `fluid(8, 8, 10)`, `fluid(16, 16, 20)`, `fluid(20, 24, 30)`, `fluid(20, 40, 50)`, `fluid(30, 40, 50)` become
   `--space-xs`, `--space-s`, `--space-m`, `--space-l`, `--space-xl` in `variables.css`, replacing every use as a gap or a
   padding. A use as a font size, a radius or an icon size keeps its literal: a spacing token must not size a glyph.
   `39px 40px` is not touched (`borders-inside`).
6. **5a. `Tabs.focus`.** A key selection focuses with `preventScroll: true`; then the selected tab is brought into view
   on the list's own horizontal axis only (`scrollLeft`), so the page never moves vertically and a narrow, horizontally
   scrolling list still shows the focused tab.
7. **Footer socials (author's decision).** The footer keeps the credits (name, year, GitHub icon to the repo) and loses
   the `SocialLinks` block: `Footer` stops rendering it, `footer__socials` and the bar's middle column go, and
   `SocialLinks` loses its now unused `plain` variant and `className` (the contact page's boxed row stays).
8. **Docs.** `css.md` (the scale names), `design-system.md` (the footer row, the spacing tokens), `map.md`, `README.md`.

## Verification

- Build `dist/` on `main` before the first change and after every item; compare `dist/**/*.html` with hashes
  normalised, and the computed style of every element and of `::before` / `::after` (custom properties left out: their
  text changes with the tokens, their effect is in the longhands) plus the box of every element, on the 8 pages at 1920,
  1440, 1024, 768 and 390. Every difference is explained.
- Item 5a in headless Chrome against `minista preview --port 5181`: `/news#news-hub-feed-tab-health`, ArrowRight and
  ArrowLeft, `scrollY` unchanged; footer links to tabs leave the section heading visible; at 390 the focused tab is
  inside its list.
- The six checks of `AGENTS.md`, `definition-of-done.md`, the `review` skill.
