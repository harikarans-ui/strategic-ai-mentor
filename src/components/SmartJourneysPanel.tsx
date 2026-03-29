import { Route, Sparkles, Mail, MessageSquare, Smartphone, Clock, GitBranch, Zap } from "lucide-react";

const journeyNodes = [
  { type: "trigger", label: "New Signup", icon: Zap, color: "bg-primary" },
  { type: "wait", label: "AI decides timing", icon: Clock, color: "bg-accent" },
  { type: "branch", label: "AI selects channel", icon: GitBranch, color: "bg-warning" },
  { type: "email", label: "Welcome Email", icon: Mail, color: "bg-info" },
  { type: "sms", label: "SMS Nudge", icon: Smartphone, color: "bg-success" },
  { type: "social", label: "Retarget Ad", icon: MessageSquare, color: "bg-accent" },
];

const SmartJourneysPanel = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
          <Route className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-display font-bold text-foreground">Smart Journey Orchestration</h2>
          <p className="text-sm text-muted-foreground">Self-optimizing customer journeys powered by AI</p>
        </div>
      </div>

      {/* Journey Canvas */}
      <div className="bg-card rounded-xl border border-border p-6 overflow-x-auto shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">AI-Adaptive Welcome Journey</span>
          <span className="ml-2 px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-medium">Live • Optimizing</span>
        </div>

        <div className="flex items-center gap-4 min-w-[700px]">
          {journeyNodes.map((node, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className={`w-14 h-14 rounded-xl ${node.color} flex items-center justify-center shadow-md`}>
                  <node.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xs text-muted-foreground text-center max-w-[80px]">{node.label}</span>
              </div>
              {i < journeyNodes.length - 1 && (
                <div className="w-12 h-0.5 bg-border flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <div className="flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-primary mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground">AI Decision: Channel Selection</p>
              <p className="text-xs text-muted-foreground mt-1">
                The AI analyzes each contact's engagement patterns in real-time. Email-preferring contacts get a rich HTML email.
                Mobile-first contacts receive an SMS. Social-active contacts see a retargeting ad. Each path auto-optimizes based on conversion data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Journey Completion Rate", value: "72%", change: "+18% vs static" },
          { label: "Avg. Time to Convert", value: "3.2 days", change: "-2.1 days vs static" },
          { label: "Revenue per Contact", value: "$14.80", change: "+42% vs static" },
        ].map((stat, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-5 shadow-sm">
            <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            <p className="text-xs text-primary mt-2 font-medium">{stat.change}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartJourneysPanel;
