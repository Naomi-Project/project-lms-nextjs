"use client";
/* eslint-disable */
import { FileUp } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Pastikan ini adalah path yang benar

interface ButtonExportProps {
  endpoint: string;
  className?: string;
  label?: string;
  idSchool?: string;
}

const ButtonExport: React.FC<ButtonExportProps> = ({ endpoint, label = "Export", idSchool, className }) => { // Default label
  const [isExporting, setIsExporting] = useState(false)
  const exportData = async () => { // Ganti nama fungsi agar lebih generik
    try {
      setIsExporting(true)
      const token = localStorage.getItem('authToken'); // Ambil token di dalam fungsi onClick
      
      if (!token) {
        setIsExporting(false)
        alert('Anda perlu login untuk mengekspor data.');
        return;
      }

      // Pastikan endpoint dimulai dengan '/' untuk API Route lokal
      // var url = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
      var url = process.env.NEXT_PUBLIC_BE + endpoint;
      if (idSchool) url = url + '?schoolId=' + idSchool
      
      const res = await fetch(url, {
        headers: {
          // Perbaiki "Barrer" menjadi "Bearer"
          "Authorization": `Bearer ${token}`
        }
      });

      if (!res.ok) {
        console.log(res)
        const errorData = await res.json();
        setIsExporting(false)
        console.log(errorData)
        throw new Error(`Gagal mengekspor data: ${errorData.error || res.statusText}`);
      }

      // Unduh file dari respons
      const blob = await res.blob();
      const filename = res.headers.get('Content-Disposition')?.split('filename=')[1] || 'export.xlsx';
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = filename.replace(/"/g, ''); // Hapus tanda kutip jika ada
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(a.href); // Bersihkan URL objek
      setIsExporting(false)
      
    } catch (e: any) { // Tangkap error dengan tipe any atau Error
      setIsExporting(false)
      console.error("Error during export:", e); // Gunakan console.error untuk error
      alert(`Terjadi kesalahan: ${e.message || "Gagal mengekspor data"}`);
    }
  };

  return (
    // Panggil fungsi exportData saat tombol diklik
    <Button variant="default" className={className} onClick={exportData}>
      <FileUp className="mr-2 h-4 w-4" /> {isExporting ? 'Loading..' : label}
    </Button>
  );
};

export default ButtonExport;