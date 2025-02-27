"use client"
import * as React from "react"
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useFormContext } from "react-hook-form"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface CommonDatePickerProps {
  name: string
  label?: string
  placeholder?: string
}

const CommonDatePicker: React.FC<CommonDatePickerProps> = ({ name, label = "" }) => {
  const { setValue, watch } = useFormContext(); // Gunakan useFormContext untuk mengakses form global
  const value = watch(name);
  const [date, setDate] = React.useState<Date | undefined>(value ? new Date(value) : undefined);

  // Ketika tanggal berubah, simpan ke react-hook-form
  React.useEffect(() => {
    if (date) {
      setValue(name, date.toISOString().split("T")[0]); // Simpan dalam format YYYY-MM-DD
    }
  }, [date, name, setValue]);

  return (
    <FormItem className="flex flex-col mt-2 w-full">
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pilih Tanggal</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => setDate(selectedDate)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default CommonDatePicker;
