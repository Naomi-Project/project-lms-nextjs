'use client'
/* eslint-disable */
import React, { useState } from 'react'
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox"; // ✅ Import Checkbox
import { Role, useBroadcastByWhatsAppMutation, useGetBroadcastsQuery, useGetSchoolsQuery, useGetUserQuery, useUserPayloadQuery } from '@/graphql/generated';
import Swal from 'sweetalert2';

const CommonFormBroadcastWa = ({ nomor = '', label = '' }: any) => {
  const [broadcastByWhatsApp] = useBroadcastByWhatsAppMutation();
  const { data: user } = useUserPayloadQuery(); 
  const { data: findUser } = useGetUserQuery({
    variables: {
      data: user?.me.id ?? ''
    }, 
    skip: !user?.me.id
  })
  const { data: schools } = useGetSchoolsQuery()
  const { data, loading, error } = useGetBroadcastsQuery({
    variables: {
        schoolId: findUser?.user?.school?.id ?? ''
    }
  });

  const [message, setMessage] = useState('');
  const [school, setSchool] = useState('');
  const [numbers, setNumbers] = useState(nomor !== '' ? nomor : '');
  const [sendToAll, setSendToAll] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const numbersArray = numbers.split(',').map((num: any) => num.trim());

    try {
      const { data } = await broadcastByWhatsApp({
        variables: {
          data: {
            message: message,
            numbers: numbersArray,
            schoolId: school,
            target: sendToAll ? Role.Student : null
          }
        },
      });

      Swal.fire({
        title: "Berhasil Mengirim!",
        html: `Pesan berhasil dikirim!<br><br><b>Pesan:</b> ${message}`,
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer || result.isConfirmed) {
          location.reload();
        }
      });
    } catch (error) {
      console.error('Terjadi kesalahan saat broadcast:', error);
      Swal.fire({
        title: "Gagal Mengirim!",
        text: "Terjadi error, coba lagi nanti.",
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer || result.isConfirmed) {
          location.reload();
        }
      });
    }
  };

  if (loading) return <p>Memuat pesan...</p>;
  if (error) return <p>Error saat memuat pesan: {error.message}</p>;

  const broadcasts = data?.broadcasts || [];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'secondary'} className='bg-green-600 text-white hover:bg-green-800'>
          {label !== '' ? label : 'Kirim Pesan Ke Murid'}
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center">
            Kirim Pesan WA ke murid
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="numbers" className="text-right">Nomor</Label>
            <Input
              id="numbers"
              required={!sendToAll}
              type="text"
              placeholder="Pisahkan koma, untuk nomor lainnya"
              value={numbers}
              onChange={(e) => setNumbers(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <Label htmlFor="message" className="text-right">Sekolah</Label>
            <Select onValueChange={setSchool} value={school}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih sekolah untuk semua murid tersebut" />
              </SelectTrigger>
              <SelectContent>
                {schools?.schools.map((sc: any) => (
                  <SelectItem key={sc.id} value={sc.id}>
                    {sc.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mt-3">
            <Label htmlFor="message" className="text-right">Pesan</Label>
            <Select onValueChange={setMessage} value={message}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih pesan untuk semua murid tersebut" />
              </SelectTrigger>
              <SelectContent>
                {broadcasts.map((broadcast: any) => (
                  <SelectItem key={broadcast.id} value={broadcast.message}>
                    {broadcast.message}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* ✅ Input checkbox */}
          <div className="flex items-center space-x-2 mt-4">
            <Checkbox id="sendToAll" checked={sendToAll} onCheckedChange={(checked) => setSendToAll(Boolean(checked))} />
            <Label htmlFor="sendToAll" className="text-sm">
              Kirim ke semua murid
            </Label>
          </div>

          <DialogFooter className="mt-5">
            <Button type="submit" variant="default" className="w-full">
              Selesai
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CommonFormBroadcastWa;
