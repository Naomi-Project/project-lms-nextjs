"use client"
import { Pencil } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button";

interface ButtonEditProps {
  endpoint: string;
  id: string;
  label?: string;
  hideIcon?: boolean;
}

const ButtonEdit: React.FC<ButtonEditProps> = ({ endpoint, id, label, hideIcon = false }) => {

  return (
    <Button variant="default" onClick={() => window.location.href = endpoint + id}>
        <Pencil className={hideIcon ? "hidden" : ""} /> {label || "Edit"}
    </Button>
  )
}

export default ButtonEdit