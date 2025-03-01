"use client"
/* eslint-disable */
import React, { useState } from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Day, useCreateScheduleMutation, useGetSubjectsQuery } from '@/graphql/generated';
import { title } from 'process';
import Swal from 'sweetalert2';

interface Subject {
    day: string
    classroomId: string
}
const CommonAddSubject = ({ day, classroomId }: Subject) => {
    const { data, loading, error } = useGetSubjectsQuery() 
    if (error) {
        console.log(error)
        alert('error coba lain waktu')
    }
  const [open, setOpen] = useState(false);
  const [createSchedule] = useCreateScheduleMutation()
  const handleAddSubject = async (subjectId: string) => {
    try {
        const dayEnum = day as Day; 
        await createSchedule({
            variables: {
                data: {
                    day: dayEnum,
                    classroomId,
                    subjectId
                }
            }
        })
        
        Swal.fire({
            title: "Berhasil!",
            text: `Mapel berhasil ditambahkan dihari ${day}.`,
            icon: "success",
            timer: 2000,
            timerProgressBar: true,
        }).then(() => {
            location.reload(); // Refresh halaman untuk update data
        });
    } catch (error) {
        console.error('waduh error saat buat mapel ke jadwal')
        console.log(error)
    }
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
        <Button variant="outline" className="flex justify-start w-auto p-0 hover:bg-transparent shadow-none border-none">Tambah Pelajaran</Button>
        </PopoverTrigger>
        <PopoverContent className="w-60 p-0">
        <Command>
            <CommandInput placeholder="Cari mata pelajaran..." />
            <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Pilih mata pelajaran">
                {
                    data && data.subjects.map((item: any, index: number) => (
                        <CommandItem key={index} onSelect={() => handleAddSubject(item.id)}>{item.name}</CommandItem>
                    ))
                }
            </CommandGroup>
            <CommandSeparator />
            </CommandList>
        </Command>
        </PopoverContent>
    </Popover>
  )
}

export default CommonAddSubject