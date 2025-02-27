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
import { useForm } from "react-hook-form";
import { z, ZodSchema } from "zod";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import CommonEditor from "./CommonEditor";
import CommonSoalBuilder from "./CommonSoalBuilder";
import CommonSubmission from "./CommonSubmission";
import { useCreateSubmissionMutation } from "@/src/graphql/generated";
import CommonDatePicker from "./CommonDatePicker";
import CommonDateTimePicker from "./CommonDateTimePicker";

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
  buttonTextSubmit?: string | undefined;
  hideBackButton?: boolean;
  isUseDefaultMutation?: boolean;
  schema: ZodSchema<T>;
  mutation: MutationFunction<any, any>;
  dataDefault?: any;
  dataMutation: any;
  isSubmission?: boolean;
  setDataMutation: React.Dispatch<React.SetStateAction<any>>;
  sections: CommonFormAddSection<T>[];
}

export function CommonFormAdd<T extends Record<any, any>>(
  props: CommonFormAddProps<T>
) {
  const form = useForm<z.infer<typeof props.schema>>({
    resolver: zodResolver(props.schema),
    defaultValues: props.dataMutation || {},
  });

  useEffect(() => {
    form.reset(props.dataMutation);
  }, [props.dataMutation, form.reset]);
  
  const onSubmit = async (values: z.infer<typeof props.schema>) => {
    // console.log(values)
    // return
    if (props.isSubmission == true) {
      alert('tunggu sebentar.. (klik ok utk melanjutkan proses)')
      const dataSoal = JSON.parse(values.extendedData)
      const soalLength = dataSoal.length
      
      const correctAnswer = dataSoal.filter((item: any) => item.correctAnswer === item.userAnswer).length
  
      const resultScore = (correctAnswer / soalLength) * 100
      const finalScore = parseFloat(resultScore.toFixed(0));

      submitTaskMutation(values, finalScore)

      return
    }
    // console.log(values)
    // return
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
      console.log(updatedData)
      // Jalankan executeMutation langsung setelah state diperbarui
      executeMutation(updatedData);

      return updatedData;
    });
  };
  
  const [createSubmission] = useCreateSubmissionMutation();

  const submitTaskMutation = async (dataMut: any, score: number) => {
    // console.log("nilai lu ", score)
    // return
    try {
      const response = await createSubmission({
        variables: {
          data: dataMut,
        },
      });
      if (response) {
      const submissionId = response?.data?.createSubmission?.id;
      if (!submissionId) {
        throw new Error("Submission ID tidak ditemukan!");
      }
      console.log("Submission berhasil dibuat dengan ID:", submissionId);
      await executeMutation({
          submissionId: submissionId,
          value: score,
          notes: 'bagus cek2'
        })
      }
    } catch (err) {
      console.error("Error creating data:", err);
    }
  };

  const executeMutation = async (dataMut: any) => {
    // console.log(dataMut)
    // return
    try {
      const response = await props.mutation({
        variables: {
          data: dataMut,
        },
      });
      if (response) {
        // location.reload();
        history.back();
      }
    } catch (err) {
      console.error("Error creating data:", err);
    }
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
        <div className="w-full flex flex-col bg-white border rounded-lg mt-8">
          <div className={`px-4 py-2`}>
            <h1>{props.title}</h1>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex py-4 px-4 flex-wrap"
            >
              {props.sections.map((section, index) => (
                <div key={index} className="w-full">
                  {section.fields.map((fieldGroup, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="mb-4 w-full flex flex-wrap"
                    >
                      {fieldGroup.map((dataField, indexField) => (
                        <div
                          className={`sm:w-full pr-4 ${
                            dataField.class || "md:w-1/2 lg:w-1/2"
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
                          ) : dataField.type === "date_picker" ? (
                            <CommonDatePicker name={String(dataField.key)} label={dataField.label} />
                          ) : dataField.type === "date_time" ? (
                            <CommonDateTimePicker name={String(dataField.key)} label={dataField.label} />
                          ) : dataField.type === "md" ? (
                            <CommonEditor name={String(dataField.key)} label={dataField.label} placeholder={dataField.placeholder} />
                          ) : dataField.type === "soal_builder" ? (
                            <CommonSoalBuilder name={String(dataField.key)} label={dataField.label} placeholder={dataField.placeholder} />
                          ) : dataField.type === "submission" ? (
                            <CommonSubmission dataDefault={props.dataDefault ?? ""} name={String(dataField.key)} key={String(dataField.key)} />
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
                                  <FormMessage />
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
              <Button type="submit">{props.buttonTextSubmit ? props.buttonTextSubmit : "Create"}</Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
