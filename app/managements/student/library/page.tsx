"use client";
/* eslint-disable */
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarCheck, Link, Search, User2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useDeleteReferenceMutation, useGetReferencesQuery } from "@/graphql/generated";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import CommonEmpptyData from "@/components/common/detail/CommonEmpptyData";

export default function LibraryStudent() {
  const { data, loading, error } = useGetReferencesQuery();
  const [deleteReference] = useDeleteReferenceMutation();

  // ✅ State untuk filter
  const [selectedCategory, setSelectedCategory] = useState<string>("global");
  const [searchTerm, setSearchTerm] = useState<string>("");

  if (loading) return <p>Loading..</p>;

  // ✅ Data untuk kategori filter
  const categories = ["global"];

  // ✅ Filter referensi berdasarkan kategori dan pencarian
  const filteredReferences = data?.references.filter((item) => {
    // Cek filter kategori
    const categoryMatch = selectedCategory === "global" || item.tags?.includes(selectedCategory);

    // Cek filter pencarian berdasarkan judul atau author
    const searchMatch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
      // item?.author?.name.toLowerCase().includes(searchTerm.toLowerCase());

    return item.title !== '-' && categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen">
      <div className="md:flex justify-end items-center">

        {/* ✅ Filter Kategori & Pencarian */}
        <div className="grid grid-cols-3 gap-4 md:mt-0 mt-3">
          <div className="col-span-1 bg-white rounded-lg">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2 relative bg-white rounded-lg">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Cari E-Book"
              className="pl-8 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* ✅ Daftar Referensi dengan Filter */}
      <div className="mt-10 flex gap-5 flex-col">
        {filteredReferences && filteredReferences.length > 0 ? (
          filteredReferences.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 md:grid-cols-12 rounded-md container pr-20 py-5 gap-4 px-4 bg-white border-b border-slate-300"
            >
              <div className="md:col-span-10 col-span-8 pl-4">
                <Dialog>
                  <DialogTrigger>
                    <h1 className="text-base">{item.title ?? "Referensi Unknown"}</h1>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{item.title} - {item.type}</DialogTitle>
                      <DialogDescription>
                        <div className="flex flex-col">
                          <a href={item.url}>{item.url}</a>
                          <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                          <div className="text-gray-500 flex gap-3 my-3 p-0 justify-start">
                            {item?.tags && item?.tags?.length > 0 && item.tags[0] !== '' ? item?.tags?.map((tag, indextag) => (
                              <Badge
                                key={indextag}
                                className="bg-white border p-0 py-1 hover:bg-transparent px-3 shadow-none text-gray-600 border-gray-200"
                              >
                                #{tag}
                              </Badge>
                            )) : ''}
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <div className="text-gray-500 flex gap-3 my-3 p-0 justify-start">
                  {item?.tags && item?.tags?.length > 0 && item.tags[0] !== '' ? item?.tags?.map((tag, indextag) => (
                    <Badge
                      key={indextag}
                      className="bg-white border p-0 py-1 hover:bg-transparent px-3 shadow-none text-gray-600 border-gray-200"
                    >
                      {tag}
                    </Badge>
                  )) : ''}
                </div>

                <div className="md:w-4/12 w-full mt-4">
                  <div className="grid md:grid-cols-2 grid-cols-2 gap-4">
                    <div className="col-span-1 border-r-2 border-slate-400">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1 grid justify-items-end">
                          <CalendarCheck className="h-4 w-4 text-slate-400" />
                        </div>
                        <div className="col-span-4">
                          <p className="text-sm text-slate-400">{format(item.createdAt, "yyyy-MM-dd")}</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-1 grid justify-items-end">
                          <User2Icon className="h-4 w-4 text-slate-400" />
                        </div>
                        <div className="col-span-4">
                          <p className="text-sm text-nowrap text-slate-400">{item.author.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-10">
                <div className="bg-blue-100 cursor-pointer rounded-md flex items-center justify-center py-2 px-4" onClick={() => window.open(item.url, "_blank")}>
                  <Link className="text-blue-400 mx-auto" />
                </div>
                {/* <div className="bg-red-100 cursor-pointer rounded-md flex items-center justify-center py-2 px-4">
                  <ButtonDelete hideLable id={item.id} mutation={deleteReference} noBg customClassNoBg="shadow-none bg-transparent hover:bg-transparent text-red-400 p-0 w-full" />
                </div> */}
              </div>
            </div>
          ))
        ) : (
          <CommonEmpptyData />
        )}
      </div>
    </div>
  );
}
