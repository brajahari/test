# CLAUDE.md

## Tech Stack

- Plain HTML, CSS, and JavaScript only.
- No frameworks, no build step. Files open directly in a browser.

## Project Structure

The repository is nearly empty for now. As it grows, keep things simple:

- `index.html` — the main page (top level)
- `css/` — stylesheets
- `js/` — scripts

Update this section whenever files are added or moved.

## Key Requirements

1. Every page must be responsive and work on desktop, tablet, and phone.
2. Users can toggle between a light and a dark theme. The default is the light theme.
3. Text must stay easy to read, with good contrast, in both the light and the dark theme.

## Feature Plan

A portal where students try small Electrical Engineering tools.

**Portal structure**

- Homepage (`index.html`): header with the theme toggle, plus a grid of tool cards. Each card shows the tool name and a one-line description.
- Opening a tool: click a card to go to that tool's own page (`tools/<tool-name>.html`).
- Getting back: every tool page has a "Back to all tools" link and a header link to the homepage.
- Adding a tool later: create one new page in `tools/` and add one new card to the homepage grid. Nothing else changes.

**Phases**

- Phase 1: the portal plus its first tool, a voltage divider calculator (in: input voltage, R1, R2; out: output voltage), with the light/dark toggle and responsive layout.
- Phase 2: more Electrical Engineering tools (to be chosen later).
- Phase 3: polish and extras (to be chosen later).

## Rules for Claude

- Explain technical terms in plain language.
- Ask before making big changes.
- Ask rather than guess when something is unclear.
