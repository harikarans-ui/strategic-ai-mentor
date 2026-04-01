import { useState } from "react";
import AppSidebar from "@/components/AppSidebar";
import DashboardOverview from "@/components/DashboardOverview";
import InfluenceEnginePanel from "@/components/InfluenceEnginePanel";
import LifecycleEnginePanel from "@/components/LifecycleEnginePanel";
import PersonalizationEnginePanel from "@/components/PersonalizationEnginePanel";
import CustomerSatisfactionPanel from "@/components/CustomerSatisfactionPanel";
import RevenueImpactPanel from "@/components/RevenueImpactPanel";
import AICopilotPanel from "@/components/AICopilotPanel";
import SmartJourneysPanel from "@/components/SmartJourneysPanel";
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
  influence: <InfluenceEnginePanel />,
  lifecycle: <LifecycleEnginePanel />,
  personalization: <PersonalizationEnginePanel />,
  customers: <CustomerSatisfactionPanel />,
  revenue: <RevenueImpactPanel />,
  copilot: <AICopilotPanel />,
  journeys: <SmartJourneysPanel />,
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
