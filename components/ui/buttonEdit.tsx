"use client"
import { Pencil } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button";

interface ButtonEditProps {
  endpoint: string;
  id: string;
}

const ButtonEdit: React.FC<ButtonEditProps> = ({ endpoint, id }) => {

  return (
    <Button variant="default" onClick={() => window.location.href = '/managements/manager/student/edit/' + id}>
        <Pencil /> Edit
    </Button>
  )
}

export default ButtonEdit