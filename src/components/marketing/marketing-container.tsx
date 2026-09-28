import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function MarketingContainer({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("marketing-container", className)} {...props} />;
}
