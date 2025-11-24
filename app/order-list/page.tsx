"use client";

import React, { useState, useEffect, useRef } from "react";
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
import {
  Star,
  Plus,
  Filter,
  ArrowUpDown,
  Calendar,
  History,
  Bell,
} from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import SearchBar from "@/components/ui/searchbar";

type Order = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
};

const orders: Order[] = [
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "/avatars/01.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "/avatars/02.png" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/avatars/03.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/avatars/04.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/avatars/05.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "/avatars/01.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "/avatars/02.png" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/avatars/03.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/avatars/04.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/avatars/05.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9806",
    user: { name: "Koray Okumus", avatar: "/avatars/06.png" },
    project: "Website Redesign",
    address: "Grove Street Miami",
    date: "Feb 3, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9807",
    user: { name: "Phoenix Baker", avatar: "/avatars/07.png" },
    project: "E-commerce Platform",
    address: "Ocean Drive Seattle",
    date: "Feb 4, 2023",
    status: "Complete",
  },
  {
    id: "#CM9808",
    user: { name: "Lana Steiner", avatar: "/avatars/08.png" },
    project: "Mobile App",
    address: "Park Avenue Boston",
    date: "Feb 5, 2023",
    status: "Pending",
  },
  {
    id: "#CM9809",
    user: { name: "Demi Wilkinson", avatar: "/avatars/09.png" },
    project: "Dashboard UI",
    address: "Main Street Austin",
    date: "Feb 6, 2023",
    status: "Approved",
  },
  {
    id: "#CM9810",
    user: { name: "Candice Wu", avatar: "/avatars/10.png" },
    project: "Marketing Site",
    address: "Broadway New York",
    date: "Feb 7, 2023",
    status: "Complete",
  },
  {
    id: "#CM9811",
    user: { name: "Natali Craig", avatar: "/avatars/01.png" },
    project: "Blog Platform",
    address: "Highland Avenue Portland",
    date: "Feb 8, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9812",
    user: { name: "Kate Morrison", avatar: "/avatars/02.png" },
    project: "Analytics Dashboard",
    address: "River Road Denver",
    date: "Feb 9, 2023",
    status: "Pending",
  },
  {
    id: "#CM9813",
    user: { name: "Drew Cano", avatar: "/avatars/03.png" },
    project: "Social Media App",
    address: "Lake Street Chicago",
    date: "Feb 10, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9814",
    user: { name: "Orlando Diggs", avatar: "/avatars/04.png" },
    project: "CRM System",
    address: "Hill Drive Phoenix",
    date: "Feb 11, 2023",
    status: "Approved",
  },
  {
    id: "#CM9815",
    user: { name: "Andi Lane", avatar: "/avatars/05.png" },
    project: "Portfolio Website",
    address: "Sunset Boulevard LA",
    date: "Feb 12, 2023",
    status: "Complete",
  },
  {
    id: "#CM9816",
    user: { name: "Koray Okumus", avatar: "/avatars/06.png" },
    project: "Video Streaming",
    address: "Cedar Lane Dallas",
    date: "Feb 13, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9817",
    user: { name: "Phoenix Baker", avatar: "/avatars/07.png" },
    project: "Payment Gateway",
    address: "Maple Street Houston",
    date: "Feb 14, 2023",
    status: "Pending",
  },
  {
    id: "#CM9818",
    user: { name: "Lana Steiner", avatar: "/avatars/08.png" },
    project: "Booking System",
    address: "Oak Avenue Atlanta",
    date: "Feb 15, 2023",
    status: "Complete",
  },
  {
    id: "#CM9819",
    user: { name: "Demi Wilkinson", avatar: "/avatars/09.png" },
    project: "Inventory Management",
    address: "Pine Road Tampa",
    date: "Feb 16, 2023",
    status: "Approved",
  },
  {
    id: "#CM9820",
    user: { name: "Candice Wu", avatar: "/avatars/10.png" },
    project: "Learning Platform",
    address: "Elm Court Detroit",
    date: "Feb 17, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9821",
    user: { name: "Natali Craig", avatar: "/avatars/01.png" },
    project: "Chat Application",
    address: "Birch Lane Philadelphia",
    date: "Feb 18, 2023",
    status: "Pending",
  },
  {
    id: "#CM9822",
    user: { name: "Kate Morrison", avatar: "/avatars/02.png" },
    project: "Forum Website",
    address: "Willow Drive Minneapolis",
    date: "Feb 19, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9823",
    user: { name: "Drew Cano", avatar: "/avatars/03.png" },
    project: "Event Management",
    address: "Cherry Street Nashville",
    date: "Feb 20, 2023",
    status: "Complete",
  },
  {
    id: "#CM9824",
    user: { name: "Orlando Diggs", avatar: "/avatars/04.png" },
    project: "HR Portal",
    address: "Aspen Way Sacramento",
    date: "Feb 21, 2023",
    status: "Approved",
  },
  {
    id: "#CM9825",
    user: { name: "Andi Lane", avatar: "/avatars/05.png" },
    project: "Survey Tool",
    address: "Spruce Circle Kansas City",
    date: "Feb 22, 2023",
    status: "In Progress",
  },
];

