import { FileText, Image, Sparkles, Wand2, Palette, Layout, Type, Globe } from "lucide-react";

const contentTypes = [
  { icon: FileText, label: "Email Campaign", desc: "AI writes subject + body from a brief", color: "text-primary", bg: "bg-primary/10" },
  { icon: Globe, label: "Landing Page", desc: "Generate a full conversion page", color: "text-info", bg: "bg-info/10" },
  { icon: Image, label: "Ad Creative", desc: "Generate visuals + copy for ads", color: "text-accent", bg: "bg-accent/10" },
  { icon: Type, label: "Social Posts", desc: "Create platform-specific posts", color: "text-warning", bg: "bg-warning/10" },
];

const ContentStudioPanel = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-warm flex items-center justify-center">
          <Wand2 className="w-5 h-5 text-warning-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-display font-bold text-foreground">AI Content Studio</h2>
          <p className="text-sm text-muted-foreground">Multi-modal content generation from a single brief</p>
        </div>
      </div>

      {/* Brief Input */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">Campaign Brief</span>
        </div>
        <textarea
          rows={3}
          placeholder="Describe your campaign goals... e.g. 'Promote our spring sale with 30% off, targeting existing customers who purchased in the last 90 days'"
          className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
        />
        <div className="flex items-center gap-3 mt-4">
          <button className="px-5 py-2.5 bg-gradient-primary rounded-lg text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity flex items-center gap-2">
            <Wand2 className="w-4 h-4" />
            Generate All Content
          </button>
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Auto-applies your brand guidelines</span>
          </div>
        </div>
      </div>

      {/* Content Type Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {contentTypes.map((ct, i) => (
          <div
            key={i}
            className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 transition-all cursor-pointer group"
          >
            <div className={`w-10 h-10 rounded-lg ${ct.bg} flex items-center justify-center mb-3`}>
              <ct.icon className={`w-5 h-5 ${ct.color}`} />
            </div>
            <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{ct.label}</h3>
            <p className="text-xs text-muted-foreground mt-1">{ct.desc}</p>
          </div>
        ))}
      </div>

      {/* Generated Preview */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-foreground">AI-Generated Email Preview</span>
          <div className="flex gap-2">
            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">Version A</span>
            <span className="px-2 py-1 rounded-full bg-secondary text-muted-foreground text-xs">Version B</span>
            <span className="px-2 py-1 rounded-full bg-secondary text-muted-foreground text-xs">Version C</span>
          </div>
        </div>
        <div className="bg-secondary rounded-lg p-6 border border-border">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Layout className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Subject:</span>
              <span className="text-sm font-medium text-foreground">🌸 Spring into Savings — 30% Off Everything This Weekend!</span>
            </div>
            <div className="border-t border-border pt-3">
              <div className="h-4 bg-muted rounded w-3/4 mb-2" />
              <div className="h-4 bg-muted rounded w-full mb-2" />
              <div className="h-4 bg-muted rounded w-5/6 mb-4" />
              <div className="h-32 bg-gradient-primary rounded-lg opacity-20 mb-4 flex items-center justify-center">
                <Image className="w-8 h-8 text-primary" />
              </div>
              <div className="h-10 bg-gradient-primary rounded-lg w-40 flex items-center justify-center">
                <span className="text-xs font-medium text-primary-foreground">Shop Now →</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Sparkles className="w-3 h-3 text-primary" />
            Predicted open rate: <span className="text-primary font-medium">28.4%</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Predicted CTR: <span className="text-primary font-medium">4.7%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStudioPanel;
