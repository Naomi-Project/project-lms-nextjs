/* eslint-disable */
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
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
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import TeacherTable from "./datatable";
import ButtonAdd from "@/components/ui/buttonAdd";
import ButtonImport from "@/components/ui/buttonImport";
import ButtonImportTeacher from "./ButtonImportTeacher";

export default function ManagerTeacher() {
  return (
    <div className="min-h-screen">
      <div className="border-2 rounded-lg bg-white p-5 mt-10">
        <Tabs defaultValue="aktif" className="w-full">
          <TabsList className="w-full flex justify-between bg-white">
            <div className="flex flex-wrap gap-3 rounded-lg">
                <ButtonAdd endpoint="/managements/manager/teacher/create" label="Tambah Guru" />
                <ButtonImportTeacher />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="col-span-1 ml-1">
                {/* <div className="w-[132px] bg-slate-200 rounded-lg">
                  <TabsTrigger value="aktif">Aktif</TabsTrigger>
                  <TabsTrigger value="nonAktif">Non Aktif</TabsTrigger>
                </div> */}
              </div>

              {/* <div className="col-span-1 relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Cari Siswa" className="pl-8 w-full" />
              </div> */}
            </div>
          </TabsList>
          <TabsContent value="aktif" className=" rounded-lg mt-4">
            <TeacherTable />
          </TabsContent>
          <TabsContent value="nonAktif" className=" rounded-lg mt-4">
            <TeacherTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
