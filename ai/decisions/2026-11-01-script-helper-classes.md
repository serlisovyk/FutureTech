# Browser scripts are all classes; browser-API wrappers are classes in `scripts/services/`

Date: 2026-11-01 · Status: accepted

## Context

`script-helpers` kept the `localStorage` and `IntersectionObserver` wrappers as plain functions in `scripts/utils/`,
because a helper "has no state". It does: storage works on one key, and the observer holds the `IntersectionObserver`
and its disconnect. The author wants every browser script to be a class again, as `oop-javascript` set out.

## Decision

- What stays from `script-helpers` and `oop-javascript`: a widget or a section is an ES class with `#private` state, one
  per file, `constructor(root, options)` and `start()`, in `components/` or `controllers/`, created by `main.js`;
  composition over inheritance; no factories or DI containers; a class never calls `localStorage` or
  `new IntersectionObserver` itself.
- What changes: `scripts/services/` (was `utils/`) holds classes behind a barrel (`index.js`), one per file, PascalCase:
  `StorageItem` (one key: `read`, `write`, `remove`, a refusing browser gives the fallback) and `VisibilityObserver`
  (`start`, `stop`, `static isSupported()`, and the static `isReducedMotion()`, which its two callers ask with it).
  A service takes what it wraps in its constructor instead of `root` and `options`.
- `scripts/` exports no function: `main.js` is the one module that is not a class, and it exports nothing.

## Consequences

- A new wrapper over a browser API is a class in `services/`; a check that one class alone needs is a static method of
  that class.
- Rejected: functions in `utils/` (the state of the observer and the key of storage belong to an object); a `Motion` or
  `MediaQuery` class for the one reduced-motion check (no state, no second user).
