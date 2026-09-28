import type { ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  FileText,
  Link2,
  Mic2,
  PenLine,
  PlaySquare,
  Plus,
  Quote,
  RefreshCw,
  Sparkles,
  UserRound,
} from "lucide-react";
import { MarketingCard } from "@/components/marketing/marketing-card";

const inputSources = [
  ["LinkedIn history", FileText],
  ["Website", Link2],
  ["PDFs & notes", FileText],
  ["Newsletters", Quote],
  ["Podcasts & videos", PlaySquare],
  ["User edits", PenLine],
  ["Published posts", Check],
  ["Performance data", BarChart3],
] as const;

const outputs = [
  "Better content ideas",
  "Stronger writing",
  "Smarter weekly plan",
  "Performance insights",
  "What to post next",
];

const intelligenceLayers = ["Identity", "Expertise", "Stories", "Opinions", "Proof", "Audience", "Performance"];

export function PersonalBrandIntelligence() {
  return (
    <section className="border-t border-slate-900/5 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-label">Personal brand intelligence</p>
        <h2 className="text-section-heading mt-5">Clonao learns the person behind the content.</h2>
        <p className="text-body-lg mt-6">
          Clonao continuously builds an understanding of your knowledge, voice, stories, opinions, proof, audience, content history, and performance — so Create, Plan, and Analyze all work from the same context.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-6xl sm:mt-20">
        <div className="grid gap-3 lg:grid-cols-[0.9fr_1.35fr_0.9fr] lg:items-stretch">
          <SourcePanel />
          <IntelligencePanel />
          <OutputPanel />
        </div>

        <div className="mt-5 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
          <LoopStep label="Learn" active />
          <ArrowRight className="hidden size-4 text-[var(--clonao-blue)]/60 sm:block" strokeWidth={1.5} />
          <LoopStep label="Create" />
          <ArrowRight className="hidden size-4 text-[var(--clonao-blue)]/60 sm:block" strokeWidth={1.5} />
          <LoopStep label="Plan" />
          <ArrowRight className="hidden size-4 text-[var(--clonao-blue)]/60 sm:block" strokeWidth={1.5} />
          <LoopStep label="Publish" />
          <ArrowRight className="hidden size-4 text-[var(--clonao-blue)]/60 sm:block" strokeWidth={1.5} />
          <LoopStep label="Analyze" />
          <ArrowRight className="hidden size-4 text-[var(--clonao-blue)]/60 sm:block" strokeWidth={1.5} />
          <LoopStep label="Learn" active />
        </div>
        <p className="mt-5 text-center text-sm text-[var(--marketing-text-muted)]">Every post makes the system more useful.</p>

        <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-[1fr_1.05fr]">
          <KnowledgeCard />
          <RecommendationCard />
        </div>
      </div>
    </section>
  );
}

function SurfaceHeader({ eyebrow, title, icon }: { eyebrow: string; title: string; icon: ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--marketing-border)] px-4 py-3">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[var(--clonao-blue-soft)] text-[var(--clonao-blue-hover)]">{icon}</span>
        <div className="min-w-0">
          <p className="truncate text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[var(--marketing-text-muted)]">{eyebrow}</p>
          <p className="truncate text-xs font-semibold text-[var(--marketing-text)]">{title}</p>
        </div>
      </div>
      <span className="flex gap-1.5 pl-3">
        <span className="size-1.5 rounded-full bg-slate-200" />
        <span className="size-1.5 rounded-full bg-slate-200" />
        <span className="size-1.5 rounded-full bg-slate-200" />
      </span>
    </div>
  );
}

