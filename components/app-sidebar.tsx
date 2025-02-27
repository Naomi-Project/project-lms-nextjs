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
import { User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../image/logo.png";
import ButtonLogout from "./ui/buttonLogout";
import ProfileSidebar from "./ui/profileSidebar";

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
                  <ProfileSidebar />
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
                    <ButtonLogout />
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
