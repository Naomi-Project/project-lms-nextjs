"use client";
/* eslint-disable */
import { useState, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface CommonSelectMultipleProps {
  name: string;
  label: string;
  dataSelect: any[];
  dataDefault?: string[];
  placeholder?: string;
}

const CommonSelectMultiple: React.FC<CommonSelectMultipleProps> = ({
  name,
  label,
  dataSelect,
  dataDefault = [],
  placeholder = "Pilih opsi...",
}) => {
  const { setValue, watch } = useFormContext();
  const value = watch(name) || [];
  const [selectedValues, setSelectedValues] = useState<string[]>(value);

  useEffect(() => {
    setValue(name, selectedValues);
  }, [selectedValues, setValue, name]);

  useEffect(() => {
    if (dataDefault.length > 0) {
      setSelectedValues(dataDefault);
      setValue(name, dataDefault);
    }
  }, [dataDefault, setValue, name]);

  // Sinkronisasi nilai form dengan state internal
  // useEffect(() => {
  //   setSelectedValues(value);
  // }, [value]);

  const toggleSelect = (optionValue: string) => {
    setSelectedValues((prev) =>
      prev.includes(optionValue)
        ? prev.filter((v) => v !== optionValue)
        : [...prev, optionValue]
    );
  };
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [triggerWidth, setTriggerWidth] = useState<string>("auto");

  useEffect(() => {
    if (buttonRef.current) {
      setTriggerWidth(`${buttonRef.current.offsetWidth}px`);
      console.log(`${buttonRef.current.offsetWidth}px`);
    }
  }, [buttonRef.current]);

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              ref={buttonRef}
              variant="outline"
              className="w-full justify-between"
            >
              {selectedValues.length > 0
                ? dataSelect
                    .filter((option) => selectedValues.includes(option.value))
                    .map((option) => option.label)
                    .join(", ")
                : placeholder}
            </Button>
          </PopoverTrigger>
          <PopoverContent style={{ width: triggerWidth }} className="p-2">
            <ScrollArea className="h-auto">
              {dataSelect.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-2 p-1"
                >
                  <Checkbox
                    id={option.value}
                    checked={selectedValues.includes(option.value)}
                    onCheckedChange={() => toggleSelect(option.value)}
                  />
                  <label
                    htmlFor={option.value}
                    className={cn(
                      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                      selectedValues.includes(option.value)
                        ? "text-blue-600"
                        : ""
                    )}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </ScrollArea>
          </PopoverContent>
        </Popover>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default CommonSelectMultiple;
