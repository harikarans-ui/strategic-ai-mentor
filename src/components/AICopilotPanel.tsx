import { Brain, Lightbulb, Sparkles, TrendingUp, AlertTriangle, ChevronRight } from "lucide-react";

const insights = [
  {
    type: "opportunity" as const,
    title: "Optimal Send Time Detected",
    description: "Your audience segment 'VIP Customers' shows 34% higher open rates on Tuesdays at 10:15 AM. Shift your next campaign.",
    impact: "+34% open rate",
    confidence: 94,
  },
  {
    type: "warning" as const,
    title: "Churn Risk Alert",
    description: "127 contacts haven't engaged in 45+ days. AI recommends a re-engagement drip with personalized offers.",
    impact: "127 contacts at risk",
    confidence: 87,
  },
  {
    type: "insight" as const,
    title: "Subject Line Prediction",
    description: "Subject lines with emojis and urgency words are outperforming by 22% in your industry vertical this month.",
    impact: "+22% CTR predicted",
    confidence: 91,
  },
  {
    type: "opportunity" as const,
    title: "Cross-Channel Opportunity",
    description: "Contacts who receive both email + SMS convert 3.2x more. 2,400 contacts are email-only — enable SMS for them.",
    impact: "3.2x conversion lift",
    confidence: 89,
  },
];

const typeConfig = {
  opportunity: { icon: TrendingUp, color: "text-primary", bg: "bg-primary/10", border: "border-primary/20" },
  warning: { icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10", border: "border-warning/20" },
  insight: { icon: Lightbulb, color: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
};

const AICopilotPanel = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
          <Brain className="w-5 h-5 text-accent-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-display font-bold text-foreground">AI Marketing Co-pilot</h2>
          <p className="text-sm text-muted-foreground">Proactive insights powered by predictive AI</p>
        </div>
        <div className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse-glow" />
          <span className="text-xs font-medium text-primary">4 new insights</span>
        </div>
      </div>

      {/* AI Chat Prompt */}
      <div className="bg-card rounded-xl border border-border p-5">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-foreground">Ask your AI co-pilot anything</span>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g. 'Why did my open rates drop last week?' or 'Suggest a campaign for Black Friday'"
            className="flex-1 bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button className="px-4 py-2.5 bg-gradient-primary rounded-lg text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
            Ask AI
          </button>
        </div>
        <div className="flex gap-2 mt-3">
          {["Why did engagement drop?", "Best time to send?", "Suggest A/B test"].map((q) => (
            <button key={q} className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground hover:text-foreground border border-border hover:border-primary/30 transition-all">
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {insights.map((insight, i) => {
          const config = typeConfig[insight.type];
          const Icon = config.icon;
          return (
            <div
              key={i}
              className={`bg-card rounded-xl border ${config.border} p-5 hover:border-opacity-50 transition-all cursor-pointer group`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-8 h-8 rounded-lg ${config.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-4 h-4 ${config.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-foreground">{insight.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{insight.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-medium ${config.color}`}>{insight.impact}</span>
                  <span className="text-xs text-muted-foreground">
                    {insight.confidence}% confidence
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AICopilotPanel;
