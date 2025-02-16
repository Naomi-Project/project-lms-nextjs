"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Role, useUpdateUserMutation } from "@/graphql/generated";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Schema Validation
const studentSchema = z.object({
  username: z.string().min(1, "Nama wajib diisi"),
  nisn: z.string().min(8, "NISN minimal 8 digit"),
  phone: z.string().regex(/^(\+62|62|0)[0-9]{9,13}$/, "Nomor telepon tidak valid"),
  address: z.string().min(5, "Alamat minimal 5 karakter"),
});

// Tipe data untuk form
type StudentForm = z.infer<typeof studentSchema>;

const EditStudent: React.FC<{ studentData: StudentForm & { id: string } }> = ({ studentData }) => {
  const [updateUser, { loading }] = useUpdateUserMutation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<StudentForm>({
    resolver: zodResolver(studentSchema),
    defaultValues: studentData,
  });

  // Isi form dengan data lama saat modal dibuka
  useEffect(() => {
    setValue("username", studentData.username);
    setValue("nisn", studentData.nisn);
    setValue("phone", studentData.phone);
    setValue("address", studentData.address);
  }, [studentData, setValue]);

  const onSubmit = async (data: StudentForm) => {
    try {
      await updateUser({
        variables: {
          data: {
            id: studentData.id, // ID dari siswa yang diedit
            username: data.username,
            role: Role.Student,
            nisn: data.nisn,
            address: data.address,
            phone: data.phone,
          },
        },
      });

      alert("Siswa berhasil diperbarui!");
      location.reload();
    } catch (err) {
      console.error("Gagal mengupdate siswa:", err);
    }
  };

  return (
    <div className="bg-slate-200 rounded-lg">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-orange-500 hover:bg-orange-700">Edit</Button>
        </DialogTrigger>
        <DialogContent className="md:w-4/12 w-96 rounded-lg">
          <ScrollArea className="h-96">
            <DialogHeader>
              <DialogTitle className="text-center">Edit Siswa</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="username">Nama Lengkap <span className="text-red-500">*</span></Label>
                <Input type="text" {...register("username")} />
                {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
              </div>

              <div className="mt-3">
                <Label htmlFor="nisn">NISN <span className="text-red-500">*</span></Label>
                <Input type="text" {...register("nisn")} />
                {errors.nisn && <p className="text-red-500 text-sm">{errors.nisn.message}</p>}
              </div>

              <div className="mt-3">
                <Label htmlFor="phone">No. Telfon Orang Tua/Wali <span className="text-red-500">*</span></Label>
                <Input type="text" {...register("phone")} />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>

              <div className="mt-3">
                <Label htmlFor="address">Alamat Tempat Tinggal <span className="text-red-500">*</span></Label>
                <Input type="text" {...register("address")} />
                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
              </div>

              <DialogFooter className="mt-5">
                <Button type="submit" variant="default" className="w-full">
                  {loading ? "Menyimpan..." : "Simpan Perubahan"}
                </Button>
              </DialogFooter>
            </form>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditStudent;
