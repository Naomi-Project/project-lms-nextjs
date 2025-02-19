"use client"
import { z } from "zod";

export const studentSchema = z.object({
  username: z.string().min(1, "Nama Lengkap wajib diisi"),
  nisn: z.string().min(8, "NISN minimal 8 digit"),
  nik: z.string().min(1, "NIK wajib diisi"),
//   guardian: z.string().min(1, "Nama Orang Tua/Wali wajib diisi"),
  phone: z.string().regex(/^(\+62|62|0)[0-9]{9,13}$/, "Nomor telepon tidak valid"),
  address: z.string().min(1, "Alamat wajib diisi"),
  mainClass: z.string().optional(),
  subClass: z.string().optional(),
  isTransfer: z.boolean().optional(),
});