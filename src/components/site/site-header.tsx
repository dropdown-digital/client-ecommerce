import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <Link className="flex items-center gap-3" href="/" aria-label="Express Fashion home">
        <span className="flex size-8 items-center justify-center bg-foreground text-xs font-semibold text-background">
          EF
        </span>
        <span className="text-sm font-semibold tracking-[0.22em]">EXPRESS FASHION</span>
      </Link>
      <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label="Primary navigation">
        <a className="transition-colors hover:text-foreground" href="#foundation">
          Foundation
        </a>
        <a className="transition-colors hover:text-foreground" href="#principles">
          Principles
        </a>
        <a className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground" href="#next">
          Next steps <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </nav>
      <span className="eyebrow text-muted-foreground">BD / 01</span>
    </header>
  );
}
