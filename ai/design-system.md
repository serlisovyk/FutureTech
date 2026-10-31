# Design System

The design in words and numbers, read once so CSS and sections are written without opening it. It is a
third-party template (decision `design-is-a-reference`): only this description is in the repo.

- Every size is px, in the order **1920 / 1440 / 390** (Desktop, Laptop, Mobile); a fluid value is written from
  these three numbers (decision `fluid-ramps`). "-" means not drawn at that width.
- Line heights are unitless; letter spacing is -3% unless a row says `ls 0`. Colours are the design's colour
  styles (`Dark/10` = `#1A1A1A`); token names: `ai/rules/css.md`.
- Drawn states: nav item active / inactive, filter tab default / active, counter pill normal / liked, FAQ item
  closed / open. Hover, focus, pressed, error and the opened mobile menu are **not drawn**.
- **Flag** marks a contradiction or a gap for the CSS task or the author; nothing was invented.

## 1. Widths, container, sections

|                             | 1920           | 1440          | 390           |
| --------------------------- | -------------- | ------------- | ------------- |
| Content side padding        | 162            | 80            | 16            |
| Content width               | 1596           | 1280          | 358           |
| Header: top banner + navbar | 67 + 103 = 170 | 45 + 81 = 126 | 74 + 75 = 149 |

- Every section is full width with its content inset by the side padding. The container has no drawn maximum
  width: 1920 is the widest layout. **Flag:** nothing is drawn above 1920 or between the three widths.
- **Dividers:** sections are separated by 1px `Dark/15` lines across the full width, ignoring the inset: under
  the header, top and bottom of each heading band, under the filter tabs, between list rows, on top of each split
  row. Columns are separated by 1px vertical lines of the same colour: the left edge of the right column in split
  rows, between grid cells, between strip and counter items.
- **Heading band:** fill `Dark/10`, 1px `Dark/15` top and bottom, block padding 120 / 80 / 40. Tag, then title;
  the "View All" outline button sits right, centred on the title block (gap 250 / 200 / -). At 390 it stacks:
  gap 30, the button full width (358).
- **Split row** (text left, panel right): columns 519 + 997 (gap 80) / 413 + 807 (gap 60) / stacked. The right
  column has padding 80 / 60 / 40 and a 1px left line; the left column is vertically centred. Content sets the
  height (570 to 910 / 448 to 768).
- **List row** (author, text, button): padding 80 / 60 / 40 block, 162 / 80 / 16 inline, gap 50 / 40 / 30, 1px
  bottom line. Columns: author 384 / 305 (fixed), then text and button in a block 1162 / 935 wide. At 390 the author
  and the button share the first line, the text blocks follow stacked.
- **Grids:** feature cards 2 x 2 (gap 30 / 20 / 10); CTA cards, episode cards and resource cards 3 across (gap
  20 / 10 / 10 in the CTA tray, 46 / 30 in the card rows); video cards 2 across; testimonials 3 x 2; all one
  column at 390 (card rows with horizontal lines between).
- **Flag:** the Mobile frames show 3 testimonials and 3 latest episodes where the wider frames show 6; the other
  lists match in count. The site renders its full data; a cap at 390 is the author's call.

## 2. Colours

