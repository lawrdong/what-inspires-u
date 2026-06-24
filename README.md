# what inspires u?

A personal application that acts as a creative forum for sharing the experiences, aesthetics, and media of internet culture that uniquely inspires us as individuals.

features:
- masonry type feed
- create, edit, delete posts
- upvote other posts!
- comments (reactions)
- search + sort (newest / most inspired / random)

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
