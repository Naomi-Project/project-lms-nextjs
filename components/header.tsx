"use client";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "./ui/sidebar";
import { AppMenu } from "@/lib/constants";
import { Bell } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex items-center gap-4 border-b p-4">
      <SidebarTrigger />
      <h1 className="text-lg font-semibold">
        {AppMenu.find((item) => item.href === pathname)?.title}
      </h1>

      <div className="flex justify-end md:w-9/12 w-6/12">
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <Bell className="w-6 h-6 " />
          </div>

          <div className="col-span-1 rounded-lg flex items-center justify-center bg-red-100">
            <p className="text-sm text-red-400">12</p>
          </div>
        </div>
      </div>
    </header>
  );
}
