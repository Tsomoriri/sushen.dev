# sushen.dev — design system

The design system for **sushen.dev**, a personal site for Sushen: a fast,
extremely small, typewriter-minimalist site with a modern surface treatment.

The site does exactly three things, and the system exists to make those three
things unmistakable:

1. **Hello there** — one line, one paragraph, no hero photo.
2. **On my desk** — current role and the work actually in flight.
3. **Field notes** — posts (things I had to work out) and micro notes
   (things I want to remember). Nav labels are `hello · desk · notes`.

Everything else is deliberately absent: no blog sidebar, no testimonials, no
"featured in", no newsletter modal, no project case studies.

## Sources used

None were provided. There was **no codebase, no Figma file, no deck, no logo and
no screenshot** attached to this project — the system was authored from the
written brief:

> "fast, highly performant, retro elements of typewriter minimalist style,
> subtle elements but with a modern touch… grainy glass background with
> isomorphic elements on top… slow sparkle behind the glass on the isomorphic
> layer… high performant, do these 3 things extremely well and every pixel of
> the webpage is extremely well thought of."

Interpretations I committed to (flag anything you'd rather I changed):
- "isomorphic elements" → an **isometric hairline lattice** (2:1, ±26.57°) drawn
  behind the glass, not React SSR ("isomorphic JavaScript").
- "that library which uses C to make layouts faster" → read as *Clay* (the C
  layout library) — a performance intent, not a dependency. It is expressed here
  as a discipline (no layout-affecting animation, textures generated in CSS)
  rather than a tool.
- "pretextjs to render text on the go" → read as progressive/typed text reveal.
  Implemented as the `Typewriter` component, which reserves its final box before
  typing so nothing reflows.

## Index

| Path | What's in it |
|---|---|
| `styles.css` | The one file consumers link. `@import` list only. |
| `tokens/` | `fonts`, `colors`, `typography`, `spacing`, `radius`, `elevation`, `motion`, `effects`, `base` |
| `components/core/` | Logo, Wordmark, Button, IconButton, TextLink, Tag, Badge, Kbd, Divider, Icon |
| `components/surfaces/` | GrainField, GlassPanel, Card |
| `components/content/` | SectionHeader, PostRow, NoteCard, StatusRow, MetaList, Typewriter |
| `components/forms/` | Input, ThemeToggle |
| `components/internal/` | `injectCss.js` — pseudo-state CSS helper (not a component) |
| `guidelines/` | 23 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `templates/personal-site/` | `PersonalSite.dc.html` — the copyable starting template consuming projects see |
| `ui_kits/website/` | Click-through recreation of the whole site — see its README |
| `assets/` | `logo.png`, `logo-512.png`; `textures/` notes why textures are CSS-generated |
| `SKILL.md` | Agent Skills entry point |

Each component has a sibling `.d.ts` (props contract) and `.prompt.md`
(one-line "what & when", usage example, variants).

### Intentional additions
- **Icon** — a wrapper over Lucide, so glyph sizing and colour are one decision.
- **Logo / Wordmark** — the mark as a mask (large format), plus the typed lockup
  that replaces it below 72px.
- **GrainField** — not a normal "primitive", but the brand's backdrop is the
  brand. It's a component so the layer order can never be got wrong.
- **injectCss** — internal helper; components ship no stylesheets, but hover and
  focus states can't be inline, so each component registers its own rules once.

---

## CONTENT FUNDAMENTALS

**Voice:** first person, past-tense specific, present-tense plain. "I build fast,
boring systems." Not "Sushen is a passionate engineer." The site never addresses
the reader as "you" except in instructions ("Press `/` to search").

**Casing:** sentence case for anything you read. UPPERCASE only for tracked UI
labels and buttons (the component uppercases them — write labels in sentence case
in source). Tags, filenames, commands and note topics are always lowercase, even
at the start of a line: `postgres`, `pg_stat_statements`, `sqlite`.

**Length is a contract.**
- Intro line: ≤ 6 words, a claim, ends with a period.
- Section titles: 2–3 words ("Who I am", "What I'm doing").
- Status row body: exactly one sentence.
- Note: 1–4 lines, one idea, no preamble, no heading. If it needs a heading it's
  a post.
- Post lede: one sentence that could stand alone as the whole post.

**Concreteness beats enthusiasm.** Name the tool, the number, the failure mode.
Good: "WAL mode isn't a tuning knob. It changes the failure mode." Bad:
"Exploring the exciting world of SQLite performance!"

**No marketing register.** Banned: "passionate", "cutting-edge", "leverage",
"journey", "excited to share", "game-changer", exclamation marks, rhetorical
questions as headings, "In today's fast-paced world".

**Dates and numbers:** ISO dates in mono (`2026-04-08`), never "Apr 8th, 2026".
Reading times as `6 min`. Periods as `2024 — now` (em dash, spaces). Page weight
is shown in the footer on purpose — performance is part of the copy.

**Punctuation:** middot ` · ` separates metadata. Em dash for asides. Serial
commas. No ellipses except in input placeholders (`filter titles…`).

**Emoji: never.** Not in copy, not in headings, not in commit-style notes. Status
is carried by a coloured dot, not an emoji. The only non-alphanumeric decoration
allowed is the mono `·`, `—`, `[ ]` brackets around the theme switch, the `_`
caret in empty states, and the dashed `end of file` rule that closes a page.

**Empty states** are typed, not illustrated: `nothing matches "wal". _`

---

## VISUAL FOUNDATIONS

### The idea in one line
A sheet of frosted glass, resting on a slow-moving field of light, with grain over
the whole thing — and everything printed on it
set in a typewriter face.

### Colour
- **Two materials, not one inverted theme.** Dark (default) is *cold ink*
  (`--ink-900` #14171C base). Light is *warm cream paper* (`--paper-100` #FCF5E6).
  Greys differ in temperature on purpose.
- **One accent that fills: marigold** `--amber-500` #FFAE2B — primary button,
  caret, focus ring, hover. At most one marigold *fill* per view.
- **A playful set that never fills:** coral `--accent-2` #FF7A62, teal
  `--accent-3` #45CFBB, lagoon `--accent-5` #52B8E8, lilac `--accent-4` #CBB6FF.
  They colour section indices (01 marigold, 02 coral, 03 teal), tags, links and
  the sparkle lights. Artistic, not corporate — think risograph inks on cream.
- **Semantic hues** (moss / amber / rose / slate) appear only as a 6px dot in
  `Badge`. Status is never a filled pill.
- Four text roles only: primary, secondary, muted, accent (+ link).
- **No gradients as decoration.** The only gradients in the system are functional:
  the sparkle radials, the iso-lattice mask, and `--scrim-*` protection
  gradients where text crosses busy backdrop.

### Type
- **Atkinson Hyperlegible Next** (`--font-ui`) — every label, button, nav item
  and piece of metadata. Drawn by the Braille Institute for maximum legibility:
  1/l/I and 0/O are disambiguated and apertures are unusually open, which is
  exactly what small tracked caps need. This is the workhorse.
- **Courier Prime** (`--font-display`, aliased `--font-stamp`) — headlines, the
  wordmark, the typed hero line. The brand's *voice*, used at size where the
  typewriter character reads as intent rather than as a receipt.
  `--track-display` −0.03em at 30px and up.
- **Newsreader** — everything you actually read: body copy, post text, note text,
  row titles. 66ch measure (`--prose-measure`).
- **JetBrains Mono** — data, dates, values, code, metadata. Never prose.
- Ten-step scale, **12 → 66px** — deliberately large. Body copy is 17/28 and
  post copy 20/32. **Nothing in a component renders below 13px**: tracked labels,
  tags, badges, dates and metadata all sit at 13 or 15px. `--text-2xs` (12px)
  exists for specimen annotations only.
- Controls: buttons 32/40px, fields 40px, tags 24px, keycaps 24px — all
  comfortably clickable, `md` button height matches `--field-height`.
- Tracked caps (`--track-label` .12em, `--track-wide` .18em) for labels 12–15px.
  Never track lowercase body type.
- Weights: 400 and 700 only.

### Spacing & layout
- One column, always. `--page-max` **780px**; `--page-max-wide` 1100px is for
  two-column footers and note grids only.
- 4px UI grid (`--space-1..10`), **28px** vertical rhythm (`--baseline`), section
  gaps of 56 or 84px — nothing between.
- Left-aligned to one rule down the whole page. Nothing is centred except the
  label inside `Divider`.
- Header is sticky and 52px; it is the only fixed element. No sticky CTAs, no
  floating buttons, no back-to-top. It is a **borderless gradient ribbon of
  glass** — 18px blur, a top-down gradient fill, and a mask that fades its own
  bottom edge out. There is no rule under it: the refraction is the boundary.
- The scrolling writing list carries a **typed scroll cue** below it
  (`keep scrolling for older notes` + a chevron) as well as the mask fade — the
  fade alone was not a strong enough affordance. Cap it at **9 baselines** so
  there is real travel behind the promise.
- The **writing list scrolls in place** (`max-height: calc(--baseline * 13)`,
  masked top and bottom) rather than growing the page — the three sections stay
  one screen apart however many years of posts accumulate.
- Character-cell steps (`--ch-*`) align typewriter gutters; the writing index
  date column is exactly `8ch`.

### Backgrounds & texture
- No flat background anywhere — but also **no imagery**. Three generated layers
  (there is deliberately **no lattice or grid layer** — every version of it read
  as a seam across the page):
  0. `--texture-glimmer`: mottled warm/cool patches of aged paper, blurred 70px,
     **rotating once every 220s** — the slowest thing on the page, and the reason
     the backdrop never looks static.
  1. `--texture-sparkle`: five radial lights (warm + cool), blurred 56px, drifting
     on a **34s** loop with `transform: translate3d()` + `scale()` only.
  3. `--texture-grain`: an SVG `feTurbulence` data URI, `mix-blend-mode: overlay`
     at 0.30 (0.55 over hero glass), on one fixed layer.
- All three are **CSS, not bitmaps** — one decode, no network, resolution
  independent. See `assets/textures/README.md`.
- No photography in the system. If a photo is ever needed it should be warm,
  grainy, and desaturated toward the paper ramp — but the current answer is: no
  images, that's why the site is 41 kB.

### Transparency & blur
- Glass is used for **content that sits over the sparkle**: the intro panel, note
  cards, the subscribe panel, the header bar. `blur(14px) saturate(1.15)`; the
  `strong` variant is 22px.
- Fills are 4.5% white (dark) / 42% white (light) — very low, so glass reads as
  glass and not as a grey box.
- **Max two stacked glass layers.** Deeper nesting goes milky and kills the
  sparkle it exists to reveal.
- Reading views turn the sparkle **off** — never blur text over motion.

### Borders, corners, shadows
- Hairlines do the work: 1px at 10% white (dark) / 14% ink (light);
  `--border-strong` at 20/28% on hover.
- **Corners: 2px** is the house radius (`--radius-xs`); 4px for panels and cards
  (`--radius-card`); pill **only** for tags and status dots. Nothing is more
  rounded than 4px.
- Shadows are cool, low-opacity and never blurred past 32px:
  `--shadow-lift` (cards at rest), `--shadow-panel` (glass), `--shadow-pop`
  (hover), plus `--shadow-glass-edge` — a 1px inset top highlight that makes the
  glass look like it has an edge. `--shadow-inset-key` gives keycaps their lip.
- Cards: solid surface + hairline + `--shadow-lift`, 4px corners.
  **No coloured left borders. Ever.**
- Rules: hairline between rows; the dashed rule
  (`repeating-linear-gradient`, 4px on / 4px off) is the typewriter dash and ends
  a page or heads a section.

### Motion
- Mechanical: **80/120/180/320ms**, one easing (`--ease-mech`
  cubic-bezier(.2,.8,.2,1)). No springs, no bounce, no overshoot, no scale-in
  entrances, no scroll-triggered reveals.
- The only continuous animation is the 34s sparkle drift (transform only,
  `will-change: transform`, GPU-composited) and the caret blink at **1.06s** with
  `steps(1)`.
- `Typewriter` reserves its final box with a hidden copy before typing, so the
  reveal never reflows.
- `prefers-reduced-motion` kills the drift, the blink and the typing (tokens are
  zeroed in `motion.css`, so it applies system-wide, not per component).

### States
- **Hover:** brighten, never darken. Text goes to amber; hairlines go
  `--border-strong`; glass fills step up one level; card lifts `translateY(-1px)`
  with `--shadow-pop`; row hover paints `--surface-glass` across the full row and
  slides an arrow in 2px.
- **Press:** `translateY(1px)` — the key travel of a typewriter. Primary fills
  step to `--accent-press`. Nothing scales down.
- **Focus:** `--ring-focus` — a 2px bg-coloured gap then a 1px amber ring. Focus
  is always visible; the site is navigable by keyboard.
- **Disabled:** opacity 0.42, `not-allowed`. No greyed-out colour swap.
- **Selected:** amber outline + 12% amber wash (tags), or amber fill (theme
  switch).

---

## ICONOGRAPHY

- **There is no icon set in the sources.** Lucide (`lucide-static@0.544.0`,
  CDN, 2px stroke, 24px grid) is used as the closest match to the brand's
  hairline weight — **this is a flagged substitution**. If Sushen has a preferred
  set (or wants none at all), swap the `BASE` constant in
  `components/core/Icon.jsx`; nothing else references icons directly.
- Icons are consumed **only** through `<Icon name="…">`, which masks the SVG to
  `currentColor`. No inline SVG in components, no icon font, no PNG icons.
- Sizes: **14** inline with tracked labels, **16** in buttons and rows, **20** in
  headers. Nothing larger — there are no decorative or spot icons in this brand.
- The whole site uses about eight glyphs: `arrow-right`, `arrow-up-right`,
  `arrow-left`, `search`, `mail`, `rss`, `github`, `twitter`. Adding a ninth
  should feel like a decision.
- **Unicode is preferred over an icon** where it works, and it often does:
  ` · ` for metadata separators, ` — ` for ranges, `[ | ]` around the theme
  switch, `_` as the caret in empty states, dotted leaders drawn in CSS rather
  than as a graphic.
- **Emoji are never used.** Status uses a 6px coloured dot (`Badge`).

## Logo

A **monoline signature mark inside a hairline circle**, with three trailing dots —
supplied by Sushen as `uploads/Gemini_Generated_Image_czr9m7czr9m7czr9.png`.

- `assets/logo.png` — the working asset: checkerboard keyed out, cropped square
  to the mark, cream `#F7F2E6` on transparent (1510px).
- `assets/logo-512.png` — 512px version for favicons and small mounts.
- `assets/logo-small.png` — 128px with **stroke-dilated** alpha, used automatically
  under 112px.
- **The mark is large format only.** Its strokes are ~1.4% of its width, so under
  72px the signature collapses to a smudge. `Logo` clamps to 72px; in the 52-60px
  header the **`Wordmark`** component (typed `sushen` + mono marigold `.dev`)
  stands in. The mark's home is the footer at 120px, and hero/about at 150px+.
- Use the components, never an `<img>`. `Logo` mounts the PNG as a **CSS mask** so
  the mark takes `currentColor` and re-colours correctly in both themes.
- Clear space equals the radius of its own circle. The circle is part of the
  mark — never nest it in another ring, avatar frame or badge.
- Paired with the typed wordmark (`Logo wordmark`), `sushen` is Courier Prime 700
  and `.dev` is mono marigold.

**Ask:** the source is a raster at 1510px. If you have the original vector, send
it — a monoline mark this fine wants to be an SVG at small sizes.

## Fonts — substitution flagged

No font files were supplied. All three families are Google Fonts, loaded by
`@import` in `tokens/fonts.css` rather than vendored as binaries:
**Atkinson Hyperlegible Next** (UI), **Courier Prime** (display), **Newsreader**
(body), **JetBrains Mono** (data/code). If you have licensed files — or want a different typewriter face
(e.g. a licensed Courier, TT2020, or a monospace like Berkeley Mono) — send them
and I'll self-host with real `@font-face` rules.
