import { Users, MessageCircle, Shield, Wrench, Car, TrendingUp, Star } from "lucide-react";
import { RadialBarChart, RadialBar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";

const npsData = [
  { name: "Service Transparency", nps: 52, fill: "hsl(220, 78%, 44%)" },
  { name: "Ownership Companion", nps: 41, fill: "hsl(36, 90%, 55%)" },
  { name: "Pre-Purchase Chatbot", nps: 34, fill: "hsl(152, 60%, 42%)" },
  { name: "Deal Transparency", nps: 28, fill: "hsl(220, 70%, 55%)" },
];

const journeyStages = [
  {
    stage: "Pre-Purchase",
    icon: MessageCircle,
    tool: "AI Concierge Chatbot",
    description: "24/7 answers in any language, model recommendations, financing pre-qual, instant test drive booking",
    impact: "+34 NPS",
    detail: "Wait time: 0 seconds",
    color: "text-success",
    bgColor: "bg-success/5",
  },
  {
    stage: "At Purchase",
    icon: Shield,
    tool: "AI Deal Transparency",
    description: "Real-time fair market value comparison, trust-building pricing, eliminates #1 buyer anxiety",
    impact: "+28 NPS",
    detail: "Eliminates: 'feeling cheated'",
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
  {
    stage: "Post-Purchase",
    icon: Car,
    tool: "AI Ownership Companion",
    description: "Proactive maintenance alerts, EV software updates, personalized how-to videos, birthday & anniversary moments",
    impact: "+41 NPS",
    detail: "Customers feel remembered, not forgotten",
    color: "text-accent",
    bgColor: "bg-accent/5",
  },
  {
    stage: "Service Visits",
    icon: Wrench,
    tool: "AI Service Transparency",
    description: "Real-time repair progress via SMS, plain-English line item explanations, no surprise bills",
    impact: "+52 NPS",
    detail: "#1 distrust driver — eliminated",
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
];

const CustomerSatisfactionPanel = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" /> Customer 360 — Satisfaction Engine
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Revenue is the outcome. Customer satisfaction is the engine. AI Joe transforms every touchpoint.
        </p>
      </div>

      {/* Key Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl border border-primary/20 p-5 shadow-sm text-center">
          <Star className="w-6 h-6 text-primary mx-auto mb-2" />
          <p className="text-3xl font-display font-bold text-primary">+38</p>
          <p className="text-sm text-muted-foreground">Avg NPS Improvement</p>
        </div>
        <div className="bg-card rounded-xl border border-accent/20 p-5 shadow-sm text-center">
          <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
          <p className="text-3xl font-display font-bold text-accent">4 min</p>
          <p className="text-sm text-muted-foreground">Avg AI Response Time</p>
        </div>
        <div className="bg-card rounded-xl border border-success/20 p-5 shadow-sm text-center">
          <Users className="w-6 h-6 text-success mx-auto mb-2" />
          <p className="text-3xl font-display font-bold text-success">91%</p>
          <p className="text-sm text-muted-foreground">Customer Retention Rate</p>
        </div>
      </div>

      {/* NPS by Tool Chart */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-foreground mb-4">NPS Impact by AI Tool</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={npsData} layout="vertical">
              <XAxis type="number" stroke="hsl(220, 10%, 50%)" fontSize={11} unit=" pts" />
              <YAxis dataKey="name" type="category" stroke="hsl(220, 10%, 50%)" fontSize={11} width={140} />
              <Tooltip contentStyle={{ background: "#fff", border: "1px solid hsl(220, 15%, 88%)", borderRadius: "8px" }} />
              <Bar dataKey="nps" radius={[0, 4, 4, 0]}>
                {npsData.map((entry, idx) => (
                  <Cell key={idx} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Journey Stages */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">AI-Powered Customer Journey</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {journeyStages.map((stage, i) => (
            <div key={i} className={`${stage.bgColor} rounded-xl border border-border p-5`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg bg-card flex items-center justify-center`}>
                  <stage.icon className={`w-5 h-5 ${stage.color}`} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{stage.stage}</p>
                  <p className="text-sm font-semibold text-foreground">{stage.tool}</p>
                </div>
                <span className={`ml-auto px-2 py-1 rounded-full text-xs font-bold ${stage.color} bg-card`}>
                  {stage.impact}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{stage.description}</p>
              <p className="text-xs text-muted-foreground mt-2 italic">{stage.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground text-center">
        <p className="text-lg font-display font-bold italic max-w-2xl mx-auto">
          "Joe Girard made 13,001 customers feel like the most important person in the world. AI makes every single customer — all 13 million of them — feel exactly the same way."
        </p>
        <p className="text-sm opacity-80 mt-2">That is not the end of the Joe Girard era. That is its greatest chapter.</p>
      </div>
    </div>
  );
};

export default CustomerSatisfactionPanel;
