"use client";
import { useState } from "react";
import { z } from "zod";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus } from "lucide-react";
import { useCreateUserMutation } from "@/graphql/generated";

// Schema validasi dengan Zod
const studentSchema = z.object({
  name: z.string().min(1, "Nama Lengkap wajib diisi"),
  nisn: z.string().min(8, "NISN minimal 8 digit"),
  guardian: z.string().min(1, "Nama Orang Tua/Wali wajib diisi"),
  contact: z.string().regex(/^(\+62|62|0)[0-9]{9,13}$/, "Nomor telepon tidak valid"),
  address: z.string().min(1, "Alamat wajib diisi"),
  mainClass: z.string().optional(),
  subClass: z.string().optional(),
  isTransfer: z.boolean(),
});

// Tipe data untuk form
type StudentForm = z.infer<typeof studentSchema>;

const AddStudent: React.FC = () => {
  const [formData, setFormData] = useState<StudentForm>({
    name: "",
    nisn: "",
    guardian: "",
    contact: "",
    address: "",
    mainClass: "",
    subClass: "",
    isTransfer: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof StudentForm, string>>>({});

  // Handle perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle perubahan select
  const handleSelectChange = (name: keyof StudentForm, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle submit form
  const [createUser, { data, loading, error }] = useCreateUserMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validasi form menggunakan Zod
    const validation = studentSchema.safeParse(formData);

    if (!validation.success) {
      const errorMessages: Partial<Record<keyof StudentForm, string>> = {};
      validation.error.issues.forEach((issue) => {
        errorMessages[issue.path[0] as keyof StudentForm] = issue.message;
      });
      setErrors(errorMessages);
      return;
    }

    try {
      const response = await createUser({
        variables: {
          data: {
            username: formData.name,
            password: "",
            role: "STUDENT",
            nik: "1234567890",
            nuptk: "",
            nisn: formData.nisn,
            dateOfBirth: 20050101,
            gender: "MALE",
            address: formData.address,
            phone: formData.contact,
          },
        },
      });
      if (response) {
        location.reload();
      }
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  return (
    <div className="bg-slate-200 rounded-lg">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">
            <Plus /> Tambah Siswa
          </Button>
        </DialogTrigger>
        <DialogContent className="md:w-4/12 w-96 rounded-lg">
          <ScrollArea className="h-96">
            <DialogHeader>
              <DialogTitle className="text-center">Tambah Siswa</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Nama Lengkap <span className="text-red-500">*</span></Label>
                <Input type="text" name="name" placeholder="Nama Lengkap Siswa" onChange={handleChange} />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div className="mt-3">
                <Label htmlFor="nisn">NISN <span className="text-red-500">*</span></Label>
                <Input type="text" name="nisn" placeholder="NISN" onChange={handleChange} />
                {errors.nisn && <p className="text-red-500 text-sm">{errors.nisn}</p>}
              </div>

              <div className="mt-3">
                <Label htmlFor="guardian">Nama Orang Tua/Wali <span className="text-red-500">*</span></Label>
                <Input type="text" name="guardian" placeholder="Nama Orang Tua/Wali" onChange={handleChange} />
                {errors.guardian && <p className="text-red-500 text-sm">{errors.guardian}</p>}
              </div>

              <div className="mt-3">
                <Label htmlFor="contact">No. Telfon Orang Tua/Wali <span className="text-red-500">*</span></Label>
                <Input type="text" name="contact" placeholder="+62xxxxxxxxxxx" onChange={handleChange} />
                {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
              </div>

              <div className="mt-3">
                <Label htmlFor="address">Alamat Tempat Tinggal <span className="text-red-500">*</span></Label>
                <Input type="text" name="address" placeholder="Alamat" onChange={handleChange} />
                {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
              </div>

              <div className="mt-3">
                <Label>Pilih Kelas Tujuan</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Select onValueChange={(value) => handleSelectChange("mainClass", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih Induk Kelas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="kelas7">Kelas 7</SelectItem>
                        <SelectItem value="kelas8">Kelas 8</SelectItem>
                        <SelectItem value="kelas9">Kelas 9</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select onValueChange={(value) => handleSelectChange("subClass", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Cabang Kelas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="kelas7a">Kelas 7A</SelectItem>
                        <SelectItem value="kelas7b">Kelas 7B</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <DialogFooter className="mt-5">
                <Button type="submit" variant="default" className="w-full">
                  Selesai
                </Button>
              </DialogFooter>
            </form>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddStudent;
