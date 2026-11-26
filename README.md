# quillfirelabs.com

Corporate website for Quillfire Labs LLC. Next.js (App Router) · TypeScript · Tailwind CSS v4 · deployed on Vercel.
Fully static — no database, no API routes, no client-side JavaScript beyond what Next.js ships.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build + type check
```

## Deploy
1. Push this folder to a new GitHub repo.
2. In Vercel: **Add New → Project → Import** the repo (framework auto-detected, no env vars needed).
3. **Settings → Domains**: add `quillfirelabs.com` and `www.quillfirelabs.com` (redirect www → apex).

## Editing content
| What | Where |
|---|---|
| Company name, email, URL | `src/lib/site.ts` |
| Portfolio (add one = new card everywhere) | `src/lib/products.ts` |
| Home page copy | `src/app/page.tsx` |
| Brand colors & fonts | `src/app/globals.css` (`@theme`) |
| Logo | `src/assets/quillfire-logo.svg`; favicon `src/app/icon.svg`; `apple-icon.png`; share image `opengraph-image.png`. Full logo set in `brand/`. |

## Before launch checklist
- [ ] Add taglines, summaries and URLs for Aethron Studios and inquisitiveMaestro in `src/lib/products.ts` when ready.
- [ ] Have the Privacy and Terms pages reviewed; update them if you add analytics, forms or cookies.
- [ ] Confirm `contact@quillfirelabs.com` receives mail (MX records on the domain).
- [ ] Submit `https://quillfirelabs.com/sitemap.xml` in Google Search Console.
