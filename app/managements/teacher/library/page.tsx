import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookOpen,
  CalendarCheck,
  Download,
  Plus,
  Search,
  Trash2,
  User2Icon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export default function LibraryTeacher() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center">
        <div className="bg-white rounded-lg">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">
                <Plus className="h-4 w-4" /> Tambah E-Book
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Tambah E-Book</DialogTitle>
              </DialogHeader>
              <div className="">
                <Label htmlFor="name" className="text-right">
                  Judul E-Book
                </Label>
                <Input id="name" placeholder="Judul E-Book" />
              </div>

              <div className="mt-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Mata Pelajaran" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="matematika">Matematika</SelectItem>
                          <SelectItem value="indonesia">
                            Bahasa Indonesia
                          </SelectItem>
                          <SelectItem value="inggris">
                            Bahasa Inggris
                          </SelectItem>
                          <SelectItem value="fisika">Fisika</SelectItem>
                          <SelectItem value="kimia">Kimia</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="col-span-1">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Topik" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="matematika">Matematika</SelectItem>
                          <SelectItem value="indonesia">
                            Bahasa Indonesia
                          </SelectItem>
                          <SelectItem value="inggris">
                            Bahasa Inggris
                          </SelectItem>
                          <SelectItem value="fisika">Fisika</SelectItem>
                          <SelectItem value="kimia">Kimia</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <Label htmlFor="picture">Upload E-Book PDF</Label>
                <Input id="pdf" type="file" />
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full">
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 bg-white rounded-lg">
            <Select defaultValue="global">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="global">Global</SelectItem>
                <SelectItem value="matematika">Matematika</SelectItem>
                <SelectItem value="bahasa">Bahasa Indonesia</SelectItem>
                <SelectItem value="fisika">Fisika</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2 relative bg-white rounded-lg">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Cari E-Book" className="pl-8 w-full" />
          </div>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full mt-10">
        <AccordionItem
          value="item-1"
          className="border-2 rounded-lg p-2 bg-white"
        >
          <AccordionTrigger>
            <div className="grid grid-cols-10 gap-4">
              <div className="col-span-5 grid justify-items-center border-r-2 border-slate-400">
                <div className="p-2 border-2 rounded-full border-slate-400">
                  <BookOpen />
                </div>
              </div>

              <div className="col-span-5 my-auto">
                <h2 className="text-lg">Matematika Dasar</h2>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-3">
            <div className="grid grid-cols-12 gap-4 border-b border-slate-300 pb-2">
              <div className="col-span-10 pl-4">
                <h1 className="text-base">
                  Aritmatika: Penjumlahan, Pengurangan, Pembagian, Perkalian
                </h1>

                <div className="w-4/12 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 border-r-2 border-slate-400">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1 grid justify-items-end">
                          <CalendarCheck className="h-4 w-4 text-slate-400" />
                        </div>

                        <div className="col-span-4">
                          <p className="text-sm text-slate-400">1 July 2024</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1 grid justify-items-end">
                          <User2Icon className="h-4 w-4 text-slate-400" />
                        </div>

                        <div className="col-span-4">
                          <p className="text-sm text-slate-400">Demi He</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 my-auto">
                <div className="w-7/12 mx-auto bg-blue-100 border-blue-100 rounded-lg p-2">
                  <Download className="text-blue-400 mx-auto" />
                </div>
              </div>

              <div className="col-span-1 my-auto">
                <div className="w-7/12 mx-auto bg-red-100 border-red-100 rounded-lg p-2">
                  <Trash2 className="text-red-400 mx-auto" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mt-3">
              <div className="col-span-10 pl-4">
                <h1 className="text-base">
                  Aritmatika: Penjumlahan, Pengurangan, Pembagian, Perkalian
                </h1>

                <div className="w-4/12 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 border-r-2 border-slate-400">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1 grid justify-items-end">
                          <CalendarCheck className="h-4 w-4 text-slate-400" />
                        </div>

                        <div className="col-span-4">
                          <p className="text-sm text-slate-400">1 July 2024</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1 grid justify-items-end">
                          <User2Icon className="h-4 w-4 text-slate-400" />
                        </div>

                        <div className="col-span-4">
                          <p className="text-sm text-slate-400">Demi He</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 my-auto">
                <div className="w-7/12 mx-auto bg-blue-100 border-blue-100 rounded-lg p-2">
                  <Download className="text-blue-400 mx-auto" />
                </div>
              </div>

              <div className="col-span-1 my-auto">
                <div className="w-7/12 mx-auto bg-red-100 border-red-100 rounded-lg p-2">
                  <Trash2 className="text-red-400 mx-auto" />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border-2 rounded-lg p-2 mt-4 bg-white"
        >
          <AccordionTrigger>
            <div className="grid grid-cols-10 gap-4">
              <div className="col-span-5 grid justify-items-center border-r-2 border-slate-400">
                <div className="p-2 border-2 rounded-full border-slate-400">
                  <BookOpen />
                </div>
              </div>

              <div className="col-span-5 my-auto">
                <h2 className="text-lg">Bahasa Indonesia</h2>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-3">
            <div className="grid grid-cols-12 gap-4 border-b border-slate-300 pb-2">
              <div className="col-span-10 pl-4">
                <h1 className="text-base">
                  Aritmatika: Penjumlahan, Pengurangan, Pembagian, Perkalian
                </h1>

                <div className="w-4/12 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 border-r-2 border-slate-400">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1 grid justify-items-end">
                          <CalendarCheck className="h-4 w-4 text-slate-400" />
                        </div>

                        <div className="col-span-4">
                          <p className="text-sm text-slate-400">1 July 2024</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1 grid justify-items-end">
                          <User2Icon className="h-4 w-4 text-slate-400" />
                        </div>

                        <div className="col-span-4">
                          <p className="text-sm text-slate-400">Demi He</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 my-auto">
                <div className="w-7/12 mx-auto bg-blue-100 border-blue-100 rounded-lg p-2">
                  <Download className="text-blue-400 mx-auto" />
                </div>
              </div>

              <div className="col-span-1 my-auto">
                <div className="w-7/12 mx-auto bg-red-100 border-red-100 rounded-lg p-2">
                  <Trash2 className="text-red-400 mx-auto" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mt-3">
              <div className="col-span-10 pl-4">
                <h1 className="text-base">
                  Aritmatika: Penjumlahan, Pengurangan, Pembagian, Perkalian
                </h1>

                <div className="w-4/12 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 border-r-2 border-slate-400">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1 grid justify-items-end">
                          <CalendarCheck className="h-4 w-4 text-slate-400" />
                        </div>

                        <div className="col-span-4">
                          <p className="text-sm text-slate-400">1 July 2024</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1 grid justify-items-end">
                          <User2Icon className="h-4 w-4 text-slate-400" />
                        </div>

                        <div className="col-span-4">
                          <p className="text-sm text-slate-400">Demi He</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 my-auto">
                <div className="w-7/12 mx-auto bg-blue-100 border-blue-100 rounded-lg p-2">
                  <Download className="text-blue-400 mx-auto" />
                </div>
              </div>

              <div className="col-span-1 my-auto">
                <div className="w-7/12 mx-auto bg-red-100 border-red-100 rounded-lg p-2">
                  <Trash2 className="text-red-400 mx-auto" />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border-2 rounded-lg p-2 mt-4 bg-white"
        >
          <AccordionTrigger>
            <div className="grid grid-cols-10 gap-4">
              <div className="col-span-5 grid justify-items-center border-r-2 border-slate-400">
                <div className="p-2 border-2 rounded-full border-slate-400">
                  <BookOpen />
                </div>
              </div>

              <div className="col-span-5 my-auto">
                <h2 className="text-lg">Matematika Dasar</h2>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-3">
            <div className="grid grid-cols-12 gap-4 border-b border-slate-300 pb-2">
              <div className="col-span-10 pl-4">
                <h1 className="text-base">
                  Aritmatika: Penjumlahan, Pengurangan, Pembagian, Perkalian
                </h1>

                <div className="w-4/12 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 border-r-2 border-slate-400">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1 grid justify-items-end">
                          <CalendarCheck className="h-4 w-4 text-slate-400" />
                        </div>

                        <div className="col-span-4">
                          <p className="text-sm text-slate-400">1 July 2024</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1 grid justify-items-end">
                          <User2Icon className="h-4 w-4 text-slate-400" />
                        </div>

                        <div className="col-span-4">
                          <p className="text-sm text-slate-400">Demi He</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 my-auto">
                <div className="w-7/12 mx-auto bg-blue-100 border-blue-100 rounded-lg p-2">
                  <Download className="text-blue-400 mx-auto" />
                </div>
              </div>

              <div className="col-span-1 my-auto">
                <div className="w-7/12 mx-auto bg-red-100 border-red-100 rounded-lg p-2">
                  <Trash2 className="text-red-400 mx-auto" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mt-3">
              <div className="col-span-10 pl-4">
                <h1 className="text-base">
                  Aritmatika: Penjumlahan, Pengurangan, Pembagian, Perkalian
                </h1>

                <div className="w-4/12 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 border-r-2 border-slate-400">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1 grid justify-items-end">
                          <CalendarCheck className="h-4 w-4 text-slate-400" />
                        </div>

                        <div className="col-span-4">
                          <p className="text-sm text-slate-400">1 July 2024</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1 grid justify-items-end">
                          <User2Icon className="h-4 w-4 text-slate-400" />
                        </div>

                        <div className="col-span-4">
                          <p className="text-sm text-slate-400">Demi He</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 my-auto">
                <div className="w-7/12 mx-auto bg-blue-100 border-blue-100 rounded-lg p-2">
                  <Download className="text-blue-400 mx-auto" />
                </div>
              </div>

              <div className="col-span-1 my-auto">
                <div className="w-7/12 mx-auto bg-red-100 border-red-100 rounded-lg p-2">
                  <Trash2 className="text-red-400 mx-auto" />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
