import { BookText, CalendarCheck, DatabaseIcon, User2Icon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function StudentTaskDetail() {
  return (
    <div className="min-h-screen">
      <div className="border-2 rounded-lg py-5 px-10 bg-white">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-10">
            <h1 className="text-xl font-bold">
              Tugas Matematika Perkalian Ganda
            </h1>

            <div className="md:w-7/12 w-full mt-4">
              <div className="md:grid grid-cols-4 gap-4">
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

                <div className="col-span-1 md:mt-0 mt-2 border-r-2 border-slate-400">
                  <div className="grid grid-cols-5 gap-2">
                    <div className="col-span-1 grid justify-items-end">
                      <User2Icon className="h-4 w-4 text-slate-400" />
                    </div>

                    <div className="col-span-4">
                      <p className="text-sm text-slate-400">Demi He</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-1 md:mt-0 mt-2 border-r-2 border-slate-400">
                  <div className="grid grid-cols-5 gap-2">
                    <div className="col-span-1 grid justify-items-end">
                      <BookText className="h-4 w-4 text-slate-400" />
                    </div>

                    <div className="col-span-4">
                      <p className="text-sm text-slate-400">Matematika</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-1 md:mt-0 mt-2 md:border-r-0 border-r-2 border-slate-400">
                  <div className="grid grid-cols-5 gap-2">
                    <div className="col-span-1 grid justify-items-end">
                      <DatabaseIcon className="h-4 w-4 text-slate-400" />
                    </div>

                    <div className="col-span-4">
                      <p className="text-sm text-slate-400">Semester 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 my-auto">
            <Button variant="default" className="md:w-10/12 w-full">
              Selesai
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-14 ml-10">
        <h3>1. What is the result of 3 + 4 x 2 ?</h3>

        <RadioGroup className="mt-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="12" id="r1" />
            <Label htmlFor="r1">12</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="16" id="r2" />
            <Label htmlFor="r2">16</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="14" id="r3" />
            <Label htmlFor="r3">14</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="15" id="r3" />
            <Label htmlFor="r3">15</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="20" id="r3" />
            <Label htmlFor="r3">20</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="mt-14 ml-10">
        <h3>2. What is the result of 3 + 4 x 2 ?</h3>

        <RadioGroup className="mt-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="12" id="r1" />
            <Label htmlFor="r1">12</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="16" id="r2" />
            <Label htmlFor="r2">16</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="14" id="r3" />
            <Label htmlFor="r3">14</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="15" id="r3" />
            <Label htmlFor="r3">15</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="20" id="r3" />
            <Label htmlFor="r3">20</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="mt-14 ml-10">
        <h3>3. What is the result of 3 + 4 x 2 ?</h3>

        <RadioGroup className="mt-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="12" id="r1" />
            <Label htmlFor="r1">12</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="16" id="r2" />
            <Label htmlFor="r2">16</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="14" id="r3" />
            <Label htmlFor="r3">14</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="15" id="r3" />
            <Label htmlFor="r3">15</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="20" id="r3" />
            <Label htmlFor="r3">20</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
