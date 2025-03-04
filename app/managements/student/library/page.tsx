'use client'
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


import {
  CalendarCheck,
  Link,
  Search,
  User2Icon,
} from "lucide-react";
import { Badge } from '@/components/ui/badge'
import { Input } from "@/components/ui/input";
import CommonEmpptyData from "@/components/common/detail/CommonEmpptyData";
import { DialogHeader } from "@/components/ui/dialog";
import { useGetReferencesQuery } from "@/graphql/generated";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { format } from "date-fns";

export default function LibraryStudent() {
  const { data, loading, error } = useGetReferencesQuery();
  if (loading) {
    return (
      <p>Loading..</p>
    )
  }
  if (error) console.log(error)
  console.log(data);
  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center">
        <div className="bg-white rounded-lg">
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
        <div className="relative bg-white rounded-lg">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Cari E-Book" className="pl-8 w-full" />
        </div>
      </div>

      <div className="mt-10 flex gap-5 flex-col">
        {
          data?.references && data?.references.length > 0 ? data?.references.map((item,index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 rounded-md container py-5 gap-4 px-4 bg-white border-b border-slate-300">
              <div className="md:col-span-10 col-span-8 pl-4">
                  <Dialog>
                  <DialogTrigger>
                    <h1 className="text-base">
                      {item.title ?? "Referensi Unknown"}
                    </h1>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Detail Referensi</DialogTitle>
                      <DialogDescription>
                        <div className="flex flex-col">
                          <h1>{item.title} - {item.type}</h1>
                          <a href={item.url}>
                            {item.url}
                          </a>
                          <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                          <div className="text-gray-500 flex gap-3 my-3 p-0 justify-start">
                            {item?.tags?.map((tag, indextag) => (
                              <Badge key={indextag} className="bg-white border p-0 py-1 hover:bg-transparent px-3 shadow-none text-gray-600 border-gray-200">#{tag}</Badge> // Menampilkan setiap tag
                            ))}
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <div className="text-gray-500 flex gap-3 my-3 p-0 justify-start">
                  {item?.tags?.map((tag, indextag) => (
                    <Badge key={indextag} className="bg-white border p-0 py-1 hover:bg-transparent px-3 shadow-none text-gray-600 border-gray-200">{tag}</Badge> // Menampilkan setiap tag
                  ))}
                </div>

                <div className="md:w-4/12 w-8/12 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 border-r-2 border-slate-400">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1 grid justify-items-end">
                          <CalendarCheck className="h-4 w-4 text-slate-400" />
                        </div>

                        <div className="col-span-4">
                          <p className="text-sm text-slate-400">{format(item.createdAt, 'yyyy-MM-dd')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1 grid justify-items-end">
                          <User2Icon className="h-4 w-4 text-slate-400" />
                        </div>

                        <div className="col-span-4">
                          <p className="text-sm text-slate-400">{item.author.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-10">
                <div className="bg-blue-100 cursor-pointer rounded-md flex items-center justify-center py-2 px-4" onClick={() => window.open(item.url, '_blank')}>
                  <Link className="text-blue-400 mx-auto" />
                </div>
              </div>

            </div>
          )) : (
            <CommonEmpptyData />
          )
        }
      </div>
    </div>
  );
}
