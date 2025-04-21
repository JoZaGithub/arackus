
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { User, UserPlus, Edit, Send, Folder } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const tabs = [
  { title: "Clients", url: "/clients", icon: User },
  { title: "Add Client", url: "/add-client", icon: UserPlus },
  { title: "Gist", url: "/gist", icon: Edit },
  { title: "Send", url: "/send", icon: Send },
];

export function AppSidebar() {
  const location = useLocation();
  return (
    <Sidebar>
      <SidebarContent className="h-full bg-sidebar glass px-0">
        <SidebarGroup className="mt-6">
          <SidebarGroupContent>
            <SidebarMenu>
              {tabs.map((tab) => {
                const active = location.pathname === tab.url;
                return (
                  <SidebarMenuItem key={tab.title} className={active ? "sidebar-active" : ""}>
                    <SidebarMenuButton asChild>
                      <Link to={tab.url} className="flex items-center gap-3 px-6 py-3 text-lg">
                        <tab.icon size={20} className={active ? "text-sidebarAccent" : "text-foreground"} />
                        <span>{tab.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
