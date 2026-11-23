---
name: add-project
description: Add a project to the portfolio — research it, write its entry in EN/ES and build its cover.
disable-model-invocation: true
metadata:
  author: manumorante
---

# Add a project

Each project is an entry in `src/data/projects.ts` plus a cover in `public/projects/<id>.jpg`.

## Research first

Read the live site and the project's repo (README/AGENTS.md, `package.json`, git history, CSS tokens, `public/` images). Every field below comes from that research, not from guesses.

## Fields

- **Position**: first in the array, unless Manu says otherwise or dates are discussed.
- **Name**: as the brand writes it on its own site (`RIT/MO Festival`).
- **Description** (EN + ES): one or two sentences — what it is, then Manu's real role and value (what he built, since when, what it covers). Ask Manu when role or dates can't be confirmed from the repo.
- **Tags**: 3–4, the technologies that stand out. Skip what another tag implies (React under Next.js) and what every project has (Vercel). Use official names (`Next.js`).
- **Color**: `color.light` is the brand's primary color, taken from the project's CSS tokens (e.g. `--color-primary`); it becomes the blurred glow behind the card.
- **Repository**: check `gh repo view <repo> --json visibility`; if private, omit it and the card hides "View code".

## Cover

1200×630 JPEG. Reuse the project's OG image only if it is current and attractive. Otherwise design one for this project: every cover is different, so there is no layout to copy — start from the project's own identity (its colors, font, imagery). Build it as an HTML page, then render and convert:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --allow-file-access-from-files --virtual-time-budget=4000 --window-size=1200,630 --screenshot=cover.png file://<path>/cover.html
sips -s format jpeg -s formatOptions 85 cover.png --out public/projects/<id>.jpg
```

- Site screenshots: headless Chrome for desktop (`--window-size=1440,900`; a longer `--virtual-time-budget` gives a different frame of a video hero). For mobile, use the browser pane's mobile preset: headless Chrome with a narrow window does not emulate a phone, and the layout breaks.
- Look at the result before using it. Work in the scratchpad; only the final JPEG goes into the repo.

## Hand over

Run `npm test` and `npm run lint`, check the card on the local site, then give Manu each decision with its reason so he can confirm or correct it one by one.
