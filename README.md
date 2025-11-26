# what inspires u?

A tiny React + Vite app that functions as a creative forum with a random, old-blog aesthetic.

Features:
- Local state storage for posts (you can swap to Supabase later)
- Masonry feed with polaroid-style post cards
- Create, edit, delete posts
- Upvote "this inspired me ❤️"
- Comments (reactions)
- Search + sort (newest / most inspired / random)

Run locally:

1. Install dependencies

```bash
cd what-inspires-u
npm install
```

2. Start dev server

```bash
npm run dev
```

Notes:
- Tailwind is configured; run `npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch` when building manually, but `vite` will process PostCSS if installed.
- To replace local state with Supabase, update `src/context/PostsContext.jsx` to fetch/save using your Supabase client.
