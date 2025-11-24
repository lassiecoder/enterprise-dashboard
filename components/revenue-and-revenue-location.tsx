"use client";

// import * as React from "react";
import React from "react";
import ProjectionsChart from "./charts/ProjectionsChart";
import { TrendingDown, TrendingUp } from "lucide-react";
import { BreadcrumbLink } from "./ui/breadcrumb";
import { RevenueGraph } from "./charts/RevenueGraph";
import RevenueByLocationStatic from "./location/RevenueByLocationStatic";

export default function RevenueAndRevenueByLocation() {
  return (
    <section aria-label="ecommerce" className="space-y-4">
      {/* <h3 className="text-lg font-semibold">eCommerce</h3> */}

      {/* Layout: left = 2x2 stat cards, right = large chart */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 ">
        {/* Left: revenue header and chart (spans 3 columns on md+) */}
        <div className="md:col-span-3">
          <div className="rounded-2xl overflow-hidden bg-muted/60">
            <div className="px-6 py-3 flex items-center max-[460px]:flex-col max-[460px]:items-start max-[460px]:gap-2 max-[460px]:px-3 max-[460px]:py-2">
              <h3 className="text-lg font-semibold">Revenue</h3>
              <h1 className="ml-6 mr-6 dark:text-white/20 text-black/60 max-[460px]:hidden">
                |
              </h1>
              <div className="flex items-center gap-10 max-[460px]:gap-3 max-[460px]:flex-wrap">
                <div className="flex items-center gap-2 text-sm max-[460px]:text-xs max-[460px]:w-full">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ background: "var(--revenue-current-week)" }}
                  />
                  <span>
                    Current Week{" "}
                    <span className="ml-1 font-semibold ">$58,211</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm xs:text-xs max-[460px]:text-xs max-[460px]:w-full">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ background: "var(--revenue-previous-week)" }}
                  />
                  <span>
                    Previous Week{" "}
                    <span className="ml-1 font-semibold">$68,768</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="pr-6 pb-6 max-[460px]:pr-3 max-[460px]:pb-3">
              <RevenueGraph />
            </div>
          </div>
        </div>

        {/* Right: chart (spans 1 column) */}
        <div className="md:col-span-1">
          <div className="rounded-2xl bg-muted/60 p-6 h-full flex flex-col">
            <RevenueByLocationStatic />
          </div>
        </div>
      </div>
    </section>
  );
}
