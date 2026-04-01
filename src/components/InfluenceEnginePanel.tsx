import { Network, Star, Users, TrendingUp, Eye, Share2, Award } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const influencerData = [
  { name: "Maria L.", score: 1840, tier: "VIP", followers: "1.8K", groups: 3, status: "Concierge triggered", converted: 3 },
  { name: "James K.", score: 2450, tier: "VIP", followers: "2.5K", groups: 5, status: "Referral sent", converted: 5 },
  { name: "Priya S.", score: 890, tier: "High", followers: "890", groups: 2, status: "Monitoring", converted: 1 },
  { name: "Carlos R.", score: 3200, tier: "VIP", followers: "3.2K", groups: 7, status: "Active advocate", converted: 8 },
  { name: "Emily W.", score: 420, tier: "Medium", followers: "420", groups: 1, status: "Nurturing", converted: 0 },
];

const distributionData = [
  { range: "0-100", count: 12400 },
  { range: "100-500", count: 18200 },
  { range: "500-1K", count: 6800 },
  { range: "1K-2.5K", count: 2100 },
  { range: "2.5K+", count: 500 },
];

const tierColors: Record<string, string> = {
  VIP: "bg-primary/10 text-primary",
  High: "bg-accent/10 text-accent",
  Medium: "bg-muted text-muted-foreground",
};

const InfluenceEnginePanel = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
          <Network className="w-6 h-6 text-primary" /> Influence Engine
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          The Law of 250, powered by AI — map every customer's real social graph and influence radius
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Top VIP Influencers", value: "500", icon: Star, color: "text-primary" },
          { label: "Total Influence Reach", value: "2.8M", icon: Users, color: "text-accent" },
          { label: "Referral Conversions", value: "12%", icon: TrendingUp, color: "text-success" },
          { label: "Incremental Revenue", value: "$2.28M", icon: Award, color: "text-primary" },
        ].map((stat, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-4 shadow-sm">
            <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
            <p className="text-xl font-display font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Influence Distribution */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-foreground mb-4">Influence Score Distribution</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={distributionData}>
                <XAxis dataKey="range" stroke="hsl(220, 10%, 50%)" fontSize={11} />
                <YAxis stroke="hsl(220, 10%, 50%)" fontSize={11} />
                <Tooltip contentStyle={{ background: "#fff", border: "1px solid hsl(220, 15%, 88%)", borderRadius: "8px" }} />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {distributionData.map((_, idx) => (
                    <Cell key={idx} fill={idx >= 3 ? "hsl(220, 78%, 44%)" : "hsl(220, 15%, 85%)"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Joe estimated 250 connections per customer. AI reveals the truth — some have 50, others 2,500+.
          </p>
        </div>

        {/* Scenario: Maria */}
        <div className="bg-card rounded-xl border border-primary/20 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Live Scenario: Maria buys a sedan</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
              <Share2 className="w-4 h-4 text-primary" />
              <div>
                <p className="text-xs font-medium text-foreground">Social Graph Analyzed</p>
                <p className="text-xs text-muted-foreground">1,840 followers · 3 car enthusiast groups · Active reviewer</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
              <Star className="w-4 h-4 text-accent" />
              <div>
                <p className="text-xs font-medium text-foreground">Flagged as Tier-1 VIP</p>
                <p className="text-xs text-muted-foreground">Influence Score: 1,840 (7.4× Joe's Law of 250)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-success/5 rounded-lg">
              <Award className="w-4 h-4 text-success" />
              <div>
                <p className="text-xs font-medium text-foreground">Concierge Experience Triggered</p>
                <p className="text-xs text-muted-foreground">Thank-you video + premium gift + referral invite — within 24hrs</p>
              </div>
            </div>
            <div className="mt-3 p-3 bg-muted rounded-lg">
              <p className="text-xs font-semibold text-foreground">Revenue Outcome</p>
              <p className="text-xs text-muted-foreground">Maria posts → 3 test drives → 1 conversion → <span className="text-primary font-bold">$35,000</span> from a $50 gift</p>
            </div>
          </div>
        </div>
      </div>

      {/* Influencer Table */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-foreground mb-4">Top Influencer Customers</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 font-medium text-muted-foreground">Customer</th>
                <th className="pb-3 font-medium text-muted-foreground">Influence Score</th>
                <th className="pb-3 font-medium text-muted-foreground">Tier</th>
                <th className="pb-3 font-medium text-muted-foreground">Followers</th>
                <th className="pb-3 font-medium text-muted-foreground">Groups</th>
                <th className="pb-3 font-medium text-muted-foreground">Status</th>
                <th className="pb-3 font-medium text-muted-foreground">Conversions</th>
              </tr>
            </thead>
            <tbody>
              {influencerData.map((person, i) => (
                <tr key={i} className="border-b border-border/50 last:border-0">
                  <td className="py-3 font-medium text-foreground">{person.name}</td>
                  <td className="py-3 text-foreground font-bold">{person.score.toLocaleString()}</td>
                  <td className="py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${tierColors[person.tier]}`}>
                      {person.tier}
                    </span>
                  </td>
                  <td className="py-3 text-muted-foreground">{person.followers}</td>
                  <td className="py-3 text-muted-foreground">{person.groups}</td>
                  <td className="py-3 text-muted-foreground">{person.status}</td>
                  <td className="py-3 text-foreground font-medium">{person.converted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InfluenceEnginePanel;
