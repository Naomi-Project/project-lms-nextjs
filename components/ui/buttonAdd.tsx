"use client";

import { Plus } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ButtonAddProps {
  endpoint: string;
  className?: string; 
  label?: string;
}

const ButtonAdd: React.FC<ButtonAddProps> = ({ endpoint, label, className }) => {
  const router = useRouter(); 

  return (
    <Button variant="default" className={className} onClick={() => router.push(endpoint)}>
      <Plus /> {label || "Tambah"}
    </Button>
  );
};

export default ButtonAdd;
