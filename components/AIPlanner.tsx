"use client";

import { useMemo, useState } from "react";
import { Lightbulb, Sparkles, Wand2 } from "lucide-react";
import type { ContentIdea } from "@/lib/data";

const toneOptions = [
  { id: "compassion", label: "Compassionate & reassuring" },
  { id: "data", label: "Data-backed & expert" },
  { id: "energetic", label: "Energetic & motivational" },
  { id: "regional", label: "Regional & conversational" }
];

const objectivePrompts = {
  awareness: "Spotlight preventive protocols and flagship clinics",
  trust: "Humanise doctor expertise and patient journeys",
  acquisition: "Drive appointment bookings and wellness plan sign-ups",
  retention: "Nurture existing patients with personalised care nudges"
} satisfies Record<string, string>;

export function AIPlanner({ ideas }: { ideas: ContentIdea[] }) {
  const [selectedTone, setSelectedTone] = useState(toneOptions[0].id);
  const [objective, setObjective] = useState<keyof typeof objectivePrompts>("awareness");
  const [primaryChannel, setPrimaryChannel] = useState("Instagram");

  const generatedBrief = useMemo(() => {
    const idea = ideas[0];
    const toneDescriptor = toneOptions.find((t) => t.id === selectedTone)?.label ?? "Compassionate";
    const objectiveSummary = objectivePrompts[objective];

    return {
      idea,
      toneDescriptor,
      objectiveSummary,
      caption: `This week Bharat Life Care spotlights ${idea.hook.toLowerCase()}. Lead with a ${toneDescriptor.toLowerCase()} voice. Anchor each frame with measurable habits and end with a proactive call-to-action to book a preventive screening.`,
      callToAction: `CTA: Book a 1:1 preventive care consult via the Bharat Life Care app (link in bio). Emphasise ${primaryChannel} exclusives like personalised follow-up chat.`
    };
  }, [ideas, objective, primaryChannel, selectedTone]);

  return (
    <section className="card-surface flex flex-col gap-6 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="section-heading">
            <Sparkles className="h-5 w-5 text-brand-500" /> AI Campaign Blueprint
          </h2>
          <p className="text-sm text-slate-500">
            Calibrate tone, objective and channel to generate a ready-to-ship creative brief in seconds.
          </p>
        </div>
        <Wand2 className="h-10 w-10 rounded-full bg-brand-50 p-2 text-brand-600" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Campaign Objective</label>
            <select
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-500 focus:outline-none"
              value={objective}
              onChange={(event) => setObjective(event.target.value as keyof typeof objectivePrompts)}
            >
              {Object.entries(objectivePrompts).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Brand Tone</span>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {toneOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSelectedTone(option.id)}
                  className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-brand-500/40 ${
                    option.id === selectedTone
                      ? "border-brand-500 bg-brand-50 text-brand-700 shadow-sm"
                      : "border-slate-200 bg-white text-slate-600 hover:border-brand-200"
                  }`}
                >
                  <Lightbulb className="h-4 w-4" /> {option.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Primary Channel</label>
            <input
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-500 focus:outline-none"
              value={primaryChannel}
              onChange={(event) => setPrimaryChannel(event.target.value)}
            />
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-brand-500">AI Brief</p>
              <h3 className="mt-1 text-lg font-semibold text-brand-800">{generatedBrief.idea.title}</h3>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-600 shadow-sm">
              {generatedBrief.idea.channel}
            </span>
          </header>
          <dl className="grid gap-3 text-sm text-brand-700">
            <div>
              <dt className="font-semibold uppercase tracking-wide text-xs text-brand-500">Angle</dt>
              <dd>{generatedBrief.idea.angle}</dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-wide text-xs text-brand-500">Objective</dt>
              <dd>{generatedBrief.objectiveSummary}</dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-wide text-xs text-brand-500">Tone</dt>
              <dd>{generatedBrief.toneDescriptor}</dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-wide text-xs text-brand-500">Caption Blueprint</dt>
              <dd className="leading-relaxed text-brand-900">{generatedBrief.caption}</dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-wide text-xs text-brand-500">Call-to-action</dt>
              <dd>{generatedBrief.callToAction}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
