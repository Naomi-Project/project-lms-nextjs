import {
  BellRing,
  BookCheck,
  // BookMarked,
  Building2,
  CalendarDays,
  Clock,
  Database,
  Fence,
  HomeIcon,
  Library,
  SchoolIcon,
  Settings,
  UserPen,
  Wallet,
} from "lucide-react";


export const ManagerMenu = [
  {
    title: "Dashboard Staff",
    href: "/dashboard/managers",
    icon: HomeIcon,
    visibility: true,
  },
  {
    title: "Class Staff",
    href: "/managements/manager/class",
    icon: Building2,
    visibility: true,
  },
  {
    title: "Class Management Staff",
    href: "/managements/manager/class-management",
    icon: Building2,
    visibility: false,
  },
  {
    title: "Keuangan Staff",
    href: "/managements/manager/keuangan",
    icon: Wallet,
    visibility: true,
  },
  {
    title: "Data Siswa Staff",
    href: "/managements/manager/student",
    icon: Database,
    visibility: true,
  },

  {
    title: "Data Guru Staff",
    href: "/managements/manager/teacher",
    icon: Database,
    visibility: true,
  },
  {
    title: "Pengumuman Staff",
    href: "/managements/manager/pengumuman",
    icon: BellRing,
    visibility: true,
  },
  {
    title: "Pengaturan Sekolah Staff",
    href: "/managements/manager/setting-admin",
    icon: Settings,
    visibility: true,
  },
  {
    title: "Pengaturan Pembayaran Sekolah Staff",
    href: "/managements/manager/setting-payment",
    icon: Settings,
    visibility: false,
  },
  {
    title: "Pengaturan Profile Sekolah Staff",
    href: "/managements/manager/profile",
    icon: Settings,
    visibility: false,
  },
]

export const HeadofficeMenu = [
  {
    title: "Dashboard Headoffice",
    href: "/dashboard/admins",
    icon: HomeIcon,
    visibility: true,
  },
  {
    title: "Sekolah Headoffice",
    href: "/managements/admin/school",
    icon: SchoolIcon,
    visibility: true,
  },
  {
    title: "Keuangan Headoffice",
    href: "/managements/admin/keuangan",
    icon: Wallet,
    visibility: true,
  },
  {
    title: "Data Siswa Headoffice",
    href: "/managements/admin/student",
    icon: Database,
    visibility: true,
  },
  {
    title: "Data Guru Headoffice",
    href: "/managements/admin/teacher",
    icon: Database,
    visibility: true,
  },
  {
    title: "Pengumuman Headoffice",
    href: "/managements/admin/pengumuman",
    icon: BellRing,
    visibility: true,
  },
  {
    title: "Library Digital Headoffice",
    href: "/managements/admin/library",
    icon: Library,
    visibility: true,
  },
]

export const TeacherMenu = [

  {
    title: "Dashboard Guru",
    href: "/dashboard/teachers",
    icon: HomeIcon,
    visibility: true,
  },
  {
    title: "Edit Tugas Guru",
    href: "/managements/teacher/tasks",
    icon: HomeIcon,
    visibility: false,
  },
  {
    title: "Create Tugas Guru",
    href: "/managements/teacher/tasks-create",
    icon: HomeIcon,
    visibility: false,
  },
  {
    title: "Materi Guru",
    href: "/managements/teacher/material",
    icon: Fence,
    visibility: true,
  },
  {
    title: "Create Materi Guru",
    href: "/managements/teacher/material-create",
    icon: Fence,
    visibility: false,
  },
  {
    title: "Detail Materi Guru",
    href: "/managements/teacher/material-detail",
    icon: Fence,
    visibility: false,
  },
  {
    title: "Class Guru",
    href: "/managements/teacher/class",
    icon: Building2,
    visibility: true,
  },
  {
    title: "Presence Guru",
    href: "/managements/teacher/presence",
    icon: Clock,
    visibility: true,
  },
  {
    title: "Schedule Guru",
    href: "/managements/teacher/schedule",
    icon: CalendarDays,
    visibility: true,
  },
  {
    title: "Library Digital Guru",
    href: "/managements/teacher/library",
    icon: Library,
    visibility: true,
  },
  {
    title: "Profile Guru",
    href: "/managements/teacher/profile",
    icon: UserPen,
    visibility: true,
  },
  {
    title: "Exam Guru",
    href: "/managements/teacher/exam",
    icon: BookCheck,
    visibility: true,
  },
]
export const StudentMenu = [

  {
    title: "Dashboard Siswa",
    href: "/dashboard/students",
    icon: HomeIcon,
    visibility: true,
  },
  {
    title: "Tugas Siswa",
    href: "/managements/student/tasks",
    icon: Fence,
    visibility: false,
  },
  {
    title: "Tugas Detail Siswa",
    href: "/managements/student/tasks-detail",
    icon: Fence,
    visibility: false,
  },
  {
    title: "Materi Siswa",
    href: "/managements/student/material",
    icon: Fence,
    visibility: true,
  },
  {
    title: "Materi Detail Siswa",
    href: "/managements/student/material-detail",
    icon: Fence,
    visibility: false,
  },
  {
    title: "Presence Siswa",
    href: "/managements/student/presence",
    icon: Clock,
    visibility: true,
  },
  {
    title: "Schedule Siswa",
    href: "/managements/student/schedule",
    icon: CalendarDays,
    visibility: true,
  },
  {
    title: "Library Digital Siswa",
    href: "/managements/student/library",
    icon: Library,
    visibility: true,
  },
  {
    title: "Profile Siswa",
    href: "/managements/manager/profile-student",
    icon: UserPen,
    visibility: true,
  },
  {
    title: "Profile Siswa",
    href: "/managements/student/profile",
    icon: UserPen,
    visibility: false,
  },
  {
    title: "Laporan Presensi Siswa",
    href: "/managements/student/profile-presence",
    icon: UserPen,
    visibility: false,
  },
  {
    title: "Laporan Nilai Siswa",
    href: "/managements/student/profile-value",
    icon: UserPen,
    visibility: false,
  },
  {
    title: "Pembayaran SPP Siswa",
    href: "/managements/student/profile-payment",
    icon: UserPen,
    visibility: false,
  },
  // {
  //   title: "Pengumuman",
  //   href: "/dashboard/announcements",
  //   icon: BookMarked,
  // },
  // {
  //   title: "Sekolah",
  //   href: "/dashboard/schools",
  //   icon: SchoolIcon,
  // },
];
