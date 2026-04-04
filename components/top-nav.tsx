import Link from "next/link";

const links = [
  ["Dashboard", "/dashboard"],
  ["New Patient", "/patients/new"],
  ["Claim Wizard", "/claims/new"],
  ["Claim Summary", "/claims/summary"],
  ["Analytics", "/analytics"]
];

export function TopNav() {
  return (
    <nav className="mb-6 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-2">
      {links.map(([label, href]) => (
        <Link key={href} href={href} className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
          {label}
        </Link>
      ))}
    </nav>
  );
}
