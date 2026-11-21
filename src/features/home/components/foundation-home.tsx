"use client";

import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Check, Circle } from "lucide-react";
import Link from "next/link";

import { SiteHeader } from "@/components/site/site-header";

const foundationAreas = [
  { label: "Storefront", detail: "Customer-facing commerce", status: "Foundation ready", complete: true },
  { label: "Commerce core", detail: "Catalog, cart, checkout", status: "Planned next", complete: false },
  { label: "Operations", detail: "Admin, inventory, fulfillment", status: "Planned next", complete: false },
];

export function FoundationHome() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
        <section className="grid min-h-[min(720px,calc(100vh-96px))] items-end gap-16 border-t border-border pb-16 pt-16 md:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] md:pt-24 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="eyebrow mb-8 text-muted-foreground">Phase 01 / Foundation</p>
            <h1 className="max-w-4xl font-display text-[clamp(3.2rem,9vw,8.5rem)] leading-[0.88] tracking-[-0.065em]">
              E-commerce Platform <span className="text-muted-foreground">—</span> Foundation Ready
            </h1>
          </motion.div>

          <motion.div
            className="max-w-sm justify-self-start md:justify-self-end"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.65, ease: "easeOut" }}
          >
            <p className="text-lg leading-8 text-muted-foreground">
              A deliberate starting point for a premium clothing experience from Bangladesh — built to grow from a clear, dependable core.
            </p>
            <a className="mt-10 inline-flex items-center gap-3 border-b border-foreground pb-2 text-sm font-medium transition-[gap] hover:gap-5" href="#foundation">
              Explore the foundation <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
          </motion.div>
        </section>

        <section className="grid gap-10 border-t border-border py-10 md:grid-cols-[1fr_2fr]" id="foundation">
          <div>
            <p className="eyebrow text-muted-foreground">01 / Scope</p>
            <h2 className="mt-5 max-w-xs font-display text-4xl leading-none tracking-[-0.04em]">A strong base before the detail.</h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-3">
            {foundationAreas.map((area) => (
              <div className="bg-background p-6" key={area.label}>
                <div className="mb-16 flex items-center justify-between">
                  <span className="text-sm font-medium">{area.label}</span>
                  {area.complete ? <Check className="size-4" aria-label="Ready" /> : <Circle className="size-3.5 text-muted-foreground" aria-label="Planned" />}
                </div>
                <p className="text-sm text-muted-foreground">{area.detail}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted-foreground">{area.status}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-t border-border py-10 md:grid-cols-[1fr_2fr]" id="principles">
          <div>
            <p className="eyebrow text-muted-foreground">02 / Principles</p>
          </div>
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            <div>
              <p className="font-display text-2xl tracking-[-0.03em]">Product first</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">Every decision should make the product easier to discover, understand, and choose.</p>
            </div>
            <div>
              <p className="font-display text-2xl tracking-[-0.03em]">Commerce ready</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">A feature-based architecture keeps the storefront, operations, and data model aligned.</p>
            </div>
            <div>
              <p className="font-display text-2xl tracking-[-0.03em]">Bangladesh aware</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">Payments, delivery, language, and local operating realities stay visible in the plan.</p>
            </div>
            <div>
              <p className="font-display text-2xl tracking-[-0.03em]">Honest progress</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">Unbuilt capabilities are documented as planned, never presented as working features.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-border pt-10" id="next">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-muted-foreground">03 / Next</p>
              <h2 className="mt-5 max-w-2xl font-display text-4xl leading-none tracking-[-0.04em] md:text-5xl">The foundation is ready for the catalog.</h2>
            </div>
            <Link className="inline-flex items-center gap-2 text-sm font-medium" href="/">
              Phase 01 complete <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
