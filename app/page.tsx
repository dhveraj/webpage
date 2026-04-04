import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="page-shell max-w-xl">
      <Card className="space-y-5 p-8">
        <div>
          <p className="text-sm font-semibold text-blue-700">Palentrix Claims AI</p>
          <h1 className="text-3xl font-bold">Cut claim rejections before they happen</h1>
          <p className="mt-2 text-sm text-slate-600">Sign in to process faster claims with AI-assisted validation.</p>
        </div>
        <Input placeholder="Work email" />
        <Input placeholder="Password" type="password" />
        <Link href="/dashboard" className="block">
          <Button className="w-full">Login to claims workspace</Button>
        </Link>
      </Card>
    </main>
  );
}
