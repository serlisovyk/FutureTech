# The CSS limit goes from 2.5 kB to 3 kB for the header

Date: 2026-10-28 · Status: accepted

## Context

The header is on every page, so its stylesheet (the strip, the navbar, the plate, the drawer and its
transitions) joins the one bundle every page loads. The bundle measured 2.13 kB gzipped when the limit was
last set (decision `ui-page-and-size-limits`) and 2.90 kB with the header.

## Decision

- The CSS limit in `.size-limit.json` is 3 kB: the measured size rounded up to the next 0.5 kB step.
- The JavaScript limit stays 1.5 kB (1.22 kB measured: `Toggle` grew and `HeaderController` joined);
  fonts and images do not change.

## Consequences

- Later blocks raise the limit by what they measure, as before; it is not raised to make a run green.
- Rejected: a larger step (a regression would stay under the limit).
