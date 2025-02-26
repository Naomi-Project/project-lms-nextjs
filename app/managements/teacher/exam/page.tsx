import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SubmissionTable from "./datatable";


export default function ExamTeacher() {
  return (
    <div className="min-h-screen">
      <div className="md:flex justify-between">
        <div className="">
          <Select>
            <SelectTrigger className="md:w-full w-5/12 bg-white rounded-lg">
              <SelectValue placeholder="Mata Pelajaran" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Mata Pelajaran</SelectLabel>
                <SelectItem value="matematika">Matematika</SelectItem>
                <SelectItem value="indonesia">Bahasa Indonesia</SelectItem>
                <SelectItem value="inggris">Bahasa Inggris</SelectItem>
                <SelectItem value="fisika">Fisika</SelectItem>
                <SelectItem value="kimia">Kimia</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4 md:mt-0 mt-3">
          <div className="col-span-1 bg-white rounded-lg">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Kelas Berapa" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Kelas</SelectLabel>
                  <SelectItem value="kelas7">Kelas 7</SelectItem>
                  <SelectItem value="kelas8">Kelas 8</SelectItem>
                  <SelectItem value="kelas9">Kelas 9</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-1 bg-white rounded-lg">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Jenis Kelas" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Kelas Jenis</SelectLabel>
                  <SelectItem value="kelas7a">Kelas 7A</SelectItem>
                  <SelectItem value="kelas7b">Kelas 7B</SelectItem>
                  <SelectItem value="kelas7c">Kelas 7C</SelectItem>
                  <SelectItem value="kelas7d">Kelas 7D</SelectItem>
                  <SelectItem value="kelas7e">Kelas 7E</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg bg-white mt-10 p-5">
        <SubmissionTable />
      </div>
    </div>
  );
}
