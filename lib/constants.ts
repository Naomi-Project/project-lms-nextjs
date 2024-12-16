import {
  DatabaseIcon,
  HomeIcon,
  SchoolIcon,
  ClipboardIcon,
  BookIcon,
  DollarSignIcon,
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
    title: "Pengumuman",
    href: "/dashboard/announcements",
    icon: HomeIcon,
  },
  {
    title: "Sekolah",
    href: "/dashboard/schools",
    icon: SchoolIcon,
  },
  {
    title: "Manajemen Guru",
    href: "/dashboard/teachers",
    icon: DatabaseIcon,
  },
  {
    title: "Manajemen Siswa",
    href: "/dashboard/students",
    icon: DatabaseIcon,
  },
  {
    title: "Manajemen Kelas",
    href: "/dashboard/batches",
    icon: ClipboardIcon,
  },
  {
    title: "Manajemen Mata Pelajaran",
    href: "/dashboard/courses",
    icon: BookIcon,
  },
  {
    title: "Keuangan",
    href: "/dashboard/finances",
    icon: DollarSignIcon,
  },
];
