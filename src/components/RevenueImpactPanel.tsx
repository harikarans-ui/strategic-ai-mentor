import { DollarSign, TrendingUp, Zap, Target, PieChart as PieChartIcon } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis } from "recharts";

const revenueBreakdown = [
  { name: "Referral Engine", value: 2.28, color: "hsl(220, 78%, 44%)" },
  { name: "Lifetime Value Engine", value: 16.6, color: "hsl(36, 90%, 55%)" },
  { name: "Follow-Up Engine", value: 4.2, color: "hsl(152, 60%, 42%)" },
];

const roiComparison = [
  { metric: "Platform Cost", value: 180 },
  { metric: "Referral Rev", value: 2280 },
  { metric: "CLV Profit", value: 16600 },
  { metric: "Service Rev", value: 4200 },
];

const RevenueImpactPanel = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-primary" /> Revenue Impact Story
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          50 salespeople · 40,000 customers · Three AI engines · One transformative result
        </p>
      </div>

      {/* Hero Numbers */}
      <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-4xl font-display font-bold">$23.1M</p>
            <p className="text-sm opacity-80 mt-1">Total Incremental Revenue</p>
          </div>
          <div>
            <p className="text-4xl font-display font-bold">$180K</p>
            <p className="text-sm opacity-80 mt-1">Annual AI Platform Cost</p>
          </div>
          <div>
            <p className="text-4xl font-display font-bold">128×</p>
            <p className="text-sm opacity-80 mt-1">ROI on AI Investment</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-foreground mb-4">Revenue by Engine ($M)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={revenueBreakdown} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" label={({ name, value }) => `${name}: $${value}M`} labelLine={false}>
                  {revenueBreakdown.map((entry, idx) => (
                    <Cell key={idx} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number) => `$${v}M`} contentStyle={{ background: "#fff", border: "1px solid hsl(220, 15%, 88%)", borderRadius: "8px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ROI Bar */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-foreground mb-4">Cost vs Revenue ($K)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={roiComparison}>
                <XAxis dataKey="metric" stroke="hsl(220, 10%, 50%)" fontSize={10} />
                <YAxis stroke="hsl(220, 10%, 50%)" fontSize={11} />
                <Tooltip contentStyle={{ background: "#fff", border: "1px solid hsl(220, 15%, 88%)", borderRadius: "8px" }} formatter={(v: number) => `$${v}K`} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {roiComparison.map((entry, idx) => (
                    <Cell key={idx} fill={idx === 0 ? "hsl(0, 72%, 55%)" : "hsl(152, 60%, 42%)"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Engine Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">AI Referral Engine</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">VIP Influencers</span><span className="font-medium text-foreground">500</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Conversion Rate</span><span className="font-medium text-foreground">12%</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Avg Vehicle Value</span><span className="font-medium text-foreground">$38,000</span></div>
            <div className="flex justify-between border-t border-border pt-2 mt-2"><span className="font-semibold text-foreground">Annual Revenue</span><span className="font-bold text-primary">+$2.28M</span></div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-foreground">AI Lifetime Value Engine</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Customers / Qtr</span><span className="font-medium text-foreground">3,200</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Conversion Rate</span><span className="font-medium text-foreground">18%</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Avg Upgrade Gross</span><span className="font-medium text-foreground">$7,200</span></div>
            <div className="flex justify-between border-t border-border pt-2 mt-2"><span className="font-semibold text-foreground">Annual Gross Profit</span><span className="font-bold text-accent">+$16.6M</span></div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-success" />
            <span className="text-sm font-semibold text-foreground">AI Follow-Up Engine</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Customers Reached</span><span className="font-medium text-foreground">40,000</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Booking Rate ↑</span><span className="font-medium text-foreground">+31%</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Avg Service Ticket</span><span className="font-medium text-foreground">$340</span></div>
            <div className="flex justify-between border-t border-border pt-2 mt-2"><span className="font-semibold text-foreground">Annual Service Rev</span><span className="font-bold text-success">+$4.2M</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueImpactPanel;
