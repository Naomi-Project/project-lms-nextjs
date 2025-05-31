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
} from "@/components/ui/select"; // Import komponen Select dari shadcn-ui
import { useBroadcastByWhatsAppMutation, useGetBroadcastsQuery, useGetUserQuery, useUserPayloadQuery } from '@/graphql/generated';
import Swal from 'sweetalert2';

const CommonFormBroadcastWa = ({ nomor = '', label = '' }: any) => {
  const [broadcastByWhatsApp] = useBroadcastByWhatsAppMutation();
  const { data: user } = useUserPayloadQuery(); 
  const { data: findUser, loading: loadFindUser } = useGetUserQuery({
    variables: {
      data: user?.me.id ?? ''
    }, 
    skip: !user?.me.id
  })
  const { data, loading, error } = useGetBroadcastsQuery({
    variables: {
        schoolId: findUser?.user.school?.id ?? ''
    }
  }); // Ambil loading dan error juga
  const [message, setMessage] = useState('');
  const [numbers, setNumbers] = useState(nomor !== '' ? nomor : '');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('submited');

    const numbersArray = numbers.split(',').map((num: any) => num.trim());

    try {
      const { data } = await broadcastByWhatsApp({
        variables: {
            data: {
                message: message,
                numbers: numbersArray,
            }
        },
      });
      console.log('Data yang dikirim:', data);
      
      Swal.fire({
        title: "Berhasil Mengirim!",
        html: `Pesan telah berhasil dikirim ke siswa!<br><br><b>Pesan:</b> ${message}<br><b>Nomor Tujuan:</b> ${numbers}`,
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
            location.reload()
        }
      });
    } catch (error) {
        console.error('Terjadi kesalahan saat broadcast:', error);
        Swal.fire({
          title: "Gagal Mengirim!",
          text: "error saat mengirim pesan, coba lagi nanti.",
          icon: "error",
          timer: 2000,
          timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer || result.isConfirmed) {
              location.reload()
          }
        });
    }
  };

  if (loading) return <p>Memuat pesan...</p>;
  if (error) return <p>Error saat memuat pesan: {error.message}</p>;

  const broadcasts = data?.broadcasts || []; // Ambil data broadcast

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'secondary'} className='bg-green-600 text-white hover:bg-green-800' aria-label="Kirim Pesan Ke Siswa">{label !== '' ? label : 'Kirim pesan custom ke murid'}</Button>
      </DialogTrigger>
      <DialogContent className=" rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center">
            Kirim Pesan WA ke murid
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="">
            <Label htmlFor="numbers" className="text-right">
              Nomor
            </Label>
            <Input
              id="numbers"
              type="text"
              placeholder="Pisahkan koma, untuk nomor lainnya"
              value={numbers}
              onChange={(e) => setNumbers(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <Label htmlFor="message" className="text-right">
              Pesan
            </Label>
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