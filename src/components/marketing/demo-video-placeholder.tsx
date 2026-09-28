import { Play, Sparkles } from "lucide-react";

export function DemoVideoPlaceholder() {
  return (
    <div aria-label="Clonao product demo preview" className="relative aspect-video w-full overflow-hidden rounded-[var(--marketing-radius-lg)] border border-slate-900/10 bg-white shadow-[0_18px_45px_rgb(34_73_109_/_0.13)]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8fbfd_0%,#ffffff_100%)] p-3 sm:p-5">
        <div className="flex h-full overflow-hidden rounded-[var(--marketing-radius-md)] border border-[var(--marketing-border)] bg-[#f5f8fb]">
          <aside className="hidden w-[22%] border-r border-[var(--marketing-border)] bg-white p-3 sm:block">
            <div className="mb-8 h-2.5 w-14 rounded-sm bg-[#17324d]" />
            <div className="space-y-3">
              <div className="h-2 w-16 rounded-sm bg-[#dceeff]" />
              <div className="h-2 w-20 rounded-sm bg-[#e6edf3]" />
              <div className="h-2 w-14 rounded-sm bg-[#e6edf3]" />
            </div>
          </aside>
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex items-center justify-between border-b border-[var(--marketing-border)] bg-white px-3 py-2 sm:px-5 sm:py-3">
              <div className="h-2 w-20 rounded-sm bg-[#c9d9e7] sm:w-28" />
              <div className="size-5 rounded-full bg-[#c2d9eb] sm:size-6" />
            </div>
            <div className="grid flex-1 grid-cols-2 gap-2 p-3 sm:gap-4 sm:p-5">
              <div className="col-span-2 rounded-[var(--marketing-radius-sm)] border border-[var(--marketing-border)] bg-white p-3 sm:p-5">
                <div className="mb-4 h-2 w-24 rounded-sm bg-[#c9d9e7] sm:w-36" />
                <div className="h-10 w-full rounded-sm bg-[#edf5fb] sm:h-16" />
              </div>
              <div className="rounded-[var(--marketing-radius-sm)] border border-[var(--marketing-border)] bg-white p-3 sm:p-4">
                <div className="mb-3 h-2 w-14 rounded-sm bg-[#c9d9e7] sm:w-20" />
                <div className="h-8 rounded-sm bg-[#e7f3ff] sm:h-12" />
              </div>
              <div className="rounded-[var(--marketing-radius-sm)] border border-[var(--marketing-border)] bg-white p-3 sm:p-4">
                <div className="mb-3 h-2 w-16 rounded-sm bg-[#c9d9e7] sm:w-24" />
                <div className="h-8 rounded-sm bg-[#f1f5f8] sm:h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 sm:top-7">
        <div className="demo-caption demo-caption-create flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--marketing-border)] bg-white/90 px-2.5 py-1.5 text-[0.6rem] font-medium text-[var(--marketing-text-secondary)] shadow-sm sm:px-3 sm:text-xs">
          <Sparkles className="size-3 text-[var(--clonao-blue)]" /> Drafting from your knowledge
        </div>
        <div className="demo-caption demo-caption-plan flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--marketing-border)] bg-white/90 px-2.5 py-1.5 text-[0.6rem] font-medium text-[var(--marketing-text-secondary)] shadow-sm sm:px-3 sm:text-xs">
          <Sparkles className="size-3 text-[var(--clonao-blue)]" /> Shaping your weekly plan
        </div>
        <div className="demo-caption demo-caption-analyze flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--marketing-border)] bg-white/90 px-2.5 py-1.5 text-[0.6rem] font-medium text-[var(--marketing-text-secondary)] shadow-sm sm:px-3 sm:text-xs">
          <Sparkles className="size-3 text-[var(--clonao-blue)]" /> Finding your next decision
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-[var(--clonao-blue)] text-white shadow-[var(--marketing-shadow-button)] transition-transform hover:scale-105 sm:size-14">
          <Play className="ml-0.5 size-5 fill-current sm:size-6" strokeWidth={1.5} />
        </div>
      </div>
      <div className="absolute bottom-3 left-3 flex items-center gap-2 sm:bottom-5 sm:left-5">
        <div className="size-8 rounded-full border-2 border-white bg-[#b5cfe4] shadow-sm sm:size-9" aria-label="Founder face-cam placeholder" />
        <div className="hidden h-1 w-16 overflow-hidden rounded-full bg-slate-300/70 sm:block">
          <div className="h-full w-1/3 rounded-full bg-[var(--clonao-blue)]" />
        </div>
      </div>
      <div className="absolute bottom-3 right-3 h-1 w-20 overflow-hidden rounded-full bg-slate-300/70 sm:bottom-5 sm:right-5 sm:w-28">
        <div className="demo-progress h-full w-1/4 rounded-full bg-[var(--clonao-blue)]" />
      </div>
    </div>
  );
}
