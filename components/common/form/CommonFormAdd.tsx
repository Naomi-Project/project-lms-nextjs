"use client";
/* eslint-disable */
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
// import { Role, Gender } from "@/graphql/generated";
import { MutationFunction } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { z, ZodSchema } from "zod";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import CommonEditor from "./CommonEditor";
import CommonSoalBuilder from "./CommonSoalBuilder";
import CommonSubmission from "./CommonSubmission";
import { PaymentMethod, PaymentStatus, useCreateEnrollmentMutation, useCreateSubmissionMutation, useDeleteClassroomMutation } from "@/graphql/generated";
import CommonDatePicker from "./CommonDatePicker";
import CommonDateTimePicker from "./CommonDateTimePicker";
import CommonSelectMultiple from "./CommonSelectMultiple";
import Swal from "sweetalert2";
import { setTimeout } from "timers";
import SelectMultiple2 from "./CommonSelectMultiple2";
import { usePathname, useRouter } from "next/navigation";
import CommonDatePicker2 from "./CommonDatePicker2";
import CommonFileUpload from "./CommonFileUpload";

export interface CommonFormAddField<T extends Record<any, any>> {
  key: keyof T & string;
  label: string;
  emptyValue?: string;
  class?: string;
  defaultValue?: string;
  type?: string;
  hidden?: boolean;
  mdValue?: string;
  setMdValue?: any;
  dataSelect?: Array<{ label: string; value: string | number }>;
  dataRadio?: Array<{ label: string; value: string | number }>;
  disabled?: boolean;
  placeholder?: string;
}
export interface CommonFormAddSection<T extends Record<any, any>> {
  fields: CommonFormAddField<T>[][];
}

export interface CommonFormAddProps<T extends Record<any, any>> {
  lable: string;
  title: string;
  method: string;
  isCreateClass?: boolean | undefined;
  isCreateAssignment?: boolean | undefined;
  isCreateReference?: boolean | undefined;
  isCreateAnnouncementDynamic?: boolean | undefined;
  isRelation?: boolean | undefined;
  relation1?: string | undefined;
  valuerRelation1?: string | undefined;
  buttonTextSubmit?: string | undefined;
  hideBackButton?: boolean;
  isCreateSpp?: boolean;
  isUseDefaultMutation?: boolean;
  isInputTags?: boolean;
  schema: ZodSchema<T>;
  mutation: MutationFunction<any, any>;
  dataDefault?: any;
  dataMutation: any;
  isSubmission?: boolean;
  setDataMutation: React.Dispatch<React.SetStateAction<any>>;
  sections: CommonFormAddSection<T>[];
}

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

