import React from "react";
import user from "../../../../image/user.jpeg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CircleAlert, Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ManagerProfileStudent() {
  return (
    <div className="min-h-screen">
      <div className="border-2 rounded-lg mt-8 bg-white">
        <div className="grid md:grid-cols-12 grid-cols-12 p-4">
          <div className="col-span-2 md:col-span-1">
            <Image
              src={user}
              alt="user"
              className="w-16 h-16 rounded-lg md:mx-auto"
              priority={true}
            />
          </div>

          <div className="col-span-8 md:col-span-10 my-auto">
            <h1 className="font-bold text-sm">Muhammad Zulfikri</h1>
            <p className="w-7 text-center mt-1 bg-blue-100 text-blue-400 p-1 border-blue-100 rounded-lg text-xs">
              7A
            </p>
          </div>

          <div className="md:mt-0 my-auto md:col-span-1 col-span-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default">
                  <Pencil /> Edit
                </Button>
              </DialogTrigger>
              <DialogContent className="md:w-3/12 w-96 rounded-lg">
                <DialogHeader>
                  <DialogTitle className="text-center">
                    Nama Lengkap
                  </DialogTitle>
                </DialogHeader>
                <div className="">
                  <Label htmlFor="name" className="text-right">
                    Nama Lengkap
                  </Label>
                  <Input type="text" placeholder="Isi Nama Lengkap" />
                </div>

                <div className="mt-3">
                  <Label htmlFor="name" className="text-right">
                    Cabang Kelas
                  </Label>

                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Cabang Kelas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="kelas7a">Kelas 7A</SelectItem>
                        <SelectItem value="kelas7b">Kelas 7B</SelectItem>
                        <SelectItem value="kelas7c">Kelas 7C</SelectItem>
                        <SelectItem value="kelas7d">Kelas 7D</SelectItem>
                        <SelectItem value="kelas7e">Kelas 7E</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
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

      <div className="border-2 rounded-lg mt-4 p-4 bg-white">
        <h1 className="text-base font-bold">Data Siswa</h1>

        <div className="md:grid grid-cols-2 gap-4 mt-5">
          <div className="col-span-1">
            <div className="">
              <p className="text-sm text-slate-400">Nama Lengkap</p>

              <p className="text-sm">Muhammad Zulfikri</p>
            </div>

            <div className="mt-3">
              <p className="text-sm text-slate-400">NIK</p>

              <p className="text-sm">210950921512</p>
            </div>

            <div className="mt-3">
              <p className="text-sm text-slate-400">Nama Orang Tua / Wali</p>

              <p className="text-sm">Daniel Alexander</p>
            </div>
          </div>

          <div className="md:mt-0 mt-3 col-span-1">
            <div className="">
              <p className="text-sm text-slate-400">NISN</p>

              <p className="text-sm">18657981265871</p>
            </div>

            <div className="mt-3">
              <p className="text-sm text-slate-400">
                No. Telfon Orang Tua / Wali
              </p>

              <p className="text-sm">+628123456789</p>
            </div>

            <div className="mt-3">
              <p className="text-sm text-slate-400">Alamat Tinggal</p>

              <p className="text-sm">Sidoarjo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-5">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">
              <CircleAlert />
              <span>Nonaktifkan Siswa</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="md:w-5/12 w-8/12 rounded-lg">
            <DialogHeader className="border-b-2">
              <DialogTitle className="text-center mb-2">
                Apakah Anda Yakin ?
              </DialogTitle>
            </DialogHeader>
            <div className="">
              <CircleAlert className="text-red-500 w-10 h-10 mx-auto" />

              <div className="text-center mt-2">
                <p className="font-bold">Nonatifkan Siswa</p>
                <p className="text-slate-400 text-sm">
                  Jika siswa dinonaktifkan maka siswa ini dianggap keluar dari
                  sekolah
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="reset"
                variant="outline"
                className="w-full md:mt-0 mt-2"
              >
                Tidak
              </Button>
              <Button type="submit" variant="destructive" className="w-full">
                Ya
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
