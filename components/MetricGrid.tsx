import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metric } from "@/lib/data";

function TrendIcon({ trend }: { trend: Metric["trend"] }) {
  if (trend === "up") {
    return <ArrowUpRight className="h-4 w-4 text-emerald-500" aria-hidden />;
  }
  if (trend === "down") {
    return <ArrowDownRight className="h-4 w-4 text-rose-500" aria-hidden />;
  }
  return <ArrowRight className="h-4 w-4 text-slate-400" aria-hidden />;
}

export function MetricGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <article
          key={metric.id}
          className="card-surface relative overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-start justify-between">
            <h3 className="text-sm font-medium text-slate-500">{metric.label}</h3>
            <TrendIcon trend={metric.trend} />
          </div>
          <p className="mt-4 text-3xl font-semibold text-slate-900">{metric.value}</p>
          <p className="mt-2 text-sm text-slate-500">{metric.change}</p>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-500/70 via-saffron-400/70 to-brand-500/70" />
        </article>
      ))}
    </section>
  );
}
