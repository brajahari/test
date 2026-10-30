# CLAUDE.md

## Tech Stack

- Plain HTML, CSS, and JavaScript only.
- No frameworks, no build step. Files open directly in a browser.

## Project Structure

Keep things simple:

- `index.html` — the portal homepage (top level)
- `tools/` — one page per tool (`voltage-divider.html`)
- `css/style.css` — shared styles, including the light and dark themes
- `js/theme.js` — the light/dark toggle, shared by every page
- `js/voltage-divider.js` — the voltage divider calculation

Update this section whenever files are added or moved.

## Key Requirements

1. Every page must be responsive and work on desktop, tablet, and phone.
2. Users can toggle between a light and a dark theme. The default is the light theme.
3. Text must stay easy to read, with good contrast, in both the light and the dark theme.

## Design Direction

The look is called **Blueprint**: technical, square-cornered, high contrast. The tokens live as CSS variables at the top of `css/style.css`. Use them. Do not hard-code colors, fonts or spacing in new pages.

**Palette**

| Token | Light (default) | Dark |
|---|---|---|
| `--bg` page background | `#f4f7f6` | `#0a1c26` |
| `--surface` cards, results | `#ffffff` | `#11293a` |
| `--border` | `#9db2af` | `#3d6179` |
| `--text` | `#0e2a2b` | `#e6f4f4` |
| `--muted` secondary text | `#3f5a5b` | `#9fc0c8` |
| `--accent` links, highlights, main buttons | `#0b6e6e` | `#4fd1c5` |
| `--on-accent` text on the accent | `#ffffff` | `#04202a` |
| `--error` | `#a12626` | `#ff9a9a` |

**Typography**

- Headings, the site name, labels, buttons, inputs and results: IBM Plex Mono (`--font-mono`).
- Body text: IBM Plex Sans (`--font-body`).
- Weights 400 and 600 only. Page title 1.75rem (2.25rem on desktop); labels are small, uppercase and letter-spaced.
- Every page loads both fonts from Google Fonts with the `<link>` tags used in `index.html`.

**Spacing and shape**

- Spacing scale: `--space-1` 0.25rem, `--space-2` 0.5rem, `--space-3` 1rem, `--space-4` 1.5rem, `--space-5` 2rem. Use only these.
- Corners are nearly square (`--radius` 2px). Borders are 2px (`--border-width`).
- Cards have an accent border. Results have a thick accent bar on the left.
- Buttons and inputs are at least 44px tall.
- Main action buttons (`type="submit"`) are filled with the accent color; other buttons are outlined.

## Feature Plan

A portal where students try small Electrical Engineering tools.

**Portal structure**

- Homepage (`index.html`): header with the theme toggle, plus a grid of tool cards. Each card shows the tool name and a one-line description.
- Opening a tool: click a card to go to that tool's own page (`tools/<tool-name>.html`).
- Getting back: every tool page has a "Back to all tools" link and a header link to the homepage.
- Adding a tool later: create one new page in `tools/` and add one new card to the homepage grid. Nothing else changes.

**Phases**

- Phase 1: the portal plus its first tool, a voltage divider calculator (in: input voltage, R1, R2; out: output voltage), with the light/dark toggle and responsive layout.
  - [x] Step 1: portal homepage, theme toggle, and a placeholder "Tool 1 — coming soon" card that opens and returns via the navigation (no tool logic, neutral styling).
  - [x] Step 2: voltage divider tool replaces the placeholder (units dropdown, Calculate button, shows Vout, current and the formula).
- Phase 2: more Electrical Engineering tools (to be chosen later).
- Phase 3: polish and extras (to be chosen later).

## Rules for Claude

- Explain technical terms in plain language.
- Ask before making big changes.
- Ask rather than guess when something is unclear.
