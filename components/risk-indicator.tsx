import { AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type RiskLevel = "green" | "yellow" | "red";

const riskConfig = {
  green: {
    title: "Ready to submit",
    icon: CheckCircle2,
    badgeClass: "bg-emerald-100 text-emerald-700",
    panelClass: "border-emerald-300",
    reasons: ["Required documents uploaded", "Patient and policy fields complete", "No payer rule mismatch found"]
  },
  yellow: {
    title: "Missing minor info",
    icon: AlertTriangle,
    badgeClass: "bg-amber-100 text-amber-700",
    panelClass: "border-amber-300",
    reasons: ["Discharge summary signature missing", "One optional payer code not mapped"]
  },
  red: {
    title: "High rejection risk",
    icon: ShieldAlert,
    badgeClass: "bg-rose-100 text-rose-700",
    panelClass: "border-rose-300",
    reasons: ["Policy number mismatch", "Pre-authorization document missing", "Billed amount does not match document total"]
  }
};

export function RiskIndicator({ level }: { level: RiskLevel }) {
  const config = riskConfig[level];
  const Icon = config.icon;

  return (
    <Card className={config.panelClass}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Claim risk check</h3>
        <Badge className={config.badgeClass}>
          <Icon className="mr-1 h-4 w-4" /> {config.title}
        </Badge>
      </div>
      <p className="mb-2 text-sm font-medium text-slate-700">Why this status:</p>
      <ul className="space-y-1 text-sm text-slate-600">
        {config.reasons.map((reason) => (
          <li key={reason}>• {reason}</li>
        ))}
      </ul>
    </Card>
  );
}