Page background `Dark/08`. The guide defines 26 styles; the pages use 11. Unused by any page: `Yellow/60..99`,
`Dark/30`, `Dark/35`, `Grey/70`, `Grey/90..99`, `Absolute/Black` (only inside the play glyph's construction).

| Style          | Hex       | Role                                                                                                                                             |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Absolute/White | `#FFFFFF` | Headings, primary text, active labels, icons on dark (menu, social)                                                                              |
| Dark/08        | `#141414` | Page background; top banner; outline-button, tab-bar, CTA-tray and pill fill; text on yellow                                                     |
| Dark/10        | `#1A1A1A` | Navbar, heading bands, card / panel / field / FAQ surface, active filter tab, footer band                                                        |
| Dark/15        | `#262626` | 1px borders and dividers, avatar placeholder, active segmented tab                                                                               |
| Dark/20        | `#333333` | Tag pill fill; border of the active nav pill                                                                                                     |
| Dark/25        | `#404040` | Second tone of the two-tone feature icons                                                                                                        |
| Dark/40        | `#666666` | Muted text (eyebrow, footer links, places, placeholders), counter icons, avatar ring                                                             |
| Grey/50        | `#7E7E81` | Muted body (nav links, "Stay Current", CTA text, FAQ answer); built as `#828285`                                                                 |
| Grey/60        | `#98989A` | Secondary text (paragraphs, labels, button labels, counter numbers, dates)                                                                       |
| Grey/80        | `#CCCCCC` | One heading ("Similar News")                                                                                                                     |
| Yellow/55      | `#FFD11A` | The accent: Contact Us and Send buttons, arrow glyphs, round buttons, feature icons, logo mark, FAQ plus, contact icons, end of the "New" border |

- **Off-palette, as drawn:** star yellow `#FFCE22` (30 stars; the CSS uses `Yellow/55`, the author's call);
  liked-heart orange `#FF5500` (token `--color-like`; the counter pill of a liked post has no fill or border, the heart
  is filled); `#D9D9D9` behind the country flag.
- **Flag:** the separators of the first testimonial row at 1920 are `#E5EFFF`; every other separator is
  `Dark/15`. Use `Dark/15`. Stale colours under a layer's style (`#05051A`, `#050523`, `#FFAA00`) are ignored.
- **Gradients:** (1) the "New" badge border, 1px from `Dark/15` (36%) to `#FFD119`; (2) video, podcast and
  article-hero images carry an overlay from transparent to `Dark/08`: video and podcast thumbnails from 44% of
  the height to opaque at the bottom, the article hero transparent at the top, 88% opaque at 76%, opaque at the
  bottom; (3) the "Read Full Blog" container fades the text into `Dark/08` (transparent at the top, opaque at
  77%); (4) the hero decor is a black to `#9C9C9C` ray gradient (see Assets).
- **No shadows.** The first form field carries a `#191919` drop shadow that is invisible on `Dark/10`: noise.

### Contrast (computed, WCAG 2.x)

| Pair                                                        | Ratio                 | Where                                                                 |
| ----------------------------------------------------------- | --------------------- | --------------------------------------------------------------------- |
| White on `Dark/08` / `Dark/10` / `Dark/20`                  | 18.4 / 17.4 / 12.6    | Headings, tag, active tab                                             |
| Grey/60 on `Dark/08` / `Dark/10` / `Dark/15`                | 6.4 / 6.0 / 5.3       | Body, labels, buttons                                                 |
| Dark/08 on Yellow/55; Yellow/55 on Dark/08                  | 12.6                  | Primary buttons; arrows, icons                                        |
| Orange `#FF5500` on `Dark/08`                               | 5.8                   | Liked heart (needs 3)                                                 |
| Dark/40 icon on `Dark/08` / `Dark/10`                       | 3.21 / 3.03           | Counter icons (pass 3)                                                |
| **Drawn, failing:** Grey/50 on `Dark/10`                    | 4.30                  | Nav links, CTA paragraph on the band, FAQ answer                      |
| **Drawn, failing:** Dark/40 text on `Dark/08` / `Dark/10`   | 3.21 / 3.03           | Footer, eyebrow, places, placeholders                                 |
| **Drawn, failing:** Dark/15 border on `Dark/08` / `Dark/10` | 1.22 / 1.15           | Every border                                                          |
| **Drawn, failing:** duration over a photo                   | 1.1 to 4.4 (measured) | Video and episode cards                                               |
| Built: Grey/50 `#828285` on `Dark/08` / `Dark/10`           | 4.81 / 4.54           | All of the above grey text, Dark/40 text included                     |
| Built: control border `Dark/40` on `Dark/08` / `Dark/10`    | 3.21 / 3.03           | Text fields, phone country box, checkbox; other borders stay as drawn |
| Built: duration in white over a photo                       | 4.57 at worst         | Video and episode cards                                               |

The built values and why they differ from the drawn ones: `ai/decisions/2026-10-31-grey-text-and-control-borders.md`.

## 3. Typography

Kumbh Sans (headings, numbers) and Inter (text, interface), both self-hosted. Weights the pages use: Kumbh 400,
500, 600; Inter 400, 500, 600. **Flag:** the guide lists Kumbh Regular and Medium and Inter up to Bold; no page
uses Inter Bold, and Kumbh SemiBold is used for the h3. Adding a face is the author's decision
(`ai/rules/assets-performance.md`). Line height 1.5 unless the column says otherwise; "ls 0" rows have no letter
spacing; K = Kumbh Sans, I = Inter.

| Role             | Font | 1920 | 1440 | 390 | LH   | Colour and use                                                                  |
| ---------------- | ---- | ---- | ---- | --- | ---- | ------------------------------------------------------------------------------- |
| display          | K500 | 80   | 55   | 28  | 1.3  | White; page title on News, Podcasts, Resources (two lines at 1920 / 1440)       |
| hero title       | K500 | 70   | 55   | 30  | 1.2  | White; Home hero                                                                |
| h2               | K500 | 58   | 44   | 28  | 1.3  | White; section titles, Contact form title                                       |
| h2 minor         | K500 | 28   | 22   | 20  | 1.3  | Grey/80; "Similar News"                                                         |
| eyebrow          | K500 | 30   | 22   | 18  | 1.2  | Dark/40; line above the Home title                                              |
| h3 feature       | K600 | 40   | 30   | 24  | 1.5  | White; Home features, Ebooks, Whitepapers                                       |
| h3 show          | K600 | 40   | 24   | 20  | 1.5  | White; Podcasts show title                                                      |
| h3 resource      | K600 | 40   | 30   | 21  | 1.5  | White; Resources item title                                                     |
| h3 FAQ           | K600 | 40   | 28   | 20  | 1.5  | White; Contact "Asked question"                                                 |
| counter          | K400 | 18   | 14   | 14  | 1.5  | Grey/60; pill numbers                                                           |
| strip caption    | K400 | 20   | 16   | 16  | 1.5  | Grey/60; Home strip. **Flag:** 14 in the first card at 390, 16 in the other two |
| article title    | I600 | 64   | 44   | 28  | 1.5  | White; Blog                                                                     |
| lead title       | I600 | 32   | 24   | 20  | 1.5  | White; News featured story                                                      |
| row title        | I600 | 26   | 22   | 18  | 1.5  | White; list rows, podcast lead                                                  |
| panel title      | I600 | 24   | 20   | 18  | 1.5  | White; video titles, "Variety of Topics", "10k + Users"                         |
| card title       | I600 | 22   | 18   | 16  | 1.5  | White; CTA cards, episode and resource cards                                    |
| small card title | I600 | 20   | 16   | 16  | 1.5  | White; News story cards                                                         |
| stat XL          | I600 | 60   | 40   | 24  | 1.5  | White; Resources counters                                                       |
| stat             | I600 | 40   | 30   | 24  | 1.5  | White; Home hero counters                                                       |
| strong value     | I600 | 20   | 18   | 16  | 1.5  | White values ("Over 100 ebooks"); Grey/60 dates                                 |
| author name      | I600 | 20   | 18   | 18  | 1.5  | White                                                                           |
| article h2       | I500 | 28   | 22   | 18  | 1.5  | White; Blog sections                                                            |
| article h3       | I500 | 20   | 20   | 18  | 1.5  | White; Blog "Introduction"                                                      |
| card heading     | I500 | 24   | 20   | 18  | 1.5  | White; feature cards, "Explore 1000+ resources"                                 |
| card subheading  | I500 | 20   | 18   | 16  | 1.5  | White; strip titles, podcast stat values, the expertise remark                  |
| value            | I500 | 18   | 16   | 14  | 1.5  | White; Blog and podcast meta values                                             |
| value L          | I500 | 20   | 16   | 14  | 1.5  | White; Resources meta values                                                    |
| tag              | I500 | 20   | 16   | 14  | 1.5  | White on Dark/20. **Flag:** Podcasts "Stay Informed" tag is 12 at 390           |
| lead news        | I400 | 20   | 18   | 16  | 1.5  | Grey/60; News featured paragraph                                                |
| lead             | I400 | 20   | 16   | 14  | 1.5  | Grey/60; Ebooks, Whitepapers intro                                              |
| body             | I400 | 18   | 16   | 14  | 1.5  | Grey/60 (Grey/50 on Home hero and CTA); paragraphs, meta labels                 |
| button label     | I400 | 18   | 14   | 14  | 1.5  | Grey/60; outline buttons, tabs (active I500 White)                              |
| banner           | I400 | 18   | 14   | 12  | 1.5  | Grey/60; top banner                                                             |
| nav              | I400 | 18   | 14   | -   | 1.5  | ls 0; Grey/50 inactive; active and Contact Us I500 (Contact Us Dark/08)         |
| footer heading   | I500 | 20   | 18   | 16  | 1.3  | White                                                                           |
| footer link      | I400 | 18   | 14   | 14  | 1.3  | Dark/40; also Terms, copyright                                                  |
| badge            | I400 | 16   | 12   | 12  | 1.5  | White; "New"                                                                    |
| person name      | I500 | 20   | 18   | 18  | 1.5  | ls 0; testimonials                                                              |
| person place     | I400 | 18   | 16   | 16  | 1.5  | ls 0; Dark/40                                                                   |
| quote            | I400 | 18   | 16   | 14  | 1.5  | ls 0; White                                                                     |
| form label       | I500 | 18   | 16   | 16  | 1.5  | ls 0; White                                                                     |
| input text       | I400 | 18   | 14   | 14  | 1.5  | ls 0; Dark/40 placeholder                                                       |
| checkbox text    | I400 | 18   | 16   | 14  | 1.5  | ls 0; White                                                                     |
| Send             | I500 | 18   | 14   | 14  | 24px | ls 0; Dark/08                                                                   |
| FAQ question     | I500 | 20   | 18   | 16  | auto | ls 0; White                                                                     |
| FAQ answer       | I400 | 18   | 16   | 14  | 1.5  | ls 0; Grey/50                                                                   |

## 4. Spacing, radii, borders

The values in use, as a scale: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 30, 36, 40, 50, 60, 80, 100, 120, 162. By role:

| Role                                               | 1920         | 1440        | 390             |
| -------------------------------------------------- | ------------ | ----------- | --------------- |
| Tag to title / title to text in a heading block    | 16           | 10          | 10              |
| Card padding (feature, CTA)                        | 40           | 30          | 24              |
| Card gap in a grid / title to text inside a card   | 30 / 20      | 20 / 16     | 10 / 4          |
| Panel padding (stat cell, meta cell, field group)  | 30           | 20 to 24    | 20              |
| CTA tray padding and card gap                      | 20           | 10          | 10              |
| List row inner gap (date, title, counters)         | 30           | 24          | 20              |
| Title to paragraph in a row                        | 10           | 6           | 4               |
| Outline button padding (block x inline)            | 18 x 24      | 14 x 20     | 14 x 20         |
| Button label to icon                               | 10           | 4           | 4               |
| Filter tab padding                                 | 30 x 24      | 24 x 20     | 18 x 16         |
| Tab bar padding (block / inline) and gap           | 50 / 162, 20 | 40 / 80, 14 | 20 / 16, 14     |
| Counter pill padding, icon to number               | 8 x 16, 4    | 6 x 12, 2   | 6 x 12, 2       |
| Footer: block padding, column gap, link gap        | 80, 80, 18   | 60, 50, 12  | 40, 20, 8       |
| Footer: heading to links; bottom bar block padding | 36; 40       | 28; 24      | 16; 24          |
| Form: padding, field gap, label to field           | 80, 50, 16   | 60, 30, 12  | 40 x 20, 20, 12 |

**Radii:** 100 (counter pills, stars pill, avatar capsule); avatars are circles (a 42 radius on 50 to 80 boxes).

| Element                                                | 1920        | 1440       | 390        |
| ------------------------------------------------------ | ----------- | ---------- | ---------- |
| Cards, trays, images, quote card                       | 12          | 10         | 10         |
| Podcast lead video                                     | 20          | 16         | 12         |
| Outline "View All" button / "Preview" button           | 12 / 10     | 8 / 8      | 8 / 8      |
| Ghost / download button, field, footer link button     | 8           | 6          | 6          |
| Contact Us, active nav pill                            | 10          | 6          | -          |
| Filter tab                                             | 8           | 7          | 7          |
| Segmented tabs container / active tab / inactive tab   | 10 / 10 / 8 | 10 / 8 / 8 | 10 / 8 / 8 |
| Stat and meta cells                                    | 13          | 8          | 8          |
| FAQ item open / closed                                 | 12 / 12     | 10 / 8     | 10 / 8     |
| Contact info buttons / social buttons / phone code box | 8 / 6 / 7   | 6 / 6 / 7  | 6 / 6 / 7  |
| Tag pill / "New" badge / checkbox                      | 4 / 6 / 4   | 4 / 4 / 4  | 4 / 4 / 4  |

- **Borders:** 1px `Dark/15` everywhere (cards, buttons, fields, pills, lines); the active nav pill `Dark/20`;
  avatar rings 2 / 1 / 1 `Dark/40` (white on the first Ebooks group); counter icons 1.5 `Dark/40`.
- **Flag:** stat cells are 13 at 1920, cards 12: kept apart as drawn. The top banner at 390 has 40 block-start
  and 14 block-end padding (the text sits low), like room for a status bar: kept as drawn, ask the author.

## 5. Components

- **Tag:** pill-box `Dark/20`, text `tag` role, padding 6 x 10 / 4 x 8 / 4 x 8, radius 4, hugs its text.
- **Outline button** ("View All", "Read More", "Preview", "Listen Podcast", "View Blog", "View Details"): fill
  `Dark/08`, border `Dark/15`, label `button label`, then the arrow glyph in `Yellow/55`; height 63 / 49 / 49,
  hugs its content. Full width (358) at 390 in heading bands.
- **Ghost button** ("Download Ebooks Now", "Download PDF Now", contact buttons, "Ask Qustion"): the same with fill
  `Dark/10`; the download button is full column width, height 63 / 57 / 57, label centred.
- **Primary button:** `Yellow/55` fill, text `Dark/08` I500. Contact Us: 137x55 / 103x41, padding 14 x 20 / 10 x
  14, radius 10 / 6, no border. Send: padding 18 x 46 / 14 x 34, radius 8, 137x60 / 103x52.
- **Round arrow button:** `Yellow/55` circle with a `Dark/08` arrow, 52 / 44 / 40, padding 14 / 12 / 10; sits
  right of a card title or a strip title.
- **Filter tabs:** a row of equal boxes 249x87 / 202x69 / 152x57, gap 20 / 14 / 14. Default: transparent, border
  `Dark/15`, label Grey/60 I400. Active: fill `Dark/10`, label White I500. Six tabs; at 390 the row is wider than
  the screen (1013) and scrolls sideways.
- **Segmented tabs** (Resources: Whitepapers, Ebooks, Reports): a tray `Dark/08` with border and padding 10,
  gap 10; active tab fill `Dark/15` with White label, inactive transparent with Grey/60. Tab padding 18 x 38 /
  14 x 24 / 14 x 24; tray 495x83 / 361x69, equal tabs 106x49 at 390.
- **Counter pills:** height 43 / 33 / 33, fill `Dark/10`, border `Dark/15`, an icon (heart, eye, send) then a
  `counter` number, group gap 10 / 8 / 8. Liked state (first pill of the first Home and News rows): no fill, no
  border, heart filled `#FF5500`. The article page uses larger pills (130x54, icon 34, fill `Dark/08`).
- **Meta cell** (label over value): label `body` Grey/60, value `value` White; fill `Dark/10`, border `Dark/15`,
  radius 13 / 8 / 8, padding 30 / 24 / 20, gap 4 / 2 / 2. Rows of 3 or 4, gap 20 / 16 / 16, stacked at 390.
- **News card:** image 512x222 / 407x185 / 358x185 (radius 12 / 10 / 10), then title, category (Grey/60 20 / 16 /
  14), then counters beside a "Read More" outline button; gap 20 / 16 / 16.
- **Video / episode card:** image with the bottom fade, a white play disc (70 / 50 / 50, a play triangle cut
  out of it) bottom left, the duration ("2.30 min", Grey/50 as drawn, white as built) right of it; below: title, text, and on episodes
  an outline button. Sizes 718x412 / 590x331 / 358x210 (video), 471x290 / 387x244 / 358x208 (episode). The
  podcast lead video is 917x412 with the play disc centred.
- **Resource card:** image 471x290 / 387x290 / 358x223, title (card title), text, two buttons ("View Details"
  outline, "Download PDF Now" ghost) 225 wide each at 1920, gap 20.
- **Feature card:** `Dark/10`, border, radius 12 / 10 / 10, padding 40 / 30 / 24, a card heading and a body line.
- **CTA card:** same surface inside a tray (`Dark/08`, border, radius 12 / 10 / 10, padding 20 / 10 / 10): title
  `card title` with a round arrow button on the right, body below. Three across, stacked at 390.
- **Testimonial:** avatar 60 / 50 / 50 with name and place, centred; a stars pill (5 stars `Yellow/55` 24 / 20 / 20,
  fill `Dark/08`, border, 180x44 / 140x36) overlaps the top of the quote card by 23 / 17 / 17; quote card
  `Dark/10`, border, radius 12 / 12 / 10, padding 50 30 30 30 / 40 24 24 24 / 30 20 20 20.
- **Avatar group:** 4 overlapping circles (overlap 9 to 14) with a 2 / 1 / 1px ring. Hero: in a capsule
  (`Dark/10`, border, radius 100, padding 10 / 8 / 8, avatars 60 / 50 / 40). "Downloaded By": in a rounded box
  (`Dark/08`, radius 12, avatars 50 / 40 / 40) inside a panel with the "10k + Users" text.
- **"New" badge:** badge role text on `Dark/10`, 1px gradient border, padding 4 x 12 / 2 x 10 / 2 x 10, radius
  6 / 4 / 4; after "Resources", "Biotechnology", "AI Revolution" in the footer.
- **Header:** top banner (fill `Dark/08`, 1px bottom line, `banner` text + yellow arrow, centred) over the
  navbar (`Dark/10`, padding 24 x 162 / 20 x 80 / 20 x 16). Left: logo. Centre: nav, gap 40 / 24: the active item is
  a box (`Dark/08`, 1px `Dark/20`, padding 14 x 24 / 10 x 18) with a White I500 label, the others bare Grey/60
  text. Right: Contact Us. At 390: logo left and a 34 menu glyph (White) right; nav and Contact Us are not
  shown. The opened menu is not drawn: it is a drawer on these surfaces (decision `mobile-menu-drawer`).
- **Footer:** inside the CTA band section: block padding 80 / 60 / 40; five columns 255 / 216 wide (Home, News,
  Blogs, Podcasts, Resources), each a footer heading over links; Resources lists 4 outline-style link buttons
  (fill `Dark/08`, border, radius 8 / 6 / 6, padding 10 x 16 / 8 x 14, 20 / 18 arrow). Bottom bar (1px line on
  top): Terms and Privacy left with a short divider, 3 social icons centre (White, 24 / 20 / 20), copyright
  right. At 390: columns 2 x 2 (Home + News, Podcasts + Blogs), Resources buttons in a wrapping row, the bar
  stacked and centred (icons, links, copyright).
- **FAQ item:** `Dark/10`, border, radius 12 / 10 / 8, padding 34 / 24 / 24, question `FAQ question` and a 24 / 20
  / 20 icon on the right (yellow plus when closed, white minus when open). Open: question, a 1px `Dark/15` line,
  the answer, gap 24 / 20 / 16. Closed height 92 / 70 / 68 to 86 (a two-line question).
- **Form fields:** label over a field (fill `Dark/10`, 1px `Dark/15`, radius 8 / 6 / 6, padding 20 / 16 / 16, height
  67 / 53 / 53, placeholder Dark/40); message 163 / 163 / 127 high. Two columns (gap 50 / 50 / -). Phone: a code
  box (100x67 / 78x53 / 78x53: a 34 / 30 / 30 round flag and a chevron) beside the field. Checkbox 28 / 24 / 24,
  radius 4, same surface, label beside it; Send follows (right at 1920 / 1440, below at 390). **Flag:** no error, focus or
  filled state is drawn.

## 6. Pages

Section names are the design's sitemap. A page is the header, its sections, the CTA band and the footer.

**Home** - Navigation bar, Hero, Features, Blogs, Resources, Testimonials, CTA, Footer.

- Hero: left column 1105 / 837 wide (eyebrow, title of two lines, paragraph, then 3 stats separated by vertical
  lines), right column 653 / 523 with a left line (the decor clipped by it, avatar capsule, "Explore 1000+
  resources", outline button). Under it a strip of 3 items (two-tone icon, title, "Stay Current" / similar, round
  arrow, caption) split by vertical lines. 390: everything stacked; stats in 3 columns; strip rows split by
  horizontal lines.
- Features: heading band, then two split rows: left icon + h3 feature + body, right 2 x 2 feature cards. 390: stacked,
  cards one column.
- Blogs: heading band with "View All Blogs", tab bar (6), three list rows (author, text with three counters,
  "View Blog"). 390: tabs scroll sideways; author and button on one line, text below.
- Resources: heading band, two split rows (Ebooks, Whitepapers): left icon, h3, lead, ghost download button,
  "Downloaded By" panel; right title and description, image 917x332 / 747x275 / 358x169, two meta cells and
  Preview, an expertise cell. 390: stacked, cells stacked.
- Testimonials: heading band, 3 x 2 testimonial cards split by lines. 390: three in a column (see the Flag in
  section 1).
- CTA: logo mark 150 / 120 / 60 beside a tag, h2 and a Grey/50 paragraph; the tray with 3 CTA cards under it.
  390: mark and tag on the first line, then title, text, cards stacked.

**News** - Navigation bar, Header section, Blogs, Videos, CTA, Footer.

- Header section: display title on two lines, the paragraph at the right of the second line (gap 80 / 60); 390:
  title, then the paragraph.
- Blogs: featured story (image 515x427 / 515x325 / 358x213, title lead, text, 3 meta cells, counters, "Read More")
  and a row of 3 news cards; then a heading band (tag "Welcome to Our News Hub", h2, "View All News"), tab bar (6)
  and three list rows. 390: featured story and cards stacked in one column, tabs scroll.
- Videos: heading band (tag "Featured Videos"), 2 x 2 video cards split by a vertical line. 390: one column,
  horizontal lines.

**Podcasts** - Navigation bar, Header section, Top Podcasts, Latest Podcasts, CTA, Footer.

- Header section: as News.
- Top Podcasts: two split rows; left: icon, show title with a 5-star pill, host cell with "Listen Podcast"; right:
  lead video 917x412 (radius 20), lead title, text, three meta cells (Total Episodes, Average Episode Length,
  Release Frequency). 390: stacked; the left block, then a card (padding 40 x 24) with video and text.
- Latest Podcasts: heading band (tag, h2, no button), 2 x 3 episode cards split by lines. 390: one column of 3
  cards with horizontal lines (see the Flag in section 1).

**Resources** - Navigation bar, Header section, Resources, CTA, Footer.

- Header section: display title, paragraph, then 4 counters (stat XL over a label) split by vertical lines. 390:
  2 x 2 with lines.
- Resources: heading band (tag, h2) with the segmented tabs at the right (below the title at 390); two split rows
  (icon, h3 resource, body | image 917x332, title, text, "Download PDF Now", 4 meta cells); then 3 resource
  cards in a row split by lines. 390: stacked.

**Blog article** - Navigation bar, Header section, Information, Similar Blogs, CTA, Footer.

- Header section: full-width image (1920x598 / 1440x439 / 390x281) fading into `Dark/08`; the article title in a
  centred box 1335 / 918 / 390 wide, in the lower part.
- Information: article column 1238 / 870 (Introduction, sections with article h2 and `body` text, then "Read Full
  Blog" over a fade) and a sidebar 682 / 570 with a left line: counter pills (3), Publication Date / Category /
  Author cells, Table of Contents (a `Dark/10` list, radius 12, padding 20, 9 items). 390: the sidebar blocks come
  first, the text after.
- Similar Blogs: "Similar News" title with "View All News", then 3 news cards (gap 30). 390: one column.

**Contact** - Navigation bar, Header section, Contact Form, FAQ's, CTA, Footer.

- Header section: 4 info columns 324 / 275 wide split by lines: General Inquiries (email, phone), Technical Support
  (same), Our Office (address, "Get Directions"), Connect with Us (3 social buttons 84x60 / 85x48). 390: stacked
  with horizontal lines.
- Contact Form: left an icon and the h2, right the form (section 5). 390: stacked.
- FAQ's: left icon, h3 FAQ, text, "Ask Qustion" (sic: a typo in the design, not to be copied) ghost button; right 5 FAQ items, the first open. 390: stacked.

## 7. Assets

- **Logo:** a yellow mark of four turning pieces (`Yellow/55`) and a white wordmark. Sizes 179x50 / 143x40 /
  125x35 in the header (mark 50 / 40 / 35); the mark alone is 150 / 120 / 60 in the CTA band. Inline SVG through
  the SVG plugin, two colours from tokens; the mark also serves as the icon of the site.
- **Hero decor:** a ray burst of about 440 groups of vectors (gradient black to `#9C9C9C`, varied opacities),
  894x606 / 622x422 / 423x287 before a 35 degree rotation, clipped by the hero's right column (653x755 / 523x568 /
  390x358). Recommended as one raster of the clipped result (WebP or AVIF through the image plugin, `alt=""`), not
  inline SVG (hundreds of paths). The author may overrule.
- **Feature icons:** two-tone, `Yellow/55` + `Dark/25`, 80 / 60 / 50 (rows) and 50 / 40 / 30 (Home strip). About
  13 pieces: Home Future Technology Blog, Research Insights Blogs, Ebooks, Whitepapers, strip Latest News, Expert
  Contributors, Global Readership; Podcasts AI Revolution, AI Conversations; Resources, 2 whitepapers; Contact,
  form and FAQ. Sprite symbols that take the two colours from custom properties. **Flag:** at 1920 Ebooks,
  Whitepapers and Global Readership are drawn in other colours; the 1440 and 390 frames use the two palette ones.
- **Interface icons** (Heroicons, 24 grid; the sprite): arrow-up-right (24 / 20 / 20, every outline button, the
  banner, round buttons), counters (outline 1.5, 24 / 20 / 20; 34 on the article page): heart (outline, filled),
  comment (a speech bubble, the second pill of a card), eye (the second pill on the article page), send;
  arrow-down, star (filled, stars), play (disc 70 / 50 / 50), menu (bars, 34), plus and minus (FAQ 24 / 20 / 20),
  chevron-down (phone code); brand glyphs Twitter (the bird, not X), Medium, LinkedIn (24 / 20 / 20, footer and
  Contact). The Contact page draws no envelope, phone or map-pin.
- **Photos** (placeholders in the design; the site needs its own, through the image plugin). Sizes 1920 / 1440 / 390:

| Photo                          | 1920     | 1440              | 390           |
| ------------------------------ | -------- | ----------------- | ------------- |
| Article hero                   | 1920x598 | 1440x439          | 390x281       |
| News featured                  | 515x427  | 515x325           | 358x213       |
| News card                      | 512x222  | 407x185           | 358x185       |
| Video                          | 718x412  | 590x331           | 358x210       |
| Podcast lead video             | 917x412  | 747x297           | 310x157       |
| Episode / resource card        | 471x290  | 387x244 / 290     | 358x208 / 223 |
| Resource feature, Ebooks image | 917x332  | 748x303 / 747x275 | 358x165 / 169 |
| Author avatar (list)           | 80       | 60                | 60            |
| Reader avatar                  | 60       | 50                | 50            |
| Avatar group                   | 60 / 50  | 50 / 40           | 40            |
| Country flag (phone code)      | 34       | 30                | 30            |
