"use client";
import { HeadofficeMenu, ManagerMenu, StudentMenu, TeacherMenu } from "@/lib/constants";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useGetAnnouncementsQuery, useUserPayloadQuery } from "@/graphql/generated";
import { format } from "date-fns";

export default function Header() {
  const { data: userData } = useUserPayloadQuery();
  const { data: notif, loading } = useGetAnnouncementsQuery();

  const sortStaff = notif?.announcements.filter((item) => 
    item.target === "STAFF" && 
    (userData?.me.role === 'STAFF' || userData?.me.role === 'ADMIN' || userData?.me.role === 'PRINCIPAL' || userData?.me.role === 'TEACHER')
  ) || [];

  const sortStudent = notif?.announcements.filter((item) => 
    item.target === "STUDENT" && userData?.me.role === "STUDENT"
  ) || [];

  const sortAllNotif = notif?.announcements.filter((item) => item.target === "ALL") || [];

  // Perbaikan utama: Menggunakan spread operator untuk menggabungkan array
  const finalData = userData?.me.role === 'STAFF' || userData?.me.role === 'ADMIN' || userData?.me.role === 'PRINCIPAL' || userData?.me.role === 'TEACHER'
    ? [...sortStaff, ...sortAllNotif]
    : [...sortStudent, ...sortAllNotif];

  console.log(userData);
  console.log(notif);
  console.log(finalData); // Cek hasil array yang sudah digabung

  const AppMenu = [
    ...ManagerMenu,
    ...HeadofficeMenu,
    ...StudentMenu,
    ...TeacherMenu,
  ]
  const pathname = usePathname();
  return (
    <header className="flex items-center gap-4 border-b p-4">
      <SidebarTrigger />
      <h1 className="text-lg font-semibold">
        {AppMenu.find((item) => item.href === pathname)?.title}
      </h1>

      <div className="flex justify-end md:w-9/12 w-7/12">
      {
        loading ? "" : (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1">
                  <Bell className="w-6 h-6 text-red-400 font-bold" />
                </div>
                <div className="col-span-1 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-red-400 font-bold">{finalData.length}</p>
                </div>
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Notification</h4>
                  <p className="text-sm text-muted-foreground">
                    Notifikasi Sekolah Yapendik Semarang.
                  </p>
                </div>
                <div className="grid gap-2 mb-2">
                  {
                    finalData.map((item, index) => (
                      <Dialog key={index}>
                      <DialogTrigger>
                          <div className="flex flex-col mb-3 justify-start items-start" key={index}>
                            <p className="text-nowrap hover:text-primary cursor-pointer">{item.title}</p>
                            <span className="text-gray-500">{format(item.createdAt, 'yyyy-MM-dd')}</span>
                          </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{item.title} - {format(item.createdAt, 'yyyy-MM-dd')}</DialogTitle>
                          <DialogDescription>
                            {item.content}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>                    
                    ))
                  }
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )
      }
      </div>
    </header>
  );
}
