import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { HeadofficeMenu, ManagerMenu, StudentMenu, TeacherMenu } from "@/lib/constants";
import { ChevronDown, LinkIcon, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../image/logo.png";
import user from "../image/user.jpeg";
import { Avatar } from "./ui/avatar";
import { Button } from "./ui/button";

export function AppSidebar() {
  return (
    <div className="bg-white">
      <Sidebar className="bg-white">
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
          {/* administration menu */}
          <SidebarGroup>
            <SidebarGroupLabel className="font-bold">
              Administrasi
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {ManagerMenu.map((item) =>
                  item.visibility == true ? (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.href}>
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.title}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ) : (
                    <></>
                  )
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* main menu */}
          <SidebarGroup>
            <SidebarGroupLabel className="font-bold">
              Headoffice
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {HeadofficeMenu.map((item) =>
                  item.visibility == true ? (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.href}>
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.title}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ) : (
                    <></>
                  )
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* main menu */}
          <SidebarGroup>
            <SidebarGroupLabel className="font-bold">
              Guru
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {TeacherMenu.map((item) =>
                  item.visibility == true ? (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.href}>
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.title}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ) : (
                    <></>
                  )
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* main menu */}
          <SidebarGroup>
            <SidebarGroupLabel className="font-bold">
              Murid
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {StudentMenu.map((item) =>
                  item.visibility == true ? (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.href}>
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.title}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ) : (
                    <></>
                  )
                )}
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
                    <span className="truncate">Pengguna</span>
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
                    <Link href="/" className="w-full">
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
