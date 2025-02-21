"use client"
import { Plus } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button";

interface ButtonAddProps {
  endpoint: string;
  label?: string;
}

const ButtonAdd: React.FC<ButtonAddProps> = ({ endpoint, label }) => {
  return (
    
    <Button variant="default" onClick={() => window.location.href = endpoint}>
        <Plus /> {label || "Tambah"}
    </Button>
  )
}

export default ButtonAdd