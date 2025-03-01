"use client";
import dynamic from "next/dynamic";
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useFormContext, Controller } from "react-hook-form";

// 🔹 Load Quill secara dinamis agar tidak error di SSR Next.js
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Stylesheet untuk Quill Editor

interface CommonEditorProps {
  name: string;
  label: string;
  placeholder?: string;
}

const CommonEditor: React.FC<CommonEditorProps> = ({ name, label, placeholder }) => {
  const { control } = useFormContext(); // Gunakan useFormContext untuk mengakses form global

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <FormControl>
              <ReactQuill
                value={field.value || ""}
                onChange={field.onChange}
                className="bg-white"
                placeholder={placeholder}
              />
            </FormControl>
            {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
          </>
        )}
      />
    </FormItem>
  );
};

export default CommonEditor;
