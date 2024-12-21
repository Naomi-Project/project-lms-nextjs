import {
  HomeIcon,
  SchoolIcon,
  Clock,
  CalendarDays,
  Library,
  Fence,
  BookMarked,
} from "lucide-react";

export const AppMenu = [
  {
    title: "Dashboard Admin",
    href: "/dashboard/admins",
    icon: HomeIcon,
  },
  {
    title: "Dashboard Teacher",
    href: "/dashboard/teachers",
    icon: HomeIcon,
  },
  {
    title: "Dashboard Student",
    href: "/dashboard/students",
    icon: HomeIcon,
  },
  {
    title: "Materi Student",
    href: "/managements/student/material",
    icon: Fence ,
  },
  {
    title: "Presence Student",
    href: "/managements/student/presence",
    icon: Clock,
  },
  {
    title: "Schedule Student",
    href: "/managements/student/schedule",
    icon: CalendarDays,
  },
  {
    title: "Library Digital Student",
    href: "/managements/student/library",
    icon: Library,
  },
  {
    title: "Pengumuman",
    href: "/dashboard/announcements",
    icon: BookMarked ,
  },
  {
    title: "Sekolah",
    href: "/dashboard/schools",
    icon: SchoolIcon,
  },
];
