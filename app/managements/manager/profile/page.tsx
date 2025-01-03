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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ManagerProfile() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-start">
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="bg-white"
          >
            <Link href="/managements/manager/setting-admin">
              <p className="text-sm text-blue-500">Manajemen Admin</p>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="italic"
            aria-label="Toggle italic"
            className="bg-white"
          >
            <Link href="/managements/manager/setting-payment">
              <p className="text-sm text-blue-500">Pembayaran Sekolah</p>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
            className="bg-blue-100 border-blue-100 rounded-lg"
          >
            <Link href="/managements/manager/profile">
              <p className="text-sm text-blue-500">Profile Sekolah</p>
            </Link>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="border-2 bg-white rounded-lg p-5 mt-6">
        <div className="flex justify-between">
          <div className="">
            <h1 className="text-3xl font-bold">SMP YASPENDIK TANGERANG 1</h1>

            <div className="w-52 border-blue-500 bg-blue-100 rounded-lg p-1 mt-4">
              <p className="text-blue-500 text-center text-sm">
                Sekolah Menengah Pertama
              </p>
            </div>
          </div>

          <div className="">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default">
                  <Pencil />
                  <span>Edit</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="md:w-3/12 w-96 rounded-lg">
                <DialogHeader>
                  <DialogTitle className="text-center">
                    Tagihan SPP Perbulan
                  </DialogTitle>
                </DialogHeader>
                <div className="">
                  <Label htmlFor="name" className="text-right">
                    Nama Sekolah
                  </Label>
                  <Input type="text" placeholder="Isi Nama Sekolah Disini" />
                </div>

                <div className="">
                  <Label htmlFor="name" className="text-right">
                    Tingkatan Sekolah
                  </Label>
                  <Input
                    type="text"
                    placeholder="Isi Tingkatan Sekolah Disini"
                  />
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

      <div className="border-2 bg-white rounded-lg p-5 mt-8">
        <h1 className="text-xl font-bold">Data Sekolah</h1>

        <div className="md:grid grid-cols-2 gap-4 mt-4">
          <div className="col-span-1">
            <div className="">
              <p className="text-slate-400 text-sm">Nama Sekolah</p>

              <p className="text-sm">SMP YASPENDIK TANGERANG 1</p>
            </div>

            <div className="mt-2">
              <p className="text-slate-400 text-sm">Cabang Sekolah</p>

              <p className="text-sm">Cabang Jakarta</p>
            </div>

            <div className="mt-2">
              <p className="text-slate-400 text-sm">Alamat Sekolah</p>

              <p className="text-sm">Tangerang</p>
            </div>
          </div>

          <div className="md:mt-0 mt-2 col-span-1">
            <div className="">
              <p className="text-slate-400 text-sm">Tingkatan Sekolah</p>

              <p className="text-sm">Sekolah Menengah Pertama</p>
            </div>

            <div className="mt-2">
              <p className="text-slate-400 text-sm">Akreditasi Sekolah</p>

              <p className="text-sm">A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
