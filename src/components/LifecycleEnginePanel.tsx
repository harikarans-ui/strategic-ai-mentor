import { RefreshCw, Clock, Briefcase, Car, TrendingUp, Send, Calendar, DollarSign } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const retentionData = [
  { month: "Jan", manual: 62, ai: 78 },
  { month: "Feb", manual: 60, ai: 81 },
  { month: "Mar", manual: 58, ai: 84 },
  { month: "Apr", manual: 56, ai: 86 },
  { month: "May", manual: 55, ai: 89 },
  { month: "Jun", manual: 54, ai: 91 },
];

const upcomingLeases = [
  { name: "David M.", vehicle: "2022 SUV Premium", daysLeft: 67, signal: "Job promotion", confidence: 94, value: "$52,000" },
  { name: "Rachel T.", vehicle: "2021 Sedan Sport", daysLeft: 45, signal: "New baby", confidence: 87, value: "$38,000" },
  { name: "Tom H.", vehicle: "2022 EV Crossover", daysLeft: 112, signal: "3 service visits", confidence: 72, value: "$44,000" },
  { name: "Lisa K.", vehicle: "2021 Compact", daysLeft: 23, signal: "Mileage spike", confidence: 91, value: "$31,000" },
  { name: "Mark J.", vehicle: "2022 Truck XL", daysLeft: 89, signal: "Family growth", confidence: 68, value: "$48,000" },
];

const LifecycleEnginePanel = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
          <RefreshCw className="w-6 h-6 text-accent" /> Lifetime Value Engine
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          From index cards to AI-powered prediction — re-engage customers before they even think about it
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Re-engagements / Qtr", value: "3,200", icon: Send, color: "text-accent" },
          { label: "Conversion Rate", value: "18%", icon: TrendingUp, color: "text-success" },
          { label: "Avg Upgrade Gross", value: "$7,200", icon: DollarSign, color: "text-primary" },
          { label: "Annual Gross Profit", value: "$16.6M", icon: TrendingUp, color: "text-accent" },
        ].map((stat, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-4 shadow-sm">
            <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
            <p className="text-xl font-display font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Retention Chart */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-foreground mb-4">Retention: Manual vs AI Joe</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={retentionData}>
                <XAxis dataKey="month" stroke="hsl(220, 10%, 50%)" fontSize={11} />
                <YAxis stroke="hsl(220, 10%, 50%)" fontSize={11} domain={[50, 95]} unit="%" />
                <Tooltip contentStyle={{ background: "#fff", border: "1px solid hsl(220, 15%, 88%)", borderRadius: "8px" }} />
                <Line type="monotone" dataKey="manual" stroke="hsl(220, 15%, 75%)" strokeWidth={2} dot={false} name="Manual" />
                <Line type="monotone" dataKey="ai" stroke="hsl(36, 90%, 55%)" strokeWidth={2.5} dot={false} name="AI Joe" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-muted-foreground" /> Manual</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent" /> AI Joe</span>
          </div>
        </div>

        {/* David Scenario */}
        <div className="bg-card rounded-xl border border-accent/20 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Car className="w-4 h-4 text-accent" />
            <h3 className="text-sm font-semibold text-foreground">Live Scenario: David's Lease Ending</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
              <Clock className="w-4 h-4 text-accent" />
              <div>
                <p className="text-xs font-medium text-foreground">Lease expires in 67 days</p>
                <p className="text-xs text-muted-foreground">AI monitoring since purchase — 4 years ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
              <Briefcase className="w-4 h-4 text-primary" />
              <div>
                <p className="text-xs font-medium text-foreground">Life Event Detected</p>
                <p className="text-xs text-muted-foreground">LinkedIn: Recent promotion · 3 service visits this year</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-success/5 rounded-lg">
              <Send className="w-4 h-4 text-success" />
              <div>
                <p className="text-xs font-medium text-foreground">Personalized Trade-In Offer Sent</p>
                <p className="text-xs text-muted-foreground">"Congratulations on the new role, David..." — sent 8:07am Tuesday</p>
              </div>
            </div>
            <div className="mt-3 p-3 bg-muted rounded-lg">
              <p className="text-xs font-semibold text-foreground">Revenue Outcome</p>
              <p className="text-xs text-muted-foreground">
                David upgrades → <span className="text-accent font-bold">$52,000</span> premium SUV · Gross profit: $8,400 · Campaign cost: <span className="text-success font-bold">$2.40</span> · ROI: <span className="text-primary font-bold">3,400%</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Lease Table */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-foreground">Upcoming Re-engagement Opportunities</h3>
          <span className="text-xs text-muted-foreground">AI-scored by conversion probability</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 font-medium text-muted-foreground">Customer</th>
                <th className="pb-3 font-medium text-muted-foreground">Vehicle</th>
                <th className="pb-3 font-medium text-muted-foreground">Days Left</th>
                <th className="pb-3 font-medium text-muted-foreground">Life Signal</th>
                <th className="pb-3 font-medium text-muted-foreground">AI Confidence</th>
                <th className="pb-3 font-medium text-muted-foreground">Upgrade Value</th>
              </tr>
            </thead>
            <tbody>
              {upcomingLeases.map((lease, i) => (
                <tr key={i} className="border-b border-border/50 last:border-0">
                  <td className="py-3 font-medium text-foreground">{lease.name}</td>
                  <td className="py-3 text-muted-foreground">{lease.vehicle}</td>
                  <td className="py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      lease.daysLeft <= 30 ? "bg-destructive/10 text-destructive" :
                      lease.daysLeft <= 60 ? "bg-warning/10 text-warning" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {lease.daysLeft} days
                    </span>
                  </td>
                  <td className="py-3 text-muted-foreground">{lease.signal}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${lease.confidence}%` }} />
                      </div>
                      <span className="text-xs font-medium text-foreground">{lease.confidence}%</span>
                    </div>
                  </td>
                  <td className="py-3 font-medium text-foreground">{lease.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LifecycleEnginePanel;
