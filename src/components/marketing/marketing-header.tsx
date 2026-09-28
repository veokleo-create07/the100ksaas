import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  { href: "/product", label: "Product" },
  { href: "/product#brand-intelligence", label: "Brand Intelligence" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Resources" },
];

export function MarketingHeader() {
  return (
    <header className="relative z-20 border-b border-slate-900/5 bg-white/25">
      <div className="marketing-container flex h-[4.5rem] items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-[-0.04em] text-[var(--marketing-text)]">
          Clonao
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 sm:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-nav transition-colors hover:text-[var(--marketing-text)]">
              {item.label}
            </Link>
            ))}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/sign-in"
            className="text-nav rounded-[var(--marketing-radius-sm)] px-3 py-2 transition-colors hover:bg-white/60 hover:text-[var(--marketing-text)]"
          >
            Log in
          </Link>
          <Link
            href="/sign-up"
            className="rounded-[var(--marketing-radius-sm)] bg-[var(--clonao-blue)] px-3.5 py-2 text-sm font-semibold text-white shadow-[var(--marketing-shadow-button)] transition-colors hover:bg-[var(--clonao-blue-hover)]"
          >
            Start free trial
          </Link>
        </div>
        <details className="group relative sm:hidden">
          <summary className="flex size-10 list-none cursor-pointer items-center justify-center rounded-[var(--marketing-radius-sm)] text-[var(--marketing-text)] transition-colors hover:bg-white/60 [&::-webkit-details-marker]:hidden">
            <Menu className="size-5 group-open:hidden" strokeWidth={1.8} />
            <X className="hidden size-5 group-open:block" strokeWidth={1.8} />
            <span className="sr-only">Open navigation menu</span>
          </summary>
          <div className="absolute right-0 top-12 w-[min(18rem,calc(100vw-2.5rem))] rounded-[var(--marketing-radius-md)] border border-[var(--marketing-border)] bg-white p-2 shadow-[var(--marketing-shadow-card)]">
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-[var(--marketing-radius-sm)] px-3 py-3 text-sm font-medium text-[var(--marketing-text-secondary)] hover:bg-[var(--clonao-blue-wash)] hover:text-[var(--marketing-text)]">
                  {item.label}
                </Link>
              ))}
              <div className="my-2 border-t border-[var(--marketing-border)]" />
              <Link href="/sign-in" className="rounded-[var(--marketing-radius-sm)] px-3 py-3 text-sm font-medium text-[var(--marketing-text-secondary)] hover:bg-[var(--clonao-blue-wash)] hover:text-[var(--marketing-text)]">
                Log in
              </Link>
              <Link href="/sign-up" className="mt-1 rounded-[var(--marketing-radius-sm)] bg-[var(--clonao-blue)] px-3 py-3 text-center text-sm font-semibold text-white hover:bg-[var(--clonao-blue-hover)]">
                Start free trial
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
