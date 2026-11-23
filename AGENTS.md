# manumorante.com

Personal portfolio and CV. Vite + React + React Router + Tailwind, deployed on Vercel.
English at `/`, Spanish at `/es` (`src/lib/lang.ts`); user-facing text needs both.

## Commands
- `npm run dev` / `npm run build` / `npm run lint`
- `npm test` — Vitest; CI runs it on every push.

## Projects
- Each project is an entry in `src/data/projects.ts`; every entry is shown, in array order.
- Covers live in `public/projects/` (`<id>.jpg`, optional `<id>.dark.jpg`).
- Removing a project means deleting its entry and its cover files.
