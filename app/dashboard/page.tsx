import { AppSidebar } from "@/components/app-sidebar";
import AppSidebarRight from "@/components/app-sidebar-right";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  RightSidebarProvider,
  RightSidebarInset,
  RightSidebarTrigger,
} from "@/components/ui/rightsidebar";
import { Star, History, Bell } from "lucide-react";
import EcommerceCards from "@/components/ecommerce-cards";
import { ThemeToggle } from "../theme-toggle";
import SearchBar from "@/components/ui/searchbar";
import RevenueAndRevenueByLocation from "@/components/revenue-and-revenue-location";
import TopSellingProductsAndTotalSales from "@/components/top-selling-prods-and-total-sales";

export default function Page() {
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
                      Default
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex items-center gap-4 px-4">
              <SearchBar value={""} placeholder="Search..." />
              <ThemeToggle />
              <History className="hidden lg:block h-4 w-4 sm:h-5 sm:w-5" />
              <Bell className="hidden lg:block h-4 w-4 sm:h-5 sm:w-5" />
              <RightSidebarTrigger className="-ml-1" />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <EcommerceCards />
            <RevenueAndRevenueByLocation />
            <TopSellingProductsAndTotalSales />
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
