# Paid — Agent guide

Morning work-day planner. Data in browser `localStorage` (`paid-planner-v1`, `paid-base-v1`, `paid-theme-v1`). Redeploys do not wipe user data.

## Commands

```bash
npm run dev
npm run build
npm run vercel:prod
```

## GitHub / Vercel

- Repo: `ledoit/paid` — bootstrap via `../../scripts/menhir-new-repo.sh Job/Paid`
- Vercel project: `menhir-tech/paid` — production deploys via Git push (after `vercel git connect`) or `npm run vercel:prod` locally

See `../../AGENTS.md` for Menhir repo bootstrap conventions.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
