import type { WorkflowStage } from "@/lib/data";
import { BadgeCheck, Clock4 } from "lucide-react";

const statusMap: Record<WorkflowStage["items"][number]["status"], { label: string; tone: string }> = {
  planning: { label: "Planning", tone: "bg-brand-50 text-brand-700" },
  writing: { label: "Production", tone: "bg-saffron-50 text-saffron-700" },
  review: { label: "In Review", tone: "bg-amber-50 text-amber-700" },
  ready: { label: "Scheduled", tone: "bg-emerald-50 text-emerald-700" }
};

export function WorkflowBoard({ stages }: { stages: WorkflowStage[] }) {
  return (
    <section className="card-surface relative">
      <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5">
        <div>
          <h2 className="section-heading">AI-Orchestrated Workflow</h2>
          <p className="text-sm text-slate-500">
            Real-time visibility into strategy, production, compliance, and optimisation streams.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          <Clock4 className="h-4 w-4" /> SLA target: 72h end-to-end
        </span>
      </div>
      <div className="grid gap-6 px-6 py-6 lg:grid-cols-4">
        {stages.map((stage) => (
          <div key={stage.id} className="flex flex-col gap-4 rounded-2xl border border-slate-200/70 bg-slate-50/60 p-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-800">{stage.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{stage.description}</p>
            </div>
            <div className="space-y-3">
              {stage.items.map((item) => {
                const tone = statusMap[item.status];
                return (
                  <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-slate-800">{item.title}</h4>
                      <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${tone.tone}`}>
                        <BadgeCheck className="h-3.5 w-3.5" /> {tone.label}
                      </span>
                    </div>
                    <dl className="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-500">
                      <div>
                        <dt className="uppercase tracking-wide text-slate-400">Owner</dt>
                        <dd className="font-medium text-slate-700">{item.owner}</dd>
                      </div>
                      <div>
                        <dt className="uppercase tracking-wide text-slate-400">Deadline</dt>
                        <dd className="font-medium text-slate-700">{item.deadline}</dd>
                      </div>
                    </dl>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
