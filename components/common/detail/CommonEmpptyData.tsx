import { X } from 'lucide-react'
import React from 'react'

const CommonEmpptyData = () => {
  return (
    <div className='w-full h-full flex flex-col  items-center justify-center'>
        <div className='bg-white flex flex-col w-full gap-5 h-[400px] justify-center items-center  rounded-md p-10'>
            <div className='bg-red-500 !text-white p-3 rounded-full'>
                <X className='' />
            </div>
            <span>Upss.. Data Belum Ada.</span>
        </div>
    </div>
  )
}

export default CommonEmpptyData