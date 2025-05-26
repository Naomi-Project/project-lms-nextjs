// components/common/forms/CommonFileUpload.tsx
"use client";
import * as React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { cn } from "@/lib/utils"; // Pastikan path ini benar untuk utility class TailwindCSS

interface CommonFileUploadProps {
  name: string;
  label?: string;
  placeholder?: string; // Untuk input file, placeholder mungkin kurang relevan
  className?: string;
  multiple?: boolean; // Untuk mengizinkan upload banyak file
  accept?: string; // Contoh: "image/*", ".pdf", ".doc"
  maxFileSize?: number; // Ukuran file maksimum dalam byte
  allowedFileTypes?: string[]; // Array of MIME types, e.g., ["image/jpeg", "image/png"]
}

const CommonFileUpload: React.FC<CommonFileUploadProps> = ({
  name,
  label = "",
  className,
  multiple = false,
  accept = "", // Default accept all file types
  maxFileSize = 5 * 1024 * 1024, // Default 5MB
  allowedFileTypes = [], // Default allow all types if not specified
}) => {
  const { control } = useFormContext(); // Ambil control dari react-hook-form

  return (
    <div className={cn("flex flex-col mt-2 w-full", className)}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, name: fieldName, ref }, fieldState }) => {
          return (
            <>
              <input
                type="file"
                id={fieldName} // Gunakan fieldName dari Controller untuk ID input
                name={fieldName}
                ref={ref} // Penting untuk mendaftarkan input ke React Hook Form
                multiple={multiple}
                accept={accept}
                onBlur={onBlur} // Pastikan onBlur dari react-hook-form terpanggil
                onChange={(e) => {
                  // e.target.files adalah FileList
                  const files = e.target.files;

                  // Lakukan validasi dasar di sini sebelum mengirim ke RHF
                  let hasError = false;
                  let errorMessage = "";

                  if (files && files.length > 0) {
                    for (let i = 0; i < files.length; i++) {
                      const file = files[i];

                      // Validasi ukuran file
                      if (file.size > maxFileSize) {
                        hasError = true;
                        errorMessage = `Ukuran file '${file.name}' melebihi batas ${maxFileSize / (1024 * 1024)}MB.`;
                        break;
                      }

                      // Validasi tipe file
                      if (allowedFileTypes.length > 0 && !allowedFileTypes.includes(file.type)) {
                        hasError = true;
                        errorMessage = `Tipe file '${file.name}' (${file.type}) tidak diizinkan. Hanya ${allowedFileTypes.join(', ')} yang diterima.`;
                        break;
                      }
                    }
                  } else if (!multiple) {
                    // Jika bukan multiple dan tidak ada file, ini bisa jadi error jika required
                    // Tapi validasi `required` lebih baik di Zod schema
                  }


                  if (hasError) {
                    // Jika ada error validasi di sini, set error di RHF secara manual
                    // Ini adalah cara untuk memicu error message di RHF
                    onChange(null); // Clear value in RHF to trigger validation error if schema expects FileList/File
                    // Anda mungkin perlu cara yang lebih canggih untuk menampilkan error di RHF
                    // seperti menggunakan trigger atau setError.
                    // Untuk saat ini, kita akan biarkan Zod yang menangani pesan error utama.
                    alert(errorMessage); // Tampilkan alert sederhana untuk validasi awal
                    e.target.value = ''; // Reset input file agar pengguna bisa mencoba lagi
                  } else {
                    // Jika tidak ada error, teruskan FileList ke react-hook-form
                    onChange(files);
                  }
                }}
                className={cn(
                  "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100",
                  fieldState.error ? "border-red-500" : "" // Styling error dari RHF
                )}
              />
              {fieldState.error && (
                <p className="mt-1 text-sm text-red-600">{fieldState.error.message}</p>
              )}
            </>
          );
        }}
      />
    </div>
  );
};

export default CommonFileUpload;