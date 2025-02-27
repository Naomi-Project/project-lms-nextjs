"use client"
import ButtonDelete from '@/components/ui/buttonDelete';
/* eslint-disabled */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { useDeleteMaterialMutation, useGetMaterialsQuery } from '@/graphql/generated';
import Link from "next/link";
import { Calendar, EllipsisVertical } from 'lucide-react';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';


interface ListTypes {
  canDelete?: boolean
  role?: string
  search?: string
  filter?: string
}

const ListCardMateri = ({ canDelete = true, role = "student", search, filter }: ListTypes) => {
  const { data } = useGetMaterialsQuery()
  const rawData = data?.materials || []
  const [materi, setMateri] = useState(rawData)
  
  useEffect(() => {
    if (search && search.trim() !== "") {
      setMateri(rawData.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())))
    } else {
      setMateri(rawData)
    }
  }, [search, rawData])
  useEffect(() => {
    if (filter && filter.trim() !== "") {
      setMateri(rawData.filter((item) => item.subject.id.includes(filter.toLowerCase())))
    } else {
      setMateri(rawData)
    }
  }, [filter, rawData])
  
  const [deleteMaterial, {loading}] = useDeleteMaterialMutation()
  return (
    <div className="grid md:grid-cols-4 lg:grid-cols-2 gap-4">
    {
      materi && materi.map((data, index: number) => (
        <div className="col-span-1" key={index}>
          <Link href={`/managements/${role}/material/detail/${data.id}`}>
            <Card className="w-full h-[230px] sm:w-full">
              <CardHeader className="flex gap-3">
                <div className='flex justify-between items-center'>
                  <div className='w-full flex gap-3'>
                    <CardTitle className="font-bold text-xs py-2 px-4 bg-orange-100 w-auto rounded-md text-center text-orange-400">
                      {data.subject.name}
                    </CardTitle>
                    <CardTitle className="font-bold text-xs py-2 px-4 bg-blue-100 w-auto rounded-md text-center text-blue-400">
                      Kurikulum {data.curriculum.name}
                    </CardTitle>
                  </div>
                  {canDelete && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="">
                          <EllipsisVertical className="cursor-pointer" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuItem className='hover:bg-red-100'>
                          <ButtonDelete noBg={true} id={data.id} customClassNoBg='bg-transparent text-white bg-red-500 w-full hover:bg-red-600 shadow-none' mutation={deleteMaterial} loading={loading} />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
                <CardDescription className="font-bold text-base text-black">
                  {data.title}
                </CardDescription>
                <CardDescription className="font-bold text-base text-black">
                  {/* {data.content} */}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <CardDescription className="flex items-end gap-2">
                  <Calendar className='text-primary' /> {' '}
                  <p>
                  Dibuat pada {format(data.createdAt, 'yyyy-mm-dd')}
                  </p>
                </CardDescription>
              </CardFooter>
            </Card>
          </Link>
        </div>
      ))
    }
    </div>
  )
}

export default ListCardMateri