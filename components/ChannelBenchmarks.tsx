import { channelBenchmarks } from "@/lib/data";
import { RadioTower } from "lucide-react";

const statusTone = {
  green: "bg-emerald-50 text-emerald-600",
  amber: "bg-amber-50 text-amber-600",
  red: "bg-rose-50 text-rose-600"
} as const;

export function ChannelBenchmarks() {
  return (
    <section className="card-surface flex flex-col gap-6 p-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h2 className="section-heading">
            <RadioTower className="h-5 w-5 text-brand-500" /> Channel Operating System
          </h2>
          <p className="text-sm text-slate-500">
            AI learns optimal cadences, timing and AI-to-human ratios for every platform.
          </p>
        </div>
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
          Updated nightly
        </span>
      </header>
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50">
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="px-4 py-3">Channel</th>
              <th className="px-4 py-3">Cadence</th>
              <th className="px-4 py-3">Best Time</th>
              <th className="px-4 py-3">AI Assist Ratio</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {channelBenchmarks.map((row) => (
              <tr key={row.channel} className="bg-white transition hover:bg-brand-50/50">
                <td className="px-4 py-3 font-semibold text-slate-700">{row.channel}</td>
                <td className="px-4 py-3 text-slate-600">{row.cadence}</td>
                <td className="px-4 py-3 text-slate-600">{row.bestTime}</td>
                <td className="px-4 py-3 text-slate-600">{row.aiAssistRatio}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusTone[row.status]}`}>
                    {row.status === "green" ? "Optimised" : row.status === "amber" ? "Needs tuning" : "Risk"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
