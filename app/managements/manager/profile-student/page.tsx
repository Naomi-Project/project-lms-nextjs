import React from "react";
import { CommonDetailPage } from "@/components/common/detail/CommonDetailProfile";
import type { CommonDetailSection, CommonSectionField } from "@/components/common/detail/CommonDetailProfile";
import user from "@/image/user.jpeg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CircleAlert, Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Student {
  name: string
  address: string
  nisn: number
  phone: number
}

export default function ManagerProfileStudent() {
   const data: Student = {
    name: "ahmad",
    address: "jakarta",
    nisn: 328738,
    phone: 123,
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
        {
          key: "nisn",
          label: "NISN",
          emptyValue: "-",
        },
        {
          key: "address",
          label: "Alamat",
          emptyValue: "-",
        },
        {
          key: "phone",
          label: "Telepon",
          emptyValue: "-",
        },
      ] satisfies CommonSectionField<Student>[],
    },
  ];
  return (
    <div className="min-h-screen">
      <CommonDetailPage
        title="Student Profile"
        name={data.name}
        jobdesk={"Student"}
        image={user.src}
        data={data}
        sections={sections}
      ></CommonDetailPage>
    </div>
  );
}
