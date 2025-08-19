"use client"
import ButtonAdd from "@/components/ui/buttonAdd";
import { Tabs, TabsList } from "@/components/ui/tabs";
import SchoolTable from "./datatable";
import ButtonExport from "@/components/ui/buttonExport";
import { useUserPayloadQuery, useGetUsersQuery } from "@/graphql/generated";


export default function SekolahPage() {
  const { data: userLogin, loading } = useUserPayloadQuery()
  const { data: allUser, loading: loadAllUser } = useGetUsersQuery()
  console.log(userLogin)
  console.log(allUser)
  return (
    <div className="min-h-screen">
      <div className="border-2 rounded-lg bg-white p-5 mt-10">
        <Tabs defaultValue="aktif" className="w-full">
          <TabsList className="w-full flex justify-between bg-white">
            {/* direct to page */}
            <div className="flex gap-4">
              <ButtonAdd endpoint="/managements/admin/sekolah/create" />
              <ButtonExport label="Export Data Sekolah" className="bg-orange-500 hover:bg-orange-600" endpoint="https://api.lmsyapendik.com/exports/schools" />
            </div>
            {/* direct to page */}
            <div className="grid grid-cols-1 md:gap-4">
              <div className="col-span-1 ml-1">
                <div className="w-[132px] bg-slate-200 rounded-lg">
                </div>
              </div>

              {/* <div className="col-span-1 relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Cari Siswa" className="pl-8 w-full" />
              </div> */}
            </div>
          </TabsList>
          <SchoolTable />
        </Tabs>
      </div>
    </div>
  );
}
