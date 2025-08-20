"use client";
/* eslint-disable */
import { FileUp } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface ButtonImportProps {
  endpoint: string;
  className?: string;
  label?: string;
  idSchool?: string;
}

const ButtonImport: React.FC<ButtonImportProps> = ({
  endpoint,
  label = "Import",
  idSchool,
  className,
}) => {
  const [isImporting, setIsImporting] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];

      // 🔹 Validasi hanya boleh Excel / CSV
      const allowedTypes = [
        "application/vnd.ms-excel", // .xls
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
        "text/csv", // .csv
      ];
      const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase();

      if (
        !allowedTypes.includes(selectedFile.type) &&
        !["xls", "xlsx", "csv"].includes(fileExtension || "")
      ) {
        alert("File harus berupa Excel (.xls, .xlsx) atau CSV (.csv)");
        e.target.value = ""; // reset input
        setFile(null);
        return;
      }

      setFile(selectedFile);
    }
  };

  const importData = async () => {
    if (!file) {
      alert("Silakan pilih file terlebih dahulu.");
      return;
    }

    try {
      setIsImporting(true);
      const token = localStorage.getItem("authToken");

      if (!token) {
        setIsImporting(false);
        alert("Anda perlu login untuk mengimpor data.");
        return;
      }

      let url = process.env.NEXT_PUBLIC_BE + endpoint;
      if (idSchool) url = url + "?schoolId=" + idSchool;

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.log(errorData)
        throw new Error(
          `Gagal mengimpor data: ${errorData.message || res.statusText}`
        );
      }

      alert("Import berhasil!");
      setFile(null);
      setIsImporting(false);
      location.reload()
    } catch (e: any) {
      setIsImporting(false);
      console.error("Error during import:", e);
      alert(`Terjadi kesalahan: ${e.message || "Gagal mengimpor data"}`);
    }
  };

  const getSample = async () => {
     try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setIsImporting(false);
        alert("Anda perlu login untuk mendapatkan data.");
        return;
      }

      let url = process.env.NEXT_PUBLIC_BE + endpoint;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          `Gagal mengimpor data: ${errorData.error || res.statusText}`
        );
      }

      
      // Unduh file dari respons
      const blob = await res.blob();
      const filename = res.headers.get('Content-Disposition')?.split('filename=')[1] || 'example-data.csv';
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = filename.replace(/"/g, ''); // Hapus tanda kutip jika ada
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(a.href);

    } catch (e: any) {
      setIsImporting(false);
      console.error("Error during get sample:", e);
      alert(`Terjadi kesalahan: ${e.message || "Gagal ambil data"}`);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className={className}>
          <FileUp className="mr-2 h-4 w-4" /> {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Import File</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-1">
          <div>
            <div className="text-sm mb-1">Download Contoh File <span className="text-blue-500 cursor-pointer" onClick={() => getSample()}>Disini.</span></div>
          </div>
          <Input type="file" accept=".xls,.xlsx,.csv" onChange={handleFileChange} />
          <span className="text-sm text-gray-400">Hanya boleh file csv.</span>
        </div>
        <DialogFooter>
          <Button
            onClick={importData}
            disabled={isImporting || !file}
            className="w-full"
          >
            {isImporting ? "Loading..." : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ButtonImport;
