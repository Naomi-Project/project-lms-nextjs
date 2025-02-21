"use client";
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

export interface CommonFormAddField<T extends Record<any, any>> {
  key: keyof T & string;
  label: string;
  emptyValue?: string;
  class?: string;
  type?: string;
  dataSelect?: any;
  dataRadio?: any;
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
  schema: ZodSchema<T>;
  mutation: MutationFunction<any, any>;
  dataMutation: any;
  setDataMutation: React.Dispatch<React.SetStateAction<any>>;
  sections: CommonFormAddSection<T>[];
}

export function CommonFormAdd<T extends Record<any, any>>(
  props: CommonFormAddProps<T>
) {
  const form = useForm<z.infer<typeof props.schema>>({
    resolver: zodResolver(props.schema),
  });

  const onSubmit = async (values: z.infer<typeof props.schema>) => {
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

  const executeMutation = async (dataMut: any) => {
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
        className="bg-blue-100 text-blue-500 px-2 border-blue-100 rounded-lg"
      >
        <ArrowLeft />
        <p className="text-sm pr-2">Kembali</p>
      </Toggle>
      <div className="w-full h-screen">
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
                          ) : (
                            <FormField
                              control={form.control}
                              name={dataField.key as any}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{dataField.label}</FormLabel>
                                  <FormControl>
                                    <Input
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
              <Button type="submit">Create</Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
