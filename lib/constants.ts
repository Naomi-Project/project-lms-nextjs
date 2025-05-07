import {
  BellRing,
  Book,
  BookA,
  BookCheck,
  BookOpen,
  CalendarDays,
  CircleDollarSign,
  Clock,
  DollarSign,
  Fence,
  HomeIcon,
  LayoutDashboard,
  Library,
  SchoolIcon,
  Settings,
  UserPen,
  UsersRound,
  Wallet,
} from "lucide-react";


export const ManagerMenu = [
  {
    title: "Dashboard",
    href: "/dashboard/managers",
    icon: LayoutDashboard,
    visibility: true,
  },
  {
    title: "Kelas",
    href: "/managements/manager/class",
    icon: BookOpen,
    visibility: true,
  },
  {
    title: "Mata Pelajaran",
    href: "/managements/manager/mata-pelajaran",
    icon: BookOpen,
    visibility: true,
  },
  {
    title: "Pembayaran",
    href: "/managements/manager/keuangan",
    icon: CircleDollarSign,
    visibility: true,
  },
  {
    title: "Data Siswa",
    href: "/managements/manager/student",
    icon: UsersRound,
    visibility: true,
  },

  {
    title: "Data Guru",
    href: "/managements/manager/teacher",
    icon: UsersRound,
    visibility: true,
  },
  {
    title: "Pengumuman",
    href: "/managements/manager/pengumuman",
    icon: BellRing,
    visibility: true,
  },
  {
    title: "Pengaturan",
    icon: Settings,
    visibility: true,
    subMenu: [
      {
        title: "Management Admin",
        href: "/managements/manager/setting-admin",
        // icon: Settings,
        visibility: false,
      },
      {
        title: "Penetapan SPP",
        href: "/managements/manager/pricing",
        icon: Wallet,
        visibility: true,
      },
      {
        title: "Kurikulum",
        href: "/managements/manager/kurikulum",
        icon: BookA,
        visibility: true,
      },
      {
        title: "Semester",
        href: "/managements/manager/semester",
        icon: BookA,
        visibility: true,
      },
      {
        title: "Profile Sekolah",
        href: "/managements/manager/profile",
        icon: Wallet,
        visibility: true,
      },
    ]
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
    title: "Dashboard",
    href: "/dashboard/admins",
    icon: HomeIcon,
    visibility: true,
  },
  {
    title: "Sekolah Management",
    href: "/managements/admin/sekolah",
    icon: SchoolIcon,
    visibility: true,
  },
  {
    title: "Management Admin",
    href: "/managements/admin/setting-admin",
    icon: Settings,
    visibility: false,
  },
  {
    title: "Keuangan",
    href: "/managements/admin/keuangan",
    icon: DollarSign,
    visibility: true,
  },
  {
    title: "Data Siswa",
    href: "/managements/admin/student",
    icon: UsersRound,
    visibility: true,
  },
  {
    title: "Data Guru",
    href: "/managements/admin/teacher",
    icon: UsersRound,
    visibility: true,
  },
  {
    title: "Pengumuman",
    href: "/managements/admin/pengumuman",
    icon: BellRing,
    visibility: true,
  },
  {
    title: "Perpustakaan Digital",
    href: "/managements/admin/library",
    icon: Library,
    visibility: false,
  },
  {
    title: "Pengaturan",
    icon: Settings,
    visibility: true,
    subMenu: [
      {
        title: "Management Admin",
        href: "/managements/manager/setting-admin",
        icon: Settings,
        visibility: true,
      },
      {
        title: "Profile Management",
        href: "/managements/manager/profile",
        icon: Settings,
        visibility: true,
      },
    ]
  },
]

