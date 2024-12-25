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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Plus, Search, SlidersHorizontal, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

const data = [
  {
    no: "1",
    topic: "Matematika Dasar",
  },
  {
    no: "2",
    topic: "Matematika Dasar",
  },
  {
    no: "3",
    topic: "Matematika Dasar",
  },
  {
    no: "4",
    topic: "Matematika Dasar",
  },
  {
    no: "5",
    topic: "Matematika Dasar",
  },
  {
    no: "6",
    topic: "Matematika Dasar",
  },
  {
    no: "7",
    topic: "Matematika Dasar",
  },
];

export default function LibrrayAdmin() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-start">
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="bg-blue-100 border-blue-100 rounded-lg"
          >
            <p className="text-sm text-blue-400">Topik Perpustakaan</p>
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Link href="#">
              <p className="text-sm text-slate-400">E-Book</p>
            </Link>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="rounded-lg bg-white">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">
                <Plus className="h-4 w-4" /> Buat Topik
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-center">Buat Topik</DialogTitle>
              </DialogHeader>
              <div className="">
                <Label htmlFor="title">Topic</Label>
                <Textarea placeholder="Isi Pengumuman Disini" />
              </div>
              <DialogFooter>
                <Button type="reset" variant="destructive">
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-3 gap-4">
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
            <Input placeholder="Cari Topik" className="pl-8 w-full" />
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg bg-white mt-10 p-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">No.</TableHead>
              <TableHead className="font-bold w-full">
                TOPIK PERPUSTAKAAN
              </TableHead>
              <TableHead className="font-bold"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((invoice) => (
              <TableRow key={invoice.no}>
                <TableCell>{invoice.no}</TableCell>
                <TableCell>{invoice.topic}</TableCell>
                <TableCell>
                  <Trash />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="bg-white">
              <TableCell colSpan={3}></TableCell>
              <TableCell className="">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
