import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import AppSidebarRight from "@/components/app-sidebar-right";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";
import {
  RightSidebarProvider,
  RightSidebarInset,
  RightSidebarTrigger
} from "@/components/ui/rightsidebar";
import { Star, History, Bell } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import SearchBar from "@/components/ui/searchbar";

export default function OverviewPage() {
  return (
    <RightSidebarProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Star className="h-4 w-4 sm:h-5 sm:w-5 ml-2 mr-2" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden show-at-920">
                    <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                    <BreadcrumbLink className="ml-4 mr-2">/</BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-sm md:text-base">
                      Overview
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex items-center gap-4 px-4">
              <SearchBar />
              <ThemeToggle />
              <History className="hidden lg:block h-4 w-4 sm:h-5 sm:w-5" />
              <Bell className="hidden lg:block h-4 w-4 sm:h-5 sm:w-5" />
              <RightSidebarTrigger className="-ml-1" />
            </div>
          </header>

          <div className="flex flex-col gap-6 p-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
              <p className="text-muted-foreground mt-2">
                Get a comprehensive view of your business metrics and
                performance
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-muted/60 p-6">
                <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
                <p className="text-3xl font-bold">$45,231.89</p>
                <p className="text-sm text-muted-foreground mt-2">
                  +20.1% from last month
                </p>
              </div>

              <div className="rounded-2xl bg-muted/60 p-6">
                <h3 className="text-lg font-semibold mb-2">Active Users</h3>
                <p className="text-3xl font-bold">2,350</p>
                <p className="text-sm text-muted-foreground mt-2">
                  +180 from last week
                </p>
              </div>

              <div className="rounded-2xl bg-muted/60 p-6">
                <h3 className="text-lg font-semibold mb-2">Sales</h3>
                <p className="text-3xl font-bold">12,234</p>
                <p className="text-sm text-muted-foreground mt-2">
                  +19% from last month
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-muted/60 p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div>
                    <p className="font-medium">New order received</p>
                    <p className="text-sm text-muted-foreground">Order #3456</p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    2 min ago
                  </span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div>
                    <p className="font-medium">Customer feedback received</p>
                    <p className="text-sm text-muted-foreground">
                      Rating: 5 stars
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    15 min ago
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Product inventory updated</p>
                    <p className="text-sm text-muted-foreground">
                      Stock replenished
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    1 hour ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
      <AppSidebarRight />
      <RightSidebarInset>
        {/* Right sidebar inset content (if any) */}
      </RightSidebarInset>
    </RightSidebarProvider>
  );
}
