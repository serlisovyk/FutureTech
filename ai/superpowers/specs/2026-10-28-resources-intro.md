# Spec: the Resources intro and the counters (MY-273)

Branch `my-273-resources-intro`. What a visitor sees and does; the build is in
`ai/superpowers/plans/2026-10-28-resources-intro.md`.

## Layout

- The page opens with its title "Unlock a World of Knowledge" over two lines at 1920 and 1440 (one block at 390) and the
  paragraph beside the second line (below the title at 390), as on News and Podcasts.
- Under it, a strip of four counters: 300+ Resources available, 12k+ Total Downloads, 10k+ Active Users, 100+ Countries
  Accessing Our Content. The number is large; the "+" is yellow. A line above and below the strip, a vertical line between
  the counters.
- Below 768 px the counters are two by two, a vertical line between the pair and a horizontal line between the rows.

## Count-up

- When a number enters the viewport (half of it visible) it counts from 0 to its value in about a second and a half,
  slowing towards the end. The "k" and the "+" stay where they are; only the digits change. Each number starts on its
  own, once: scrolling away and back does not repeat it.
- The same happens to the three numbers of the Home hero.
- Before the count starts, a number that has not entered the viewport shows 0.

## Reduced motion and no JavaScript

- With `prefers-reduced-motion: reduce` the final numbers are there from the start: nothing counts and 0 never shows.
- Without JavaScript the page is complete: the HTML holds the final numbers.

## Screen readers

- A counter is read as its final value and its label ("12k+", "Total Downloads"), once. The animated digits are hidden from
  assistive technology; the final value is read from visually hidden text, so the steps are never announced.
