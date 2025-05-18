'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ButtonAdd from "@/components/ui/buttonAdd";
import ButtonDelete from "@/components/ui/buttonDelete";
import { Toggle } from "@/components/ui/toggle";
import { useDeleteFamilyMutation, useUpdateEnrollmentMutation } from "@/graphql/generated";
import { getValueByPath } from "@/lib/getter";
import { MoveLeft, Pencil, School } from "lucide-react";
import Image from "next/image";
import Swal from "sweetalert2";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CommonSectionField<T extends Record<any, any>> {
    key: keyof T & string;
    label: string;
    emptyValue?: string;
    dataFamily?: any | null;
}

export interface CommonDetailSection<T extends Record<any, any>> {
    label: string;
    fields: CommonSectionField<T>[];
}

export interface CommonDetailPageProps<T extends Record<any, any>> {
    title: string;
    enrollment_id?: number;
    image: string;
    name: string;
    jobdesk: string;
    profileIcon?: string;
    hideAddFamily?: boolean;
    epEdit?: string;
    epAddFamily?: string;
    data: T;
    sections: CommonDetailSection<T>[];
}

interface CheckoutItem {
  classroomId: string;
}

export function CommonDetailPage<T extends Record<any, any>>(
    props: CommonDetailPageProps<T>
) {
    const [deleteFamily] = useDeleteFamilyMutation()
    const [updateEnrollment] = useUpdateEnrollmentMutation()
    
    const pindahKelas = async () => {
        if (!selectedClassroomId) {
            Swal.fire({
            title: "Peringatan!",
            text: "Silakan pilih kelas tujuan terlebih dahulu",
            icon: "warning",
            });
            return;
        }

        try {
            const res = await updateEnrollment({
            variables: {
                data: {
                id: props?.data?.enrollment_id?.toString() ?? '',
                classroomId: selectedClassroomId, // Gunakan selectedClassroomId
                studentId: props.data.id,
                termId: props.data.term_id
                }
            }
            });

            if (res) {
            Swal.fire({
                title: "Berhasil!",
                text: "Anda Telah pindah ke kelas!",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer || result.isConfirmed) {
                location.reload()
                }
            });
            }
        } catch (e) {
            console.error(e)
            Swal.fire({
            title: "Error!",
            text: "Terjadi kesalahan saat memproses permintaan",
            icon: "error",
            });
        }
        }

    const [selectedClassroomId, setSelectedClassroomId] = useState<string>("");
    const handleClassroomSelect = (clsId: string) => {
        setSelectedClassroomId(clsId === selectedClassroomId ? "" : clsId);
    };

    const isChecked = (clsId: string) => {
        return clsId === selectedClassroomId;
    };
    
    return (
        <>
            <Toggle
                value="bold"
                aria-label="Toggle bold"
                className="bg-blue-100 border-blue-100 rounded-lg"
            >
                <p className="text-sm text-blue-500">{props.title}</p>
            </Toggle>
            <div className="border-2 rounded-lg flex flex-col justify-center md:row pt-5 pb-8 md:py-0 items-center relative mt-8 bg-white">
                <div className="grid md:grid-cols-12 grid-cols-4 gap-4 p-4">
                    <div className="md:col-span-1 col-span-1">
                        {
                            props.profileIcon ? (
                                <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-md">
                                    {
                                        props.profileIcon === 'school' ? <School /> : ''
                                    }
                                </div>
                            ) : (
                                <Image
                                    src={props.image || ""}
                                    width={100}
                                    height={100}
                                    alt="user"
                                    className="w-16 h-16 object-cover rounded-lg mx-auto"
                                    priority={true}
                                />
                            )
                        }
                    </div>

                    <div className="md:col-span-11 col-span-1 text-nowrap my-auto">
                        <h1 className="font-bold text-sm">{props.name}</h1>
                        <Badge className="bg-blue-100 text-primary shadow-none font-light">{props.jobdesk}</Badge>
                    </div>
                </div>
                <div className="md:absolute right-10 gap-3 px-4 flex flex-wrap">
                    {
                        props.jobdesk === 'Murid' ? (
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="bg-orange-500 hover:bg-orange-600 shadow-none text-white"><MoveLeft /> Pindah Kelas</Button>
                                    </DialogTrigger>
                                    <DialogContent className="w-[320px] rounded-lg md:w-[425px] h-[400px] md:h-[500px] overflow-y-scroll">
                                    <DialogHeader>
                                        <DialogTitle>Pindah Kelas</DialogTitle>
                                        <DialogDescription>
                                        Silakan Pilih kelas yang dituju
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex flex-col gap-4 py-4">
                                        {props.data.classrooms.length > 0 ? props.data.classrooms.map((sc: any, index: number) => (
                                            <div className=" border py-5 px-3 rounded-md border-gray-300 flex items-start space-x-2" key={index}>
                                                <Checkbox 
                                                id={`class-${sc.id}`}
                                                checked={isChecked(sc.id)}
                                                onCheckedChange={() => handleClassroomSelect(sc.id)}
                                                />
                                                <div className="flex flex-col gap-1">
                                                <label
                                                    htmlFor="terms"
                                                    className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    {sc.name}
                                                </label>
                                                <label className="text-sm text-gray-500">
                                                    Terdapat {sc.students.length} Siswa/i
                                                </label>
                        
                                                </div>
                                            </div>
                                        )) : (
                                            <div className="w-full text- py-5">
                                            Belum ada tagihan.
                                            </div>
                                        )}
                                    </div>
                                    <DialogFooter>
                                        <Button type="button" onClick={() => pindahKelas()} className="w-full">Continue</Button>
                                    </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                        ) : ''
                    }
                    <Button className="bg-blue-500 shadow-none text-white" onClick={() => window.location.href = props.epEdit ?? ''}><Pencil /> Edit</Button>
                    <ButtonAdd endpoint={props.epAddFamily || "/managements/teacher/profile/families/create"} label="Tambah Keluarga" className={`bg-green-500 text-white shadow-none hover:bg-green-600 ${props.hideAddFamily ? 'hidden' : ''}`} />
                </div>
            </div>
            <div>
                <div className="border-2 rounded-lg bg-white p-5 mt-10">
                    <div className="md:grid grid-cols-1 gap-4 mt-0">
                        {props.sections.map((section, index) => {
                            if (section.label === "Keluarga Siswa") {
                                return (
                                <div key={index} className="mt-0">
                                    <div className=" border-dashed border-gray-200 pb-6">
                                        <h2 className="text-lg font-bold text-gray-900 mb-4">
                                            Data {section.label}
                                        </h2>
                                        <div>
                                        {
                                            section.fields.map((field) => (
                                                <div key={field.key}>
                                                <ul className="list-disc list-inside ">
                                                    {Array.isArray(field.dataFamily) && field.dataFamily.length > 0 ? (
                                                    field.dataFamily.map((familyMember: any, idx: number) => (
                                                        <li key={idx} className="text-gray-900 my-3">
                                                          <span className="font-medium">{familyMember.name}</span> - 
                                                          <span className="text-gray-500"> {familyMember.relationship} </span>
                                                          <span className="text-gray-700 mr-5">({familyMember.contact})</span>
                                                          <ButtonDelete id={familyMember.id} hideLable noBg customClassNoBg="bg-white text-red-600 shadow-none hover:text-red-700 hover:bg-white" mutation={deleteFamily}  />
                                                        </li>
                                                    ))
                                                    ) : (
                                                    <p className="text-gray-500">-</p>
                                                    )}
                                                </ul>
                                                </div>
                                            ))
                                        }
                                        </div>
                                    </div>
                                </div>
                                )
                            } else if (section.label === "Keluarga Guru") {
                                return (
                                <div key={index} className="mt-0">
                                    <div className=" border-dashed border-gray-200 pb-6">
                                        <h2 className="text-lg font-bold text-gray-900 mb-4">
                                            Data {section.label}
                                        </h2>
                                        <div>
                                        {
                                            section.fields.map((field) => (
                                                <div key={field.key}>
                                                <ul className="list-disc list-inside ">
                                                    {Array.isArray(field.dataFamily) && field.dataFamily.length > 0 ? (
                                                    field.dataFamily.map((familyMember: any, idx: number) => (
                                                        <li key={idx} className="text-gray-900 my-3">
                                                          <span className="font-medium">{familyMember.name}</span> - 
                                                          <span className="text-gray-500"> {familyMember.relationship} </span>
                                                          <span className="text-gray-700 mr-5">({familyMember.contact})</span>
                                                          <ButtonDelete id={familyMember.id} hideLable noBg customClassNoBg="bg-white text-red-600 shadow-none hover:text-red-700 hover:bg-white" mutation={deleteFamily}  />
                                                        </li>
                                                    ))
                                                    ) : (
                                                    <p className="text-gray-500">-</p>
                                                    )}
                                                </ul>
                                                </div>
                                            ))
                                        }
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                            return (
                            <div key={index} className="mt-0">
                                <div className=" border-dashed border-gray-200 pb-6">
                                    <h2 className="text-lg font-bold text-gray-900 mb-4">
                                        Data {section.label}
                                    </h2>
                                    <dl
                                        className={`grid gap-6 ${Object.keys(section.fields).length >= 4
                                            ? "grid-cols-1 md:grid-cols-4"
                                            : Object.keys(section.fields).length >= 3
                                                ? "lg:grid-cols-3"
                                                : Object.keys(section.fields).length >= 2
                                                    ? "sm:grid-cols-2"
                                                    : "grid-cols-1"
                                            }`}
                                    >
                                        {section.fields.map((field) => (
                                            <div key={field.key} className="space-y-1">
                                                <dt className="text-sm text-gray-500">{field.label}</dt>
                                                <dd className="text-base font-medium text-gray-900">
                                                    {getValueByPath(
                                                        props.data,
                                                        field.key,
                                                        field.emptyValue || "-"
                                                    )}
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
        </>
    );
}