export const TeacherMenu = [

  {
    title: "Dashboard Tugas",
    href: "/dashboard/teachers",
    icon: Book,
    visibility: true,
  },
  {
    title: "Nilai Tugas",
    href: "/managements/teacher/nilai",
    icon: BookCheck,
    visibility: true,
  },
  {
    title: "Edit Tugas",
    href: "/managements/teacher/tasks",
    icon: HomeIcon,
    visibility: false,
  },
  {
    title: "Create Tugas",
    href: "/managements/teacher/tasks-create",
    icon: HomeIcon,
    visibility: false,
  },
  {
    title: "Materi",
    href: "/managements/teacher/material",
    icon: BookOpen,
    visibility: true,
  },
  {
    title: "Create Materi",
    href: "/managements/teacher/material-create",
    icon: Fence,
    visibility: false,
  },
  {
    title: "Detail Materi",
    href: "/managements/teacher/material-detail",
    icon: Fence,
    visibility: false,
  },
  {
    title: "Class",
    href: "/managements/teacher/class",
    icon: BookOpen,
    visibility: true,
  },
  {
    title: "Absensi",
    href: "/managements/teacher/presence",
    icon: Clock,
    visibility: true,
  },
  {
    title: "Jadwal Pelajaran",
    href: "/managements/teacher/schedule",
    icon: CalendarDays,
    visibility: true,
  },
  {
    title: "Perpustakaan Digital",
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
]

export const TeacherNotGuardianMenu = [

  {
    title: "Dashboard Tugas",
    href: "/dashboard/teachers",
    icon: Book,
    visibility: false,
  },
  {
    title: "Nilai Tugas",
    href: "/managements/teacher/nilai",
    icon: BookCheck,
    visibility: false,
  },
  {
    title: "Edit Tugas",
    href: "/managements/teacher/tasks",
    icon: HomeIcon,
    visibility: false,
  },
  {
    title: "Create Tugas",
    href: "/managements/teacher/tasks-create",
    icon: HomeIcon,
    visibility: false,
  },
  {
    title: "Dashboard Materi",
    href: "/managements/teacher/material",
    icon: Book,
    visibility: true,
  },
  {
    title: "Create Materi",
    href: "/managements/teacher/material-create",
    icon: Fence,
    visibility: false,
  },
  {
    title: "Detail Materi",
    href: "/managements/teacher/material-detail",
    icon: Fence,
    visibility: false,
  },
  {
    title: "Class",
    href: "/managements/teacher/class",
    icon: BookOpen,
    visibility: false,
  },
  {
    title: "Absensi",
    href: "/managements/teacher/presence",
    icon: Clock,
    visibility: false,
  },
  {
    title: "Jadwal Pelajaran",
    href: "/managements/teacher/schedule",
    icon: CalendarDays,
    visibility: false,
  },
  {
    title: "Perpustakaan Digital",
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
]

export const StudentMenu = [

  {
    title: "Tugas", // ini sebenernya dashboard siswa
    href: "/dashboard/students",
    icon: Book,
    visibility: true,
  },
  {
    title: "Tugas",
    href: "/managements/student/tasks",
    icon: Fence,
    visibility: false,
  },
  {
    title: "Tugas Detail",
    href: "/managements/student/tasks-detail",
    icon: Fence,
    visibility: false,
  },
  {
    title: "Materi",
    href: "/managements/student/material",
    icon: BookOpen,
    visibility: true,
  },
  {
    title: "Materi Detail",
    href: "/managements/student/material-detail",
    icon: Fence,
    visibility: false,
  },
  {
    title: "Absensi",
    href: "/managements/student/presence",
    icon: Clock,
    visibility: true,
  },
  {
    title: "Jadwal Pelajaran",
    href: "/managements/student/schedule",
    icon: CalendarDays,
    visibility: true,
  },
  {
    title: "Perpustakaan Digital",
    href: "/managements/student/library",
    icon: Library,
    visibility: true,
  },
  {
    title: "Profile",
    href: "/managements/manager/profile-student",
    icon: UserPen,
    visibility: false,
  },
  {
    title: "Profile Siswa",
    icon: UserPen,
    visibility: true,
    subMenu: [
      {
        title: "Profile ku",
        href: "/managements/student/profile",
        icon: UserPen,
        visibility: true,
      },
      {
        title: "Pembayaran SPP",
        href: "/managements/student/profile-payment",
        icon: UserPen,
        visibility: true,
      },
    ],
  },
  {
    title: "Laporan Presensi",
    href: "/managements/student/profile-presence",
    icon: UserPen,
    visibility: false,
  },
  {
    title: "Laporan Nilai",
    href: "/managements/student/profile-value",
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
