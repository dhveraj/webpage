import { RiskIndicator } from "@/components/risk-indicator";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TopNav } from "@/components/top-nav";

export default function ClaimSummaryPage() {
  return (
    <main className="page-shell">
      <TopNav />
      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <Card>
          <h1 className="text-2xl font-bold">Claim #CLM-2026-0412</h1>
          <p className="mb-4 text-sm text-slate-600">Review key details before final submission.</p>
          <ul className="space-y-2 text-sm">
            <li><b>Patient:</b> Ravi Sharma</li>
            <li><b>Diagnosis:</b> Acute appendicitis</li>
            <li><b>Claim Amount:</b> ₹78,400</li>
            <li><b>Status:</b> Ready for payer submission</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <Button>Submit claim with AI verification</Button>
            <Button variant="secondary">Download summary PDF</Button>
          </div>
        </Card>
        <RiskIndicator level="green" />
      </div>
    </main>
  );
}
