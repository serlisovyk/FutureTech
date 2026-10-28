# Linear task template (FutureTech)

Every Linear issue for this repo follows the structure below. **The issue itself is written in
Russian**: the title, the section headings exactly as shown, the body, and the checklist lines.
This file explains each section in English. The `linear-tasks` skill uses it as the source of
structure when creating issues.

Drop empty or irrelevant sections — no placeholders. Sections marked _(optional)_ are added only
when there is something to say.

Issue metadata: project **FutureTech**, the milestone matching the area of work, state `Todo`,
type labels (`Feature` / `Improvement` / `Bug` / `UI` / `Infra` / `AI`). Use a "blocked by"
relation only for a real technical dependency; otherwise "related".

The title stays short; specifics go into the body.

---

## Порядок

Which issues (`MY-<n>`) this one comes after and why, and which issues build on it. A separate
line, `Параллельно с…`, names the issues that can run at the same time because they touch other
files; the orchestrator builds a batch from it (`ai/prompts/orchestrator.md`).

## Зачем

The problem or gap today and what should change. One or two paragraphs, grounded in the code
(component, section, stylesheet, current behavior) and in the design, focused on the result a
user sees.

## Что сделать

A numbered list of concrete steps:

- which pages, sections, components, styles, scripts and data are touched;
- states and edge cases: keyboard, the three design widths (Desktop / Laptop / Mobile), an open
  menu, tab or modal, a page without the section, no JavaScript, `prefers-reduced-motion`;
- anything to be decided in the plan — phrase it as «решить в плане»; the assignee then stops
  after the plan commit and waits for the author's approval.

## Решить в плане _(optional)_

The open questions the plan must answer before any code.

## Решения автора (<date>) _(optional)_

The author's answers given before the work starts — final for the assignee.

## Готово когда

Observable criteria that can be checked by hand — not "done", but "when X, the site does Y".

## Риски и крайние случаи _(optional)_

What can break and which other issues it affects.

## Вне скоупа _(optional)_

What is deliberately excluded — adjacent work goes into separate issues, linked.

## Обязательно проверить и обновить

Keep the relevant lines, delete the rest. Copy them into the issue as-is:

- [ ] `ai/superpowers/` — план (+ спека, если меняется поведение) одним коммитом до кода
- [ ] `README.md` — фичи, скрипты, структура (если README есть)
- [ ] `ai/map.md` — если добавлена, переименована или удалена страница, секция, компонент, стили,
      скрипт или data-файл
- [ ] `ai/rules/*`, `ai/skills/*` — если изменился паттерн
- [ ] `ai/decisions/` — датированная запись, если зафиксировано долгоживущее решение
- [ ] Доки в пределах лимитов `ai/rules/docs.md`; если лимит превышен — сократить

## Проверка

Copy into the issue, one line per check under "Verification" in `AGENTS.md` that the repo has,
plus the manual lines:

- [ ] `npm run lint` + `npm run lint:css`
- [ ] `npm run format:check`
- [ ] `npm run build` + `npm run check`
- [ ] `npm run size`
- [ ] Прогнано руками в `npm run dev`: Desktop / Laptop / Mobile против дизайна
- [ ] Клавиатура: Tab, фокус, стрелки, `Escape` по паттерну

The project has no automated tests — verification is the checks and using the site in the browser.