const statusColors = {
  "In Progress": { text: "#8A8CD9", bg: "#8A8CD9" },
  Complete: { text: "#4AA785", bg: "#4AA785" },
  Pending: { text: "#59A8D4", bg: "#59A8D4" },
  Approved: { text: "#FFC555", bg: "#FFC555" },
  Rejected: { text: "#A0A0A0", bg: "#A0A0A0" },
};

export default function OrderListPage() {
  // State management for order selection, filtering, and pagination
  const [selectedOrders, setSelectedOrders] = useState<Set<number>>(new Set()); // Stores indices of selected orders
  const [statusFilter, setStatusFilter] = useState<Set<Order["status"]>>(
    new Set()
  ); // Active status filters (can be multiple)
  const [showFilterDropdown, setShowFilterDropdown] = useState(false); // Controls filter dropdown visibility
  const [currentPage, setCurrentPage] = useState(1); // Current pagination page
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null); // Date sort: asc/desc/none
  const [searchQuery, setSearchQuery] = useState(""); // Real-time search input
  const [debouncedSearch, setDebouncedSearch] = useState(""); // Debounced search (300ms delay)
  const filterDropdownRef = useRef<HTMLDivElement>(null); // Ref for click-outside detection
  const itemsPerPage = 10; // Number of orders per page // Number of orders per page

  /**
   * Parses various date string formats into Date objects for sorting
   * Handles relative dates ("Just now", "Yesterday") and absolute dates ("Feb 2, 2023")
   */
  const parseDate = (dateStr: string): Date => {
    const now = new Date();
    if (dateStr === "Just now") return now;
    if (dateStr === "A minute ago") return new Date(now.getTime() - 60000); // 1 minute ago
    if (dateStr.includes("hour ago")) {
      const hours = parseInt(dateStr);
      return new Date(now.getTime() - hours * 3600000); // N hours ago
    }
    if (dateStr === "Yesterday") return new Date(now.getTime() - 86400000); // 24 hours ago
    return new Date(dateStr); // Parse absolute date string
  };

  // Filter orders by status and search query (min 3 characters)
  const filteredOrders = orders.filter((order) => {
    const matchesStatus =
      statusFilter.size === 0 || statusFilter.has(order.status); // Show all if no filter selected
    const matchesSearch =
      debouncedSearch.length < 3 || // Skip search if less than 3 chars
      order.project.toLowerCase().includes(debouncedSearch.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Sort orders by date if sort order is selected
  const sortedOrders = sortOrder
    ? [...filteredOrders].sort((a, b) => {
        const dateA = parseDate(a.date).getTime();
        const dateB = parseDate(b.date).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA; // Ascending or descending
      })
    : filteredOrders; // No sorting if sortOrder is null

  // Pagination: Calculate pages and slice orders for current page
  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedOrders = sortedOrders.slice(startIndex, endIndex);

  // Effect: Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target as Node)
      ) {
        setShowFilterDropdown(false);
      }
    };

    if (showFilterDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilterDropdown]);

  // Effect: Debounce search input (wait 300ms after typing stops)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer); // Clear timeout on cleanup
  }, [searchQuery]);

  /**
   * Handles "Select All" checkbox in table header
   * Selects/deselects all orders on the current page
   */
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const newSelected = new Set(selectedOrders);
      paginatedOrders.forEach((_, idx) => {
        newSelected.add(startIndex + idx); // Add global index (not page index)
      });
      setSelectedOrders(newSelected);
    } else {
      const newSelected = new Set(selectedOrders);
      paginatedOrders.forEach((_, idx) => {
        newSelected.delete(startIndex + idx); // Remove from selection
      });
      setSelectedOrders(newSelected);
    }
  };

  /**
   * Toggles a status filter on/off
   * Resets to page 1 when filter changes
   */
  const toggleStatusFilter = (status: Order["status"]) => {
    const newFilter = new Set(statusFilter);
    if (newFilter.has(status)) {
      newFilter.delete(status); // Remove filter
    } else {
      newFilter.add(status); // Add filter
    }
    setStatusFilter(newFilter);
    setCurrentPage(1); // Reset pagination
  };

  /**
   * Handles search input changes
   * Resets to page 1 when search query changes
   */
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset pagination
  };

  /**
   * Cycles through sort states: null → desc → asc → null
   * null: no sorting, desc: newest first, asc: oldest first
   */
  const toggleSort = () => {
    if (sortOrder === null) {
      setSortOrder("desc"); // First click: newest first
    } else if (sortOrder === "desc") {
      setSortOrder("asc"); // Second click: oldest first
    } else {
      setSortOrder(null); // Third click: remove sorting
    }
    setCurrentPage(1); // Reset pagination
  };

  const handleSelectOrder = (idx: number, checked: boolean) => {
    const newSelected = new Set(selectedOrders);
    if (checked) {
      newSelected.add(idx);
    } else {
      newSelected.delete(idx);
    }
    setSelectedOrders(newSelected);
  };

  const currentPageSelectedCount = paginatedOrders.filter((_, idx) =>
    selectedOrders.has(startIndex + idx)
  ).length;
  const allSelected =
    currentPageSelectedCount === paginatedOrders.length &&
    paginatedOrders.length > 0;
  const someSelected =
    currentPageSelectedCount > 0 &&
    currentPageSelectedCount < paginatedOrders.length;

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
                      Order List
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

          <div className="flex flex-col gap-4 p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">Order List</h1>
            </div>

            <div className="overflow-hidden">
              {/* Table Header Controls */}
              <div className="flex rounded-2xl items-center justify-between px-4 py-2 bg-muted/60  border-border">
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <Plus className="h-4 w-4" />
                  </button>
                  <div className="relative" ref={filterDropdownRef}>
                    <button
                      className="p-2 hover:bg-muted rounded-lg transition-colors relative"
                      onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                    >
                      <Filter className="h-4 w-4" />
                      {statusFilter.size > 0 && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                          {statusFilter.size}
                        </span>
                      )}
                    </button>
                    {showFilterDropdown && (
                      <div className="absolute left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-10">
                        <div className="p-2">
                          <div className="text-sm font-medium mb-2 px-2">
                            Filter by Status
                          </div>
                          {(Object.keys(statusColors) as Order["status"][]).map(
                            (status) => (
                              <label
                                key={status}
                                className="flex items-center gap-2 px-2 py-2 hover:bg-muted rounded cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  className="rounded"
                                  checked={statusFilter.has(status)}
                                  onChange={() => toggleStatusFilter(status)}
                                />
                                <span className="text-sm flex items-center gap-2">
                                  <span
                                    className="inline-block w-2 h-2 rounded-full"
                                    style={{
                                      backgroundColor: statusColors[status].bg,
                                    }}
                                  />
                                  {status}
                                </span>
                              </label>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    className="p-2 hover:bg-muted rounded-lg transition-colors relative"
                    onClick={toggleSort}
                  >
                    <ArrowUpDown className="h-4 w-4" />
                    {sortOrder && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                        {sortOrder === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by Project (min 3 chars)"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="bg-muted/50 border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring w-64"
                  />
                  {searchQuery.length > 0 && searchQuery.length < 3 && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                      {3 - searchQuery.length} more
                    </span>
                  )}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">
                        <input
                          type="checkbox"
                          className="rounded"
                          checked={allSelected}
                          ref={(input) => {
                            if (input) {
                              input.indeterminate = someSelected;
                            }
                          }}
                          onChange={(e) => handleSelectAll(e.target.checked)}
                        />
                      </th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">
                        Order ID
                      </th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">
                        User
                      </th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">
                        Project
                      </th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">
                        Address
                      </th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">
                        Date
                      </th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedOrders.map((order, idx) => (
                      <tr
                        key={`${order.id}-${idx}`}
                        className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <input
                            type="checkbox"
                            className="rounded"
                            checked={selectedOrders.has(startIndex + idx)}
                            onChange={(e) =>
                              handleSelectOrder(
                                startIndex + idx,
                                e.target.checked
                              )
                            }
                          />
                        </td>
                        <td className="py-4 px-4 text-sm font-medium">
                          {order.id}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xs font-semibold">
                              {order.user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <span className="text-sm">{order.user.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm">{order.project}</td>
                        <td className="py-4 px-4 text-sm">
                          <div className="flex items-center gap-2">
                            {order.address}
                            {idx === 4 && (
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {order.date}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm">
                          <div className="flex items-center gap-2">
                            <span
                              className="inline-block w-2 h-2 rounded-full"
                              style={{
                                backgroundColor: statusColors[order.status].bg,
                              }}
                            />
                            <span
                              style={{ color: statusColors[order.status].text }}
                            >
                              {order.status}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-end gap-2 p-4 border-t border-border">
                <button
                  className="p-2 hover:bg-muted rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-1 rounded-lg transition-colors ${
                        page === currentPage
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  className="p-2 hover:bg-muted rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
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
