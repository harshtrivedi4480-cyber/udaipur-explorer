# Udaipur Explorer

A premium editorial travel guide to Udaipur — lakes, palaces, temples,
food, stays, experiences and hidden corners of the City of Lakes — built
as a fast, mobile-first React app.

## Stack

React + TypeScript + Vite + React Router + Tailwind CSS + Framer Motion +
Lucide React + React Leaflet.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # type-checks then builds to dist/
npm run preview   # preview the production build locally
npm run lint      # eslint
```

## Adding real photos (important)

This build ships with **zero placeholder text** but **no photo assets**,
by design — every image reference is real and specific (e.g.
`/images/places/lake-pichola.webp` is only ever used for Lake Pichola),
but the actual photo files need to be sourced and verified by a human
before launch, since an AI-generated or wrongly-matched photo would
violate the project's own accuracy requirement more than an honest
placeholder does.

Until a real photo is added, `SmartImage` (`src/components/SmartImage.tsx`)
renders a designed, on-brand placeholder — never a broken-image icon —
so the site always looks intentional.

**To add a photo:** drop a verified, correctly-licensed image at the
exact path referenced in `src/data/*.ts` (e.g.
`public/images/places/lake-pichola.webp`). No code changes are needed —
`SmartImage` will pick it up automatically.

Run this before every deploy to see what's still missing:

```bash
node scripts/check-images.mjs
```

Recommended folder layout (already scaffolded under `public/images/`):

```
public/images/
  hero/
  places/
  food/
  hotels/
  experiences/
  hidden-gems/
  stories/
```

Prefer optimized `.webp` files, correctly cropped, under ~300KB each.

## Content

All content lives in typed data files under `src/data/`:
`places.ts`, `food.ts`, `hotels.ts`, `experiences.ts`, `stories.ts`.
Facts (history, locations, coordinates) are written to be accurate and
non-invented — prices are given as general bands rather than exact
figures, and no addresses or historical claims are fabricated. Extend
these files to add more entries; every page (list, detail, map, search,
trip planner) reads from the same source of truth automatically.

## Routes

```
/                       /places            /places/:slug
/food                   /food/:slug        /stays
/stays/:slug            /experiences       /experiences/:slug
/hidden-gems            /stories           /stories/:slug
/trip-planner           /map               /saved
/about                  /contact
```

## Deploying on Vercel

1. Push this repo to GitHub.
2. Import it in Vercel — it auto-detects the Vite build.
3. `vercel.json` is already set up to rewrite all routes to
   `index.html` so client-side routing works on refresh/deep-links.

## SEO

Each page sets its own title, meta description, canonical URL and Open
Graph tags via `useSEO()` (`src/hooks/useSEO.ts`) — no extra dependency
needed. `public/sitemap.xml` and `public/robots.txt` are included;
update the domain in both (and in `useSEO.ts`'s `SITE_URL`) once the
site has a real domain.

## Saved places

"Saved" uses `localStorage` only (`src/hooks/useSaved.ts`) — no backend,
no account required. Clearing browser storage clears saved items.

<img width="1909" height="867" alt="image" src="https://github.com/user-attachments/assets/1dd5658a-11ab-419b-97b9-12b465f3de23" />
