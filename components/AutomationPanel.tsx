import { automations } from "@/lib/data";
import { ShieldCheck, Workflow } from "lucide-react";

export function AutomationPanel() {
  return (
    <section className="card-surface flex flex-col gap-6 p-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h2 className="section-heading">
            <Workflow className="h-5 w-5 text-brand-500" /> Automation Control Tower
          </h2>
          <p className="text-sm text-slate-500">
            Govern AI-powered guardrails and personalisation engines aligned to Bharat Life Care compliance policy.
          </p>
        </div>
        <ShieldCheck className="h-10 w-10 rounded-full bg-brand-50 p-2 text-brand-600" />
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {automations.map((automation) => (
          <article key={automation.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-800">{automation.name}</h3>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  automation.status === "active"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-amber-50 text-amber-600"
                }`}
              >
                {automation.status === "active" ? "Active" : "Paused"}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{automation.description}</p>
            <div className="mt-4 rounded-xl bg-brand-50/60 px-3 py-2 text-xs text-brand-700">
              AI Insight: Impact score 8.6/10 • Last tuned 3 days ago.
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
