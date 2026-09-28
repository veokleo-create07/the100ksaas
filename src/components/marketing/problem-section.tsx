const problems = [
  {
    title: "Generic writing",
    description: "AI can sound polished without sounding like you.",
  },
  {
    title: "Disconnected planning",
    description: "Calendars tell you when to post, not what your personal brand actually needs next.",
  },
  {
    title: "Analytics without direction",
    description: "Dashboards show numbers but rarely tell you what to do with them.",
  },
];

export function ProblemSection() {
  return (
    <section className="border-t border-slate-900/5 py-20 sm:py-28 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <p className="text-label">Why Clonao</p>
          <h2 className="text-section-heading mt-5 max-w-lg">AI can write a post. It still doesn’t know you.</h2>
        </div>
        <div>
          <p className="text-body-lg max-w-2xl">
            Most tools generate content from prompts, schedule posts, or show analytics in isolation. Clonao connects your real knowledge, your content strategy, and your performance so each post gets more relevant over time.
          </p>
          <div className="mt-10 grid gap-0 border-y border-[var(--marketing-border)] sm:grid-cols-3 sm:divide-x sm:divide-[var(--marketing-border)]">
            {problems.map((problem) => (
              <div key={problem.title} className="border-b border-[var(--marketing-border)] py-5 last:border-0 sm:border-0 sm:px-5 sm:first:pl-0 sm:last:pr-0">
                <h3 className="text-sm font-semibold text-[var(--marketing-text)]">{problem.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--marketing-text-secondary)]">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
