"use client";
/* eslint-disable */
import { useState, useEffect, useRef } from "react";
import { useFormContext, Controller } from "react-hook-form";
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
  disabled?: boolean;
  hidden?: boolean;
}

const CommonSelectMultiple: React.FC<CommonSelectMultipleProps> = ({
  name,
  label,
  dataSelect,
  dataDefault = [],
  placeholder = "Pilih opsi...",
  disabled = false,
  hidden = false,
}) => {
  const { control, setValue, watch } = useFormContext();
  const selectedValues = watch(name) || [];

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [triggerWidth, setTriggerWidth] = useState<string>("auto");

  useEffect(() => {
    if (buttonRef.current) {
      setTriggerWidth(`${buttonRef.current.offsetWidth}px`);
    }
  }, [buttonRef.current]);

  return (
    <FormItem>
      <FormLabel className={hidden ? 'hidden' : ''}>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <>
            <FormControl>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    disabled={disabled || false}
                    ref={buttonRef}
                    variant="outline"
                    className={`w-full justify-between ${hidden ? "hidden" : ''}`}
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
                          disabled={option.disabled ?? false}
                          checked={selectedValues.includes(option.value)}
                          onCheckedChange={() => {
                            const newValue = selectedValues.includes(option.value)
                              ? selectedValues.filter((v: string) => v !== option.value)
                              : [...selectedValues, option.value];
                            setValue(name, newValue);
                            field.onChange(newValue);
                          }}
                        />
                        <label
                          htmlFor={option.value}
                          className={cn(
                            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                            selectedValues.includes(option.value) ? "text-blue-600" : ""
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
            <FormMessage>{fieldState.error?.message}</FormMessage>
          </>
        )}
      />
    </FormItem>
  );
};

export default CommonSelectMultiple;
