import type { ReactNode } from "react";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingHeader } from "@/components/marketing/marketing-header";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="marketing-background flex min-h-screen flex-col">
      <MarketingHeader />
      <main className="marketing-container flex flex-1 flex-col">{children}</main>
      <MarketingFooter />
    </div>
  );
}
