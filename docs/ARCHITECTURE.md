# Express Fashion Architecture

## Phase 1 boundary

This repository contains the runnable foundation for a Bangladesh-based clothing commerce platform. It intentionally does not implement product browsing, cart mutation, checkout, admin workflows, payments, courier calls, or persisted customer data yet.

## Application shape

```text
src/
  app/                       # Next.js routes, metadata, and global styles
  components/                # Shared presentation components
    site/                    # Site-wide chrome
    ui/                      # shadcn/ui primitives
  features/                  # Domain-owned UI and application behavior
    home/                    # Foundation landing experience
  lib/                       # Shared infrastructure and typed utilities
    supabase/                # Browser and server client factories
```

The App Router owns routing and server boundaries. Feature folders own domain-specific components, schemas, queries, and actions as they are introduced. Shared components should stay domain-agnostic.

## Runtime boundaries

- Public Supabase URL and anon key are read through `src/lib/env.ts` and may be used by browser/server clients.
- Service-role keys, payment secrets, webhook signing keys, and courier credentials must remain server-only.
- `src/lib/supabase/client.ts` is for browser usage; `src/lib/supabase/server.ts` is for Server Components, Server Actions, and Route Handlers.
- Supabase integration is credential-gated: the app builds without credentials, while client factories fail clearly if called before configuration.

## Planned data model

The first data model iteration should separate product concepts from sellable inventory:

- `products`: editorial identity, description, category, status, and default merchandising data.
- `product_variants`: size/color combinations, SKU, price, compare-at price, and availability.
- `inventory_levels`: variant quantity and reservation state.
- `product_media`: ordered Supabase Storage assets and alt text.
- `customers`, `addresses`, `orders`, `order_items`, and `payments`: commerce records with auditable status transitions.
- `content_entries`, `notifications`, and `delivery_events`: operational and editorial extensions.

All mutations should be authorized in server-side code and validated with Zod before reaching Supabase.

## Product principles

1. Product discovery stays the primary customer experience.
2. Bangladesh-specific payment and delivery concerns are explicit architecture inputs.
3. Admin capabilities are custom and share domain types with the storefront.
4. Incomplete flows remain visibly incomplete until they have real persistence and error handling.

## Delivery and quality

Vercel is the target runtime. Pull requests should pass lint, strict TypeScript, and a production build. Add focused tests as business logic arrives, especially for pricing, inventory reservation, order transitions, payment verification, and courier status mapping.
