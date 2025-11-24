"use client";

import React from "react";
import { TotalSalesPieChart } from "./charts/TotalSalesPieChart";

type Product = {
  name: string;
  price: number;
  quantity: number;
  amount: number;
};

type SalesChannel = {
  name: string;
  value: number;
  color: string;
};

const defaultProducts: Product[] = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5
  },
  { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
  { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
  { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 }
];

const defaultSalesChannels: SalesChannel[] = [
  { name: "Direct", value: 300.56, color: "var(--sales-chart-1)" },
  { name: "Affilliate", value: 135.18, color: "var(--sales-chart-3)" },
  { name: "Sponsored", value: 154.02, color: "var(--sales-chart-2)" },
  { name: "E-mail", value: 48.96, color: "var(--sales-chart-4)" }
];

export default function TopSellingProductsAndTotalSales({
  products = defaultProducts,
  salesChannels = defaultSalesChannels
}: {
  products?: Product[];
  salesChannels?: SalesChannel[];
}) {
  const totalSales = salesChannels.reduce((sum, ch) => sum + ch.value, 0);

  // Calculate donut chart paths
  const radius = 80;
  const centerX = 120;
  const centerY = 120;
  const strokeWidth = 40;

  let currentAngle = -90; // Start at top

  const paths = salesChannels.map((channel) => {
    const percentage = (channel.value / totalSales) * 100;
    const angleSize = (percentage / 100) * 360;
    const endAngle = currentAngle + angleSize;

    const startRad = (currentAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);

    const largeArc = angleSize > 180 ? 1 : 0;

    const pathData = [
      `M ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`
    ].join(" ");

    const result = { pathData, color: channel.color, percentage };
    currentAngle = endAngle;
    return result;
  });

  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {/* Left: Top Selling Products Table (spans 3 columns) */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl bg-muted/60 p-6 max-[767px]:p-4">
            <h3 className="text-lg font-semibold mb-6 max-[767px]:text-base max-[767px]:mb-4">
              Top Selling Products
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left pb-3 text-sm font-medium text-muted-foreground max-[767px]:text-xs">
                      Name
                    </th>
                    <th className="text-left pb-3 text-sm font-medium text-muted-foreground max-[767px]:text-xs">
                      Price
                    </th>
                    <th className="text-left pb-3 text-sm font-medium text-muted-foreground max-[767px]:text-xs">
                      Quantity
                    </th>
                    <th className="text-left pb-3 text-sm font-medium text-muted-foreground max-[767px]:text-xs">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, idx) => (
                    <tr key={idx} className="border-b border-border/50">
                      <td className="py-4 text-sm max-[767px]:text-xs max-[767px]:py-3">
                        {product.name}
                      </td>
                      <td className="py-4 text-sm max-[767px]:text-xs max-[767px]:py-3">
                        ${product.price.toFixed(2)}
                      </td>
                      <td className="py-4 text-sm max-[767px]:text-xs max-[767px]:py-3">
                        {product.quantity}
                      </td>
                      <td className="py-4 text-sm max-[767px]:text-xs max-[767px]:py-3">
                        $
                        {product.amount.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right: Total Sales Donut Chart (spans 2 columns) */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl bg-muted/60 p-6 h-full flex flex-col max-[767px]:p-4">
            <h3 className="text-lg font-semibold  max-[767px]:text-base ">
              Total Sales
            </h3>

            <div className="flex-1 flex flex-col items-center justify-center">
              {/* Pie Chart */}
              <TotalSalesPieChart />

              {/* Legend */}
              <div className="w-full space-y-3 max-[767px]:space-y-2">
                {salesChannels.map((channel, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-block w-3 h-3 rounded-full"
                        style={{ background: channel.color }}
                      />
                      <span className="text-sm max-[767px]:text-xs">
                        {channel.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold max-[767px]:text-xs">
                      ${channel.value.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
