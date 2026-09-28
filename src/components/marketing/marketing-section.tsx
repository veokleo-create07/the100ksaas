import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function MarketingSection({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={cn("marketing-section", className)} {...props} />;
}
