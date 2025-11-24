"use client";

import * as React from "react";
import { PanelRightIcon, X, Bug, User, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Sidebar, useRightSidebar } from "@/components/ui/rightsidebar";

const notifications = [
  { title: "You have a bug that needs...", time: "Just now", icon: Bug },
  { title: "New user registered", time: "59 minutes ago", icon: User },
  { title: "You have a bug that needs...", time: "12 hours ago", icon: Bug },
  { title: "Andi Lane subscribed to you", time: "Today, 11:59 AM", icon: Wifi }
];

const activities = [
  {
    who: "You have a bug that needs...",
    when: "Just now",
    avatar: "/sample-user-1.jpg"
  },
  {
    who: "Released a new version",
    when: "59 minutes ago",
    avatar: "/sample-user-2.jpg"
  },
  {
    who: "Submitted a bug",
    when: "12 hours ago",
    avatar: "/sample-user-3.jpg"
  },
  {
    who: "Modified A data in Page X",
    when: "Today, 11:59 AM",
    avatar: "/sample-user-1.jpg"
  },
  {
    who: "Deleted a page in Project X",
    when: "Feb 2, 2023",
    avatar: "/sample-user-2.jpg"
  }
];

const contacts = [
  "Natali Craig",
  "Drew Cano",
  "Orlando Diggs",
  "Andi Lane",
  "Kate Morrison",
  "Koray Okumus"
];

export function AppSidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { setOpen } = useRightSidebar();

  function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  return (
    <Sidebar side="right" collapsible="offcanvas" {...props}>
      <div className="p-4">
        {/* <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PanelRightIcon />
            <h3 className="text-lg font-medium">Notifications & Activity</h3>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X />
            <span className="sr-only">Close</span>
          </Button>
        </div> */}

        {/* Notifications */}
        <section className="mt-4">
          <h4 className="text-sm font-semibold">Notifications</h4>
          <div className="mt-2 space-y-3">
            {notifications.map((n, idx) => {
              const Icon = n.icon;
              return (
                <div key={idx} className="flex items-start gap-3">
                  <div
                    className="flex  items-center justify-center px-1.5 py-1.5   rounded-md bg-muted/60"
                    style={{
                      backgroundColor: idx % 2 === 0 ? "#E3F5FF" : "#E5ECF6"
                    }}
                  >
                    <Icon size={18} className="text-black" />
                  </div>

                  <div className="flex-1">
                    <div className="text-sm font-medium truncate">
                      {n.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {n.time}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Activities */}
        <section className="mt-6">
          <h4 className="text-sm font-semibold">Activities</h4>
          <div className="mt-3 space-y-4">
            {activities.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="relative">
                  <Avatar className="size-8">
                    {a.avatar ? (
                      <AvatarImage src={a.avatar} alt={a.who} />
                    ) : (
                      <AvatarFallback>{a.who.charAt(0)}</AvatarFallback>
                    )}
                  </Avatar>
                  {/* connector line: show for every item except the last */}
                  {i !== activities.length - 1 && (
                    <span className="absolute left-1/2 top-full mt-1 mb-1 -translate-x-1/2 h-3 w-px bg-muted-foreground/30" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium truncate">{a.who}</div>
                  <div className="text-xs text-muted-foreground">{a.when}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contacts */}
        <section className="mt-6">
          <h4 className="text-sm font-semibold">Contacts</h4>
          <div className="mt-3 space-y-2">
            {contacts.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback style={{ backgroundColor: randomColor() }}>
                    {c.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm">{c}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Sidebar>
  );
}

export default AppSidebarRight;
