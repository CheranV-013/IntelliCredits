import clsx from "clsx";

export default function StatCard({
  title,
  value,
  trend,
  tone = "mint"
}: {
  title: string;
  value: string;
  trend?: string;
  tone?: "mint" | "sun" | "coral";
}) {
  const toneClass =
    tone === "mint"
      ? "bg-mint/10 text-mint"
      : tone === "sun"
      ? "bg-sun/10 text-sun"
      : "bg-coral/10 text-coral";

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-steel">{title}</p>
        <span className={clsx("text-xs px-2 py-1 rounded-full", toneClass)}>
          {trend || "updated"}
        </span>
      </div>
      <p className="text-2xl font-semibold text-ink mt-3">{value}</p>
    </div>
  );
}
