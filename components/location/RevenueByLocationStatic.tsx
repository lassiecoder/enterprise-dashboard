"use client";

import Image from "next/image";

type Location = {
  name: string;
  value: number;
  percent?: number;
  display?: string;
  x: number; // percent
  y: number; // percent
};

const defaultLocations: Location[] = [
  { name: "New York", value: 72000, percent: 72, x: 22, y: 30 },
  { name: "San Francisco", value: 39000, percent: 39, x: 12, y: 36 },
  { name: "Sydney", value: 25000, percent: 25, x: 82, y: 72 },
  { name: "Singapore", value: 61000, percent: 61, x: 68, y: 54 }
];

function formatValue(v: number) {
  if (v >= 1000) return `${Math.round(v / 1000)}K`;
  return String(v);
}

export default function RevenueByLocationStatic({
  locations = defaultLocations
}: {
  locations?: Location[];
}) {
  const max = Math.max(...locations.map((l) => l.value), 1);

  // approximate highlight positions for USA and India (percent coordinates)
  const highlights = [
    // Matching the defaultLocations above (percent positions over the SVG)
    { id: "new_york", x: 22, y: 30 },
    { id: "san_francisco", x: 12, y: 36 },
    { id: "sydney", x: 82, y: 72 },
    { id: "singapore", x: 68, y: 54 }
  ];

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4 max-[767px]:text-base max-[767px]:mb-3">
        Revenue by Location
      </h4>

      <div
        className="relative w-full rounded-lg overflow-hidden mb-6 max-[767px]:mb-4"
        style={{ aspectRatio: "2.2" }}
      >
        <Image
          width={220}
          height={100}
          src="/world-map.svg"
          alt="World map"
          className="w-full h-full object-cover block"
        />

        {highlights.map((h) => (
          <div
            key={h.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${h.x}%`, top: `${h.y}%` }}
          >
            <div className="w-2 h-2 rounded-full bg-purple-400 ring-2 ring-purple-200 max-[767px]:w-1.5 max-[767px]:h-1.5 max-[767px]:ring-1" />
          </div>
        ))}
      </div>

      <div className="space-y-5 max-[767px]:space-y-5">
        {locations.map((loc) => {
          const percent = loc.percent ?? Math.round((loc.value / max) * 100);
          return (
            <div key={loc.name}>
              <div className="flex items-center justify-between">
                <div className="text-xs">{loc.name}</div>
                <div className="text-xs font-normal">
                  {loc.display ?? formatValue(loc.value)}
                </div>
              </div>

              <div className="mt-2 h-0.5 dark:bg-slate-800 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-0.5 rounded-full"
                  style={{
                    width: `${Math.max(2, Math.min(100, percent))}%`,
                    background: "var(--revenue-accent)"
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
