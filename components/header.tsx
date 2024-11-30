"use client";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "./ui/sidebar";
import { AppMenu } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex items-center gap-4 border-b p-4">
      <SidebarTrigger />
      <h1 className="text-lg font-semibold">
        {AppMenu.find((item) => item.href === pathname)?.title}
      </h1>
    </header>
  );
}
