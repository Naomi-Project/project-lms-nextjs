import { CommonDetailPage } from "@/components/common/detail/CommonDetailPage";
import type { CommonDetailSection, CommonSectionField } from "@/components/common/detail/CommonDetailPage";
interface Student {
    name: string
    address: string
    phone: number
}

export default function TestPage() {
    const data: Student = {
        name: "ahmad",
        address: "jakarta",
        phone: 123
    }
    const sections: CommonDetailSection<Student>[] = [
        {
            label: "Data Siswa",
            fields: [
                {
                    key: "name",
                    label: "Nama Lengkap",
                    emptyValue: "-",
                },
            ] satisfies CommonSectionField<Student>[],
        },
    ];    
    return (
        <CommonDetailPage
            title="Test"
            image=""
            data={data}
            sections={sections}
        ></CommonDetailPage>
    )
}
