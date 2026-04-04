import { Card } from "@/components/ui/card";
import { TopNav } from "@/components/top-nav";

export default function AnalyticsPage() {
  return (
    <main className="page-shell">
      <TopNav />
      <h1 className="mb-6 text-3xl font-bold">Simple analytics for hospital leadership</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-500">Reduction in rejection rate</p>
          <p className="mt-2 text-3xl font-bold text-emerald-600">-31%</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Average claim turnaround</p>
          <p className="mt-2 text-3xl font-bold">1.8 days</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Claims auto-filled by AI</p>
          <p className="mt-2 text-3xl font-bold">87%</p>
        </Card>
      </div>
    </main>
  );
}
