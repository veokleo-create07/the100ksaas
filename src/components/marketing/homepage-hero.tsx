import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { DemoVideoPlaceholder } from "@/components/marketing/demo-video-placeholder";
import { buttonVariants } from "@/components/ui/button";

export function HomepageHero() {
  return (
    <section className="flex flex-1 flex-col items-center px-0 pb-16 pt-20 text-center sm:pb-24 sm:pt-28 lg:pt-32">
      <p className="text-label">AI personal brand intelligence for LinkedIn</p>
      <h1 className="text-display mt-6 max-w-4xl text-balance">Turn what you know into a personal brand.</h1>
      <p className="text-body-lg mt-7 max-w-2xl text-pretty">
        Clonao learns your knowledge, voice, content, and performance to help you create better LinkedIn posts, plan what to publish, and understand what actually works.
      </p>
      <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
        <Link href="/sign-up" className={buttonVariants({ size: "lg" })}>
          Start 7-day free trial
          <ArrowRight data-icon="inline-end" />
        </Link>
        <Link href="#demo" className={buttonVariants({ size: "lg", variant: "outline" })}>
          <Play data-icon="inline-start" className="fill-current" />
          Watch demo
        </Link>
      </div>
      <p className="mt-4 text-xs text-[var(--marketing-text-muted)]">No permanent free plan · Cancel anytime</p>
      <div id="demo" className="mt-12 w-full max-w-[740px] scroll-mt-8 sm:mt-16">
        <DemoVideoPlaceholder />
      </div>
    </section>
  );
}
