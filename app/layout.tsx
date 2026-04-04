import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palentrix Demo",
  description: "High-conversion healthcare claims demo"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
