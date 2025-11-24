"use client";

import { Pie, PieChart, ResponsiveContainer } from "recharts";

import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";

// export const description = "A donut chart";

const chartData = [
  { browser: "direct", visitors: 275, fill: "var(--color-direct)" },
  { browser: "affiliate", visitors: 400, fill: "var(--color-affiliate)" },
  { browser: "sponsored", visitors: 187, fill: "var(--color-sponsored)" },
  { browser: "email", visitors: 173, fill: "var(--color-email)" }
];

const totalVisitors = chartData.reduce((sum, item) => sum + item.visitors, 0);

const chartConfig = {
  direct: {
    label: "Direct",
    color: "var(--sales-chart-4)"
  },
  affiliate: {
    label: "Affiliate",
    color: "var(--sales-chart-1)"
  },
  sponsored: {
    label: "Sponsored",
    color: "var(--sales-chart-2)"
  },
  email: {
    label: "E-mail",
    color: "var(--sales-chart-3)"
  }
} satisfies ChartConfig;

export function TotalSalesPieChart() {
  return (
    <div>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    hideLabel
                    className="min-w-0 w-auto"
                    formatter={(value) =>
                      `${((Number(value) / totalVisitors) * 100).toFixed(1)}%`
                    }
                  />
                }
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius="35%"
                outerRadius="65%"
                startAngle={90}
                endAngle={450}
                paddingAngle={4}
                cornerRadius={10}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </div>
  );
}
