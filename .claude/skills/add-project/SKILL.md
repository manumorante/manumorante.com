---
name: add-project
description: Add a new project to the portfolio — synthesize the idea, write its card and page in EN/ES and build its images.
disable-model-invocation: true
metadata:
  author: manumorante
---

# Add a project

A project is an entry in `src/data/projects.ts` (its card) and a cover in `public/projects/<id>.jpg`.
It can also have a page at `/projects/<id>`: a `page` field pointing to `src/data/pages/<id>.ts`
(types in `src/components/projects/types.ts`), with images in `public/projects/<id>/`.
`src/data/pages/ritmo-festival.ts` is the reference page.

**Premise:** the portfolio sells Manu, not the project. It tells what Manu decided and solved,
not what the project offers its users. Whose product it is changes the rest:

- **A client's product** (a site he built for someone): the page must be worth the same if the
  project had sold nothing. Its business (sales, attendance) is the client's, not his.
- **Manu's own product** (his tool, app or toy): its success is his. Adoption figures (installs,
  users, stars) belong on the page.

## 1. Evidence

Read everything before writing a line: the live site or store page, the repo (README, AGENTS.md,
`package.json`, changelog, CSS tokens, `public/` images) and its git history.

- **Authorship:** everything the project does is Manu's work; present it that way, without
  splitting who did what or saying "I built this". Contributions from others only show that the
  project attracts contributors, and can be mentioned as that.
- **Repository visibility:** `gh repo view <repo> --json visibility`; if private, omit it.

## 2. Draft, then confirm

Turn the evidence into a draft of statements and show it to Manu before building anything. He
confirms or corrects each one.

- Only what Manu recognizes as real. Concepts deduced from the code that he doesn't live that way
  get cut.
- Ask only what is nowhere: why he made it, figures, what can be published. Each question must
  change something on the page. Mark your guesses as guesses.
- Open questions about the project's goal get generic answers; what sets it apart is what he did
  and what came of it.

## 3. Card

- **Position**: first in the array, unless Manu says otherwise.
- **Id**: used as the URL slug, so lowercase letters, digits and hyphens only.
- **Name**: as the brand writes it (`RIT/MO Festival`).
- **Description** (EN + ES): one or two sentences — what it is, then Manu's role (what he built,
  since when).
- **Tags**: 3–4 standout technologies, official names (`Next.js`). Skip what another tag implies
  (React under Next.js) and what every project has (Vercel).
- **Color**: `color.light` is the brand's primary color, from its CSS tokens, or from its icon or
  logo when there is no CSS; it becomes the glow behind the card and the page header, and the
  background of the page images.

## 4. Page

- **Intro**: one sentence, first person: what Manu did and since when.
- **Sections**: 1–5, each a challenge and how Manu solved it, in plain language; a technology is
  named for what it solved, never as a list. The challenge comes from a client (commercial site),
  from the people who use it (tool) or from Manu himself (toy). A toy can stay at 1–2 sections;
  never pad.
- **Titles**: short and big, the text is part of the design (2–5 words: «Del cartel a la web»,
  «Vídeo sin esperas»). They state something; they are not labels.
- **Bodies**: two sentences at most.
- **Layout comes from the data**: a section with an image alternates sides; one without is a
  centered statement. Mix both.
- **Stats** (optional): figures that measure Manu's work (years, editions, versions, speed). For
  his own products, also adoption (installs, users); for a client's, never its business. Take
  live figures from the source (store page, analytics) and update the card if it quotes an old one.
  `value` is shared by both languages, so avoid thousands separators: `10K+`, not `10,875`.
- **Bilingual**: every text in EN and ES, same meaning, each natural in its language.

## 5. Images

Covers are 1200×630; page images are 1500×1000 on the project's `color.light`. No text of our
own inside an image: the page is bilingual. A visual only one project needs (timeline,
before/after) is an image, not a component.

- **Websites**: put the real site in `<iframe>`s at the exact viewport size and screenshot the
  composition. Capturing the site directly can't emulate a phone (headless Chrome has a minimum
  window width).
- **Apps and tools**: use the project's own screenshots (store listing, README), cropped to the
  app window when they carry a wallpaper, and placed on the color.

```html
<!doctype html><html><head><style>
html,body{margin:0;width:1500px;height:1000px;background:<color.light>;overflow:hidden}
.phone{position:absolute;top:72px;width:390px;height:844px;border:12px solid #111;border-radius:44px;overflow:hidden;box-shadow:0 30px 60px rgb(0 0 0/.35);background:#fff}
.desktop{position:absolute;width:864px;height:540px;border-radius:20px;overflow:hidden;box-shadow:0 30px 60px rgb(0 0 0/.35)}
.desktop iframe{width:1440px;height:900px;transform:scale(.6);transform-origin:top left}
iframe{border:0;width:390px;height:844px}
</style></head><body>
<div class="phone" style="left:343px"><iframe scrolling="no" src="https://example.com/es"></iframe></div>
<div class="phone" style="left:813px"><iframe scrolling="no" src="https://example.com/en"></iframe></div>
</body></html>
```

Render and convert (use `--window-size=1200,630` for a cover):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --virtual-time-budget=6000 --window-size=1500,1000 --screenshot=out.png file://<path>/image.html
sips -s format jpeg -s formatOptions 85 out.png --out public/projects/<id>/<name>.jpg
```

- Reuse the project's OG image as the cover only if it is current and attractive; otherwise
  design one from the project's own identity (colors, font, imagery). Every cover is different.
- Look at every result before using it. Work in the scratchpad; only final JPEGs go in the repo.

## 6. Hand over

Run `npm test` and `npm run lint`, check the card and the page on the local site in EN and ES,
then give Manu each decision with its reason so he can confirm or correct it one by one.
