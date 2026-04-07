"use client";

import { useEffect, useState } from "react";
import { onLCP, onCLS, onINP, type Metric } from "web-vitals";

export default function PerformanceBudget() {
  const [metrics, setMetrics] = useState<Record<string, { value: number; rating: string }>>({});

  useEffect(() => {
    // Ne s'affiche qu'en mode développement
    if (process.env.NODE_ENV !== "development") return;

    const handleMetric = (metric: Metric) => {
      setMetrics((prev) => ({
        ...prev,
        [metric.name]: {
          value: metric.name === "CLS" ? metric.value * 1000 : metric.value, // Convert CLS to integer for easier reading, or keep decimal. Usually kept decimal but prompt says multiply by 1000 for GA. Let's just format it nicely.
          rating: metric.rating,
        },
      }));
    };

    onLCP(handleMetric);
    onCLS(handleMetric);
    onINP(handleMetric);
  }, []);

  if (process.env.NODE_ENV !== "development") return null;
  if (Object.keys(metrics).length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg shadow-xl text-xs z-[9999] backdrop-blur-md border border-white/10 font-mono">
      <h3 className="font-bold mb-2 uppercase text-white/70">CWV Live Budget</h3>
      <div className="space-y-1">
        {Object.entries(metrics).map(([name, data]) => {
          let color = "text-green-400";
          if (data.rating === "needs-improvement") color = "text-yellow-400";
          if (data.rating === "poor") color = "text-red-400";

          const displayValue = name === "CLS" ? (data.value / 1000).toFixed(3) : Math.round(data.value) + "ms";

          return (
            <div key={name} className="flex justify-between gap-4">
              <span className="font-bold">{name}:</span>
              <span className={color}>{displayValue}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
