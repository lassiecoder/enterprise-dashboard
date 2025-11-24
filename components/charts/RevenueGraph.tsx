"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";

export const description = "A multiple line chart";

// Values are in whole units (cents/units). Use large numbers so axis shows Millions.
const chartData = [
  { month: "January", desktop: 18600000, mobile: 8000000 },
  { month: "February", desktop: 30500000, mobile: 20000000 },
  { month: "March", desktop: 23700000, mobile: 12000000 },
  { month: "April", desktop: 7300000, mobile: 19000000 },
  { month: "May", desktop: 20900000, mobile: 13000000 },
  { month: "June", desktop: 21400000, mobile: 14000000 }
];

const chartConfig = {
  desktop: {
    label: "Current Week",
    // color: "var(--chart-1)"
    color: "var(--revenue-current-week)"
  },
  mobile: {
    label: "Previous Week",
    color: "var(--revenue-previous-week)"
  }
} satisfies ChartConfig;

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
          right: 12
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
