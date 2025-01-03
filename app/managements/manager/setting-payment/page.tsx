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
import Link from "next/link";
import React from "react";

export default function ManagerSettingPayment() {
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
            className="bg-blue-100 border-blue-100 rounded-lg"
          >
            <Link href="/managements/manager/setting-payment">
              <p className="text-sm text-blue-500">Pembayaran Sekolah</p>
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
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="md:grid grid-cols-2 gap-4 mt-4">
        <div className="col-span-1 border-2 rounded-lg bg-white p-5">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-slate-400 text-base">Tagihan SPP Perbulan</h1>

              <p className="font-bold text-3xl mt-3">Rp 2.000.000</p>
            </div>

            <div className="">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">Edit</Button>
                </DialogTrigger>
                <DialogContent className="md:w-3/12 w-96 rounded-lg">
                  <DialogHeader>
                    <DialogTitle className="text-center">
                      Tagihan SPP Perbulan
                    </DialogTitle>
                  </DialogHeader>
                  <div className="">
                    <Label htmlFor="name" className="text-right">
                      Jumlah Nominal
                    </Label>
                    <Input type="text" placeholder="Jumlah Nominal Tagihan" />
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

        <div className="md:mt-0 mt-4 col-span-1 border-2 rounded-lg bg-white p-5">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-slate-400 text-base">Tagihan Jatuh Tempo</h1>

              <p className="font-bold text-3xl mt-3">21</p>
            </div>

            <div className="">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">Edit</Button>
                </DialogTrigger>
                <DialogContent className="md:w-3/12 w-96 rounded-lg">
                  <DialogHeader>
                    <DialogTitle className="text-center">
                      Tangal Jatuh Tempo
                    </DialogTitle>
                  </DialogHeader>
                  <div className="">
                    <Label htmlFor="name" className="text-right">
                      Tanggal Jatuh Tempo (1 - 25)
                    </Label>
                    <Input
                      type="text"
                      placeholder="Masukkan Tanggal Jatuh Tempo"
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
      </div>
    </div>
  );
}
