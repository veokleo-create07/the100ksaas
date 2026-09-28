import { CalendarDays, Check, ChevronDown, FileText, Lightbulb, Plus, Sparkles, TrendingUp } from "lucide-react";
import { MarketingCard } from "@/components/marketing/marketing-card";

const pillars = [
  {
    number: "01",
    name: "Create",
    title: "Create from what you actually know.",
    description: "Turn your expertise, stories, opinions, proof, notes, past posts, and other knowledge into LinkedIn content that feels grounded in you.",
    capabilities: ["Post ideas", "Hooks", "Full posts", "Rewrites", "Repurposing", "Carousel copy", "CTAs", "Source-backed generation"],
    visual: <CreateMockup />,
  },
  {
    number: "02",
    name: "Plan",
    title: "Know what to post next.",
    description: "Clonao turns your content history and goals into a weekly strategy instead of leaving you with an empty calendar.",
    capabilities: ["Content calendar", "Drafts", "Scheduling", "Weekly strategy", "Recommended posting times", "Content mix balance", "Repetition detection", "Content-gap detection"],
    visual: <PlanMockup />,
  },
  {
    number: "03",
    name: "Analyze",
    title: "Turn performance into the next decision.",
    description: "Clonao explains what is working across your topics, hooks, formats, timing, and content patterns — then feeds those insights back into what you should create next.",
    capabilities: ["Impressions", "Engagement", "Follower growth", "Profile visits where available", "Best topics", "Best hooks", "Best formats", "Best posting times"],
    visual: <AnalyzeMockup />,
  },
];

