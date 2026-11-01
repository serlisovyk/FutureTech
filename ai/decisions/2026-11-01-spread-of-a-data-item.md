# A data item made for a component's props is spread; the rest `...props` stays forbidden

Date: 2026-11-01 · Status: accepted

## Context

`jsx.md` forbade `{...item}` and `...props` alike, so a section named every prop one by one:
`id={email.id} errorId={email.errorId} …` for an object in `data/` that repeats the component's props exactly. The list
carried no information, and a new field of the item had to be added in three places (data, section, component).

## Decision

- A data item made exactly for a component's props is spread: `<TextField {...email} />`,
  `<FeatureGroup key={id} {...group} />`. The component still names every prop in its signature.
- `key` is always written beside the spread, never inside it (React 19 warns on a `key` in a spread). An `id` the
  component does not take is split off in the map callback (`({ id, ...group }) =>`), so the component gets no field it
  does not know; when the `id` is also a prop, the callback takes the item and destructures the key in a block body.
- An item that is not the props is passed by name: it nests the values the component needs (`counters.likes` for
  `NewsCard`, `author` for `PostRow`) or holds fields of the section itself (`SectionHeading` beside `placement`,
  `feedId`).
- The rest `...props` in a component, forwarded into the DOM, stays forbidden: a component's signature is the list of
  what it accepts.

## Consequences

- A prop added to a data item and to the component needs no change in the section.
- The spread passes the whole item, so a component must read its props by name and forward nothing; the review checks
  it for each new spread.
- Rejected: spread everywhere (it hides what a component accepts); `...props` forwarding (an unknown attribute reaches
  the markup); renaming data fields to fit every component (done once, `poster` to `image`, where it removed a mapping).
