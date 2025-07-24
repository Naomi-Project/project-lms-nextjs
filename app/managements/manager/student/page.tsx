'use client'
import ButtonAdd from "@/components/ui/buttonAdd";




import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useGetUsersQuery } from "@/graphql/generated";
import StudentTable from "./datatable";


export default function ManagerStudent() {

  // widget total guru dan murid
  const { data: userLoad } = useGetUsersQuery()
  const student = userLoad?.users?.filter((item) => item.role === 'STUDENT')
  const teacher = userLoad?.users?.filter((item) => item.role === 'TEACHER');
    
  // widget total siswa perempuan dan laki2
  const maleStudent = student?.filter((item) => item.gender === "MALE")
  const femaleStudent = student?.filter((item) => item.gender === "FEMALE")
  return (
    <div className="min-h-screen">
      <div className="md:grid grid-cols-2 gap-4 mt-6">
        <div className="col-span-1">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="col-span-1 bg-white p-2 rounded-lg">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 my-auto">
                  <p className="text-base">Total Siswa</p>
                </div>

                {/* <div className="col-span-1 rounded-lg p-2 border-green-500 bg-green-100 border-2">
                  <div className="grid grid-cols-2">
                    <div className="col-span-1">
                      <TrendingUp className="text-green-500" />
                    </div>

                    <div className="col-span-1 my-auto">
                      <p className="text-xs text-green-500">4.49%</p>
                    </div>
                  </div>
                </div> */}
              </div>

              <p className="text-3xl font-bold">{student?.length}</p>
              <p className="text-slate-400 text-sm">Siswa</p>

              {/* <p className="text-slate-400 text-sm mt-3">
                Naik lebih banyak 18 siswa dari tahun lalu
              </p> */}
            </div>

            <div className="col-span-1 bg-white p-2 rounded-lg">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 my-auto">
                  <p className="text-base">Total Guru</p>
                </div>

                {/* <div className="col-span-1 rounded-lg p-2 border-red-500 bg-red-100 border-2">
                  <div className="grid grid-cols-2">
                    <div className="col-span-1">
                      <TrendingDown className="text-red-500" />
                    </div>

                    <div className="col-span-1 my-auto">
                      <p className="text-xs text-red-500">2%</p>
                    </div>
                  </div>
                </div> */}
              </div>

              <p className="text-3xl font-bold">{teacher?.length}</p>
              <p className="text-slate-400 text-sm">Guru</p>

              {/* <p className="text-slate-400 text-sm mt-3">
                Turun lebih sedikit 12 siswa dari tahun lalu
              </p> */}
            </div>
          </div>
        </div>

        <div className="md:mt-0 mt-4 col-span-1">
          <div className="grid grid-rows-2 gap-4">
            <div className="row-span-1 bg-white p-2 rounded-lg">
              <p className="text-base">Siswa Laki-laki</p>

              <p className="font-bold text-3xl mt-2">{maleStudent?.length}</p>
            </div>

            <div className="row-span-1 bg-white p-2 rounded-lg">
              <p className="text-base">Siswa Perempuan</p>

              <p className="font-bold text-3xl mt-2">{femaleStudent?.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg bg-white p-5 mt-10">
        <Tabs defaultValue="aktif" className="w-full">
          <ButtonAdd endpoint="/managements/manager/student/create" />
          {/* <TabsList className="w-full flex justify-between bg-white">
            <div className="grid grid-cols-1 md:gap-4">
              <div className="col-span-1 ml-1">
                <div className="w-[132px] bg-slate-200 rounded-lg">
                  <TabsTrigger value="aktif">Aktif</TabsTrigger>
                  <TabsTrigger value="nonAktif">Non Aktif</TabsTrigger>
                </div>
              </div>
            </div>
          </TabsList> */}
          <TabsContent value="aktif" className=" rounded-lg mt-4">
            {/* new data table */}
              <StudentTable />
            {/* new data table */}
          </TabsContent>
          <TabsContent value="nonAktif" className=" rounded-lg mt-4">
            {/* new data table */}
              <StudentTable />
            {/* new data table */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
