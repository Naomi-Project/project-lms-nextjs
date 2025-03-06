"use client";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import { FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface CommonDatePickerProps {
  name: string;
  label?: string;
}

const CommonDatePicker: React.FC<CommonDatePickerProps> = ({ name, label = "" }) => {
  const { control } = useFormContext();

  return (
    <FormItem className="flex flex-col mt-2 w-full">
      <FormLabel>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <div className="relative cursor-pointer flex flex-col w-full">
              <DatePicker
                selected={field.value ? parseISO(field.value) : null}
                onChange={(date) => {
                  field.onChange(date ? format(date, "yyyy-MM-dd") : "");
                }}
                locale={id} // Gunakan locale Bahasa Indonesia
                dateFormat="dd MMMM yyyy" // Format tampilan
                showYearDropdown // Tampilkan dropdown tahun
                scrollableYearDropdown // Scroll tahun
                yearDropdownItemNumber={50} // Jumlah tahun yang ditampilkan
                showMonthDropdown // Dropdown bulan
                dropdownMode="select" // Mode pemilihan dropdown
                selectsDisabledDaysInRange
                // readOnly // Prevent typing
                autoComplete="off" // Sembunyikan keyboard mobile
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-500 cursor-pointer bg-white"
              />
            </div>
          );
        }}
      />
      <FormMessage />
    </FormItem>
  );
};

export default CommonDatePicker;
