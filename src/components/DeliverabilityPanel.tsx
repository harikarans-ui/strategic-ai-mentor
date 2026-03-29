import { AlertTriangle, CheckCircle2, Gauge, Globe, Lock, Shield, Sparkles } from "lucide-react";

const domainHealth = [
  { domain: "marketing.acme.com", spf: true, dkim: true, dmarc: true, reputation: 94 },
  { domain: "news.acme.com", spf: true, dkim: true, dmarc: false, reputation: 78 },
];

const ispPlacement = [
  { isp: "Gmail", inbox: 96, spam: 3, missing: 1 },
  { isp: "Outlook", inbox: 91, spam: 7, missing: 2 },
  { isp: "Yahoo", inbox: 88, spam: 9, missing: 3 },
  { isp: "Apple Mail", inbox: 94, spam: 4, missing: 2 },
];

const DeliverabilityPanel = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
          <Shield className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-display font-bold text-foreground">Deliverability Intelligence</h2>
          <p className="text-sm text-muted-foreground">AI-powered inbox placement & domain monitoring</p>
        </div>
      </div>

      {/* Overall Score */}
      <div className="bg-card rounded-xl border border-primary/20 p-6 glow-primary">
        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(225, 15%, 16%)" strokeWidth="8" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(160, 84%, 52%)" strokeWidth="8"
                strokeDasharray={`${92 * 2.51} ${100 * 2.51}`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-display font-bold text-primary">92</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-display font-bold text-foreground">Excellent Deliverability</h3>
            <p className="text-sm text-muted-foreground mt-1">Your sender reputation is in the top 8% of all senders.</p>
            <div className="flex items-center gap-2 mt-2">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-primary">AI predicts 94.2% inbox placement for your next campaign</span>
            </div>
          </div>
        </div>
      </div>

      {/* Domain Health */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-4 h-4 text-info" />
          <span className="text-sm font-semibold text-foreground">Domain Health Monitor</span>
        </div>
        <div className="space-y-3">
          {domainHealth.map((d, i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-secondary rounded-lg">
              <span className="text-sm text-foreground flex-1 font-mono">{d.domain}</span>
              {[
                { label: "SPF", ok: d.spf },
                { label: "DKIM", ok: d.dkim },
                { label: "DMARC", ok: d.dmarc },
              ].map((check) => (
                <div key={check.label} className="flex items-center gap-1">
                  {check.ok ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                  ) : (
                    <AlertTriangle className="w-3.5 h-3.5 text-warning" />
                  )}
                  <span className="text-xs text-muted-foreground">{check.label}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-muted-foreground" />
                <span className={`text-sm font-medium ${d.reputation >= 90 ? "text-success" : "text-warning"}`}>
                  {d.reputation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ISP Placement */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <Lock className="w-4 h-4 text-accent" />
          <span className="text-sm font-semibold text-foreground">ISP Inbox Placement</span>
        </div>
        <div className="space-y-3">
          {ispPlacement.map((isp, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-sm text-foreground w-24">{isp.isp}</span>
              <div className="flex-1 h-4 bg-secondary rounded-full overflow-hidden flex">
                <div className="h-full bg-success" style={{ width: `${isp.inbox}%` }} />
                <div className="h-full bg-warning" style={{ width: `${isp.spam}%` }} />
                <div className="h-full bg-destructive" style={{ width: `${isp.missing}%` }} />
              </div>
              <span className="text-sm font-medium text-success w-12 text-right">{isp.inbox}%</span>
            </div>
          ))}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-success" /> Inbox</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-warning" /> Spam</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-destructive" /> Missing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverabilityPanel;
