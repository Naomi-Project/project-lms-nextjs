import {
  HomeIcon,
  SchoolIcon,
  Clock,
  CalendarDays,
  Library,
  Fence,
  BookMarked,
  Building2,
  UserPen,
  BookCheck,
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
    title: "Materi Teacher",
    href: "/managements/teacher/material",
    icon: Fence,
  },
  {
    title: "Class Teacher",
    href: "/managements/teacher/class",
    icon: Building2,
  },
  {
    title: "Presence Teacher",
    href: "/managements/teacher/presence",
    icon: Clock,
  },
  {
    title: "Schedule Teacher",
    href: "/managements/teacher/schedule",
    icon: CalendarDays,
  },
  {
    title: "Library Digital Teacher",
    href: "/managements/teacher/library",
    icon: Library,
  },
  {
    title: "Profile Teacher",
    href: "/managements/teacher/profile",
    icon: UserPen,
  },
  {
    title: "Exam Teacher",
    href: "/managements/teacher/exam",
    icon: BookCheck,
  },
  {
    title: "Dashboard Student",
    href: "/dashboard/students",
    icon: HomeIcon,
  },
  {
    title: "Materi Student",
    href: "/managements/student/material",
    icon: Fence,
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
    icon: BookMarked,
  },
  {
    title: "Sekolah",
    href: "/dashboard/schools",
    icon: SchoolIcon,
  },
];
