"use client"
import { Pencil } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button";

interface ButtonDetailProps {
  endpoint: string;
  id: string;
  label?: string;
  hideIcon?: boolean;
  customClass?: string;
}

const ButtonDetail: React.FC<ButtonDetailProps> = ({ endpoint, id, label, hideIcon = false, customClass }) => {

  return (
    <Button variant="default" onClick={() => window.location.href = endpoint + id} className={`c ${customClass}`}>
        <Pencil className={hideIcon ? "hidden" : ""} /> {label || "Detail"}
    </Button>
  )
}

export default ButtonDetail