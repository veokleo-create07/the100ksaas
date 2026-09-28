import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="mt-auto border-t border-slate-900/5 bg-white/30">
      <div className="marketing-container flex flex-col gap-3 py-8 text-sm text-[var(--marketing-text-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Clonao</p>
        <div className="flex gap-5">
          <Link href="/privacy" className="transition-colors hover:text-[var(--marketing-text)]">Privacy</Link>
          <Link href="/terms" className="transition-colors hover:text-[var(--marketing-text)]">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
