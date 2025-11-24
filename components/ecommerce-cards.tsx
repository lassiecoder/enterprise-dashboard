"use client";

import * as React from "react";
import ProjectionsChart from "./charts/ProjectionsChart";
import { TrendingDown, TrendingUp } from "lucide-react";

export default function EcommerceCards() {
  const cards = [
    {
      title: "Customers",
      value: "3,781",
      delta: "+11.01%",
      highlight: true,
      icon: <TrendingUp size={14} />
    },
    {
      title: "Orders",
      value: "1,219",
      delta: "-0.03%",
      highlight: false,
      icon: <TrendingDown size={14} />
    },
    {
      title: "Revenue",
      value: "$695",
      delta: "+15.03%",
      highlight: false,
      icon: <TrendingUp size={14} />
    },
    {
      title: "Growth",
      value: "30.1%",
      delta: "+6.08%",
      highlight: true,
      icon: <TrendingUp size={14} />
    }
  ];

  return (
    <section aria-label="ecommerce" className="space-y-4">
      <h3 className="text-lg font-semibold">eCommerce</h3>

      {/* Layout: left = 2x2 stat cards, right = large chart */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {/* Left: cards grid (spans 2 columns on md+) */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            {cards.map((c, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 shadow-sm min-h-[148px] flex flex-col justify-between ${
                  c.highlight
                    ? "bg-[#EAF8FF] text-slate-900 dark:bg-slate-700/40 dark:text-white"
                    : "bg-card"
                }`}
              >
                <div className="text-sm text-muted-foreground">{c.title}</div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="lg:text-2xl sm:text-lg font-bold">
                    {c.value}
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    {c.delta}
                    {c.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: chart (spans 1 column) */}
        <div className="md:col-span-2">
          <div className="rounded-2xl bg-muted/60 p-6 h-full flex flex-col">
            <div className="flex items-center justify-between">
              <h4 className="text-md font-medium">Projections vs Actuals</h4>
            </div>
            <div className="mt-4 flex-1">
              <ProjectionsChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
