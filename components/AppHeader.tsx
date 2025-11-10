import { BrainCircuit, CalendarRange, Sparkles } from "lucide-react";

export function AppHeader() {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-500 via-brand-600 to-saffron-500 px-8 py-10 text-white shadow-glow">
      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-medium tracking-wide">
            <Sparkles className="h-4 w-4" /> Agentic Command Center
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Social Media Manager AI for Bharat Life Care
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-white/90">
            Orchestrate strategy, content, compliance, automation, and insights from a single agent hub. Designed for regulated healthcare storytelling, tuned to Bharat Life Care&apos;s voice.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-medium text-white/90">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
              <BrainCircuit className="h-4 w-4" /> AI Co-pilot
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
              <CalendarRange className="h-4 w-4" /> Adaptive Scheduling
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
              Real-time Compliance Guardrails
            </span>
          </div>
        </div>
        <aside className="flex w-full max-w-md flex-col gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-widest text-white/70">Weekly Impact</p>
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white/80">
              Updated 12 min ago
            </span>
          </div>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-black/10 p-4">
              <dt className="text-xs uppercase tracking-wide text-white/60">Publish velocity</dt>
              <dd className="text-2xl font-semibold">28 assets</dd>
              <p className="text-xs text-emerald-200">AI-authored 64%</p>
            </div>
            <div className="rounded-xl bg-black/10 p-4">
              <dt className="text-xs uppercase tracking-wide text-white/60">Sentiment</dt>
              <dd className="text-2xl font-semibold">92%</dd>
              <p className="text-xs text-emerald-200">No crises detected</p>
            </div>
            <div className="rounded-xl bg-black/10 p-4 sm:col-span-2">
              <dt className="text-xs uppercase tracking-wide text-white/60">This week&apos;s narrative arc</dt>
              <dd className="mt-2 text-sm leading-relaxed text-white/90">
                Preventive care journey featuring Dr. Nair&apos;s heart health protocol, mapped to Instagram reels, LinkedIn longform, and WhatsApp nurture drops.
              </dd>
            </div>
          </dl>
        </aside>
      </div>
      <div className="absolute -right-48 top-10 h-72 w-72 rounded-full bg-white/25 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 left-20 h-60 w-60 rounded-full bg-saffron-200/30 blur-3xl" aria-hidden />
    </header>
  );
}
