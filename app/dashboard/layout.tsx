import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <body className="overflow-x-hidden">
          <main className="bg-gray-100 p-4">{children}</main>
        </body>
      </SidebarInset>
    </SidebarProvider>
  );
}
