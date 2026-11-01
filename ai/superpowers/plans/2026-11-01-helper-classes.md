# Plan: script helpers as classes (MY-309)

Branch `my-309-helper-classes`. No spec: observable behavior does not change. Records cited: `script-helpers` (superseded
by a new record, see below), `oop-javascript`, `constants-folder-data-barrel`, `path-aliases`.

## Why

`script-helpers` allowed loose functions in `scripts/utils/` because a helper has no state. The author's decision
(2026-11-01): the observer has state (the `IntersectionObserver`, its disconnect) and storage has a key, so all client
JavaScript is classes again, `main.js` aside.

## Decisions taken in this plan

- **Folder: `scripts/services/`**, renamed from `utils/`. The classes are wrappers over a browser API; "utils" says
  "loose functions", which no longer holds, and `src/utils/` (build-time helpers) is a different thing with that name.
  The barrel `index.js` stays; the alias `@scripts` already covers it (`@scripts/services`), so the Vite config and
  `jsconfig.json` do not change.
- **The reduced-motion check is `VisibilityObserver.isReducedMotion()`**, a public static next to `isSupported()`. Its
  only two callers, `CountUp` and `Reveal`, are the two widgets that animate when an element appears, both ask
  `isSupported()` and the preference together, and both already hold a `VisibilityObserver`. No other class asks it.
  Rejected: a class `Motion` or `MediaQuery` for one static (no state); a static on `Reveal` or `CountUp` (the other
  would import a sibling widget); wrapping `HeaderController`'s `matchMedia` too (a different query, outside the issue).
- **No new constants**: `MEDIA.reducedMotion`, `COUNT_UP`, `REVEAL` and `STORAGE` carry everything. The support check is
  `window.IntersectionObserver !== undefined`, so no string literal is needed.

## Changes

- `scripts/services/StorageItem.js` (was `utils/storage.js`): `constructor(key)`, `read(fallback = null)`, `write(value)`,
  `remove()`; the one `try` / `catch` is a private `#access(action, fallback)` that `read`, `write` and `remove` go through, it
  returns the fallback when the browser refuses; nothing read the old boolean results of `write` and `remove`, so they return nothing.
- `scripts/services/VisibilityObserver.js` (was `utils/observe-visible.js`): `constructor(elements, onVisible, options = {})`,
  `start()` (creates the observer and observes; does nothing without `IntersectionObserver`), `stop()` (disconnects),
  `static isSupported()`, `static isReducedMotion()`. The callback gets the intersecting elements of one batch, each is
  unobserved on its first appearance. The observer is a `#private` field.
- `utils/can-observe-visible.js` and `utils/is-reduced-motion.js` are deleted; `utils/index.js` becomes `services/index.js`.
- `LikeButton` holds `#storage = new StorageItem(key)` instead of `#storageKey`; `CountUp` and `Reveal` hold a
  `#observer = new VisibilityObserver(...)` and call `start()` on it. `CountUp` builds it in the constructor (its element
  is known), `Reveal` in `start()` (the elements below the first screen are known only then).
- Moves are `git mv` so the history follows.

## Docs

- A new record `script-helper-classes`; `script-helpers` gets `superseded by …`, the index line moves to Superseded.
- `ai/rules/oop.md`: the only non-class module is `main.js`; `services/` in the folders list and the services' constructor
  shapes; the `LikeButton` line. `ai/map.md`: `scripts/services/` instead of `utils/` (kept under 12288 bytes).

## Verification

The checks under "Verification" in `AGENTS.md`; JS size against `.size-limit.json` (3.74 / 4 kB; over it, stop and report).
Headless Chrome on `npm run dev`: the like persists over a reload and survives blocked `localStorage`, `CountUp` on Home
and Resources, reveal on scroll with the first screen never hidden, reduced motion emulated, scripting off.
