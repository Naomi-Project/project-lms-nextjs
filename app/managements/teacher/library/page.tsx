"use client"
import React from "react";
import {
  Select,
  SelectContent,
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
  Search,
  Trash2,
  User2Icon,
} from "lucide-react";
import { Input } from "@/components/ui/input";


import { useGetReferencesQuery } from "@/graphql/generated";
import ButtonAdd from "@/components/ui/buttonAdd";

export default function LibraryTeacher() {
  const { data } = useGetReferencesQuery()
  console.log(data)
  return (
    <div className="min-h-screen">
      <div className="md:flex justify-between items-center">
        <div className="">
          <ButtonAdd endpoint="/managements/teacher/library/create" label="Buat Referensi"/>
        </div>

        <div className="grid grid-cols-3 gap-4 md:mt-0 mt-3">
          <div className="col-span-1 bg-white rounded-lg">
            <Select defaultValue="global">
              <SelectTrigger className="w-full">
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
              <div className="md:col-span-10 col-span-8 pl-4">
                <h1 className="text-base">
                  Aritmatika: Penjumlahan, Pengurangan, Pembagian, Perkalian
                </h1>

                <div className="md:w-4/12 w-8/12 mt-4">
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

              <div className="md:col-span-1 col-span-2 my-auto">
                <div className="w-7/12 mx-auto bg-blue-100 border-blue-100 rounded-lg p-2">
                  <Download className="text-blue-400 mx-auto" />
                </div>
              </div>

              <div className="md:col-span-1 col-span-2 my-auto">
                <div className="w-7/12 mx-auto bg-red-100 border-red-100 rounded-lg p-2">
                  <Trash2 className="text-red-400 mx-auto" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mt-3">
              <div className="md:col-span-10 col-span-8 pl-4">
                <h1 className="text-base">
                  Aritmatika: Penjumlahan, Pengurangan, Pembagian, Perkalian
                </h1>

                <div className="md:w-4/12 w-8/12 mt-4">
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

              <div className="md:col-span-1 col-span-2 my-auto">
                <div className="w-7/12 mx-auto bg-blue-100 border-blue-100 rounded-lg p-2">
                  <Download className="text-blue-400 mx-auto" />
                </div>
              </div>

              <div className="md:col-span-1 col-span-2 my-auto">
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
