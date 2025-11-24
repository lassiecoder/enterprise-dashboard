"use client";

import {
  ChevronRight,
  MoreHorizontal,
  Folder,
  Settings2,
  type LucideIcon
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuAction,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function NavProjects({
  pages
}: {
  pages: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Pages</SidebarGroupLabel>
      <SidebarMenu>
        {pages.map((item) => {
          // If the item has no sub-items, render it like a project (simple link + icon)
          if (!item.items || item.items.length === 0) {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild className="ml-6">
                  <a href={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title} </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    <ChevronRight className=" transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    {item.icon && <item.icon className="ml-2" />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

// "use client";

// import {
//   Folder,
//   Forward,
//   MoreHorizontal,
//   Trash2,
//   type LucideIcon
// } from "lucide-react";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger
// } from "@/components/ui/dropdown-menu";
// import {
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuAction,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   useSidebar
// } from "@/components/ui/sidebar";

// export function NavProjects({
//   projects
// }: {
//   projects: {
//     name: string;
//     url: string;
//     icon: LucideIcon;
//   }[];
// }) {
//   const { isMobile } = useSidebar();

//   return (
//     <SidebarGroup className="group-data-[collapsible=icon]:hidden">
//       <SidebarGroupLabel>Pages</SidebarGroupLabel>
//       <SidebarMenu>
//         {projects.map((item) => (
//           <SidebarMenuItem key={item.name}>
//             <SidebarMenuButton asChild>
//               <a href={item.url}>
//                 <item.icon className={"dark: text-white/30"} />
//                 <span>{item.name}</span>
//               </a>
//             </SidebarMenuButton>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <SidebarMenuAction showOnHover>
//                   <MoreHorizontal />
//                   <span className="sr-only">More</span>
//                 </SidebarMenuAction>
//               </DropdownMenuTrigger>
//               {/* <DropdownMenuContent
//                 className="w-48 rounded-lg"
//                 side={isMobile ? "bottom" : "right"}
//                 align={isMobile ? "end" : "start"}
//               >
//                 <DropdownMenuItem>
//                   <Folder className="text-muted-foreground" />
//                   <span>View Project</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Forward className="text-muted-foreground" />
//                   <span>Share Project</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <Trash2 className="text-muted-foreground" />
//                   <span>Delete Project</span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent> */}
//             </DropdownMenu>
//           </SidebarMenuItem>
//         ))}
//         {/* <SidebarMenuItem>
//           <SidebarMenuButton className="text-sidebar-foreground/70">
//             <MoreHorizontal className="text-sidebar-foreground/70" />
//             <span>More</span>
//           </SidebarMenuButton>
//         </SidebarMenuItem> */}
//       </SidebarMenu>
//     </SidebarGroup>
//   );
// }
