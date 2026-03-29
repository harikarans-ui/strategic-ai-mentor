import { BarChart3, Brain, MessageSquare, Sparkles, Target, TrendingUp, Users } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const revenueData = [
  { month: "Jan", actual: 12400, predicted: 12800 },
  { month: "Feb", actual: 14200, predicted: 14000 },
  { month: "Mar", actual: 13800, predicted: 15200 },
  { month: "Apr", actual: 16500, predicted: 16100 },
  { month: "May", actual: 18200, predicted: 17800 },
  { month: "Jun", actual: null, predicted: 21400 },
  { month: "Jul", actual: null, predicted: 23800 },
  { month: "Aug", actual: null, predicted: 25200 },
];

const segmentData = [
  { segment: "VIP", score: 92, revenue: 8400 },
  { segment: "Active", score: 74, revenue: 5200 },
  { segment: "At Risk", score: 45, revenue: 2100 },
  { segment: "Dormant", score: 18, revenue: 400 },
];

const PredictiveAnalyticsPanel = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-display font-bold text-foreground">Predictive Analytics</h2>
          <p className="text-sm text-muted-foreground">ML-powered forecasting & lead scoring</p>
        </div>
      </div>

      {/* NL Query */}
      <div className="bg-card rounded-xl border border-border p-5">
        <div className="flex items-center gap-2 mb-3">
          <MessageSquare className="w-4 h-4 text-info" />
          <span className="text-sm font-medium text-foreground">Natural Language Reporting</span>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask anything... e.g. 'What was my best campaign last quarter?'"
            className="flex-1 bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-info/50"
          />
          <button className="px-4 py-2.5 bg-info rounded-lg text-sm font-medium text-info-foreground hover:opacity-90 transition-opacity">
            Query
          </button>
        </div>
      </div>

      {/* Revenue Forecast Chart */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Revenue Forecast</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary" /> Actual</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent" /> Predicted</span>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(160, 84%, 52%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(160, 84%, 52%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(270, 80%, 65%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(270, 80%, 65%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(225, 15%, 16%)" />
              <XAxis dataKey="month" stroke="hsl(215, 12%, 50%)" fontSize={12} />
              <YAxis stroke="hsl(215, 12%, 50%)" fontSize={12} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
              <Tooltip
                contentStyle={{ background: "hsl(225, 20%, 9%)", border: "1px solid hsl(225, 15%, 16%)", borderRadius: "8px", color: "hsl(210, 20%, 92%)" }}
              />
              <Area type="monotone" dataKey="actual" stroke="hsl(160, 84%, 52%)" fill="url(#colorActual)" strokeWidth={2} />
              <Area type="monotone" dataKey="predicted" stroke="hsl(270, 80%, 65%)" fill="url(#colorPredicted)" strokeWidth={2} strokeDasharray="5 5" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Lead Scoring */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-4 h-4 text-warning" />
          <span className="text-sm font-semibold text-foreground">AI Lead Scoring by Segment</span>
        </div>
        <div className="space-y-4">
          {segmentData.map((seg, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-sm text-foreground w-20">{seg.segment}</span>
              <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${seg.score}%`,
                    background: seg.score > 70 ? "var(--gradient-primary)" : seg.score > 40 ? "var(--gradient-warm)" : "var(--gradient-accent)",
                  }}
                />
              </div>
              <span className="text-sm font-medium text-foreground w-12 text-right">{seg.score}</span>
              <span className="text-xs text-muted-foreground w-16 text-right">${seg.revenue.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalyticsPanel;
