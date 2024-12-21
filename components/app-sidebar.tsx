import { ChevronDown, LinkIcon, User2 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";
import { AppMenu } from "@/lib/constants";
import Link from "next/link";
import logo from "../image/logo.png";
import Image from "next/image";
import user from "../image/user.jpeg";

export function AppSidebar() {
  return (
    <div className="bg-white">
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="border-b-2">
                <a href="#">
                  <Image src={logo} alt="logo" />
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">SMP Yapendik</span>
                    <span className="truncate text-xs">Semarang</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="font-bold">
              MAIN MENU
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {AppMenu.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.href}>
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarGroup>
            <SidebarGroupLabel>Akun</SidebarGroupLabel>
            <SidebarGroupContent>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" className="w-full justify-start">
                    <Avatar className="mr-2 h-8 w-8">
                      <Image src={user} alt="user" />
                    </Avatar>
                    <span className="truncate">John Lennon</span>
                    <ChevronDown className="ml-auto h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem>
                    <Link
                      href="/managements/student/profile"
                      className="w-full"
                    >
                      <div className="grid grid-cols-10 gap-4">
                        <div className="col-span-1">
                          <User2 className="mr-2 h-4 w-4" />
                        </div>

                        <div className="col-span-9">
                          <p>Profile</p>
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/logout" className="w-full">
                      <div className="grid grid-cols-10 gap-4">
                        <div className="col-span-1">
                          <LinkIcon className="mr-2 h-4 w-4" />
                        </div>

                        <div className="col-span-9">
                          <p>Logout</p>
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
