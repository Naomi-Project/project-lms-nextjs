"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

// 🔹 Load Quill secara dinamis agar tidak error di SSR Next.js
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Stylesheet untuk Quill Editor

interface CommonEditorProps {
  name: string;
  label: string;
  placeholder?: string;
}

const CommonEditor: React.FC<CommonEditorProps> = ({ name, label, placeholder }) => {
  const { setValue, watch } = useFormContext(); // Gunakan useFormContext untuk mengakses form global
  const value = watch(name);

  useEffect(() => {
    setValue(name, value || "");
  }, [value, setValue, name]);

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <ReactQuill
          value={value || ""}
          onChange={(content) => setValue(name, content)}
          className="bg-white"
          placeholder={placeholder}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default CommonEditor;
