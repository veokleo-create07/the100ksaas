import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function MarketingCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--marketing-radius-lg)] border border-[var(--marketing-border)] bg-[var(--marketing-surface)] shadow-[var(--marketing-shadow-card)]",
        className,
      )}
      {...props}
    />
  );
}
