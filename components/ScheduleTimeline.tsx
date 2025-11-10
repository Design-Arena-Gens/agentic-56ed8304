import { CalendarCheck2, CheckCircle2, Clock, Pause, Play } from "lucide-react";

type Event = {
  id: string;
  title: string;
  channel: string;
  status: "scheduled" | "in-flight" | "paused";
  publishAt: string;
  owner: string;
};

const events: Event[] = [
  {
    id: "evt-01",
    title: "Doctor decoded: hypertension myths",
    channel: "YouTube",
    status: "in-flight",
    publishAt: "Today • 8:00 PM IST",
    owner: "Sneha"
  },
  {
    id: "evt-02",
    title: "WhatsApp broadcast: heart-healthy meals",
    channel: "WhatsApp",
    status: "scheduled",
    publishAt: "Tomorrow • 6:30 PM IST",
    owner: "Dev"
  },
  {
    id: "evt-03",
    title: "LinkedIn carousel: corporate wellness playbook",
    channel: "LinkedIn",
    status: "scheduled",
    publishAt: "Friday • 9:00 AM IST",
    owner: "Ananya"
  },
  {
    id: "evt-04",
    title: "Instagram live: cardiologist AMA",
    channel: "Instagram",
    status: "paused",
    publishAt: "Awaiting legal approval",
    owner: "Ravi"
  }
];

const statusMeta = {
  scheduled: { label: "Scheduled", icon: CalendarCheck2, tone: "text-emerald-600", pill: "bg-emerald-50" },
  "in-flight": { label: "Flowing", icon: Play, tone: "text-brand-600", pill: "bg-brand-50" },
  paused: { label: "Paused", icon: Pause, tone: "text-amber-600", pill: "bg-amber-50" }
} satisfies Record<Event["status"], { label: string; icon: typeof CalendarCheck2; tone: string; pill: string }>;

export function ScheduleTimeline() {
  return (
    <section className="card-surface flex flex-col gap-6 p-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h2 className="section-heading">
            <Clock className="h-5 w-5 text-brand-500" /> Intelligent Scheduler
          </h2>
          <p className="text-sm text-slate-500">
            Multi-channel deployment with AI-optimised publish windows and guardrails.
          </p>
        </div>
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
          92% slots auto-optimised
        </span>
      </header>
      <ol className="space-y-4">
        {events.map((event) => {
          const meta = statusMeta[event.status];
          const Icon = meta.icon;
          return (
            <li key={event.id} className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold text-slate-800">{event.title}</h3>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${meta.pill} ${meta.tone}`}>
                    {meta.label}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-wide text-slate-400">{event.channel}</p>
                <p className="text-sm text-slate-600">{event.publishAt}</p>
                <p className="text-xs text-slate-500">Owner • {event.owner}</p>
              </div>
              <CheckCircle2 className="mt-2 h-5 w-5 text-emerald-500" aria-hidden />
            </li>
          );
        })}
      </ol>
    </section>
  );
}