export function CommonFormAdd<T extends Record<any, any>>(
  props: CommonFormAddProps<T>
) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const form = useForm<z.infer<typeof props.schema>>({
    resolver: zodResolver(props.schema),
    defaultValues: props.dataMutation || {},
  });
  const formTypeValue = useWatch({
    control: form.control,
    name: 'type' as any,
  });

  useEffect(() => {
    form.reset(props.dataMutation);
  }, [props.dataMutation, form.reset]);
 
  const onSubmit = async (values: z.infer<typeof props.schema>) => {
    setIsSubmit(true)
    if (props.isCreateAssignment == true) {
      // return
        try {
            // Pastikan extendedData adalah string JSON dan parse ke objek
            const extendedData = JSON.parse(values.extendedData);
            
            // Cek apakah ada soal yang tidak memiliki correctAnswer
            const hasEmptyCorrectAnswer = extendedData.some((item: any) => !item.correctAnswer);
    
            if (hasEmptyCorrectAnswer) {
                Toast.fire({
                  icon: "error",
                  title: "Terdapat soal yang belum memiliki jawaban benar! Harap lengkapi sebelum menyimpan!"
                });
                setIsSubmit(false)
                return; // Hentikan proses jika ada error
            }
    
            executeMutation(values); // Jalankan jika valid
            return
        } catch (error) {
            console.error("Error parsing extendedData:", error);
            alert("Terjadi kesalahan dalam membaca data soal. Pastikan format valid.");
        }
    }  
    if (props.isCreateSpp == true) {
      const newData = {...values, amount: parseFloat(values.amount)}
      executeMutation(newData)
      return
    }
    if (props.isInputTags == true) {
      if (typeof (values as any).tags === "string") {
        (values as any).tags = (values as any).tags.split(",").map((tag: any) => tag.trim());
      }

      if (values.type === 'BOOK' && values.file) {
         const fileToUpload = values.file?.[0];
        const formData = new FormData();
        formData.append('file', fileToUpload);
        const saveFile = await fetch(`${process.env.NEXT_PUBLIC_BE}/upload`, {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          },
          body: formData,
        })

        if (!saveFile.ok) {
          const errorData = await saveFile.json();
          throw new Error(`Upload failed: ${errorData.message || saveFile.statusText}`);
        }

        const uploadResult = await saveFile.json();
        console.log("File uploaded successfully:", uploadResult);
        const newData1 = {...values, tags: (values as any).tags, url: "https://staging.zerobase.tech/" + uploadResult.filePath}
        const { file, ...cleanData } = newData1
        executeMutation(cleanData)
        return
      }
    
      const newData = {...values, tags: (values as any).tags}
      executeMutation(newData)
      return;
    }
    if (props.isCreateClass == true) {
        filledStudentToClass(values)
        return
    }
    if (props.isRelation == true) {
      if (props.valuerRelation1 === "nisn") {
        const newData = {...values, username: String(values.nisn) ?? ""}
        executeMutation(newData)
        return
      } else if (props.valuerRelation1 === "nuptk") {
        const newData = {...values, nuptk: String(values.username) ?? ""}
        executeMutation(newData)
        return
      }
    }
    if (props.isSubmission == true) {
      const dataSoal = JSON.parse(values.extendedData)
      const soalLength = dataSoal.length
      
      const correctAnswer = dataSoal.filter((item: any) => item.correctAnswer === item.userAnswer).length
  
      const resultScore = (correctAnswer / soalLength) * 100
      const finalScore = parseFloat(resultScore.toFixed(0));

      submitTaskMutation(values, finalScore)

      return
    }
    
    if (props.isCreateAnnouncementDynamic == true) {
      console.log(values.schoolIds.includes('ALL_CABANG'))
      if (values.schoolIds[0] === 'ALL_CABANG' && values.schoolIds.length == 1) {
        const newValues = {...values, schoolIds: []}
        executeMutation(newValues)
      } else if (values.schoolIds.includes('ALL_CABANG') && values.schoolIds.length > 1) {
        Swal.fire({
          title: "Gagal !",
          text: "Jika memilih semua cabang, jangan memilih cabang yang lain.",
          icon: "warning",
          timer: 2000,
          timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer || result.isConfirmed) {
            location.reload()
          }
        });
      }
      executeMutation(values)
      return
    }
    
    // kondisi ini dipake jika datamutation default itu isinya sama dengan values
    if (props.isUseDefaultMutation == true) {
      executeMutation(values)
      return
    }
    props.setDataMutation((prevState: typeof props.dataMutation) => {
      const updatedData = {
        ...prevState, // Menyalin data lama agar tidak hilang
        ...values, // Mengupdate dengan data baru
      };
      // Jalankan executeMutation langsung setelah state diperbarui
      executeMutation(updatedData);

      return updatedData;
    });
  };
  
   // if mutation class
  const [createEnrollment] = useCreateEnrollmentMutation();
  const [deleteClassroom] = useDeleteClassroomMutation();

  const filledStudentToClass = async (values: any) => {
    // console.log(values)
    // return
    try {
      const classroomResponse = await props.mutation({
        variables: {
          data: {
            name: values.name,
            gradeId: values.gradeId,
            guardianId: values.guardianId,
            schoolId: values.schoolId,
          },
        },
      });
  
      // 2️⃣ Ambil `classroomId` dari hasil mutasi
      const resClass = classroomResponse?.data?.createClassroom;
      if (!resClass?.id) {
        throw new Error("Gagal mendapatkan ID kelas.");
      }
      
      // 3️⃣ Looping dan daftarkan setiap siswa ke kelas
      for (const studentId of values.students) {
        try {
          await createEnrollment({
            variables: {
              data: {
                studentId,
                classroomId: resClass.id,
                termId: values.termId,
                pricingId: values.pricingId,
              },
            },
          });
        } catch (enrollmentError) {
          console.error("Enrollment gagal:", enrollmentError);
  
          // 3️⃣ Hapus kelas jika salah satu enrollment gagal
          await deleteClassroom({
            variables: {
              data: resClass.id.toString() ?? '',
            },
          });
  
          throw new Error("Enrollment gagal. Kelas dibatalkan.");
        }
      }

      Swal.fire({
        title: "Berhasil Dibuat!",
        text: "Data telah berhasil dibuat! silakan reload halaman.",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer || result.isConfirmed) {
          handleCreateSuccess()
        }
      });
    } catch (err: any) {
      console.error("Error creating data:", err);
      setIsSubmit(false)
      Swal.fire({
        title: "Gagal Membuat kelas",
        text: err.message,
        icon: "error",
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload()
        }
      });
    }
  };
  
  // if mutation submission of work
  const [createSubmission] = useCreateSubmissionMutation();

  const submitTaskMutation = async (dataMut: any, score: number) => {
    try {
      const response = await createSubmission({
        variables: {
          data: dataMut,
        },
      });
      if (response) {
      const submissionId = response?.data?.createSubmission?.id;
      if (!submissionId) {
        setIsSubmit(false)
        throw new Error("Submission ID tidak ditemukan!");
      }
      await executeMutation({
          submissionId: submissionId,
          value: score,
          notes: 'bagus cek2'
        })
      }
      Swal.fire({
        title: "Berhasil Submit!",
        text: "Berhasil Merekam Jawaban Tugas ini! silakan reload halaman.",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          handleCreateSuccess()
        }
      });
    } catch (err) {
      console.error("Error creating data:", err);
      setIsSubmit(false)
    }
  };

  const executeMutation = async (dataMut: any) => {
    // return
    try {
      const response = await props.mutation({
        variables: {
          data: dataMut,
        },
      });
      if (response) {
        Swal.fire({
          title: "Berhasil Dibuat!",
          text: "Data telah berhasil dibuat!",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer || result.isConfirmed) {
            handleCreateSuccess()
          }
        });
      }
    } catch (err) {
      setIsSubmit(false)
      console.error("Error creating data:", err);
      Swal.fire({
        title: "Gagal!",
        text: "Data tidak berhasil dibuat, coba lagi nanti!",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload()
        }
      });
    }
  };

  const handleCreateSuccess = () => {
      // Ambil path sebelumnya dengan menghapus bagian terakhir dari path
      // const previousPath = pathname.split("/").slice(0, -1).join("/");
      history.back()
      // Navigasi ke halaman sebelumnya
      // window.location.href = previousPath;
  };
  return (
    <>
      <Toggle
        value="bold"
        aria-label="Toggle bold"
        onClick={() => history.back()}
        className={`bg-blue-100 text-blue-500 px-2 border-blue-100 rounded-lg ${props.hideBackButton ? "hidden" : ""}`}
      >
        <ArrowLeft />
        <p className="text-sm pr-2">Kembali</p>
      </Toggle>
      <div className="w-full h-auto">
        <div className={`w-full flex flex-col mb-5 bg-white rounded-lg ${props.isSubmission ? ""  : "mt-8 border"}`}>
          <div className={`px-4 py-2`}>
            <h1>{props.title}</h1>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex py-4 px-4  flex-wrap w-full"
            >
              {props.sections.map((section, index) => (
                <div key={index} className="w-full ">
                  {section.fields.map((fieldGroup, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="w-full flex flex-wrap"
                    >
                      {fieldGroup.map((dataField, indexField) => (
                        <div
                          className={`sm:w-full pr-4 ${
                            dataField.class || "w-full md:w-1/2 lg:w-1/2"
                          }`}
                          key={indexField}
                        >
                          {dataField.type === "select" ? (
                            <FormField
                              control={form.control}
                              name={dataField.key as any}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{dataField.label}</FormLabel>
                                  <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    disabled={dataField.disabled || false}
                                  >
                                    <FormControl>
                                      <SelectTrigger className="w-full">
                                        <SelectValue
                                          placeholder={dataField.placeholder}
                                        />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {dataField.dataSelect?.map(
                                        (dataS: any, indexSelect: number) => (
                                          <SelectItem
                                            value={dataS.value}
                                            key={indexSelect}
                                          >
                                            {dataS.label}
                                          </SelectItem>
                                        )
                                      )}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          ) : dataField.type === "radio" ? (
                            <FormField
                              control={form.control}
                              name={dataField.key as any}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{dataField.label}</FormLabel>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                  >
                                    {dataField.dataRadio?.map(
                                      (dataS: any, indexSelect: number) => (
                                        <div
                                          key={indexSelect}
                                          className="flex items-center space-x-2"
                                        >
                                          <RadioGroupItem
                                            value={dataS.value}
                                            id={dataS.value}
                                          />
                                          <Label htmlFor={dataS.value}>
                                            {dataS.label}
                                          </Label>
                                        </div>
                                      )
                                    )}
                                  </RadioGroup>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          ) : dataField.type === "select_multiple" ? (
                            <CommonSelectMultiple dataSelect={dataField.dataSelect ?? []} name={String(dataField.key)} label={dataField.label} placeholder={dataField.placeholder} />
                          ) : dataField.type === "select_multiple2" ? (
                            <SelectMultiple2 name={String(dataField.key)} label={dataField.label} options={dataField.dataSelect ?? []} />
                          ) : dataField.type === "date_picker" ? (
                            // <CommonDatePicker name={String(dataField.key)} label={dataField.label} />
                            <CommonDatePicker2 name={String(dataField.key)} label={dataField.label} />
                          ) : dataField.type === "file_upload_ref" ? (
                            <CommonFileUpload className={formTypeValue !== 'BOOK' ? 'hidden' : ''} name={String(dataField.key)} label={dataField.label} />
                          ) : dataField.type === "date_time" ? (
                            <CommonDateTimePicker name={String(dataField.key)} label={dataField.label} />
                          ) : dataField.type === "md" ? (
                            <CommonEditor name={String(dataField.key)} label={dataField.label} placeholder={dataField.placeholder} />
                          ) : dataField.type === "soal_builder" ? (
                            <CommonSoalBuilder name={String(dataField.key)} label={dataField.label} placeholder={dataField.placeholder} />
                          ) : dataField.type === "submission" ? (
                            <CommonSubmission dataDefault={props.dataDefault ?? ""} name={String(dataField.key)} key={String(dataField.key)} />
                          ) : dataField.type === "url_input_ref" ? (
                            <FormField
                              control={form.control}
                              name={dataField.key as any}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className={dataField.hidden && dataField.hidden == true ? "hidden" : ""}>{dataField.label}</FormLabel>
                                  <FormControl>
                                    <Input
                                      className={dataField.hidden && dataField.hidden == true ? "hidden" : ""}
                                      type={dataField.type || "text"}
                                      disabled={formTypeValue === 'BOOK' ? true : false}
                                      placeholder={formTypeValue === 'BOOK' ? "Url otomatis terisi" : dataField.placeholder}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormDescription />
                                  <FormMessage className={dataField.hidden && dataField.hidden == true ? "hidden" : ""} />
                                </FormItem>
                              )}
                            />
                          ) : (
                            <FormField
                              control={form.control}
                              name={dataField.key as any}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className={dataField.hidden && dataField.hidden == true ? "hidden" : ""}>{dataField.label}</FormLabel>
                                  <FormControl>
                                    <Input
                                      className={dataField.hidden && dataField.hidden == true ? "hidden" : ""}
                                      type={dataField.type || "text"}
                                      disabled={dataField.disabled || false}
                                      placeholder={dataField.placeholder || ""}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormDescription />
                                  <FormMessage className={dataField.hidden && dataField.hidden == true ? "hidden" : ""} />
                                </FormItem>
                              )}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
              <Button type="submit" className="mt-3" disabled={isSubmit}>{isSubmit ? (
                <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Creating...</span>
              </div>
              ) : props.buttonTextSubmit ? props.buttonTextSubmit : "Create"}</Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
