import { Activity, DollarSign, Mail, MousePointerClick, Sparkles, Users } from "lucide-react";
import MetricCard from "./MetricCard";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const engagementData = [
  { day: "Mon", opens: 2400, clicks: 820 },
  { day: "Tue", opens: 3200, clicks: 1100 },
  { day: "Wed", opens: 2900, clicks: 950 },
  { day: "Thu", opens: 3800, clicks: 1400 },
  { day: "Fri", opens: 3100, clicks: 1050 },
  { day: "Sat", opens: 1800, clicks: 620 },
  { day: "Sun", opens: 2100, clicks: 710 },
];

const recentActivity = [
  { action: "AI optimized send time", campaign: "Spring Newsletter", time: "2 min ago", type: "ai" as const },
  { action: "Churn risk detected", campaign: "42 contacts flagged", time: "15 min ago", type: "warning" as const },
  { action: "A/B test winner selected", campaign: "Product Launch", time: "1 hr ago", type: "success" as const },
  { action: "New automation triggered", campaign: "Welcome Journey", time: "3 hrs ago", type: "info" as const },
];

const activityColors = {
  ai: "bg-accent/10 text-accent",
  warning: "bg-warning/10 text-warning",
  success: "bg-success/10 text-success",
  info: "bg-info/10 text-info",
};

const DashboardOverview = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Welcome back, Sarah</h1>
          <p className="text-sm text-muted-foreground mt-1">Here's what your AI co-pilot found today</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-glass border border-border">
          <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
          <span className="text-sm text-foreground">3 AI insights ready</span>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Total Subscribers" value="24,812" change={8.2} icon={Users} variant="primary" />
        <MetricCard title="Open Rate" value="32.4%" change={5.1} icon={Mail} variant="accent" />
        <MetricCard title="Click Rate" value="4.8%" change={-2.3} icon={MousePointerClick} variant="warning" />
        <MetricCard title="Revenue" value="$18.2K" change={12.7} icon={DollarSign} variant="primary" />
      </div>

      {/* Chart + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-foreground">Weekly Engagement</span>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary" /> Opens</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent" /> Clicks</span>
            </div>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={engagementData}>
                <defs>
                  <linearGradient id="openGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(160, 84%, 52%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(160, 84%, 52%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="clickGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(270, 80%, 65%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(270, 80%, 65%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="hsl(215, 12%, 50%)" fontSize={12} />
                <YAxis stroke="hsl(215, 12%, 50%)" fontSize={12} />
                <Tooltip contentStyle={{ background: "hsl(225, 20%, 9%)", border: "1px solid hsl(225, 15%, 16%)", borderRadius: "8px", color: "hsl(210, 20%, 92%)" }} />
                <Area type="monotone" dataKey="opens" stroke="hsl(160, 84%, 52%)" fill="url(#openGrad)" strokeWidth={2} />
                <Area type="monotone" dataKey="clicks" stroke="hsl(270, 80%, 65%)" fill="url(#clickGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">AI Activity Feed</span>
          </div>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${activityColors[item.type].split(" ")[0].replace("/10", "")}`}
                  style={{ backgroundColor: item.type === "ai" ? "hsl(270,80%,65%)" : item.type === "warning" ? "hsl(38,92%,60%)" : item.type === "success" ? "hsl(160,84%,52%)" : "hsl(210,90%,60%)" }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground">{item.action}</p>
                  <p className="text-xs text-muted-foreground">{item.campaign}</p>
                </div>
                <span className="text-xs text-muted-foreground flex-shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
