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
  Wallet,
  Database,
  BellRing,
} from "lucide-react";

export const AppMenu = [
  {
    title: "Dashboard Admin",
    href: "/dashboard/admins",
    icon: HomeIcon,
  },
  {
    title: "Sekolah Admin",
    href: "/managements/admin/school",
    icon: SchoolIcon,
  },
  {
    title: "Keuangan Admin",
    href: "/managements/admin/keuangan",
    icon: Wallet,
  },
  {
    title: "Data Siswa Admin",
    href: "/managements/admin/student",
    icon: Database,
  },
  {
    title: "Data Guru Admin",
    href: "/managements/admin/teacher",
    icon: Database,
  },
  {
    title: "Pengumuman Admin",
    href: "/managements/admin/pengumuman",
    icon: BellRing,
  },
  {
    title: "Library Digital Admin",
    href: "/managements/admin/library",
    icon: Library,
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
