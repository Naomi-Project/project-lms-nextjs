"use client"
import ButtonDelete from '@/components/ui/buttonDelete';
/* eslint-disabled */
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { useDeleteMaterialMutation, useGetMaterialsQuery } from '@/src/graphql/generated';
import Link from "next/link";

const ListCardMateri = ({ canDelete = true, role = "student" }) => {
  const { data } = useGetMaterialsQuery()
  const materi = data?.materials || []
  console.log(data)
  const [deleteMaterial, {loading}] = useDeleteMaterialMutation()
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
    {
      materi && materi.map((data, index: number) => (
        <div className="col-span-1" key={index}>
          <Link href={`/managements/${role}/material/detail/${data.id}`}>
            <Card className="w-full h-[230px]">
              <CardHeader className="flex gap-3">
                <div className='flex justify-between items-center'>
                  <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                    {data.subject.name}
                  </CardTitle>
                  {canDelete && (
                    <ButtonDelete id={data.id} mutation={deleteMaterial} loading={loading} />
                  )}
                </div>
                <CardDescription className="font-bold text-base text-black">
                  {data.title}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                {/* <CardDescription className="flex gap-2">
                  <Calendar /> {' '}
                  <p>
                  Kumpulkan 3 hari lagi - 24 Okt 2025
                  </p>
                </CardDescription> */}
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