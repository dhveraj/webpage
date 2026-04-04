import { ClaimWizard } from "@/components/claim-wizard";
import { TopNav } from "@/components/top-nav";

export default function NewClaimPage() {
  return (
    <main className="page-shell">
      <TopNav />
      <h1 className="mb-6 text-3xl font-bold">Claim creation wizard</h1>
      <ClaimWizard />
    </main>
  );
}
