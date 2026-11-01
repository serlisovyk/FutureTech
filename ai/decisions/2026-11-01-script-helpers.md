# Browser scripts are classes, with pure helper functions in `scripts/utils/`

Date: 2026-11-01 · Status: accepted

## Context

`oop-javascript` made every browser script a class and said new code is never a loose function. Then the `localStorage`
access with its `try`, the `IntersectionObserver` scheme (support check, observer, unobserve after the first
appearance) and the reduced-motion check were written by hand in several classes. A class per helper would be a class
with no state.

## Decision

- What stays from `oop-javascript`, which this record refines: the behavior of a widget or a section is an ES class with
  `#private` state, one per file, `constructor(root, options)` and `start()`, in `components/` or `controllers/`,
  created by `main.js`; composition over inheritance; no factories or DI containers.
- `scripts/utils/` holds plain function modules in camelCase, named exports, one thing per file (`storage.js`,
  `observeVisible.js`): a wrapper over a browser API or a check two or more classes share. A helper keeps no state,
  touches no section's markup, and handles a refusing browser (`try` / `catch` with a returned fallback) itself.
- The details are `ai/rules/oop.md`.

## Consequences

- A class asks a helper (`readStorage`, `observeVisible`) and never calls `localStorage` or `new IntersectionObserver`.
- A helper is not a place for widget logic: a function that knows a widget's markup or state is a method.
- Rejected: a `Storage` and an `Observer` class (no state to encapsulate); leaving the code in each class (the
  duplicate and the browser calls spread across components).
