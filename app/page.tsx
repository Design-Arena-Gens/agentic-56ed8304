import { AppHeader } from "@/components/AppHeader";
import { AIPlanner } from "@/components/AIPlanner";
import { AnalyticsPanel } from "@/components/AnalyticsPanel";
import { AutomationPanel } from "@/components/AutomationPanel";
import { CampaignPlanner } from "@/components/CampaignPlanner";
import { ChannelBenchmarks } from "@/components/ChannelBenchmarks";
import { IdeaBacklog } from "@/components/IdeaBacklog";
import { MetricGrid } from "@/components/MetricGrid";
import { ScheduleTimeline } from "@/components/ScheduleTimeline";
import { TeamOps } from "@/components/TeamOps";
import { WorkflowBoard } from "@/components/WorkflowBoard";
import { campaigns, ideas, metrics, workflow } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-10 lg:px-6">
      <AppHeader />
      <MetricGrid metrics={metrics} />
      <WorkflowBoard stages={workflow} />
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-8">
          <AIPlanner ideas={ideas} />
          <CampaignPlanner campaigns={campaigns} />
        </div>
        <div className="lg:col-span-2 space-y-8">
          <ScheduleTimeline />
          <AutomationPanel />
        </div>
      </div>
      <AnalyticsPanel />
      <IdeaBacklog ideas={ideas} />
      <div className="grid gap-8 lg:grid-cols-2">
        <TeamOps />
        <ChannelBenchmarks />
      </div>
    </main>
  );
}
