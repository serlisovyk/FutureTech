# Plan: script helpers and reveal.css (MY-304)

Branch `my-304-script-helpers`. No spec: observable behavior does not change. Records cited: `oop-javascript` (refined by a
new record, see below), `styles-next-to-components`, `path-aliases`.

## Causes found

- `LikeButton` owns `localStorage` access in two private methods.
- `CountUp` and `Reveal` repeat the same scheme: the reduced-motion check, the `IntersectionObserver` support check, the
  observer, and the unobserve after the first appearance.
- The `reveal` keyframes and the `scripting: enabled` block sit in `base.css`, though they are one separate topic.

## Changes

- `scripts/utils/` (new folder, plain function modules in kebab-case behind a barrel `index.js`, no state, no DOM of their own; imported through
  `@scripts/utils`):
  - `storage.js`: `readStorage(key, fallback)`, `writeStorage(key, value)`, `removeStorage(key)`; `try` / `catch` inside,
    the fallback (or `false`) is returned when the browser refuses.
  - `observe-visible.js`: `observeVisible(elements, onVisible, options)` creates the observer, calls `onVisible` with the
    elements of one callback batch that intersect, unobserves them (once), and returns a function that disconnects.
    Without `IntersectionObserver` it observes nothing and returns a no-op disconnect.
  - `can-observe-visible.js` and `is-reduced-motion.js`: the two checks the callers ask before changing the DOM.
- `LikeButton` reads and writes through `storage.js`; `#readStorage` / `#writeStorage` go.
- `CountUp` and `Reveal` observe through `observeVisible`; their own observers, the `unobserve` and `disconnect` calls and
  the inline `matchMedia` / `'IntersectionObserver' in window` checks go. `Reveal` still drops the hook from first-screen
  items itself and observes the rest.
- `styles/reveal.css`: the keyframes and the rules moved as they are; `global.css` imports it after `base.css`, where the
  block was, so the built CSS is the same.
- No new constants: `MEDIA.reducedMotion`, `REVEAL`, `COUNT_UP` and `STORAGE` already carry everything.

## Docs

- A new record: scripts may hold pure helper modules in `scripts/utils/` next to the classes; `oop-javascript` is marked
  superseded by it, because it said "never a loose function".
- `ai/rules/oop.md`: the folder, the file naming, what a helper may and may not be, the `LikeButton` line.
  `ai/rules/css.md`: the reveal look lives in `reveal.css`.
- `ai/map.md`: `utils/` of scripts, `reveal.css`; the limit of 12 KB is kept by trimming wording elsewhere.

## Verification

The checks under "Verification" in `AGENTS.md`; the built CSS compared with the one before the change; in `npm run dev`:
the like persists over a reload, `CountUp` on Home and Resources, reveal on scroll with the first screen never hidden,
reduced motion emulated, scripting off.
