import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TopNav } from "@/components/top-nav";

export default function NewPatientPage() {
  return (
    <main className="page-shell">
      <TopNav />
      <Card className="max-w-3xl">
        <h1 className="text-2xl font-bold">Create patient profile</h1>
        <p className="mb-4 text-sm text-slate-600">Only ask for essentials so the desk team can move fast.</p>
        <div className="grid gap-3 md:grid-cols-2">
          <Input placeholder="Patient full name" />
          <Input placeholder="Mobile number" />
          <Input placeholder="Age" />
          <Input placeholder="Insurance policy ID" />
        </div>
        <div className="mt-4 flex gap-3">
          <Button>Generate ABHA ID (mock)</Button>
          <Button variant="secondary">Save and open claim wizard</Button>
        </div>
      </Card>
    </main>
  );
}
