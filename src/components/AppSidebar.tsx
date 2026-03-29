import { useState } from "react";
import {
  BarChart3, Brain, FileText, Gauge, Home, Mail, MessageSquare,
  MousePointerClick, Route, Settings, Sparkles, Users, ChevronLeft, ChevronRight
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Dashboard", id: "dashboard" },
  { icon: Brain, label: "AI Co-pilot", id: "copilot" },
  { icon: FileText, label: "Content Studio", id: "content" },
  { icon: Route, label: "Smart Journeys", id: "journeys" },
  { icon: BarChart3, label: "Predictive Analytics", id: "analytics" },
  { icon: Gauge, label: "Deliverability", id: "deliverability" },
  { icon: Users, label: "Customer CDP", id: "cdp" },
  { icon: Mail, label: "Campaigns", id: "campaigns" },
  { icon: MessageSquare, label: "SMS & Chat", id: "sms" },
];

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (id: string) => void;
}

const AppSidebar = ({ activeSection, onSectionChange }: AppSidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border flex flex-col z-50 transition-all duration-300 ${
        collapsed ? "w-16" : "w-60"
      }`}
    >
      <div className="flex items-center gap-2.5 px-4 h-16 border-b border-sidebar-border">
        <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
          <Mail className="w-4 h-4 text-accent-foreground" />
        </div>
        {!collapsed && (
          <span className="font-display font-bold text-white text-lg tracking-tight">
            Constant<span className="text-sidebar-primary"> Contact</span>
          </span>
        )}
      </div>

      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
              {isActive && !collapsed && (
                <Sparkles className="w-3 h-3 ml-auto animate-pulse-glow" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-2 border-t border-sidebar-border">
        <button
          onClick={() => onSectionChange("settings")}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-all"
        >
          <Settings className="w-4 h-4 flex-shrink-0" />
          {!collapsed && <span>Settings</span>}
        </button>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center py-2 mt-1 rounded-lg text-sidebar-foreground hover:text-white transition-all"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;
