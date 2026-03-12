import { ReactNode } from "react";
import Link from "next/link";

const nav = [
  { label: "Dashboard", href: "/" },
  { label: "Upload", href: "/upload" },
  { label: "Company", href: "/company" },
  { label: "Risk", href: "/risk" },
  { label: "CAM", href: "/cam" }
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-cloud">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-steel">CREDITINTEL AI</p>
            <h1 className="text-xl font-semibold text-ink">Autonomous Credit Intelligence</h1>
          </div>
          <nav className="flex gap-4 text-sm">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-steel hover:text-ink">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
}
