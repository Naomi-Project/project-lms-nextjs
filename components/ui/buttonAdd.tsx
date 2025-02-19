"use client"
import { Plus } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button";

interface ButtonAddProps {
  endpoint: string;
}

const ButtonAdd: React.FC<ButtonAddProps> = ({ endpoint }) => {
  return (
    
    <Button variant="default" onClick={() => window.location.href = endpoint}>
        <Plus /> Tambah Siswa
    </Button>
  )
}

export default ButtonAdd