export function ProductPillars() {
  return (
    <section className="border-t border-slate-900/5 py-20 sm:py-28 lg:py-32">
      <div className="max-w-2xl">
        <p className="text-label">The Clonao system</p>
        <h2 className="text-section-heading mt-5">Create. Plan. Analyze. One connected system.</h2>
        <p className="text-body-lg mt-6">Every part of Clonao works from the same understanding of your knowledge, voice, audience, content history, and performance.</p>
      </div>
      <div className="mt-16 space-y-20 sm:mt-24 sm:space-y-28 lg:mt-32 lg:space-y-36">
        {pillars.map((pillar, index) => (
          <article key={pillar.name} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-[var(--clonao-blue-hover)]">
                <span>{pillar.number}</span>
                <span className="h-px w-8 bg-[var(--clonao-blue)]/40" />
                <span className="uppercase">{pillar.name}</span>
              </div>
              <h3 className="mt-5 max-w-lg text-3xl font-semibold tracking-[-0.04em] text-[var(--marketing-text)] sm:text-4xl">{pillar.title}</h3>
              <p className="text-body-lg mt-5 max-w-xl text-base">{pillar.description}</p>
              <ul className="mt-7 grid max-w-lg grid-cols-2 gap-x-5 gap-y-2 text-sm text-[var(--marketing-text-secondary)]">
                {pillar.capabilities.map((capability) => (
                  <li key={capability} className="flex items-center gap-2">
                    <Check className="size-3.5 text-[var(--clonao-blue)]" strokeWidth={2.2} />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>{pillar.visual}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MockupHeader({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--marketing-border)] bg-white px-4 py-3">
      <div className="flex items-center gap-2 text-xs font-semibold text-[var(--marketing-text)]">
        <span className="flex size-6 items-center justify-center rounded-md bg-[var(--clonao-blue-soft)] text-[var(--clonao-blue-hover)]">{icon}</span>
        {label}
      </div>
      <div className="flex gap-1.5">
        <span className="size-1.5 rounded-full bg-slate-200" />
        <span className="size-1.5 rounded-full bg-slate-200" />
        <span className="size-1.5 rounded-full bg-slate-200" />
      </div>
    </div>
  );
}

function CreateMockup() {
  return (
    <MarketingCard className="overflow-hidden bg-[#f6f9fc]">
      <MockupHeader label="Create a post" icon={<FileText className="size-3.5" />} />
      <div className="grid gap-4 p-4 sm:grid-cols-[0.8fr_1.2fr] sm:p-5">
        <div className="rounded-md border border-[var(--marketing-border)] bg-white p-3">
          <div className="flex items-center justify-between">
            <span className="text-[0.65rem] font-semibold text-[var(--marketing-text)]">Knowledge library</span>
            <Plus className="size-3 text-[var(--marketing-text-muted)]" />
          </div>
          <div className="mt-4 space-y-3">
            {["Founder notes", "Past LinkedIn posts", "Customer stories", "Point of view"].map((item, index) => (
              <div key={item} className={`flex items-center gap-2 rounded-sm px-2 py-1.5 text-[0.65rem] ${index === 0 ? "bg-[var(--clonao-blue-wash)] text-[var(--clonao-blue-hover)]" : "text-[var(--marketing-text-muted)]"}`}>
                <span className="size-1.5 rounded-full bg-current opacity-60" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-md border border-[var(--marketing-border)] bg-white p-4">
          <div className="flex items-center justify-between text-[0.65rem] text-[var(--marketing-text-muted)]">
            <span>Draft</span>
            <span className="flex items-center gap-1 text-[var(--clonao-blue-hover)]"><Sparkles className="size-3" /> Grounded in your voice</span>
          </div>
          <p className="mt-5 text-sm font-semibold leading-5 text-[var(--marketing-text)]">The best ideas usually start before you sit down to write.</p>
          <div className="mt-3 space-y-2">
            <div className="h-1.5 w-full rounded-full bg-slate-100" />
            <div className="h-1.5 w-[92%] rounded-full bg-slate-100" />
            <div className="h-1.5 w-[72%] rounded-full bg-slate-100" />
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-[var(--marketing-border)] pt-3">
            <span className="text-[0.65rem] text-[var(--marketing-text-muted)]">Source-backed generation</span>
            <span className="rounded-sm bg-[var(--clonao-blue)] px-2 py-1 text-[0.6rem] font-semibold text-white">Continue</span>
          </div>
        </div>
      </div>
    </MarketingCard>
  );
}

function PlanMockup() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  return (
    <MarketingCard className="overflow-hidden bg-[#f6f9fc]">
      <MockupHeader label="Weekly plan" icon={<CalendarDays className="size-3.5" />} />
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.65rem] text-[var(--marketing-text-muted)]">This week</p>
            <p className="mt-1 text-sm font-semibold text-[var(--marketing-text)]">A balanced content mix</p>
          </div>
          <span className="flex items-center gap-1 rounded-sm border border-[var(--marketing-border)] bg-white px-2 py-1 text-[0.6rem] text-[var(--marketing-text-secondary)]">Weekly <ChevronDown className="size-3" /></span>
        </div>
        <div className="mt-5 grid grid-cols-5 gap-1.5 sm:gap-2">
          {days.map((day, index) => (
            <div key={day} className="min-h-32 rounded-md border border-[var(--marketing-border)] bg-white p-1.5 sm:p-2">
              <p className="text-center text-[0.58rem] font-semibold text-[var(--marketing-text-muted)]">{day}</p>
              <div className="mt-3 space-y-1.5">
                {index === 0 && <div className="rounded-sm bg-[var(--clonao-blue-soft)] p-1.5 text-[0.52rem] leading-3 text-[var(--clonao-blue-hover)]">Point of view</div>}
                {index === 1 && <div className="rounded-sm bg-[#f3f5f7] p-1.5 text-[0.52rem] leading-3 text-[var(--marketing-text-secondary)]">Story</div>}
                {index === 2 && <div className="rounded-sm bg-[var(--clonao-blue-soft)] p-1.5 text-[0.52rem] leading-3 text-[var(--clonao-blue-hover)]">How-to</div>}
                {index === 3 && <div className="rounded-sm border border-dashed border-[var(--marketing-border)] p-1.5 text-[0.52rem] leading-3 text-[var(--marketing-text-muted)]">Draft</div>}
                {index === 4 && <div className="rounded-sm bg-[#f3f5f7] p-1.5 text-[0.52rem] leading-3 text-[var(--marketing-text-secondary)]">Repurpose</div>}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-[0.65rem] text-[var(--marketing-text-muted)]"><Lightbulb className="size-3.5 text-[var(--clonao-blue)]" /> Recommendation: add one proof-led post this week.</div>
      </div>
    </MarketingCard>
  );
}

function AnalyzeMockup() {
  const topics = ["Founder story", "Practical framework", "Industry point of view"];
  return (
    <MarketingCard className="overflow-hidden bg-[#f6f9fc]">
      <MockupHeader label="Performance review" icon={<TrendingUp className="size-3.5" />} />
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.65rem] text-[var(--marketing-text-muted)]">Content patterns</p>
            <p className="mt-1 text-sm font-semibold text-[var(--marketing-text)]">What to learn from your posts</p>
          </div>
          <span className="rounded-sm bg-[var(--clonao-blue-soft)] px-2 py-1 text-[0.6rem] font-semibold text-[var(--clonao-blue-hover)]">Insights</span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-md border border-[var(--marketing-border)] bg-white p-3">
            <p className="text-[0.65rem] font-semibold text-[var(--marketing-text)]">Topics to explore</p>
            <div className="mt-4 space-y-3">
              {topics.map((topic, index) => (
                <div key={topic} className="flex items-center gap-2 text-[0.62rem] text-[var(--marketing-text-secondary)]"><span className={`size-1.5 rounded-full ${index === 0 ? "bg-[var(--clonao-blue)]" : "bg-[#bfd5e7]"}`} />{topic}</div>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-[var(--marketing-border)] bg-white p-3">
            <div className="flex items-center justify-between text-[0.65rem] font-semibold text-[var(--marketing-text)]"><span>Pattern view</span><span className="text-[var(--marketing-text-muted)]">By format</span></div>
            <div className="mt-5 flex h-20 items-end gap-2 border-b border-l border-[var(--marketing-border)] px-3 pb-0 sm:h-24">
              {["h-7", "h-11", "h-9", "h-14", "h-12", "h-16"].map((height, index) => <div key={index} className={`w-full rounded-t-sm ${index > 3 ? "bg-[var(--clonao-blue)]" : "bg-[#cfe4f4]"} ${height}`} />)}
            </div>
            <div className="mt-2 flex justify-between text-[0.55rem] text-[var(--marketing-text-muted)]"><span>Text</span><span>Carousel</span><span>Story</span></div>
          </div>
        </div>
        <div className="mt-4 rounded-md border border-[var(--clonao-blue)]/20 bg-[var(--clonao-blue-wash)] px-3 py-2.5 text-[0.65rem] leading-4 text-[var(--clonao-blue-hover)]">Next decision: build on your strongest point-of-view posts with a practical follow-up.</div>
      </div>
    </MarketingCard>
  );
}
