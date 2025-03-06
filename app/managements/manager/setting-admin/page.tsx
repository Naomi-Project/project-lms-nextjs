"use client"
/* eslint-disable */
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




import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Link from "next/link";
import React from "react";
import StaffTable from "./datatable";
import ButtonAdd from "@/components/ui/buttonAdd";
import { useGetSchoolsQuery, useUserPayloadQuery } from "@/graphql/generated";

export default function ManagerSettingAdmin() {
  const { data: schools, loading: loadSchool } = useGetSchoolsQuery()
  const { data: userLogin, loading } = useUserPayloadQuery()
  const findSchoolByUser: any = schools?.schools.find((item) => item.users.some((usr) => usr.id === userLogin?.me.id)) || {}
  
  return (
    <div className="min-h-screen">
      <div className="flex justify-start">
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="bg-blue-100 border-blue-100 rounded-lg"
          >
            <Link href="/managements/manager/setting-admin">
              <p className="text-sm text-blue-500">Manajemen Admin</p>
            </Link>
          </ToggleGroupItem>
          {/* <ToggleGroupItem
            value="italic"
            aria-label="Toggle italic"
            className="bg-white"
          >
            <Link href="/managements/manager/setting-payment">
              <p className="text-sm text-slate-400">Pembayaran Sekolah</p>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
            className="bg-white"
          >
            <Link href="/managements/manager/profile">
              <p className="text-sm text-slate-400">Profile Sekolah</p>
            </Link>
          </ToggleGroupItem> */}
        </ToggleGroup>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-4">
        <div className="col-span-1 border-2 rounded-lg bg-white p-5">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-slate-400 text-base">Nama Sekolah</h1>

              <p className="font-bold text-3xl mt-3">{findSchoolByUser.name}</p>

              <p className="text-base mt-1">+{findSchoolByUser.phone}</p>
            </div>

            <div className="">
              <Link href={'/managements/manager/profile'}>
                <Button variant={'default'}>Edit</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden grid-cols-2 gap-4 mt-4">
        <div className="col-span-1 border-2 rounded-lg bg-white p-5">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-slate-400 text-base">Pengurus Cabang</h1>

              <p className="font-bold text-3xl mt-3">Johan</p>

              <p className="text-base mt-1">+62812764828</p>
            </div>

            <div className="">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">Edit</Button>
                </DialogTrigger>
                <DialogContent className="md:w-3/12 w-96 rounded-lg">
                  <DialogHeader>
                    <DialogTitle className="text-center">
                      Edit Pengurus Cabang
                    </DialogTitle>
                  </DialogHeader>
                  <div className="">
                    <Label htmlFor="name" className="text-right">
                      Nama Pengurus Cabang
                    </Label>
                    <Input type="text" placeholder="Nama" />
                  </div>

                  <div className="mt-3">
                    <Label htmlFor="name" className="text-right">
                      No. Telfon
                    </Label>
                    <Input type="text" placeholder="+62xxxxxxxxxxx" />
                  </div>
                  <DialogFooter className="mt-5">
                    <Button type="submit" variant="default" className="w-full">
                      Selesai
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg bg-white p-5">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-slate-400 text-base">Kepala Sekolah</h1>

              <p className="font-bold text-3xl mt-3">-</p>

              <p className="text-base mt-1">-</p>
            </div>

            <div className="">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">Edit</Button>
                </DialogTrigger>
                <DialogContent className="md:w-3/12 w-96 rounded-lg">
                  <DialogHeader>
                    <DialogTitle className="text-center">
                      Edit Kepala Sekolah
                    </DialogTitle>
                  </DialogHeader>
                  <div className="">
                    <Label htmlFor="name" className="text-right">
                      Nama Kepala Sekolah
                    </Label>
                    <Input type="text" placeholder="Nama" />
                  </div>

                  <div className="mt-3">
                    <Label htmlFor="name" className="text-right">
                      No. Telfon
                    </Label>
                    <Input type="text" placeholder="+62xxxxxxxxxxx" />
                  </div>
                  <DialogFooter className="mt-5">
                    <Button type="submit" variant="default" className="w-full">
                      Selesai
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg bg-white p-5 mt-10">
        <Tabs defaultValue="aktif" className="w-full">
          <TabsList className="w-full flex justify-between bg-white">
            <div className="bg-slate-200 rounded-lg">
              <ButtonAdd endpoint="/managements/manager/setting-admin/create" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="ml-1 col-span-1">
                {/* <div className="w-[132px] bg-slate-200 rounded-lg">
                  <TabsTrigger value="aktif">Aktif</TabsTrigger>
                  <TabsTrigger value="nonAktif">Non Aktif</TabsTrigger>
                </div> */}
              </div>

              {/* <div className="col-span-1 relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Cari Admin" className="pl-8 w-full" />
              </div> */}
            </div>
          </TabsList>
          <TabsContent value="aktif" className=" rounded-lg mt-4">
            <StaffTable />
          </TabsContent>
          <TabsContent value="nonAktif" className=" rounded-lg mt-4">
            <StaffTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
