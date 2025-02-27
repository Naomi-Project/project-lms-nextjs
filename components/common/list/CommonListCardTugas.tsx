"use client"
import ButtonDelete from '@/components/ui/buttonDelete';
/* eslint-disabled */
import { Card, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card'
import { useDeleteAssignmentMutation, useGetAssignmentsQuery } from '@/src/graphql/generated';
import { format } from 'date-fns';
import { Book, Calendar, User } from 'lucide-react';
import Link from "next/link";

const ListCardTugas = ({ canDelete = true, role = "student" }) => {
  // const { data: currentuser } = useUserPayloadQuery()
  const { data } = useGetAssignmentsQuery()
  const tugas = data?.assignments || []
  console.log(tugas)
  const [deleteAssignments, {loading}] = useDeleteAssignmentMutation()
  return (
    <div className="w-full flex flex-col mt-2 gap-4">
    {
      tugas && tugas.map((data, index: number) => (
        <div className="w-full" key={index}>
          <Link href={`/managements/${role}/tasks-detail/${data.id}`}>
            <Card className="w-full h-auto">
              <CardHeader className="flex gap-3">
                <div className='flex flex-wrap gap-4 justify-between items-center'>
                  <div className='flex flex-wrap gap-4'>
                    <CardTitle className={`fontligh text-xs py-1 w-auto px-3 rounded-full text-center font-bold ${data.submissions.length > 0 ? "bg-blue-100 text-blue-400" : "bg-red-100 text-red-400"}`}>
                      {data.submissions.length > 0 ? "Sudah Ada Yang Mengerjakan" : "Belum Dikerjakan"}
                    </CardTitle>
                    {
                      data.submissions.length > 0 ? (
                      <CardTitle className={`text-xs py-1 w-auto px-3 rounded-full text-center font-bold ${data.submissions.length > 0 ? "bg-blue-100 text-blue-400" : "bg-red-100 text-red-400"}`}>
                        {"Nilai Lihat Di Exam Guru sementara"}
                      </CardTitle>
                      ) : ""
                    }
                  </div>
                  {canDelete && (
                    <ButtonDelete id={data.id} mutation={deleteAssignments} loading={loading} />
                  )}
                </div>
                <CardDescription className="font-bold text-base text-black">
                  {data.title}
                </CardDescription>
              </CardHeader>
              <CardFooter className='flex flex-wrap gap-4'>
                <CardDescription className="flex items-end gap-2 pr-8 border-r">
                  <Calendar /> {' '}
                  <p>
                  {format(new Date(data.dueDate), "yyyy-MM-dd HH:mm:ss")}
                  </p>
                </CardDescription>
                <CardDescription className="flex items-end gap-2 pr-8 border-r">
                  <User /> {' '}
                  <p>
                  {"Pa Budi"}
                  </p>
                </CardDescription>
                <CardDescription className="flex gap-2">
                  <Book /> {' '}
                  <p>
                  {data.subject.name}
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

export default ListCardTugas