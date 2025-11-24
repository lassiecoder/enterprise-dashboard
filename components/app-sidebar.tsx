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
  MessagesSquare
} from "lucide-react";
import { TbPointFilled } from "react-icons/tb";

import { NavFavorites } from "@/components/nav-favorites";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: ""
  },
  teams: [
    {
      name: "ByeWind",
      logo: GalleryVerticalEnd
    }
  ],
  navMain: [
    {
      title: "Default",
      url: "/dashboard",
      icon: PieChart,
      isActive: false
    },
    {
      title: "eCommerce",
      url: "#",
      icon: ShoppingBag,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#"
        },
        {
          title: "Order List",
          url: "/order-list"
        }
        // {
        //   title: "Settings",
        //   url: "#"
        // }
      ]
    },
    {
      title: "Projects",
      url: "#",
      icon: FolderClosed,
      items: [
        {
          title: "Genesis",
          url: "#"
        },
        {
          title: "Explorer",
          url: "#"
        },
        {
          title: "Quantum",
          url: "#"
        }
      ]
    },
    {
      title: "Online Courses",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#"
        },
        {
          title: "Get Started",
          url: "#"
        },
        {
          title: "Tutorials",
          url: "#"
        },
        {
          title: "Changelog",
          url: "#"
        }
      ]
    }
  ],
  favorites: [
    {
      name: "Overview",
      url: "/overview",
      icon: TbPointFilled
    },
    {
      name: "Projects",
      url: "#",
      icon: TbPointFilled
    }
  ],
  pages: [
    {
      title: "User Profile",
      url: "#",
      icon: Contact,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#"
        },
        {
          title: "Starred",
          url: "#"
        },
        {
          title: "Settings",
          url: "#"
        }
      ]
    },
    {
      title: "Account",
      url: "#",
      icon: IdCard,
      isActive: false,
      items: [
        {
          title: "History",
          url: "#"
        },
        {
          title: "Starred",
          url: "#"
        },
        {
          title: "Settings",
          url: "#"
        }
      ]
    },
    {
      title: "Corporate",
      url: "#",
      icon: Users,
      isActive: false,
      items: [
        {
          title: "History",
          url: "#"
        },
        {
          title: "Starred",
          url: "#"
        },
        {
          title: "Settings",
          url: "#"
        }
      ]
    },
    {
      title: "Blogs",
      url: "#",
      icon: BookText,
      isActive: false,
      items: [
        {
          title: "History",
          url: "#"
        },
        {
          title: "Starred",
          url: "#"
        },
        {
          title: "Settings",
          url: "#"
        }
      ]
    },
    {
      title: "Social",
      url: "#",
      icon: MessagesSquare,
      isActive: false,
      items: [
        {
          title: "History",
          url: "#"
        },
        {
          title: "Starred",
          url: "#"
        },
        {
          title: "Settings",
          url: "#"
        }
      ]
    }
  ]
};

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
