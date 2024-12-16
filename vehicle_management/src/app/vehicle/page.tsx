import React from 'react'
import DynamicTable from '../components/TableWithSearch/TableWithSearch'
import Link from 'next/link'
import { VscAdd } from 'react-icons/vsc'


const page = () => {
  return (
    <div className="mt-5 flex flex-wrap w-full">
        <div className="flex flex-row gap-2 w-full">
            <div className="tooltip w-20" data-tip="Add new vehicle">
                <Link href={'/vehicle/new/new'} className="btn btn-outline btn-success hover:text-white "><VscAdd className='w-4 h-4'/></Link>
            </div>
        </div>
        <div className="flex w-full">
            <DynamicTable  path={"/vehicle/new/"}/>
        </div>
    </div>
  )
}

export default page