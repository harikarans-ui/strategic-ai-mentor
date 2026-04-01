import { Activity, DollarSign, Network, Heart, Sparkles, Users, TrendingUp, Zap } from "lucide-react";
import MetricCard from "./MetricCard";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const revenueData = [
  { month: "Jan", referral: 190, reengagement: 1380, service: 350 },
  { month: "Feb", referral: 210, reengagement: 1420, service: 360 },
  { month: "Mar", referral: 240, reengagement: 1510, service: 380 },
  { month: "Apr", referral: 280, reengagement: 1600, service: 400 },
  { month: "May", referral: 310, reengagement: 1720, service: 420 },
  { month: "Jun", referral: 350, reengagement: 1850, service: 450 },
];

const aiActions = [
  { action: "VIP referral triggered", detail: "Maria — Influence Score: 1,840", time: "2 min ago", type: "influence" as const },
  { action: "Lease-end re-engagement sent", detail: "David — 67 days to expiry", time: "12 min ago", type: "lifecycle" as const },
  { action: "Personalized message delivered", detail: "Sarah — 3-year anniversary", time: "28 min ago", type: "personal" as const },
  { action: "High-value lead detected", detail: "Job promotion signal via LinkedIn", time: "1 hr ago", type: "influence" as const },
  { action: "Service booking triggered", detail: "42 customers due for check-up", time: "2 hrs ago", type: "lifecycle" as const },
];

const typeDotColors: Record<string, string> = {
  influence: "hsl(220, 78%, 44%)",
  lifecycle: "hsl(36, 90%, 55%)",
  personal: "hsl(152, 60%, 42%)",
};

const DashboardOverview = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">AI Joe Command Center</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Scaling Joe Girard's principles — every customer feels like the most important person in the world
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5 border border-primary/20">
          <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
          <span className="text-sm text-foreground font-medium">128× ROI this quarter</span>
        </div>
      </div>

      {/* Vision Banner */}
      <div className="bg-gradient-primary rounded-xl p-5 text-primary-foreground">
        <p className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-1">2026 Vision</p>
        <p className="text-lg font-display font-bold">Marketing, solved. For every small business and solopreneur, everywhere.</p>
        <p className="text-sm opacity-80 mt-1">Do-it-for-you AI that acquires, retains, and grows your best customers automatically.</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Total Customers" value="40,000" change={12.4} icon={Users} variant="primary" />
        <MetricCard title="Influence Network" value="2.8M" change={18.2} icon={Network} variant="accent" />
        <MetricCard title="AI Messages / Mo" value="1.3M" change={31.0} icon={Heart} variant="warning" />
        <MetricCard title="Incremental Revenue" value="$23.1M" change={128.0} icon={DollarSign} variant="primary" />
      </div>

      {/* Three Engines Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Network className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground">Referral Engine</span>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">+$2.28M</p>
          <p className="text-xs text-muted-foreground mt-1">500 VIP influencers identified · 12% conversion</p>
          <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: "72%" }} />
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-accent" />
            </div>
            <span className="text-sm font-semibold text-foreground">Lifetime Value Engine</span>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">+$16.6M</p>
          <p className="text-xs text-muted-foreground mt-1">3,200 re-engagements/qtr · 18% conversion</p>
          <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full" style={{ width: "88%" }} />
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
              <Heart className="w-4 h-4 text-success" />
            </div>
            <span className="text-sm font-semibold text-foreground">Follow-Up Engine</span>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">+$4.2M</p>
          <p className="text-xs text-muted-foreground mt-1">40K personalized touchpoints · 31% ↑ bookings</p>
          <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-success rounded-full" style={{ width: "65%" }} />
          </div>
        </div>
      </div>

      {/* Chart + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-foreground">Revenue by AI Engine (in $K)</span>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary" /> Referral</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent" /> Re-engagement</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-success" /> Service</span>
            </div>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <XAxis dataKey="month" stroke="hsl(220, 10%, 50%)" fontSize={12} />
                <YAxis stroke="hsl(220, 10%, 50%)" fontSize={12} />
                <Tooltip contentStyle={{ background: "#fff", border: "1px solid hsl(220, 15%, 88%)", borderRadius: "8px", color: "hsl(220, 30%, 15%)" }} />
                <Bar dataKey="referral" stackId="a" fill="hsl(220, 78%, 44%)" radius={[0, 0, 0, 0]} />
                <Bar dataKey="reengagement" stackId="a" fill="hsl(36, 90%, 55%)" radius={[0, 0, 0, 0]} />
                <Bar dataKey="service" stackId="a" fill="hsl(152, 60%, 42%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">AI Joe Activity</span>
          </div>
          <div className="space-y-3">
            {aiActions.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <div
                  className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: typeDotColors[item.type] }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground">{item.action}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
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
