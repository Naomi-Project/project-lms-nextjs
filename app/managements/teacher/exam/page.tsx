import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PencilLine } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data1 = [
  {
    no: "1",
    name: "Fu Xuan",
    semester1: "Sudah Diisi",
    semester2: "Belum Diisi",
  },
  {
    no: "2",
    name: "Fu Xuan",
    semester1: "Sudah Diisi",
    semester2: "Belum Diisi",
  },
  {
    no: "3",
    name: "Fu Xuan",
    semester1: "Sudah Diisi",
    semester2: "Belum Diisi",
  },
  {
    no: "4",
    name: "Fu Xuan",
    semester1: "Sudah Diisi",
    semester2: "Belum Diisi",
  },
  {
    no: "5",
    name: "Fu Xuan",
    semester1: "Sudah Diisi",
    semester2: "Belum Diisi",
  },
  {
    no: "6",
    name: "Fu Xuan",
    semester1: "Sudah Diisi",
    semester2: "Belum Diisi",
  },
  {
    no: "7",
    name: "Fu Xuan",
    semester1: "Sudah Diisi",
    semester2: "Belum Diisi",
  },
];

export default function ExamTeacher() {
  return (
    <div className="min-h-screen">
      <div className="md:flex justify-between">
        <div className="">
          <Select>
            <SelectTrigger className="md:w-full w-5/12 bg-white rounded-lg">
              <SelectValue placeholder="PTS" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Mata Pelajaran</SelectLabel>
                <SelectItem value="matematika">Matematika</SelectItem>
                <SelectItem value="indonesia">Bahasa Indonesia</SelectItem>
                <SelectItem value="inggris">Bahasa Inggris</SelectItem>
                <SelectItem value="fisika">Fisika</SelectItem>
                <SelectItem value="kimia">Kimia</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4 md:mt-0 mt-3">
          <div className="col-span-1 bg-white rounded-lg">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Kelas Berapa" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Kelas</SelectLabel>
                  <SelectItem value="kelas7">Kelas 7</SelectItem>
                  <SelectItem value="kelas8">Kelas 8</SelectItem>
                  <SelectItem value="kelas9">Kelas 9</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-1 bg-white rounded-lg">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Jenis Kelas" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Kelas Jenis</SelectLabel>
                  <SelectItem value="kelas7a">Kelas 7A</SelectItem>
                  <SelectItem value="kelas7b">Kelas 7B</SelectItem>
                  <SelectItem value="kelas7c">Kelas 7C</SelectItem>
                  <SelectItem value="kelas7d">Kelas 7D</SelectItem>
                  <SelectItem value="kelas7e">Kelas 7E</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg bg-white mt-10 p-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-black">NO.</TableHead>
              <TableHead className="font-bold text-black">NAMA SISWA</TableHead>
              <TableHead className="font-bold text-black">SEMESTER 1</TableHead>
              <TableHead className="font-bold text-black">SEMESTER 2</TableHead>
              <TableHead className="font-bold text-black"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data1.map((invoice) => (
              <TableRow key={invoice.no}>
                <TableCell>{invoice.no}</TableCell>
                <TableCell>{invoice.name}</TableCell>
                <TableCell className="text-green-500">
                  {invoice.semester1}
                </TableCell>
                <TableCell className="text-red-500">
                  {invoice.semester2}
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        <PencilLine />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="md:w-4/12 w-96 rounded-lg">
                      <DialogHeader>
                        <DialogTitle className="text-center">
                          Update Nilai Ujian
                        </DialogTitle>
                      </DialogHeader>
                      <Tabs defaultValue="semester1" className="w-full mt-5">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="semester1">
                            Semester 1
                          </TabsTrigger>
                          <TabsTrigger value="semester2">
                            Semester 2
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="semester1">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                              <div className="">
                                <Label htmlFor="matematika">Matematika</Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Matematika Disini"
                                />
                              </div>

                              <div className="mt-3">
                                <Label htmlFor="matematika">Matematika</Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Matematika Disini"
                                />
                              </div>

                              <div className="mt-3">
                                <Label htmlFor="matematika">Matematika</Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Matematika Disini"
                                />
                              </div>

                              <div className="mt-3">
                                <Label htmlFor="matematika">Matematika</Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Matematika Disini"
                                />
                              </div>

                              <div className="mt-3">
                                <Label htmlFor="matematika">Matematika</Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Matematika Disini"
                                />
                              </div>
                            </div>

                            <div className="col-span-1">
                              <div className="">
                                <Label htmlFor="matematika">
                                  Bahasa Indonesia
                                </Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Bahasa Indonesia Disini"
                                />
                              </div>

                              <div className="mt-3">
                                <Label htmlFor="matematika">
                                  Bahasa Indonesia
                                </Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Bahasa Indonesia Disini"
                                />
                              </div>

                              <div className="mt-3">
                                <Label htmlFor="matematika">
                                  Bahasa Indonesia
                                </Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Bahasa Indonesia Disini"
                                />
                              </div>

                              <div className="mt-3">
                                <Label htmlFor="matematika">
                                  Bahasa Indonesia
                                </Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Bahasa Indonesia Disini"
                                />
                              </div>

                              <div className="mt-3">
                                <Label htmlFor="matematika">
                                  Bahasa Indonesia
                                </Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Bahasa Indonesia Disini"
                                />
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="semester2">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                              <div className="">
                                <Label htmlFor="matematika">Kimia</Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Kimia Disini"
                                />
                              </div>

                              <div className="mt-3">
                                <Label htmlFor="matematika">Kimia</Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Kimia Disini"
                                />
                              </div>

                              <div className="mt-3">
                                <Label htmlFor="matematika">Kimia</Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Kimia Disini"
                                />
                              </div>

                              <div className="mt-3">
                                <Label htmlFor="matematika">Kimia</Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Kimia Disini"
                                />
                              </div>

                              <div className="mt-3">
                                <Label htmlFor="matematika">Kimia</Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Kimia Disini"
                                />
                              </div>
                            </div>

                            <div className="col-span-1">
                              <div className="">
                                <Label htmlFor="matematika">Fisika</Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Fisika Disini"
                                />
                              </div>

                              <div className="mt-3">
                                <Label htmlFor="matematika">Fisika</Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Fisika Disini"
                                />
                              </div>

                              <div className="mt-3">
                                <Label htmlFor="matematika">Fisika</Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Fisika Disini"
                                />
                              </div>

                              <div className="mt-3">
                                <Label htmlFor="matematika">Fisika</Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Fisika Disini"
                                />
                              </div>

                              <div className="mt-3">
                                <Label htmlFor="matematika">Fisika</Label>
                                <Input
                                  type="text"
                                  id="matematika"
                                  placeholder="Isi Nilai Fisika Disini"
                                />
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                      <DialogFooter className="mt-5">
                        <Button type="submit" className="w-full">
                          Update
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
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
