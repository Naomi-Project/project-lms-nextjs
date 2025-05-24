'use client'
/* eslint-disable */
import { useState } from "react";
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
import { HeadofficeMenu, ManagerMenu, StudentMenu, TeacherMenu, TeacherNotGuardianMenu } from "@/lib/constants";
import { ChevronDown, ChevronRight, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../image/logo.png";
import ButtonLogout from "./ui/buttonLogout";
import ProfileSidebar from "./ui/profileSidebar";
import Splash from "./splash";
import { useLoadingQueries } from "@/hooks/useLoadingQueries";
import { useGetAnnouncementsQuery, useGetAssignmentsQuery, useGetClassroomsQuery, useGetMaterialsQuery, useGetUsersQuery, useUserPayloadQuery } from "@/graphql/generated";

export function AppSidebar() { 
  const { data: userPayload, loading: userPayloadLoading } = useUserPayloadQuery()
  const { loading: usersLoading } = useGetUsersQuery()
  const { loading: announcementLoading } = useGetAnnouncementsQuery()
  const { loading: taskLoading } = useGetAssignmentsQuery()
  const { loading: materiLoading } = useGetMaterialsQuery()
  const { data: classRoom } = useGetClassroomsQuery();
  const { data: classrooms, loading: classLoading } = useGetClassroomsQuery()
  const [openSubMenus, setOpenSubMenus] = useState<any>({});
  
  if (userPayloadLoading || classLoading || usersLoading || announcementLoading || taskLoading || materiLoading) return <Splash />
  
  // pengecekan role sesuai menu
  const isAdmin = userPayload?.me.role === "ADMIN"
  const isHeadOffice = userPayload?.me.role === "STAFF" || userPayload?.me.role === "PRINCIPAL"
  const isTeacher = userPayload?.me.role === "TEACHER"
  const isGuardian = classRoom?.classrooms.find((item) => item.guardian.id === userPayload?.me.id) ? true : false
  const isStudent = userPayload?.me.role === "STUDENT"

  // Fungsi untuk toggle dropdown pada sub-menu
  const toggleSubMenu = (menuTitle: any) => {
    setOpenSubMenus((prev: any) => ({
      ...prev,
      [menuTitle]: !prev[menuTitle],
    }));
  };
  
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
                    <span className="truncate font-semibold">Sekolah Yapendik</span>
                    <span className="truncate text-xs">Semarang</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          {/* ADMINISTRASI */}
          <SidebarGroup className={isAdmin ? "" : "hidden"}>
            <SidebarGroupContent>
              <SidebarMenu>
                {ManagerMenu.map((item, index) =>
                  item.visibility ? (
                    <SidebarMenuItem key={index}>
                      {/* Jika ada sub-menu */}
                      {item.subMenu ? (
                        <>
                          <SidebarMenuButton
                            className="flex justify-between items-center w-full"
                            onClick={() => toggleSubMenu(item.title)}
                          >
                            <span className="flex items-center">
                              <item.icon className="mr-2 h-4 w-4" />
                              {item.title}
                            </span>
                            {openSubMenus[item.title] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                          </SidebarMenuButton>
                          {openSubMenus[item.title] && (
                            <div className="ml-6 border-l border-gray-300">
                              {item.subMenu.map((sub, subIndex) => (
                                <div key={subIndex} className="ml-2">
                                  <SidebarMenuButton asChild>
                                    <a href={sub.href}>
                                      {/* <sub.icon className="mr-2 h-4 w-4" /> */}
                                      {sub.title}
                                    </a>
                                  </SidebarMenuButton>
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        // Jika tidak ada submenu, tampilkan sebagai menu biasa
                        <SidebarMenuButton asChild>
                          <a href={item.href}>
                            <item.icon className="mr-2 h-4 w-4" />
                            {item.title}
                          </a>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>
                  ) : null
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* HEAD OFFICE */}
          <SidebarGroup className={isHeadOffice ? "" : "hidden"}>
            <SidebarGroupLabel className="font-bold">Headoffice</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {HeadofficeMenu.map((item, index) =>
                  item.visibility ? (
                    <SidebarMenuItem key={index}>
                      {/* Jika ada sub-menu */}
                      {item.subMenu ? (
                        <>
                          <SidebarMenuButton
                            className="flex justify-between items-center w-full"
                            onClick={() => toggleSubMenu(item.title)}
                          >
                            <span className="flex items-center">
                              <item.icon className="mr-2 h-4 w-4" />
                              {item.title}
                            </span>
                            {openSubMenus[item.title] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                          </SidebarMenuButton>
                          {openSubMenus[item.title] && (
                            <div className="ml-6 border-l border-gray-300">
                              {item.subMenu.map((sub, subIndex) => (
                                <div key={subIndex} className="ml-2">
                                  <SidebarMenuButton asChild>
                                    <a href={sub.href}>
                                      {/* <sub.icon className="mr-2 h-4 w-4" /> */}
                                      {sub.title}
                                    </a>
                                  </SidebarMenuButton>
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        // Jika tidak ada submenu, tampilkan sebagai menu biasa
                        <SidebarMenuButton asChild>
                          <a href={item.href}>
                            <item.icon className="mr-2 h-4 w-4" />
                            {item.title}
                          </a>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>
                  ) : null
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* GURU - WALI KELAS */}
          <SidebarGroup className={isTeacher && isGuardian ? "" : "hidden"}>
            <SidebarGroupLabel className="font-bold">Guru</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {TeacherMenu.map((item, index) =>
                  item.visibility ? (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton asChild>
                        <a href={item.href}>
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.title}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ) : null
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* GURU - BUKAN WALI KELAS */}
          <SidebarGroup className={isTeacher && !isGuardian ? "" : "hidden"}>
            <SidebarGroupLabel className="font-bold">Guru</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {TeacherNotGuardianMenu.map((item, index) =>
                  item.visibility ? (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton asChild>
                        <a href={item.href}>
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.title}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ) : null
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* MURID */}
          <SidebarGroup className={isStudent ? "" : "hidden"}>
            <SidebarGroupLabel className="font-bold">Murid</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {StudentMenu.map((item, index) =>
                  item.visibility ? (
                    <SidebarMenuItem key={index}>
                      {/* Jika ada sub-menu */}
                      {item.subMenu ? (
                        <>
                          <SidebarMenuButton
                            className="flex justify-between items-center w-full"
                            onClick={() => toggleSubMenu(item.title)}
                          >
                            <span className="flex items-center">
                              <item.icon className="mr-2 h-4 w-4" />
                              {item.title}
                            </span>
                            {openSubMenus[item.title] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                          </SidebarMenuButton>
                          {openSubMenus[item.title] && (
                            <div className="ml-6 border-l border-gray-300">
                              {item.subMenu.map((sub, subIndex) => (
                                <div key={subIndex} className="ml-2">
                                  <SidebarMenuButton asChild>
                                    <a href={sub.href}>
                                      {/* <sub.icon className="mr-2 h-4 w-4" /> */}
                                      {sub.title}
                                    </a>
                                  </SidebarMenuButton>
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        // Jika tidak ada submenu, tampilkan sebagai menu biasa
                        <SidebarMenuButton asChild>
                          <a href={item.href}>
                            <item.icon className="mr-2 h-4 w-4" />
                            {item.title}
                          </a>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>
                  ) : null
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
                    <Link href={userPayload?.me.role === "STUDENT" ? "/managements/student/profile" : userPayload?.me.role === "TEACHER" ? "/managements/teacher/profile" : userPayload?.me.role === "ADMIN" ? "/managements/manager/profile" : userPayload?.me.role === "STAFF" || userPayload?.me.role === "PRINCIPAL" ? "/managements/manager/profile" : ""} onClick={() => window.location.href = userPayload?.me.role === "STUDENT" ? "/managements/student/profile" : userPayload?.me.role === "TEACHER" ? "/managements/teacher/profile" : userPayload?.me.role === "ADMIN" ? "/managements/manager/profile" : userPayload?.me.role === "STAFF" || userPayload?.me.role === "PRINCIPAL" ? "/managements/manager/profile" : ""} className="w-full">
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
