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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Building2, Plus, UserRound, UsersRound } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ClassManager() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-start">
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="bg-blue-100 border-blue-100 rounded-lg"
          >
            <Link href="/managements/manager/class">
              <p className="text-sm text-blue-500">Kelas</p>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="italic"
            aria-label="Toggle italic"
            className="bg-white"
          >
            <Link href="/managements/manager/class-management">
              <p className="text-sm text-slate-400">Manajemen Kelas Siswa</p>
            </Link>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="col-span-1">
          <Button className="w-full h-full border-0" variant="outline">
            <div className="w-full h-full p-2">
              <div className="md:flex justify-between">
                <h1 className="md:text-lg text-base text-left font-bold">
                  Kelas 7
                </h1>

                <div className="md:mt-0 mt-1 w-20 rounded-lg flex items-center justify-center bg-blue-100 p-1">
                  <p className="text-xs text-blue-500">Kelas Awal</p>
                </div>
              </div>

              <div className="w-2/12 mt-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-1">
                    <Building2 className="text-slate-400 w-6 h-6" />
                  </div>

                  <div className="col-span-2 my-auto">
                    <p className="text-slate-400 text-sm">8 Kelas</p>
                  </div>
                </div>
              </div>
            </div>
          </Button>
        </div>

        <div className="col-span-1">
          <Button className="w-full h-full border-0" variant="outline">
            <div className="w-full h-full p-2">
              <div className="md:flex justify-between">
                <h1 className="md:text-lg text-base text-left font-bold">
                  Kelas 8
                </h1>

                <div className="md:mt-0 mt-1 w-20 rounded-lg flex items-center justify-center bg-blue-100 p-1">
                  <p className="text-xs text-blue-500">Kelas Awal</p>
                </div>
              </div>

              <div className="w-2/12 mt-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-1">
                    <Building2 className="text-slate-400 w-6 h-6" />
                  </div>

                  <div className="col-span-2 my-auto">
                    <p className="text-slate-400 text-sm">8 Kelas</p>
                  </div>
                </div>
              </div>
            </div>
          </Button>
        </div>

        <div className="col-span-1">
          <Button className="w-full h-full border-0" variant="outline">
            <div className="w-full h-full p-2">
              <div className="md:flex justify-between">
                <h1 className="md:text-lg text-base text-left font-bold">
                  Kelas 9
                </h1>

                <div className="md:mt-0 mt-1 w-20 rounded-lg flex items-center justify-center bg-blue-100 p-1">
                  <p className="text-xs text-blue-500">Kelas Awal</p>
                </div>
              </div>

              <div className="w-2/12 mt-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-1">
                    <Building2 className="text-slate-400 w-6 h-6" />
                  </div>

                  <div className="col-span-2 my-auto">
                    <p className="text-slate-400 text-sm">8 Kelas</p>
                  </div>
                </div>
              </div>
            </div>
          </Button>
        </div>
      </div>

      <div className="mt-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">
              <Plus /> Buat Cabang Kelas
            </Button>
          </DialogTrigger>
          <DialogContent className="md:w-5/12 w-96 rounded-lg">
            <DialogHeader>
              <DialogTitle className="text-center">
                Buat Cabang Kelas
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <Label htmlFor="name" className="text-right">
                  Induk Kelas
                </Label>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Kelas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="kelas7">Kelas 7</SelectItem>
                      <SelectItem value="kelas8">Kelas 8</SelectItem>
                      <SelectItem value="kelas9">Kelas 9</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-1">
                <Label htmlFor="name" className="text-right">
                  Wali Kelas
                </Label>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Wali Kelas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="josua">Josua</SelectItem>
                      <SelectItem value="jonatan">Jonatan</SelectItem>
                      <SelectItem value="joko">Joko</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="">
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

      <div className="md:grid grid-cols-4 gap-4 mt-8">
        <div className="col-span-1">
          <Link href="/managements/manager/class-detail">
            <Button className="w-full h-full border-0" variant="outline">
              <div className="w-full h-full p-2">
                <div className="flex justify-between">
                  <h1 className="text-base font-bold">Kelas 7A</h1>

                  <div className="w-20 rounded-lg flex items-center justify-center bg-blue-100 p-1">
                    <p className="text-xs text-blue-500">Kelas Awal</p>
                  </div>
                </div>

                <div className="w-9/12 mt-5">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-1">
                      <div className="grid grid-cols-3">
                        <div className="col-span-1">
                          <UserRound className="text-slate-400 w-5 h-5" />
                        </div>

                        <div className="col-span-2">
                          <p className="text-slate-400 text-sm">Demi He</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="grid grid-cols-3">
                        <div className="col-span-1">
                          <UsersRound className="text-slate-400 w-5 h-5" />
                        </div>

                        <div className="col-span-2">
                          <p className="text-slate-400 text-sm">20 Siswa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Button>
          </Link>
        </div>

        <div className="md:mt-0 mt-4 col-span-1">
          <Link href="/managements/manager/class-detail">
            <Button className="w-full h-full border-0" variant="outline">
              <div className="w-full h-full p-2">
                <div className="flex justify-between">
                  <h1 className="text-base font-bold">Kelas 7B</h1>

                  <div className="w-20 rounded-lg flex items-center justify-center bg-blue-100 p-1">
                    <p className="text-xs text-blue-500">Kelas Awal</p>
                  </div>
                </div>

                <div className="w-9/12 mt-5">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-1">
                      <div className="grid grid-cols-3">
                        <div className="col-span-1">
                          <UserRound className="text-slate-400 w-5 h-5" />
                        </div>

                        <div className="col-span-2">
                          <p className="text-slate-400 text-sm">Demi He</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="grid grid-cols-3">
                        <div className="col-span-1">
                          <UsersRound className="text-slate-400 w-5 h-5" />
                        </div>

                        <div className="col-span-2">
                          <p className="text-slate-400 text-sm">20 Siswa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Button>
          </Link>
        </div>

        <div className="md:mt-0 mt-4 col-span-1">
          <Link href="/managements/manager/class-detail">
            <Button className="w-full h-full border-0" variant="outline">
              <div className="w-full h-full p-2">
                <div className="flex justify-between">
                  <h1 className="text-base font-bold">Kelas 7C</h1>

                  <div className="w-20 rounded-lg flex items-center justify-center bg-blue-100 p-1">
                    <p className="text-xs text-blue-500">Kelas Awal</p>
                  </div>
                </div>

                <div className="w-9/12 mt-5">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-1">
                      <div className="grid grid-cols-3">
                        <div className="col-span-1">
                          <UserRound className="text-slate-400 w-5 h-5" />
                        </div>

                        <div className="col-span-2">
                          <p className="text-slate-400 text-sm">Demi He</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="grid grid-cols-3">
                        <div className="col-span-1">
                          <UsersRound className="text-slate-400 w-5 h-5" />
                        </div>

                        <div className="col-span-2">
                          <p className="text-slate-400 text-sm">20 Siswa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Button>
          </Link>
        </div>

        <div className="md:mt-0 mt-4 col-span-1">
          <Link href="/managements/manager/class-detail">
            <Button className="w-full h-full border-0" variant="outline">
              <div className="w-full h-full p-2">
                <div className="flex justify-between">
                  <h1 className="text-base font-bold">Kelas 7D</h1>

                  <div className="w-20 rounded-lg flex items-center justify-center bg-blue-100 p-1">
                    <p className="text-xs text-blue-500">Kelas Awal</p>
                  </div>
                </div>

                <div className="w-9/12 mt-5">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-1">
                      <div className="grid grid-cols-3">
                        <div className="col-span-1">
                          <UserRound className="text-slate-400 w-5 h-5" />
                        </div>

                        <div className="col-span-2">
                          <p className="text-slate-400 text-sm">Demi He</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="grid grid-cols-3">
                        <div className="col-span-1">
                          <UsersRound className="text-slate-400 w-5 h-5" />
                        </div>

                        <div className="col-span-2">
                          <p className="text-slate-400 text-sm">20 Siswa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Button>
          </Link>
        </div>
      </div>

      <div className="md:grid grid-cols-4 gap-4 mt-3">
        <div className="col-span-1">
          <Link href="/managements/manager/class-detail">
            <Button className="w-full h-full border-0" variant="outline">
              <div className="w-full h-full p-2">
                <div className="flex justify-between">
                  <h1 className="text-base font-bold">Kelas 7E</h1>

                  <div className="w-20 rounded-lg flex items-center justify-center bg-blue-100 p-1">
                    <p className="text-xs text-blue-500">Kelas Awal</p>
                  </div>
                </div>

                <div className="w-9/12 mt-5">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-1">
                      <div className="grid grid-cols-3">
                        <div className="col-span-1">
                          <UserRound className="text-slate-400 w-5 h-5" />
                        </div>

                        <div className="col-span-2">
                          <p className="text-slate-400 text-sm">Demi He</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="grid grid-cols-3">
                        <div className="col-span-1">
                          <UsersRound className="text-slate-400 w-5 h-5" />
                        </div>

                        <div className="col-span-2">
                          <p className="text-slate-400 text-sm">20 Siswa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Button>
          </Link>
        </div>

        <div className="md:mt-0 mt-4 col-span-1">
          <Link href="/managements/manager/class-detail">
            <Button className="w-full h-full border-0" variant="outline">
              <div className="w-full h-full p-2">
                <div className="flex justify-between">
                  <h1 className="text-base font-bold">Kelas 7F</h1>

                  <div className="w-20 rounded-lg flex items-center justify-center bg-blue-100 p-1">
                    <p className="text-xs text-blue-500">Kelas Awal</p>
                  </div>
                </div>

                <div className="w-9/12 mt-5">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-1">
                      <div className="grid grid-cols-3">
                        <div className="col-span-1">
                          <UserRound className="text-slate-400 w-5 h-5" />
                        </div>

                        <div className="col-span-2">
                          <p className="text-slate-400 text-sm">Demi He</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="grid grid-cols-3">
                        <div className="col-span-1">
                          <UsersRound className="text-slate-400 w-5 h-5" />
                        </div>

                        <div className="col-span-2">
                          <p className="text-slate-400 text-sm">20 Siswa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Button>
          </Link>
        </div>

        <div className="md:mt-0 mt-4 col-span-1">
          <Link href="/managements/manager/class-detail">
            <Button className="w-full h-full border-0" variant="outline">
              <div className="w-full h-full p-2">
                <div className="flex justify-between">
                  <h1 className="text-base font-bold">Kelas 7G</h1>

                  <div className="w-20 rounded-lg flex items-center justify-center bg-blue-100 p-1">
                    <p className="text-xs text-blue-500">Kelas Awal</p>
                  </div>
                </div>

                <div className="w-9/12 mt-5">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-1">
                      <div className="grid grid-cols-3">
                        <div className="col-span-1">
                          <UserRound className="text-slate-400 w-5 h-5" />
                        </div>

                        <div className="col-span-2">
                          <p className="text-slate-400 text-sm">Demi He</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="grid grid-cols-3">
                        <div className="col-span-1">
                          <UsersRound className="text-slate-400 w-5 h-5" />
                        </div>

                        <div className="col-span-2">
                          <p className="text-slate-400 text-sm">20 Siswa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Button>
          </Link>
        </div>

        <div className="md:mt-0 mt-4 col-span-1">
          <Link href="/managements/manager/class-detail">
            <Button className="w-full h-full border-0" variant="outline">
              <div className="w-full h-full p-2">
                <div className="flex justify-between">
                  <h1 className="text-base font-bold">Kelas 7H</h1>

                  <div className="w-20 rounded-lg flex items-center justify-center bg-blue-100 p-1">
                    <p className="text-xs text-blue-500">Kelas Awal</p>
                  </div>
                </div>

                <div className="w-9/12 mt-5">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-1">
                      <div className="grid grid-cols-3">
                        <div className="col-span-1">
                          <UserRound className="text-slate-400 w-5 h-5" />
                        </div>

                        <div className="col-span-2">
                          <p className="text-slate-400 text-sm">Demi He</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="grid grid-cols-3">
                        <div className="col-span-1">
                          <UsersRound className="text-slate-400 w-5 h-5" />
                        </div>

                        <div className="col-span-2">
                          <p className="text-slate-400 text-sm">20 Siswa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
