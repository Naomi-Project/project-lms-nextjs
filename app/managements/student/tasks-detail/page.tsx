import { Checkbox } from "@/components/ui/checkbox";
import { CalendarCheck, DatabaseIcon, User2Icon } from "lucide-react";
import React from "react";

export default function StudentTaskDetail() {
  return (
    <div className="min-h-screen">
      <div className="border-2 rounded-lg py-5 px-10">
        <h1 className="text-xl font-bold">Tugas Matematika Perkalian Ganda</h1>

        <div className="w-7/12 mt-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1 border-r-2 border-slate-700">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-1 grid justify-items-end">
                  <CalendarCheck className="h-4 w-4" />
                </div>

                <div className="col-span-4">
                  <p className="text-sm">1 July 2024</p>
                </div>
              </div>
            </div>

            <div className="col-span-1 border-r-2 border-slate-700">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-1 grid justify-items-end">
                  <User2Icon className="h-4 w-4" />
                </div>

                <div className="col-span-4">
                  <p className="text-sm">Demi He</p>
                </div>
              </div>
            </div>

            <div className="col-span-1 border-r-2 border-slate-700">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-1 grid justify-items-end">
                  <DatabaseIcon className="h-4 w-4" />
                </div>

                <div className="col-span-4">
                  <p className="text-sm">Matematika</p>
                </div>
              </div>
            </div>

            <div className="col-span-1 border-r-2 border-slate-700">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-1 grid justify-items-end">
                  <DatabaseIcon className="h-4 w-4" />
                </div>

                <div className="col-span-4">
                  <p className="text-sm">Semester 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 ml-10">
        <h3>1. What is the result of 3 + 4 x 2 ?</h3>

        <div className="ml-5">
          <div className="flex items-center space-x-2 mt-3">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              14
            </label>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              11
            </label>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              10
            </label>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              15
            </label>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              16
            </label>
          </div>
        </div>
      </div>

      <div className="mt-10 ml-10">
        <h3>2. What is the result of 3 + 4 x 2 ?</h3>

        <div className="ml-5">
          <div className="flex items-center space-x-2 mt-3">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              14
            </label>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              11
            </label>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              10
            </label>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              15
            </label>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              16
            </label>
          </div>
        </div>
      </div>

      <div className="mt-10 ml-10">
        <h3>3. What is the result of 3 + 4 x 2 ?</h3>

        <div className="ml-5">
          <div className="flex items-center space-x-2 mt-3">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              14
            </label>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              11
            </label>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              10
            </label>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              15
            </label>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              16
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
