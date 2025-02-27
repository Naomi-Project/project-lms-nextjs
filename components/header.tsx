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

export default function Header() {
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

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1">
                  <Bell className="w-6 h-6 text-red-400 font-bold" />
                </div>
                <div className="col-span-1 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-red-400 font-bold">12</p>
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
                <div className="grid gap-2 my-5">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <p className="text-nowrap">Upps belum ada..</p>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
      </div>
    </header>
  );
}
