/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search } from "lucide-react";
import Image from "next/image";
import poster from "../../../../image/poster-materi.jpeg";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export default function MaterialTeacher() {
  return (
    <div className="min-h-screen">
      <div className="md:flex justify-between items-center">
        <div className="">
          <Link href="/managements/teacher/material-create">
            <Button className="gap-2">
              <Plus className="h-4 w-4" /> Buat Materi
            </Button>
          </Link>
        </div>

        <div className="md:mt-0 mt-3 grid grid-cols-3 gap-4">
          <div className="col-span-1 bg-white rounded-lg">
            <Select defaultValue="global">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="global">Global</SelectItem>
                <SelectItem value="matematika">Matematika</SelectItem>
                <SelectItem value="bahasa">Bahasa Indonesia</SelectItem>
                <SelectItem value="fisika">Fisika</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2 relative bg-white rounded-lg">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Cari Tugas" className="pl-8 w-full" />
          </div>
        </div>
      </div>

      <div className="md:grid grid-cols-4 gap-4 mt-10">
        <div className="col-span-1">
          <Link href="/managements/teacher/material-detail">
            <Card className="w-full">
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription className="font-bold text-base text-black">
                  Materi faktorial dan aljabar
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <div className="md:mt-0 mt-4 col-span-1">
          <Link href="/managements/teacher/material-detail">
            <Card className="w-full">
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription className="font-bold text-base text-black">
                  Materi faktorial dan aljabar
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <div className="md:mt-0 mt-4 col-span-1">
          <Link href="/managements/teacher/material-detail">
            <Card className="w-full">
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription className="font-bold text-base text-black">
                  Materi faktorial dan aljabar
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <div className="md:mt-0 mt-4 col-span-1">
          <Link href="/managements/teacher/material-detail">
            <Card className="w-full">
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription className="font-bold text-base text-black">
                  Materi faktorial dan aljabar
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>

      <div className="md:grid grid-cols-4 gap-4 md:mt-10 mt-4">
        <div className="col-span-1">
          <Link href="/managements/teacher/material-detail">
            <Card className="w-full">
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription className="font-bold text-base text-black">
                  Materi faktorial dan aljabar
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <div className="md:mt-0 mt-4 col-span-1">
          <Link href="/managements/teacher/material-detail">
            <Card className="w-full">
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription className="font-bold text-base text-black">
                  Materi faktorial dan aljabar
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <div className="md:mt-0 mt-4 col-span-1">
          <Link href="/managements/teacher/material-detail">
            <Card className="w-full">
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription className="font-bold text-base text-black">
                  Materi faktorial dan aljabar
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <div className="md:mt-0 mt-4 col-span-1">
          <Link href="/managements/teacher/material-detail">
            <Card className="w-full">
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription className="font-bold text-base text-black">
                  Materi faktorial dan aljabar
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
