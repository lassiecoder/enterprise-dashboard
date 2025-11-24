"use client";

import * as React from "react";

export default function ProjectionsChart() {
  // Dataset (millions)
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const values = [18, 24, 20, 28, 16, 23];

  // We use a fixed axis max to match the design: 0, 10M, 20M, 30M
  const axisMax = 30;
  const ticks = [0, 10, 20, 30];

  const width = 600;
  const height = 260;
  const padding = { top: 28, right: 20, bottom: 40, left: 48 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  return (
    <div className="w-full h-56 md:h-48 lg:h-56">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
        {/* Grid lines + left axis labels */}
        {ticks.map((tick, i) => {
          const t = 1 - tick / axisMax; // normalized (0 top -> 1 bottom)
          const y = padding.top + chartHeight * (1 - tick / axisMax);
          return (
            <g key={i}>
              <line
                x1={padding.left}
                x2={width - padding.right}
                y1={y}
                y2={y}
                stroke="#374151"
                strokeOpacity={0.18}
                strokeWidth={1}
              />
              <text
                x={12}
                y={y + 4}
                fontSize={12}
                fill="#6b7280"
                textAnchor="start"
              >
                {tick}M
              </text>
            </g>
          );
        })}

        {/* Bars */}
        {values.map((v, i) => {
          const colWidth = chartWidth / values.length;
          // Make bars slimmer by subtracting more padding from the column width
          const barW = Math.max(18, colWidth - 60);
          const x = padding.left + i * colWidth + (colWidth - barW) / 2;
          const barH = (v / axisMax) * chartHeight;
          const y = padding.top + chartHeight - barH;

          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={barW}
                height={barH}
                rx={6}
                fill="#bfe6ff"
                fillOpacity={0.98}
              />
              {/* darker cap to emulate projection highlight */}
              <rect
                x={x}
                y={y}
                width={barW}
                height={Math.max(6, barH * 0.22)}
                rx={6}
                fill="#6b7280"
                fillOpacity={0.18}
              />

              {/* month label */}
              <text
                x={x + barW / 2}
                y={height - 12}
                fontSize={13}
                fill="#9ca3af"
                textAnchor="middle"
              >
                {months[i]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
