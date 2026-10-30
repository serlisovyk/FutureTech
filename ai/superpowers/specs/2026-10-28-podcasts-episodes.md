# Spec: Podcasts latest episodes (MY-272)

Branch `my-272-podcasts-episodes`. What a visitor sees and does; the build is in
`ai/superpowers/plans/2026-10-28-podcasts-episodes.md`.

## Layout

- A heading band (the tag "Stay Informed with Fresh Content", the title "Latest Podcast Episodes", the button "View All
  Episodes") over a grid of six episodes. The section is the target of `/podcasts#latest-podcasts`.
- An episode is its preview with the play button and the duration, the title, the description and the outline button
  "Listen Podcast". The episodes are split by lines: a vertical one between columns, a horizontal one under every row.
- Columns: three from 1024 px, two from 768 px, one below 768 px.

## Playing

- The play button and "Listen Podcast" open the video modal with that episode's video, as on the top shows. Without
  JavaScript "Listen Podcast" is not shown.

## "View All Episodes"

- From 768 px all six episodes show and the button is not shown.
- Below 768 px three episodes show and the button reveals the other three in place. It is a button that controls that
  group and says whether it is expanded; pressing it again hides the group. Its label does not change.
- Without JavaScript all six show at every width and the button is not shown.

## Screen readers

- The section is named by its title. Each episode is an article named by its title (a level 3 heading under the level 2
  one); the preview image is decoration. The play button and "Listen Podcast" say which episode they open.
