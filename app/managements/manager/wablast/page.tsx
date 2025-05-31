/* eslint-disable */
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ButtonAdd from "@/components/ui/buttonAdd";
import BroadcastTable from "./datatable";
import CommonFormBroadcastWa from "@/components/common/form/CommonFormBroadcastWa";

export default function ManagerWablast() {
  return (
    <div className="min-h-screen">
      <div className="border-2 rounded-lg bg-white p-5 mt-10">
        <Tabs defaultValue="aktif" className="w-full">
          <TabsList className="w-full flex justify-between bg-white">
            <div className="flex gap-3 rounded-lg">
              <ButtonAdd endpoint="/managements/manager/wablast/create" label="Tambah Pesan" />
              <CommonFormBroadcastWa />
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
            <BroadcastTable />
          </TabsContent>
          <TabsContent value="nonAktif" className=" rounded-lg mt-4">
            <BroadcastTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
