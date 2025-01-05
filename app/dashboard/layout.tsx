import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren;

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="bg-gray-100 p-4 overflow-x-hidden">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