function SourcePanel() {
  return (
    <MarketingCard className="overflow-hidden bg-white/80">
      <SurfaceHeader eyebrow="Context in" title="Your source material" icon={<Link2 className="size-3.5" />} />
      <div className="p-4">
        <p className="text-xs leading-5 text-[var(--marketing-text-secondary)]">Clonao learns from the work you already do.</p>
        <div className="mt-4 space-y-1.5">
          {inputSources.map(([label, Icon]) => (
            <div key={label} className="flex items-center justify-between rounded-md border border-transparent px-2.5 py-2 text-xs text-[var(--marketing-text-secondary)] transition-colors hover:border-[var(--marketing-border)] hover:bg-[var(--clonao-blue-wash)]">
              <span className="flex items-center gap-2"><Icon className="size-3.5 text-[var(--clonao-blue)]" strokeWidth={1.7} />{label}</span>
              <Check className="size-3 text-[var(--clonao-blue)]" strokeWidth={2} />
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 border-t border-[var(--marketing-border)] pt-3 text-[0.65rem] text-[var(--marketing-text-muted)]"><Plus className="size-3" /> Add another source</div>
      </div>
    </MarketingCard>
  );
}

function IntelligencePanel() {
  return (
    <MarketingCard className="relative overflow-hidden border-[var(--clonao-blue)]/25 bg-white shadow-[0_18px_45px_rgb(34_73_109_/_0.12)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-[var(--clonao-blue)]" />
      <SurfaceHeader eyebrow="The context layer" title="Clonao Personal Brand Intelligence" icon={<Sparkles className="size-3.5" />} />
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[var(--clonao-blue-soft)] text-[var(--clonao-blue-hover)]"><RefreshCw className="size-4" strokeWidth={1.7} /></div>
          <div>
            <p className="text-sm font-semibold text-[var(--marketing-text)]">A living understanding of you</p>
            <p className="mt-1 text-xs leading-5 text-[var(--marketing-text-secondary)]">One connected context, refined with every edit, post, and signal.</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {intelligenceLayers.map((layer, index) => (
            <div key={layer} className={`flex items-center gap-2 rounded-md border px-2.5 py-2.5 text-xs font-medium ${index === 1 || index === 6 ? "border-[var(--clonao-blue)]/25 bg-[var(--clonao-blue-wash)] text-[var(--clonao-blue-hover)]" : "border-[var(--marketing-border)] bg-[#fbfcfd] text-[var(--marketing-text-secondary)]"}`}>
              <span className="size-1.5 rounded-full bg-current opacity-60" />
              {layer}
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3 border-t border-[var(--marketing-border)] pt-4">
          <div className="flex size-7 items-center justify-center rounded-full bg-[#eef4f8] text-[var(--marketing-text-muted)]"><UserRound className="size-3.5" /></div>
          <div className="h-1.5 flex-1 rounded-full bg-[#edf2f6]"><div className="h-full w-2/3 rounded-full bg-[var(--clonao-blue)]/60" /></div>
          <span className="text-[0.62rem] text-[var(--marketing-text-muted)]">Continuously updated</span>
        </div>
      </div>
    </MarketingCard>
  );
}

function OutputPanel() {
  return (
    <MarketingCard className="overflow-hidden bg-white/80">
      <SurfaceHeader eyebrow="Context out" title="What it makes possible" icon={<ArrowRight className="size-3.5" />} />
      <div className="p-4">
        <p className="text-xs leading-5 text-[var(--marketing-text-secondary)]">The same understanding guides every next step.</p>
        <div className="mt-4 space-y-2">
          {outputs.map((output, index) => (
            <div key={output} className="flex items-center gap-2.5 rounded-md bg-[#fbfcfd] px-3 py-2.5 text-xs text-[var(--marketing-text-secondary)]">
              <span className={`flex size-5 items-center justify-center rounded-full ${index === 4 ? "bg-[var(--clonao-blue)] text-white" : "bg-[var(--clonao-blue-soft)] text-[var(--clonao-blue-hover)]"}`}>
                {index === 4 ? <ArrowRight className="size-3" /> : <Check className="size-3" strokeWidth={2} />}
              </span>
              {output}
            </div>
          ))}
        </div>
      </div>
    </MarketingCard>
  );
}

function LoopStep({ label, active = false }: { label: string; active?: boolean }) {
  return <span className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${active ? "border-[var(--clonao-blue)]/30 bg-[var(--clonao-blue-soft)] text-[var(--clonao-blue-hover)]" : "border-[var(--marketing-border)] bg-white/70 text-[var(--marketing-text-secondary)]"}`}>{label}</span>;
}

function KnowledgeCard() {
  return (
    <MarketingCard className="bg-white/85 p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--marketing-text-muted)]">Knowledge profile</p>
          <h3 className="mt-1 text-base font-semibold text-[var(--marketing-text)]">What Clonao knows about you</h3>
        </div>
        <Sparkles className="size-4 text-[var(--clonao-blue)]" strokeWidth={1.7} />
      </div>
      <div className="mt-5 space-y-3 text-xs">
        <ProfileRow label="Expertise" value="B2B SaaS, product growth, founder-led sales" />
        <ProfileRow label="Strong content themes" value="Founder lessons, product strategy, customer stories" />
        <ProfileRow label="Voice" value="Direct, conversational, evidence-led" />
        <ProfileRow label="Avoid" value="Generic motivational posts" />
      </div>
    </MarketingCard>
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-t border-[var(--marketing-border)] pt-3 sm:grid-cols-[9rem_1fr] sm:gap-4">
      <span className="font-medium text-[var(--marketing-text-muted)]">{label}</span>
      <span className="leading-5 text-[var(--marketing-text-secondary)]">{value}</span>
    </div>
  );
}

function RecommendationCard() {
  return (
    <MarketingCard className="border-[var(--clonao-blue)]/20 bg-[var(--clonao-blue-wash)] p-5 sm:p-6">
      <div className="flex items-center gap-2 text-[var(--clonao-blue-hover)]"><Mic2 className="size-4" strokeWidth={1.7} /><span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em]">Next best action</span></div>
      <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-[var(--marketing-text)]">What should I post next?</h3>
      <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--marketing-text-secondary)]">“You haven’t shared a customer story recently. Your audience responds well to proof-based posts.”</p>
      <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-[var(--marketing-radius-sm)] bg-[var(--clonao-blue)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-[var(--marketing-shadow-button)] transition-colors hover:bg-[var(--clonao-blue-hover)]">Create this post <ChevronRight className="size-4" /></button>
    </MarketingCard>
  );
}
