import { cn } from "@/lib/utils";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("h-12 w-full rounded-xl border border-slate-300 px-4 text-sm focus:border-blue-500 focus:outline-none", props.className)} {...props} />;
}
