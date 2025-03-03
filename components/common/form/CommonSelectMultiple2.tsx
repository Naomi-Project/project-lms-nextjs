"use client";
/* eslint-disable */
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FormItem, FormLabel, FormMessage, FormControl } from "@/components/ui/form";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { X } from "lucide-react";

interface SelectMultiple2Props {
  name: string;
  label: string;
  options: any[];
  dataDefault?: string[];
  placeholder?: string;
}

const SelectMultiple2: React.FC<SelectMultiple2Props> = ({ name, label, options = [], dataDefault = [], placeholder = "Pilih Referensi..." }) => {
  const { setValue, watch } = useFormContext();
  const [selectedValues, setSelectedValues] = useState<string[]>(dataDefault);

  useEffect(() => {
    setValue(name, selectedValues);
  }, [selectedValues, setValue, name]);

  const addItem = (newValue: string) => {
    if (!selectedValues.includes(newValue)) {
      setSelectedValues([...selectedValues, newValue]);
    }
  };

  const removeItem = (item: string) => {
    setSelectedValues(selectedValues.filter((v) => v !== item));
  };

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start">
              {selectedValues.length > 0 ? "Tambahkan Referensi" : placeholder}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-2">
            <Command>
              <CommandGroup>
                {options.length > 0 ? (
                  options.map((option) => (
                    <CommandItem key={option.value} onSelect={() => addItem(option.value)}>
                      {option.label}
                    </CommandItem>
                  ))
                ) : (
                  <p className="text-gray-500 text-center">Tidak ada referensi tersedia</p>
                )}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </FormControl>

      {/* List referensi yang sudah dipilih */}
      <ScrollArea className="mt-2">
        <div className="grid grid-cols-2 gap-2">
          {selectedValues.map((ref) => (
            <div key={ref} className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
              <span>{options.find((opt) => opt.value === ref)?.label || ref}</span>
              <Button variant="ghost" size="icon" onClick={() => removeItem(ref)}>
                <X className="w-4 h-4 text-gray-500" />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>

      <FormMessage />
    </FormItem>
  );
};

export default SelectMultiple2;
