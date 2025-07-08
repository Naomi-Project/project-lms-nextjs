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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useGetAnnouncementsQuery, useGetUsersQuery, useUserPayloadQuery } from "@/graphql/generated";
import { format } from "date-fns";

// Helper function to check if user is staff/admin/principal/teacher
const isStaffUser = (role: string | undefined) => 
  ['STAFF', 'ADMIN', 'PRINCIPAL', 'TEACHER'].includes(role || '');

export default function Header() {
  const { data: userData } = useUserPayloadQuery();
  const { data: users } = useGetUsersQuery();
  const { data: notif, loading } = useGetAnnouncementsQuery();

  const currentUser = users?.users.find((item) => item.id === userData?.me.id);
  const userRole = userData?.me.role;
  const userSchoolId = currentUser?.schoolId;

  // Optimized filtering function
  const filterAnnouncements = (targetRole: string) => 
    notif?.announcements.filter(item => 
      item.targets[0] === targetRole && 
      item?.schoolIds?.some(sc => sc === userSchoolId)
    ) || [];

  // Get announcements based on user role
  const getRoleSpecificAnnouncements = () => {
    if (isStaffUser(userRole)) {
      return [
        ...filterAnnouncements('STAFF'),
        ...filterAnnouncements('TEACHER'),
        ...filterAnnouncements('PRINCIPAL')
      ];
    }
    return filterAnnouncements('STUDENT');
  };

  // Global announcements (for all users)
  const globalAnnouncements = notif?.announcements.filter(
    item => item.targets[0] === "ALL" && item.schoolIds?.length === 0
  ) || [];

  // Combine and sort announcements
  const finalData = [
    ...getRoleSpecificAnnouncements(),
    ...globalAnnouncements
  ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const AppMenu = [
    ...ManagerMenu,
    ...HeadofficeMenu,
    ...StudentMenu,
    ...TeacherMenu,
  ];
  
  const pathname = usePathname();
  const currentPageTitle = AppMenu.find((item) => item.href === pathname)?.title;

  return (
    <header className="flex items-center gap-4 border-b p-4">
      <SidebarTrigger />
      <h1 className="text-lg font-semibold">{currentPageTitle}</h1>

      <div className="flex justify-end md:w-9/12 w-7/12">
        {!loading && (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <div className="grid grid-cols-2 gap-2">
                  <div className="col-span-1">
                    <Bell className="w-6 h-6 text-red-400 font-bold" />
                  </div>
                  {finalData.length > 0 ? (
                    <div className="col-span-1 rounded-lg flex items-center justify-center">
                      <p className="text-sm text-red-400 font-bold">{finalData.length ?? 0}</p>
                    </div>
                  ) : (
                    <div className="col-span-1 rounded-lg flex items-center justify-center">
                      <p className="text-sm text-red-400 font-bold">0</p>
                    </div>
                  )}
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="max-h-[80vh] overflow-y-auto">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Notification</h4>
                  <p className="text-sm text-muted-foreground">
                    Notifikasi Sekolah Yapendik Semarang.
                  </p>
                </div>
                <div className="grid gap-2 mb-2">
                  {finalData.map((item, index) => (
                    <Dialog key={`${item.id}-${index}`}>
                      <DialogTrigger asChild>
                        <div className="flex flex-col mb-3 justify-start items-start cursor-pointer">
                          <p className="text-nowrap hover:text-primary">{item.title}</p>
                          <span className="text-gray-500">
                            {format(new Date(item.createdAt), 'yyyy-MM-dd HH:mm:ss')}
                          </span>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="w-[90%] rounded-md max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{item.title}</DialogTitle>
                          <div dangerouslySetInnerHTML={{ __html: item.content }} />
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </header>
  );
}