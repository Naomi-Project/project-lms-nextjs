import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import {
  Plus,
  Search,
  SlidersHorizontal,
  SquareArrowOutUpRight,
} from "lucide-react";
import AnnouncementTable from "./datatable";
import ButtonAdd from "@/components/ui/buttonAdd";

const data = [
  {
    no: "1",
    title: "Pengumuman Libur Natal",
    tanggal: "25 Desember 2024",
    target: "Siswa dan Pegawai",
  },
  {
    no: "2",
    title: "Pengumuman Libur Natal",
    tanggal: "25 Desember 2024",
    target: "Siswa dan Pegawai",
  },
  {
    no: "3",
    title: "Pengumuman Libur Natal",
    tanggal: "25 Desember 2024",
    target: "Siswa dan Pegawai",
  },
  {
    no: "4",
    title: "Pengumuman Libur Natal",
    tanggal: "25 Desember 2024",
    target: "Siswa dan Pegawai",
  },
  {
    no: "5",
    title: "Pengumuman Libur Natal",
    tanggal: "25 Desember 2024",
    target: "Siswa dan Pegawai",
  },
  {
    no: "6",
    title: "Pengumuman Libur Natal",
    tanggal: "25 Desember 2024",
    target: "Siswa dan Pegawai",
  },
  {
    no: "7",
    title: "Pengumuman Libur Natal",
    tanggal: "25 Desember 2024",
    target: "Siswa dan Pegawai",
  },
];

export default function ManagerPengumuman() {
  return (
    <div className="min-h-screen">
      <div className="bg-white rounded-lg p-5">
        <div className="md:flex justify-between items-center">
          <div>
            <ButtonAdd label="Buat Pengumuman" endpoint="/managements/manager/pengumuman/create" />
          </div>

          <div className="md:mt-0 mt-2 grid grid-cols-3 gap-4">
            <div className="col-span-1 rounded-lg bg-white">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={<SlidersHorizontal />} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sd">Sekolah Dasar</SelectItem>
                  <SelectItem value="smp">Sekolah Menengah Pertama</SelectItem>
                  <SelectItem value="sma">Sekolah Menengah Atas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2 relative rounded-lg bg-white">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Cari Pengumuman" className="pl-8 w-full" />
            </div>
          </div>
        </div>

        <div className=" rounded-lg bg-white mt-10 p-5">
          <AnnouncementTable />
        </div>
      </div>
    </div>
  );
}
