import type { Campaign } from "@/lib/data";
import { CalendarDays, Target } from "lucide-react";

export function CampaignPlanner({ campaigns }: { campaigns: Campaign[] }) {
  return (
    <section className="card-surface flex flex-col gap-5 p-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h2 className="section-heading">
            <Target className="h-5 w-5 text-brand-500" /> Campaign Pipeline
          </h2>
          <p className="text-sm text-slate-500">
            Align hero narratives, launch dates, and KPI focus for the upcoming quarter.
          </p>
        </div>
        <CalendarDays className="h-10 w-10 rounded-full bg-saffron-50 p-2 text-saffron-600" />
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {campaigns.map((campaign) => (
          <article key={campaign.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">{campaign.title}</h3>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Launch • {new Date(campaign.launchDate).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                  })}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  campaign.status === "live"
                    ? "bg-emerald-50 text-emerald-600"
                    : campaign.status === "draft"
                      ? "bg-saffron-50 text-saffron-600"
                      : "bg-slate-200 text-slate-600"
                }`}
              >
                {campaign.status === "live"
                  ? "Live"
                  : campaign.status === "completed"
                    ? "Completed"
                    : "Draft"}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{campaign.summary}</p>
            <div className="mt-4 rounded-xl bg-brand-50/60 px-3 py-2 text-xs text-brand-700">
              KPI Focus: {campaign.focus}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
