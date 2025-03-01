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
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
// import { Role, Gender } from "@/graphql/generated";
import { MutationFunction } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z, ZodSchema } from "zod";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "recharts";
import CommonSoalBuilder from "./CommonSoalBuilder";
import CommonEditor from "./CommonEditor";
import CommonDatePicker from "./CommonDatePicker";
import CommonDateTimePicker from "./CommonDateTimePicker";
import Swal from "sweetalert2";

export interface CommonFormEditField<T extends Record<any, any>> {
  key: keyof T & string;
  label: string;
  emptyValue?: string;
  class?: string;
  hidden?: boolean;
  type?: string;
  dataSelect?: any;
  dataRadio?: any;
  disabled?: boolean;
  placeholder?: string;
}
export interface CommonFormEditSection<T extends Record<any, any>> {
  fields: CommonFormEditField<T>[][];
}

export interface CommonFormEditProps<T extends Record<any, any>> {
  lable: string;
  title: string;
  method: string;
  hideBackButton?: boolean;
  isRelation?: boolean | undefined;
  relation1?: string | undefined;
  valuerRelation1?: string | undefined;
  schema: ZodSchema<T>;
  mutation: MutationFunction<any, any>;
  dataGet: any;
  sections: CommonFormEditSection<T>[];
}

export function CommonFormEdit<T extends Record<any, any>>(
  props: CommonFormEditProps<T>
) {
  // ambil data yang sudah terfilter sbelumnya dan masukan ke state
  const [dataGet, setDataGet] = useState(props.dataGet);

  const form = useForm<z.infer<typeof props.schema>>({
    resolver: zodResolver(props.schema),
    defaultValues: dataGet, // Set default values dari dataGet
  });

  useEffect(() => {
    if (dataGet) {
      form.reset(dataGet);
    }
  }, [dataGet, form.reset]);

  // proses save changes
  const onSubmit = async (values: z.infer<typeof props.schema>) => {
    setDataGet((prevState: typeof dataGet) => {
      const updatedData = {
        ...prevState,
        ...values,
      };

      if (props.isRelation == true) {
        if (props.valuerRelation1 === "nisn") {
          const newData = {
            ...updatedData,
            username: String(updatedData.nisn) ?? "",
          };
          executeMutation(newData);
          return;
        } else if (props.valuerRelation1 === "nuptk") {
          const newData = {
            ...updatedData,
            username: String(updatedData.nuptk) ?? "",
          };
          executeMutation(newData);
          return;
        }
      }

      // Jalankan executeMutation langsung setelah state diperbarui
      executeMutation(updatedData);

      return updatedData;
    });
  };

  const executeMutation = async (dataMut: any) => {
    const {
      __typename,
      families,
      updatedAt,
      createdAt,
      subject,
      submissions,
      subjects,
      classroom,
      school,
      ...cleanData
    } = dataMut;
    try {
      const response = await props.mutation({
        variables: {
          data: cleanData,
        },
      });
      if (response) {
        Swal.fire({
          title: "Berhasil Diedit!",
          text: "Data telah berhasil di edit!",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer || result.isConfirmed) {
            location.reload()
            setTimeout(() => {
              history.back(); 
            }, 500);
          }
        });
      }
    } catch (err) {
      console.error("Error updating data:", err);
    }
  };

  return (
    <>
      <Toggle
        value="bold"
        aria-label="Toggle bold"
        onClick={() => history.back()}
        className={`bg-blue-100 text-blue-500 px-2 border-blue-100 rounded-lg ${
          props.hideBackButton ? "hidden" : ""
        }`}
      >
        <ArrowLeft />
        <p className="text-sm pr-2">Kembali</p>
      </Toggle>
      <div className="w-full h-auto">
        <div className="w-full flex flex-col bg-white border rounded-lg mt-8">
          <div className="p-4">
            <h1>{props.title}</h1>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex pb-4 px-4 flex-wrap"
            >
              {props.sections.map((section, index) => (
                <div key={index} className="w-full">
                  {section.fields.map((fieldGroup, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="my-4 w-full flex flex-wrap"
                    >
                      {fieldGroup.map((dataField, indexField) => (
                        <div
                          className={`sm:w-full ${
                            dataField.class || " md:w-1/2 lg:w-1/2 pr-4"
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
                          ) : dataField.type === "date_picker" ? (
                            <CommonDatePicker
                              name={String(dataField.key)}
                              label={dataField.label}
                            />
                          ) : dataField.type === "date_time" ? (
                            <CommonDateTimePicker
                              name={String(dataField.key)}
                              label={dataField.label}
                            />
                          ) : dataField.type === "md" ? (
                            <CommonEditor
                              name={String(dataField.key)}
                              label={dataField.label}
                              placeholder={dataField.placeholder}
                            />
                          ) : dataField.type === "soal_builder" ? (
                            <CommonSoalBuilder
                              dataDefault={dataGet.extendedData}
                              name={String(dataField.key)}
                              label={dataField.label}
                              placeholder={dataField.placeholder}
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
                                          <Label>{dataS.label}</Label>
                                        </div>
                                      )
                                    )}
                                  </RadioGroup>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          ) : (
                            <FormField
                              control={form.control}
                              name={dataField.key as any}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel
                                    className={
                                      dataField.hidden &&
                                      dataField.hidden == true
                                        ? "hidden"
                                        : ""
                                    }
                                  >
                                    {dataField.label}
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      className={
                                        dataField.hidden &&
                                        dataField.hidden == true
                                          ? "hidden"
                                          : ""
                                      }
                                      type={dataField.type || "text"}
                                      disabled={dataField.disabled || false}
                                      placeholder={dataField.placeholder || ""}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormDescription />
                                  <FormMessage
                                    className={
                                      dataField.hidden &&
                                      dataField.hidden == true
                                        ? "hidden"
                                        : ""
                                    }
                                  />
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
              <Button type="submit">Save Changes</Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
