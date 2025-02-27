"use client"
import * as React from "react"
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useFormContext } from "react-hook-form"
import { format } from "date-fns"
import { CalendarIcon, ClockIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"

interface CommonDateTimePickerProps {
  name: string;
  label?: string;
  placeholder?: string;
}

const CommonDateTimePicker: React.FC<CommonDateTimePickerProps> = ({ name, label = "" }) => {
  const { setValue, watch } = useFormContext(); 
  const value = watch(name);

  // State untuk menyimpan tanggal & waktu
  const [date, setDate] = React.useState<Date | undefined>(value ? new Date(value) : undefined);
  const [time, setTime] = React.useState<string>("12:00"); // Default time 12:00

  // Update nilai ke react-hook-form
  React.useEffect(() => {
    if (date) {
      const dateString = format(date, "yyyy-MM-dd"); // Format tanggal
      const dateTimeString = `${dateString} ${time}:00`; // Gabungkan dengan waktu
      setValue(name, dateTimeString); // Simpan dalam format datetime
    }
  }, [date, time, name, setValue]);

  return (
    <FormItem className="flex flex-col mt-2 w-full">
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <div className="flex gap-2">
          {/* Tanggal Picker */}
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

          {/* Time Input */}
          <div className="flex items-center border rounded-md px-3 w-32">
            <ClockIcon className="mr-2 h-4 w-4 text-gray-400" />
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="border-none focus:ring-0 p-0 bg-transparent text-center"
            />
          </div>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default CommonDateTimePicker;
