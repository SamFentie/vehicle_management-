import InputFields from '@/app/components/InputFields/InputFields'
import Link from 'next/link'
import React from 'react'
import { IoCaretBackOutline } from 'react-icons/io5'

const page = async ({params}:any) => {
    const vehicle=await params
    let information=['','','']
    if(vehicle.id!=="new")
        information=vehicle.id.split("%26%26")
  return (
    <div className="mt-5 flex flex-wrap w-full">
        <div className="flex flex-row gap-2 w-full">
            <div className="tooltip w-20" data-tip="Add new vehicle">
                <Link href={'/vehicle'} className="btn btn-outline btn-success hover:text-white "><IoCaretBackOutline className='w-4 h-4'/></Link>
            </div>
        </div>
        <div className="flex w-full">
           <InputFields information={information}/> 
    </div>
    </div>
  )
}

export default page