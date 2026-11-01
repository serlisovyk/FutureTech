# Plan: clean up `ai/`

Branch `my-307-ai-cleanup`, docs only: `ai/`, `AGENTS.md`, `CLAUDE.md`. No code, no spec (no
observable behavior changes).

## Goal

`ai/decisions/` has eleven records that each raise the size-limit budget by a few hundred
bytes, so an agent reads a chain to learn one number; some facts are stated in two docs; and
`ai/map.md` is at 12270 of its 12288 bytes. Make the docs read in one pass again, without
compressing them into a telegraphic style (the author's decision of 2026-11-01).

## Out of scope: the plans and specs archive

The issue asked to remove the plans and specs of finished tasks from `ai/superpowers/`. The
author decided, after the issue, to keep the archive as it is: nothing in `ai/superpowers/` is
removed, the docs that describe it stay unchanged, and no decision record is written about it.

## Steps

1. **Size limits.** One new record, `2026-11-01-size-limits.md`: the current limits (from
   `.size-limit.json`), the rule (limit by fact, about 3% headroom, raised in the change that
   needs it) and where the budget is measured (`npm run size`, the CI job). Per
   `ai/decisions/README.md` a record is never deleted or rewritten and a change restates what
   stays in force, so the eleven records that only move limits get
   `Status: superseded by 2026-11-01-size-limits.md` and their index lines move to the
   Superseded group. Two records mix limits with a decision that stays in force: `ci-size-limit`
   (the CI job itself) and `ui-page-and-size-limits` (`/ui` ships, noindex and unlinked).
   Superseding them would drop that decision, so they stay `accepted` and the new record says
   their limit numbers are replaced. The issue says "delete the old ones"; the records' own rule
   says supersede, so the mechanism of the rule is followed and the files stay.
2. **Duplicates and limits.** Walk `ai/` against `ai/rules/docs.md` for a fact stated in two
   places and a doc over its limit; fix only clear duplicates, and leave the checklists
   (`definition-of-done`, the `review` skill), which restate rules by design. `ai/map.md`: move
   code retelling (props, behavior of a component) and what the decisions already say out of
   it, to get at least 500 bytes of room, losing no navigation fact.
3. **Links.** Grep every `ai/…` and `src/…` path mentioned in `ai/`, `AGENTS.md` and `CLAUDE.md`
   and check that it exists; fix references to anything that moved or was renamed.

## Verification

`npm run format:check`, `npm run lint`, `npm run lint:css`, `npm run build`, `npm run check`,
`npm run size` (nothing outside docs changes, so the numbers equal `main`'s); the link grep of
step 3; `git show :ai/map.md | wc -c` after staging; the docs part of
`ai/rules/definition-of-done.md`; the self-review of `ai/workflow.md` step 10.
