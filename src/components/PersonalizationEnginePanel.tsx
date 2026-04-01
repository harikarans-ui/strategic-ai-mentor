import { Heart, MessageSquare, Sparkles, Clock, Mail, Smartphone, Image, DollarSign } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const scaleData = [
  { era: "1970s", messages: 13000 },
  { era: "1980s", messages: 13000 },
  { era: "1990s", messages: 13000 },
  { era: "2000s", messages: 50000 },
  { era: "2020s", messages: 200000 },
  { era: "AI Joe", messages: 1300000 },
];

const recentMessages = [
  {
    customer: "Sarah W.",
    vehicle: "2021 Civic",
    message: "Hi Sarah — your Civic turns 3 this month! Hard to believe it's been 3 years since that rainy Saturday you picked it up. Your free 3-year service check is ready to book. 🎉",
    channel: "SMS",
    revenue: "$29,800",
    status: "Delivered → Service booked → Upgraded",
  },
  {
    customer: "Mike R.",
    vehicle: "2020 Accord",
    message: "Hey Mike! Your Accord just hit 50K miles — a great milestone. We've got a special loyalty offer on your next service, and your trade-in value is at its peak right now.",
    channel: "Email",
    revenue: "$340",
    status: "Delivered → Service booked",
  },
  {
    customer: "Jennifer L.",
    vehicle: "2022 CR-V",
    message: "Happy 1st anniversary with your CR-V, Jennifer! Here's a personalized how-to video for the features you haven't tried yet. 🚗✨",
    channel: "SMS",
    revenue: "—",
    status: "Delivered → Video watched",
  },
];

const PersonalizationEnginePanel = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
          <Heart className="w-6 h-6 text-success" /> Personalization Engine
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          From 13,000 "I like you" cards to 1.3 million genuinely unique messages — at $0.003 each
        </p>
      </div>

      {/* Comparison Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Joe's Way (1970s)</p>
          <p className="text-3xl font-display font-bold text-foreground">13,000</p>
          <p className="text-sm text-muted-foreground">handwritten cards / month</p>
          <p className="text-xs text-muted-foreground mt-2">Same message: "I like you." Personal by 1970s standards.</p>
        </div>
        <div className="bg-card rounded-xl border border-primary/20 p-5 shadow-sm glow-primary">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">AI Joe (Today)</p>
          <p className="text-3xl font-display font-bold text-primary">1,300,000</p>
          <p className="text-sm text-muted-foreground">unique AI messages / month</p>
          <p className="text-xs text-muted-foreground mt-2">Each one genuinely unique — referencing their car, history, life events.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Cost per Message", value: "$0.003", icon: DollarSign, color: "text-success" },
          { label: "Service Booking ↑", value: "+31%", icon: Clock, color: "text-accent" },
          { label: "Retention ↑", value: "+22%", icon: Heart, color: "text-primary" },
          { label: "Service Revenue", value: "+$4.2M", icon: DollarSign, color: "text-success" },
        ].map((stat, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-4 shadow-sm">
            <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
            <p className="text-xl font-display font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Scale Chart */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-foreground mb-4">Message Scale Evolution</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={scaleData}>
              <defs>
                <linearGradient id="scaleGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(152, 60%, 42%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(152, 60%, 42%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="era" stroke="hsl(220, 10%, 50%)" fontSize={11} />
              <YAxis stroke="hsl(220, 10%, 50%)" fontSize={11} tickFormatter={(v) => v >= 1000000 ? `${v / 1000000}M` : v >= 1000 ? `${v / 1000}K` : v} />
              <Tooltip contentStyle={{ background: "#fff", border: "1px solid hsl(220, 15%, 88%)", borderRadius: "8px" }} formatter={(v: number) => v.toLocaleString()} />
              <Area type="monotone" dataKey="messages" stroke="hsl(152, 60%, 42%)" fill="url(#scaleGrad)" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI-Generated Messages */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Recent AI-Generated Messages</h3>
        </div>
        <div className="space-y-4">
          {recentMessages.map((msg, i) => (
            <div key={i} className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">{msg.customer}</span>
                  <span className="text-xs text-muted-foreground">· {msg.vehicle}</span>
                </div>
                <div className="flex items-center gap-2">
                  {msg.channel === "SMS" ? (
                    <Smartphone className="w-3.5 h-3.5 text-muted-foreground" />
                  ) : (
                    <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                  )}
                  <span className="text-xs text-muted-foreground">{msg.channel}</span>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-3 mb-2">
                <p className="text-sm text-foreground italic">"{msg.message}"</p>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{msg.status}</span>
                {msg.revenue !== "—" && (
                  <span className="text-success font-semibold">Triggered: {msg.revenue}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalizationEnginePanel;
