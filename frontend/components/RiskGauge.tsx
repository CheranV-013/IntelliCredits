export default function RiskGauge({ score }: { score: number }) {
  const angle = (score / 100) * 180;
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-56 h-28 overflow-hidden">
        <div className="absolute inset-0 rounded-t-full border-8 border-gray-200"></div>
        <div
          className="absolute inset-0 rounded-t-full border-8 border-mint"
          style={{ clipPath: `polygon(0 100%, 100% 100%, 100% 0, 0 0)` }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-1 h-24 bg-ink origin-bottom"
          style={{ transform: `translateX(-50%) rotate(${angle - 90}deg)` }}
        ></div>
      </div>
      <p className="text-3xl font-semibold text-ink -mt-2">{score}</p>
      <p className="text-xs text-steel">Credit Score</p>
    </div>
  );
}
