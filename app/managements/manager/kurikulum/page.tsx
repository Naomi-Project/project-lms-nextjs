import ButtonAdd from "@/components/ui/buttonAdd";




import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingDown, TrendingUp } from "lucide-react";
import CurriculumTable from "./datatable";


export default function KurikulumPage() {
  return (
    <div className="min-h-screen">


      <div className="border-2 rounded-lg bg-white p-5 mt-10">
        <Tabs defaultValue="aktif" className="w-full">
          <TabsList className="w-full flex justify-between bg-white">
            {/* direct to page */}
            <ButtonAdd endpoint="/managements/manager/kurikulum/create" />
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
          <CurriculumTable />
        </Tabs>
      </div>
    </div>
  );
}
