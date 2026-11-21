# Express Fashion

Production foundation for a premium Bangladesh-based clothing e-commerce platform.

## Stack

- Next.js App Router with strict TypeScript
- Tailwind CSS 4 and shadcn/ui
- Lucide React and Motion for React
- Supabase SSR/client foundations
- Zod and React Hook Form
- Vercel-ready production build

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

The Phase 1 homepage is intentionally a polished foundation placeholder. It does not claim to implement catalog, cart, checkout, admin, payment, or courier functionality yet.

## Verification

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for boundaries and [docs/ROADMAP.md](docs/ROADMAP.md) for milestones. Project-wide engineering rules live in [AGENTS.md](AGENTS.md).
