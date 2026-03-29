import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  variant?: "default" | "primary" | "accent" | "warning";
}

const variantStyles = {
  default: "border-border",
  primary: "border-primary/20 glow-primary",
  accent: "border-accent/20 glow-accent",
  warning: "border-warning/20",
};

const iconVariantStyles = {
  default: "bg-secondary text-secondary-foreground",
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  warning: "bg-warning/10 text-warning",
};

const MetricCard = ({ title, value, change, icon: Icon, variant = "default" }: MetricCardProps) => {
  const isPositive = change >= 0;

  return (
    <div className={`bg-card rounded-xl border p-5 animate-slide-up ${variantStyles[variant]}`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconVariantStyles[variant]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
          isPositive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
        }`}>
          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {Math.abs(change)}%
        </div>
      </div>
      <p className="text-2xl font-display font-bold text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground mt-1">{title}</p>
    </div>
  );
};

export default MetricCard;
