<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Express Fashion Engineering Rules

- Use strict TypeScript and keep domain logic feature-based under `src/features`.
- Keep route composition in `src/app`; place shared UI in `src/components` and shared infrastructure in `src/lib`.
- Never expose service-role keys, payment credentials, courier credentials, or other secrets to client components.
- Validate external input and environment configuration at boundaries with Zod.
- Treat Supabase as the source of truth for persisted commerce data; do not add local mock persistence.
- Do not present planned capabilities as working functionality. Label placeholders and incomplete flows clearly.
- Prefer accessible semantic HTML, keyboard support, responsive layouts, and visible focus states.
- Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` before handing off changes.
- Keep dependencies minimal and record architectural decisions in `docs/ARCHITECTURE.md`.
