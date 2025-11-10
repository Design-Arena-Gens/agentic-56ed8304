"use client";

import { useMemo, useState } from "react";
import type { ContentIdea } from "@/lib/data";
import { Filter, Search } from "lucide-react";

export function IdeaBacklog({ ideas }: { ideas: ContentIdea[] }) {
  const [query, setQuery] = useState("");
  const [channel, setChannel] = useState("All");

  const filteredIdeas = useMemo(() => {
    return ideas.filter((idea) => {
      const matchesChannel = channel === "All" || idea.channel === channel;
      const matchesQuery = query
        ? idea.title.toLowerCase().includes(query.toLowerCase()) ||
          idea.hook.toLowerCase().includes(query.toLowerCase())
        : true;
      return matchesChannel && matchesQuery;
    });
  }, [channel, ideas, query]);

  const channels = ["All", ...new Set(ideas.map((idea) => idea.channel))];

  return (
    <section className="card-surface flex flex-col gap-5 p-6">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="section-heading">
            <Filter className="h-5 w-5 text-brand-500" /> Idea Intelligence
          </h2>
          <p className="text-sm text-slate-500">
            AI-scouted narratives mapped to Bharat Life Care personas and channel archetypes.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex w-full items-center sm:w-72">
            <Search className="absolute left-3 h-4 w-4 text-slate-400" />
            <input
              className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm shadow-sm focus:border-brand-500 focus:outline-none"
              placeholder="Search ideas, hooks, angles"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <select
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none sm:w-48"
            value={channel}
            onChange={(event) => setChannel(event.target.value)}
          >
            {channels.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {filteredIdeas.map((idea) => (
          <article key={idea.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-800">{idea.title}</h3>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                {idea.channel}
              </span>
            </div>
            <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">Angle</p>
            <p className="text-sm text-slate-600">{idea.angle}</p>
            <p className="mt-3 text-xs uppercase tracking-wide text-slate-400">Hook</p>
            <p className="text-sm text-slate-700">{idea.hook}</p>
          </article>
        ))}
        {filteredIdeas.length === 0 && (
          <div className="col-span-full rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 p-8 text-center text-sm text-brand-600">
            No ideas match that filter. The AI agent can scout new narratives in a few clicks.
          </div>
        )}
      </div>
    </section>
  );
}
