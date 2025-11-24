"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple line chart";

/**
 * Revenue chart data for current week vs previous week comparison
 * Values are in cents/base units (multiply by 1M for display)
 * This allows Y-axis to show "10M", "20M" etc. for better readability
 */
const chartData = [
  { month: "January", desktop: 18600000, mobile: 8000000 },
  { month: "February", desktop: 30500000, mobile: 20000000 },
  { month: "March", desktop: 23700000, mobile: 12000000 },
  { month: "April", desktop: 7300000, mobile: 19000000 },
  { month: "May", desktop: 20900000, mobile: 13000000 },
  { month: "June", desktop: 21400000, mobile: 14000000 },
];

/**
 * Chart configuration defining line colors and labels
 * Uses CSS custom properties for theme-aware colors
 * Note: "desktop" = Current Week, "mobile" = Previous Week (naming from chart library)
 */
const chartConfig = {
  desktop: {
    label: "Current Week",
    color: "var(--revenue-current-week)", // CSS variable from theme
  },
  mobile: {
    label: "Previous Week",
    color: "var(--revenue-previous-week)", // CSS variable from theme
  },
} satisfies ChartConfig;

/**
 * RevenueGraph Component
 *
 * Displays a dual-line chart comparing current week vs previous week revenue
 * - Y-axis shows revenue in millions (M)
 * - X-axis shows months (abbreviated to 3 letters)
 * - Responsive and theme-aware
 */
export function RevenueGraph() {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        height={140}
        margin={{
          top: 8,
          bottom: 8,
          left: 12,
          right: 12,
        }}
      >
        <YAxis
          tickLine={false}
          axisLine={false}
          ticks={[0, 10000000, 20000000, 30000000]}
          tickFormatter={(v) => `${v / 1000000}M`}
          width={56}
        />
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="desktop"
          type="monotone"
          stroke="var(--revenue-current-week)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="mobile"
          type="monotone"
          stroke="var(--revenue-previous-week)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
