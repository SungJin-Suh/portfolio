# David's Personal Portfolio Project

My personal portfolio — a single-page site built with Next.js, TypeScript, and Tailwind CSS.

**Live:** https://david-suh.vercel.app

![Portfolio preview](https://david-suh.vercel.app/opengraph-image)

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) |
| Font | Inter via `next/font` |
| Hosting | Vercel |

No UI library, no icon package, no animation library — everything is hand-built.

## Implementation Notes

**Cursor spotlight** — A fixed radial-gradient overlay follows the cursor. Position
updates are written straight to CSS custom properties through a ref and batched with
`requestAnimationFrame`, so moving the mouse never triggers a React re-render. The
gradient is layered with a tiled SVG noise texture at 3.5% opacity to dither out the
banding that low-contrast gradients produce on 8-bit displays.

**Scroll-linked navigation** — An `IntersectionObserver` with a `-45%` root margin
creates a thin detection band across the viewport center, so exactly one section is
active at a time. No scroll listeners, no layout thrashing.

**Hover isolation** — Hovering one entry in the experience or project list dims its
siblings, using named Tailwind groups (`group/list`) so nested hover states don't
collide. Gated behind `lg:` since touch devices have no hover.

**Content separation** — All copy lives in `src/content/*.ts`, apart from the
components that render it. Adding a second language later means adding data files,
not rewriting JSX.

**Social preview** — The Open Graph card is generated at build time from JSX with
`ImageResponse`, so it stays in sync with the site's design tokens instead of being
a static image someone has to remember to update.

## Structure

```
src/
├── app/
│   ├── layout.tsx            root layout, metadata, fonts
│   ├── page.tsx              two-column sticky layout
│   ├── globals.css           Tailwind theme tokens
│   └── opengraph-image.tsx   generated social card
├── components/               Nav, Spotlight, Experience, Projects, About, Socials
└── content/                  profile, experience, projects data
```

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## History

This is the second version. The original 2024 site is preserved at the
[`v1-archive`](https://github.com/SungJin-Suh/portfolio/tree/v1-archive) tag.