"use client";
import * as React from "react"
import dynamic from "next/dynamic";
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
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

// 🔹 Load Quill secara dinamis agar tidak error di SSR Next.js
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Stylesheet untuk Quill DatePicker

interface CommonDatePickerProps {
  name: string;
  label?: string;
  placeholder?: string;
}

const CommonDatePicker: React.FC<CommonDatePickerProps> = ({ name, label = '', placeholder }) => {
  const { setValue, watch } = useFormContext(); // Gunakan useFormContext untuk mengakses form global
  const value = watch(name);
  const [date, setDate] = React.useState<Date>()

  React.useEffect(() => {
    setValue(name, value || "");
  }, [value, setValue, name]);

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
              <CalendarIcon />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
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
