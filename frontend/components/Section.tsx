import { ReactNode } from "react";

export default function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-ink mb-4">{title}</h2>
      {children}
    </section>
  );
}
