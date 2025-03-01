"use client";
import * as React from "react";
import { FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useFormContext, Controller } from "react-hook-form";
import { format, parseISO } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CommonDatePickerProps {
  name: string;
  label?: string;
}

const CommonDatePicker: React.FC<CommonDatePickerProps> = ({ name, label = "" }) => {
  const { control } = useFormContext(); // Ambil control dari react-hook-form

  return (
    <FormItem className="flex flex-col mt-2 w-full">
      <FormLabel>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          // Pastikan tanggal yang diambil tidak mundur satu hari dengan konversi ke UTC
          const selectedDate = field.value ? parseISO(field.value) : undefined;

          return (
            <>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {field.value ? format(selectedDate!, "PPP") : <span>Pilih Tanggal</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(selectedDate) => {
                      if (selectedDate) {
                        // Konversi ke string tanpa zona waktu
                        const dateString = format(selectedDate, "yyyy-MM-dd");
                        field.onChange(dateString);
                      } else {
                        field.onChange(""); // Biarkan kosong jika pengguna membatalkan
                      }
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </>
          );
        }}
      />
    </FormItem>
  );
};

export default CommonDatePicker;
