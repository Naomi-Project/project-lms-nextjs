"use client";
import * as React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { format, parseISO } from "date-fns"; // Masih butuh date-fns untuk format dan parse
import { cn } from "@/lib/utils"; // Mungkin masih relevan untuk utility class jika ada

interface CommonDatePickerProps {
  name: string;
  label?: string;
  // Anda bisa menambahkan props lain jika diperlukan, seperti placeholder, className, dll.
  placeholder?: string;
  className?: string;
}

const CommonDatePicker2: React.FC<CommonDatePickerProps> = ({
  name,
  label = "",
  placeholder = "Pilih Tanggal",
  className,
}) => {
  const { control } = useFormContext(); // Ambil control dari react-hook-form

  return (
    <div className={cn("flex flex-col mt-2 w-full", className)}>
      {label && <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          // Format tanggal untuk input type="date" (yyyy-MM-dd)
          // Jika field.value kosong atau tidak valid, hasilnya akan string kosong
          const formattedDate = field.value ? format(parseISO(field.value), "yyyy-MM-dd") : "";

          return (
            <>
              <input
                type="date"
                id={name}
                {...field} // Mengaitkan properti react-hook-form (value, onChange, onBlur)
                value={formattedDate} // Menggunakan tanggal yang diformat
                onChange={(e) => {
                  // Saat input berubah, simpan nilai dalam format ISO (misal: "2023-10-27T00:00:00.000Z")
                  // atau sesuai kebutuhan backend Anda.
                  // HTML input type="date" akan memberikan format "YYYY-MM-DD"
                  if (e.target.value) {
                    // Coba parse string "YYYY-MM-DD" menjadi objek Date, lalu format ke ISO string
                    // Anda bisa sesuaikan format yang disimpan ke backend
                    const dateObj = parseISO(e.target.value);
                    field.onChange(dateObj.toISOString()); // Simpan sebagai ISO string (UTC)
                    // Atau, jika Anda hanya ingin menyimpan "YYYY-MM-DD" tanpa waktu, bisa langsung:
                    // field.onChange(e.target.value);
                  } else {
                    field.onChange(""); // Biarkan kosong jika input dihapus
                  }
                }}
                className={cn(
                  "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                  fieldState.error ? "border-red-500" : "" // Styling error
                )}
                placeholder={placeholder}
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

export default CommonDatePicker2;