"use client"
/* eslint-disable */
import { Trash } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button";
import Swal from 'sweetalert2';
interface ButtonDeleteProps {
  id: string;
  mutation: any;
  noBg?: boolean;
  hideLable?: boolean;
  customClassNoBg?: string;
  loading?: boolean;
}

const ButtonDelete: React.FC<ButtonDeleteProps> = ({ mutation, noBg, hideLable, customClassNoBg, loading, id }) => {
  // const [deleteUser, { loading }] = useDeleteUserMutation();
  const handleDelete = async () => {
    Swal.fire({
      title: "Kamu Yakin?",
      text: "Data ini akan dihapus secara permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await remove()
          if (!res) return alert('gagal menghapus')
          Swal.fire({
            title: "Terhapus!",
            text: "Data berhasil dihapus.",
            icon: "success"
          }).then((res) => {
            if (res.isConfirmed) {
              // history.back()
              location.reload()
            } else {
              location.reload()
            }
          })
        } catch (e) {
          console.error(e)
        }
      }
    });
  };

  const remove = async () => {
    try {
      await mutation({
        variables: { data: id }
      });
      return true
    } catch (err) {
      console.error("Gagal menghapus data:", err);
    }
  }
  return (
    <Button onClick={handleDelete} disabled={loading} className={noBg ? customClassNoBg : "bg-red-500 hover:bg-red-700"}>
      <Trash /> {hideLable ? "" : "Hapus"}
    </Button>
  )
}

export default ButtonDelete