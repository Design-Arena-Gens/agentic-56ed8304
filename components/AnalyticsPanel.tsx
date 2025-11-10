import { Activity, BarChart3, LineChart } from "lucide-react";

const performance = [
  { label: "Healthcare video views", value: 480000, delta: "+38%" },
  { label: "Clinic appointment conversions", value: 1280, delta: "+19%" },
  { label: "Engaged caregivers", value: 72000, delta: "+24%" }
];

const sentimentTrend = [68, 74, 79, 83, 90, 92, 93];

export function AnalyticsPanel() {
  const max = Math.max(...sentimentTrend);

  return (
    <section className="card-surface grid gap-6 p-6 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <header className="mb-5 flex items-start justify-between">
          <div>
            <h2 className="section-heading">
              <LineChart className="h-5 w-5 text-brand-500" /> AI Insight Console
            </h2>
            <p className="text-sm text-slate-500">
              Predictive analytics merges channel telemetry with clinical campaign KPIs.
            </p>
          </div>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
            Forecast horizon • 4 weeks
          </span>
        </header>
        <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-brand-50/40 to-saffron-50/30 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">Sentiment trajectory</p>
          <div className="absolute inset-x-0 bottom-5 flex h-40 items-end gap-3 px-4">
            {sentimentTrend.map((value, index) => (
              <div key={index} className="flex-1">
                <div
                  className="rounded-t-xl bg-brand-500/80"
                  style={{ height: `${(value / max) * 100}%` }}
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-3 left-5 text-xs font-semibold text-brand-600">
            Sentiment ↑ {sentimentTrend[sentimentTrend.length - 1]}%
          </div>
        </div>
      </div>
      <aside className="space-y-4 lg:col-span-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <Activity className="h-10 w-10 rounded-full bg-brand-50 p-2 text-brand-600" />
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Focus metric</p>
              <p className="text-base font-semibold text-slate-800">Patient conversion uplift</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            AI agent recommends doubling physician Q&A snippets and running regional WhatsApp follow-ups to sustain the current 19% uplift in clinic bookings.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <BarChart3 className="h-4 w-4 text-brand-500" /> Snapshot
          </h3>
          <ul className="mt-3 space-y-3 text-sm text-slate-600">
            {performance.map((item) => (
              <li key={item.label} className="flex items-center justify-between">
                <span className="max-w-[65%] leading-relaxed">{item.label}</span>
                <span className="font-semibold text-emerald-600">{item.delta}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
