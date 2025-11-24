"use client";

import * as React from "react";
import {
  BookOpen,
  FolderClosed,
  GalleryVerticalEnd,
  PieChart,
  ShoppingBag,
  Contact,
  IdCard,
  Users,
  BookText,
  MessagesSquare,
} from "lucide-react";
import { TbPointFilled } from "react-icons/tb";

import { NavFavorites } from "@/components/nav-favorites";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

/**
 * Sidebar navigation configuration data
 * Contains all navigation items, favorites, and page links
 */
const data = {
  // User profile information (currently placeholder)
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "",
  },
  // Team/Organization switcher configuration
  teams: [
    {
      name: "ByeWind",
      logo: GalleryVerticalEnd,
    },
  ],
  // Main navigation items with nested sub-items
  navMain: [
    {
      title: "Default",
      url: "/dashboard",
      icon: PieChart,
      isActive: false,
    },
    {
      title: "eCommerce",
      url: "#",
      icon: ShoppingBag,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Order List",
          url: "/order-list",
        },
      ],
    },
    {
      title: "Projects",
      url: "#",
      icon: FolderClosed,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Online Courses",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
  ],
  // Quick access favorites shown at the top of sidebar
  favorites: [
    {
      name: "Overview",
      url: "/overview",
      icon: TbPointFilled,
    },
    {
      name: "Projects",
      url: "#",
      icon: TbPointFilled,
    },
  ],
  // Additional pages section with collapsible sub-items
  pages: [
    {
      title: "User Profile",
      url: "#",
      icon: Contact,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Account",
      url: "#",
      icon: IdCard,
      isActive: false,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Corporate",
      url: "#",
      icon: Users,
      isActive: false,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Blogs",
      url: "#",
      icon: BookText,
      isActive: false,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Social",
      url: "#",
      icon: MessagesSquare,
      isActive: false,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
  ],
};

/**
 * AppSidebar Component
 *
 * Main navigation sidebar with collapsible functionality
 * Displays favorites, main navigation, and pages sections
 * Can collapse to icon-only view for more screen space
 */
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites items={data.favorites} />
        <NavMain items={data.navMain} />
        <NavProjects pages={data.pages} />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
