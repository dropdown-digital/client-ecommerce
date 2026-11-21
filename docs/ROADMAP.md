# Express Fashion Roadmap

## Milestone 01 — Foundation (complete)

- Next.js App Router, strict TypeScript, Tailwind CSS, shadcn/ui, Lucide React, Motion, Zod, and React Hook Form installed.
- Feature-based source structure established.
- Supabase browser/server client factories prepared without requiring credentials.
- Engineering rules, architecture notes, environment template, and a polished foundation homepage added.
- Lint, TypeScript, and production build verified.

## Milestone 02 — Data and identity

- Create the Supabase project and establish local/staging/production environments.
- Add SQL migrations, generated database types, storage buckets, row-level security, and customer/admin roles.
- Add auth flows for customer account access and protected admin routes.

## Milestone 03 — Catalog and storefront

- Build product/category browsing, editorial product detail pages, variant selection, search, filters, and responsive media galleries.
- Add admin CRUD for products, variants, media, pricing, and inventory adjustments.

## Milestone 04 — Cart and checkout

- Add server-validated cart state, stock checks, delivery address collection, and Bangladeshi shipping rules.
- Integrate Cash on Delivery and the selected online payment gateway through server-only adapters and verified webhooks.

## Milestone 05 — Orders and operations

- Build order state transitions, customer management, refunds/cancellations, notifications, and courier integration.
- Add admin dashboard views for fulfillment, inventory alerts, and operational audit history.

## Milestone 06 — Content and launch readiness

- Add content management for homepage/editorial sections, SEO metadata, sitemap/robots, analytics, and transactional email.
- Run accessibility, performance, security, payment, and failure-mode reviews before production launch.

## Definition of done for future milestones

Each feature needs real persistence, authorization, validation, loading/error/empty states, responsive behavior, and focused verification. A UI-only placeholder is not a completed feature.
