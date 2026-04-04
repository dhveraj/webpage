import { Card } from "@/components/ui/card";
import { TopNav } from "@/components/top-nav";

const metrics = [
  ["Claims processed today", "24"],
  ["Average claim completion time", "7 min"],
  ["Predicted rejection risk claims", "3"],
  ["Time saved by AI", "4h 10m"]
];

export default function DashboardPage() {
  return (
    <main className="page-shell">
      <TopNav />
      <h1 className="mb-4 text-3xl font-bold">Insurance Desk Dashboard</h1>
      <p className="mb-6 text-slate-600">Everything your team needs to complete claims quickly and reduce rework.</p>
      <section className="grid gap-4 md:grid-cols-4">
        {metrics.map(([label, value]) => (
          <Card key={label}>
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-bold">{value}</p>
          </Card>
        ))}
      </section>
    </main>
  );
}
