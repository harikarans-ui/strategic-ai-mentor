import { useState } from "react";
import AppSidebar from "@/components/AppSidebar";
import DashboardOverview from "@/components/DashboardOverview";
import AICopilotPanel from "@/components/AICopilotPanel";
import ContentStudioPanel from "@/components/ContentStudioPanel";
import SmartJourneysPanel from "@/components/SmartJourneysPanel";
import PredictiveAnalyticsPanel from "@/components/PredictiveAnalyticsPanel";
import DeliverabilityPanel from "@/components/DeliverabilityPanel";
import { Construction } from "lucide-react";

const ComingSoon = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center py-32 text-center animate-fade-in">
    <Construction className="w-12 h-12 text-muted-foreground mb-4" />
    <h2 className="text-xl font-display font-bold text-foreground">{title}</h2>
    <p className="text-sm text-muted-foreground mt-2">This section is coming soon</p>
  </div>
);

const sections: Record<string, React.ReactNode> = {
  dashboard: <DashboardOverview />,
  copilot: <AICopilotPanel />,
  content: <ContentStudioPanel />,
  journeys: <SmartJourneysPanel />,
  analytics: <PredictiveAnalyticsPanel />,
  deliverability: <DeliverabilityPanel />,
  cdp: <ComingSoon title="Customer Data Platform" />,
  campaigns: <ComingSoon title="Campaign Manager" />,
  sms: <ComingSoon title="SMS & Chat" />,
  settings: <ComingSoon title="Settings" />,
};

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="ml-60 p-8 transition-all duration-300">
        {sections[activeSection] || <DashboardOverview />}
      </main>
    </div>
  );
};

export default Index;
