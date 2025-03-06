"use client"
import { Button } from '@/components/ui/button'
import { useUserPayloadQuery } from '@/graphql/generated'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    const { data } = useUserPayloadQuery()
const redirect = "/dashboard/" + (data?.me.role === 'ADMIN' ? 'managers' : data?.me.role === 'STAFF' || data?.me.role === 'PRINCIPAL' ? 'admins' : data?.me.role.toLowerCase() + "s")
  return (
    <div className='w-screen flex-col h-screen bg-blue-900 text-white items-center flex justify-center'>
        <h1 className='mb-5'>Upps, Kamu Tidak Ada Akses Ke Halaman Ini</h1>
        <Link href={redirect}>
            <Button>Kembali Ke Dashboard</Button>
        </Link>
    </div>
  )
}

export default Page