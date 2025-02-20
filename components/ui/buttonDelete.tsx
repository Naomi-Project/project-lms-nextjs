"use client"
import { Pencil, Trash } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button";

interface ButtonDeleteProps {
  id: string;
  mutation: any;
  loading: any;
}

const ButtonDelete: React.FC<ButtonDeleteProps> = ({ mutation, loading, id }) => {
  // const [deleteUser, { loading }] = useDeleteUserMutation();
  const handleDelete = async () => {
    if (!confirm("Apakah Anda yakin ingin menghapus data ini?")) return;
    try {
      await mutation({
        variables: { data: id }
      });

      alert("Data berhasil dihapus!");
      location.reload()
    } catch (err) {
      console.error("Gagal menghapus data:", err);
    }
  };
  return (
    <Button onClick={handleDelete} disabled={loading} className="bg-red-500 hover:bg-red-700">
      <Trash /> {"Hapus"}
    </Button>
  )
}

export default ButtonDelete