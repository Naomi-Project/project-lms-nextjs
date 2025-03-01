"use client";
import * as React from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useFormContext, Controller } from "react-hook-form";
import { format, parseISO } from "date-fns";
import { CalendarIcon, ClockIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

interface CommonDateTimePickerProps {
  name: string;
  label?: string;
}

const CommonDateTimePicker: React.FC<CommonDateTimePickerProps> = ({ name, label = "" }) => {
  const { control } = useFormContext();

  return (
    <FormItem className="flex flex-col mt-2 w-full">
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          // Pastikan tanggal tidak mundur 1 hari dengan parseISO()
          const selectedDate = field.value ? parseISO(field.value.split(" ")[0]) : undefined;
          const selectedTime = field.value ? field.value.split(" ")[1]?.substring(0, 5) : "12:00";

          return (
            <>
              <FormControl>
                <div className="flex gap-2">
                  {/* Date Picker */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : <span>Pilih Tanggal</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => {
                          if (date) {
                            const dateString = format(date, "yyyy-MM-dd");
                            field.onChange(`${dateString} ${selectedTime}:00`);
                          } else {
                            field.onChange(""); // Set kosong jika batal memilih
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  {/* Time Input */}
                  <div className="flex items-center border rounded-md px-3 w-32">
                    <ClockIcon className="mr-2 h-4 w-4 text-gray-400" />
                    <Input
                      type="time"
                      value={selectedTime}
                      onChange={(e) => {
                        const newTime = e.target.value;
                        if (selectedDate) {
                          field.onChange(`${format(selectedDate, "yyyy-MM-dd")} ${newTime}:00`);
                        } else {
                          field.onChange(`2000-01-01 ${newTime}:00`); // Gunakan default tanggal jika tidak ada tanggal
                        }
                      }}
                      className="border-none focus:ring-0 p-0 bg-transparent text-center"
                    />
                  </div>
                </div>
              </FormControl>
              {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
            </>
          );
        }}
      />
    </FormItem>
  );
};

export default CommonDateTimePicker;
