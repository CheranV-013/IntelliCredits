export default function ExplanationPanel({ data }: { data: Record<string, number> }) {
  const entries = Object.entries(data);
  return (
    <div className="space-y-3">
      {entries.map(([key, value]) => (
        <div key={key} className="flex items-center justify-between text-sm">
          <span className="text-steel">{key.replace(/_/g, " ")}</span>
          <span className={value < 0 ? "text-coral" : "text-mint"}>
            {value > 0 ? "+" : ""}
            {(value * 100).toFixed(1)}%
          </span>
        </div>
      ))}
    </div>
  );
}
