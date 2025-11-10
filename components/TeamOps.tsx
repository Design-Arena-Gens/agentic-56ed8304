import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { teamMembers } from "@/lib/data";
import { MessageSquare } from "lucide-react";

export function TeamOps() {
  return (
    <section className="card-surface flex flex-col gap-6 p-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h2 className="section-heading">
            <MessageSquare className="h-5 w-5 text-brand-500" /> Command Room
          </h2>
          <p className="text-sm text-slate-500">
            Centralise briefs, approvals, and escalations with AI-assisted summaries for Bharat Life Care stakeholders.
          </p>
        </div>
        <span className="rounded-full bg-saffron-50 px-3 py-1 text-xs font-semibold text-saffron-700">
          Approval SLA • 6h
        </span>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {teamMembers.map((member) => (
          <article key={member.name} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <Avatar>
              <AvatarFallback className="bg-brand-600 text-white">{member.avatar}</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <div>
                <h3 className="text-sm font-semibold text-slate-800">{member.name}</h3>
                <p className="text-xs uppercase tracking-wide text-slate-400">{member.role}</p>
              </div>
              <p className="text-sm text-slate-600">{member.focus}</p>
              <div className="rounded-xl bg-brand-50 px-3 py-2 text-xs text-brand-700">
                AI Update: Ready-to-review assets summarised and tagged in knowledge base.
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
