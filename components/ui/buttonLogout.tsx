"use client"
import { LinkIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ButtonLogout = () => {
    const handleLogout = () => {
        localStorage.removeItem('authToken')
        window.location.href = "/"
    }
  return (
    <Link href='' onClick={() => handleLogout()} className="w-full">
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-1">
          <LinkIcon className="mr-2 h-4 w-4" />
        </div>

        <div className="col-span-9">
          <p>Logout</p>
        </div>
      </div>
    </Link>
  )
}

export default ButtonLogout