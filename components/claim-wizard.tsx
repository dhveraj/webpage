"use client";

import { useMemo, useState } from "react";
import { sampleExtraction, samplePatient } from "@/demo/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RiskIndicator } from "@/components/risk-indicator";

type Step = 0 | 1 | 2 | 3;

export function ClaimWizard() {
  const [step, setStep] = useState<Step>(0);
  const [demoMode, setDemoMode] = useState(true);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiDone, setAiDone] = useState(demoMode);

  const patient = demoMode ? samplePatient : { fullName: "", mobile: "", age: "", policyId: "", diagnosis: "" };
  const extraction = demoMode ? sampleExtraction : null;

  const risk: "green" | "yellow" | "red" = useMemo(() => {
    if (!aiDone) return "yellow";
    if (!demoMode) return "red";
    return "green";
  }, [aiDone, demoMode]);

  const startAi = async () => {
    setAiLoading(true);
    setAiDone(false);
    await new Promise((resolve) => setTimeout(resolve, demoMode ? 400 : 1400));
    setAiLoading(false);
    setAiDone(true);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-50">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-lg font-semibold">2-minute claim workflow</p>
            <p className="text-sm text-slate-600">Designed for insurance desk teams with minimum clicks.</p>
          </div>
          <label className="flex items-center gap-2 text-sm font-medium">
            <input type="checkbox" checked={demoMode} onChange={(e) => setDemoMode(e.target.checked)} className="h-4 w-4" />
            Demo mode (sample patient + instant AI)
          </label>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-4">
        {["Create patient", "Upload discharge summary", "Review AI extraction", "Submit claim"].map((label, index) => (
          <Card key={label} className={index === step ? "border-blue-500" : ""}>
            <p className="text-xs text-slate-500">Step {index + 1}</p>
            <p className="font-semibold">{label}</p>
          </Card>
        ))}
      </div>

      {step === 0 && (
        <Card>
          <h2 className="mb-4 text-xl font-semibold">Create patient in under 20 seconds</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <Input defaultValue={patient.fullName} placeholder="Patient full name" />
            <Input defaultValue={patient.mobile} placeholder="Mobile number" />
            <Input defaultValue={patient.age} placeholder="Age" />
            <Input defaultValue={patient.policyId} placeholder="Insurance policy ID" />
          </div>
          <div className="mt-4 flex gap-3">
            <Button>Generate ABHA ID (mock)</Button>
            <Button variant="secondary" onClick={() => setStep(1)}>Continue</Button>
          </div>
        </Card>
      )}

      {step === 1 && (
        <Card>
          <h2 className="mb-2 text-xl font-semibold">Upload discharge summary to auto-fill claim</h2>
          <p className="text-sm text-slate-600">Drag and drop PDF/JPG here. We will read key details instantly.</p>
          <div className="mt-4 rounded-2xl border-2 border-dashed border-slate-300 p-10 text-center text-sm">
            demo-discharge-summary.pdf ready for upload
          </div>
          <div className="mt-4 flex gap-3">
            <Button onClick={startAi} disabled={aiLoading}>{aiLoading ? "AI extracting..." : "Run AI extraction"}</Button>
            <Button variant="secondary" onClick={() => setStep(2)}>Continue</Button>
          </div>
          {aiDone && <p className="mt-3 text-sm font-medium text-emerald-700">AI extracted successfully.</p>}
        </Card>
      )}

      {step === 2 && (
        <Card>
          <h2 className="mb-2 text-xl font-semibold">Review AI extraction (editable)</h2>
          <p className="mb-4 text-sm text-slate-600">Confidence level: {extraction?.confidence ?? 82}%</p>
          <div className="grid gap-3 md:grid-cols-2">
            <Input defaultValue={extraction?.hospitalName} placeholder="Hospital name" />
            <Input defaultValue={extraction?.diagnosis || patient.diagnosis} placeholder="Primary diagnosis" />
            <Input defaultValue={extraction?.admissionDate} placeholder="Admission date" />
            <Input defaultValue={extraction?.dischargeDate} placeholder="Discharge date" />
            <Input defaultValue={extraction?.billedAmount} placeholder="Claim amount" className="md:col-span-2" />
          </div>
          <div className="mt-4 flex gap-3">
            <Button>Create claim draft</Button>
            <Button variant="secondary" onClick={() => setStep(3)}>Continue</Button>
          </div>
        </Card>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <Card>
            <h2 className="mb-2 text-xl font-semibold">Claim summary before submission</h2>
            <p className="text-sm text-slate-600">Expected processing time reduced from 25 minutes to 7 minutes with AI pre-check.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button>Submit claim with AI verification</Button>
              <Button variant="secondary">Save and share with supervisor</Button>
            </div>
          </Card>
          <RiskIndicator level={risk} />
        </div>
      )}
    </div>
  );
}
