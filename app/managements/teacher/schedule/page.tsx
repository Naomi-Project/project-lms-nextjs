import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BadgePlus, ChevronDown } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ScheduleTeacher() {
  return (
    <div className="min-h-screen">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">Senin</h1>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="font-light">
                  Ubah Jadwal
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                  <Dialog>
                    <DialogTrigger className="font-light">
                      Tambah Mata Pelajaran
                    </DialogTrigger>
                    <DialogContent className="md:w-4/12 w-96 rounded-lg">
                      <DialogHeader>
                        <DialogTitle className="border-b-2 text-center pb-2">
                          Tambah Mata Pelajaran
                        </DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="w-full h-96">
                        <div className="grid grid-cols-12">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                      <DialogFooter>
                        <Button type="submit" className="w-full">
                          Selesai
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="text-red-500 font-light">
                  Hapus Jadwal
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-5 gap-4">
              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">Selasa</h1>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="font-light">
                  Ubah Jadwal
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                  <Dialog>
                    <DialogTrigger className="font-light">
                      Tambah Mata Pelajaran
                    </DialogTrigger>
                    <DialogContent className="md:w-4/12 w-96 rounded-lg">
                      <DialogHeader>
                        <DialogTitle className="border-b-2 text-center pb-2">
                          Tambah Mata Pelajaran
                        </DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="w-full h-96">
                        <div className="grid grid-cols-12">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                      <DialogFooter>
                        <Button type="submit" className="w-full">
                          Selesai
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="text-red-500 font-light">
                  Hapus Jadwal
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-5 gap-4">
              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">Rabu</h1>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="font-light">
                  Ubah Jadwal
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                  <Dialog>
                    <DialogTrigger className="font-light">
                      Tambah Mata Pelajaran
                    </DialogTrigger>
                    <DialogContent className="md:w-4/12 w-96 rounded-lg">
                      <DialogHeader>
                        <DialogTitle className="border-b-2 text-center pb-2">
                          Tambah Mata Pelajaran
                        </DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="w-full h-96">
                        <div className="grid grid-cols-12">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                      <DialogFooter>
                        <Button type="submit" className="w-full">
                          Selesai
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="text-red-500 font-light">
                  Hapus Jadwal
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-5 gap-4">
              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">Kamis</h1>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="font-light">
                  Ubah Jadwal
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                  <Dialog>
                    <DialogTrigger className="font-light">
                      Tambah Mata Pelajaran
                    </DialogTrigger>
                    <DialogContent className="md:w-4/12 w-96 rounded-lg">
                      <DialogHeader>
                        <DialogTitle className="border-b-2 text-center pb-2">
                          Tambah Mata Pelajaran
                        </DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="w-full h-96">
                        <div className="grid grid-cols-12">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                      <DialogFooter>
                        <Button type="submit" className="w-full">
                          Selesai
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="text-red-500 font-light">
                  Hapus Jadwal
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-5 gap-4">
              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">Jumat</h1>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="font-light">
                  Ubah Jadwal
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                  <Dialog>
                    <DialogTrigger className="font-light">
                      Tambah Mata Pelajaran
                    </DialogTrigger>
                    <DialogContent className="md:w-4/12 w-96 rounded-lg">
                      <DialogHeader>
                        <DialogTitle className="border-b-2 text-center pb-2">
                          Tambah Mata Pelajaran
                        </DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="w-full h-96">
                        <div className="grid grid-cols-12">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                      <DialogFooter>
                        <Button type="submit" className="w-full">
                          Selesai
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="text-red-500 font-light">
                  Hapus Jadwal
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-5 gap-4">
              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">Sabtu</h1>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="font-light">
                  Ubah Jadwal
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                  <Dialog>
                    <DialogTrigger className="font-light">
                      Tambah Mata Pelajaran
                    </DialogTrigger>
                    <DialogContent className="md:w-4/12 w-96 rounded-lg">
                      <DialogHeader>
                        <DialogTitle className="border-b-2 text-center pb-2">
                          Tambah Mata Pelajaran
                        </DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="w-full h-96">
                        <div className="grid grid-cols-12">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 mt-3">
                          <div className="col-span-1 flex justify-end">
                            <Checkbox id="terms" />
                          </div>
                          <div className="col-span-11">
                            <div className="grid grid-cols-10">
                              <div className="col-span-1 flex justify-center items-center">
                                <BadgePlus className="w-5 h-5 text-blue-400" />
                              </div>

                              <div className="col-span-9">
                                <p className="text-sm">Bahasa Indonesia</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                      <DialogFooter>
                        <Button type="submit" className="w-full">
                          Selesai
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="text-red-500 font-light">
                  Hapus Jadwal
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-5 gap-4">
              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
