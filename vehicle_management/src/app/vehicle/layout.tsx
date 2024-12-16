import React from 'react'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import DynamicTable from '../components/TableWithSearch/TableWithSearch'
import { VscAdd } from 'react-icons/vsc'
import Link from 'next/link'

const layout = ({ children }) => {
 
  return (
    <div className="ml-5 w-full">
    <SectionHeader>Vehicles</SectionHeader>
    <div className="mt-5 flex flex-wrap w-full h-full">
      <div className="mt-5 flex flex-wrap w-full">
        <div className="flex flex-row gap-2 w-full">
            <div className="tooltip w-20" data-tip="Add new vehicle">
                <Link href={'/vehicle/new/new'} className="btn btn-outline btn-success hover:text-white"><VscAdd /></Link>
            </div>
        </div>
        <div className="flex w-full">
              {children}
        </div>
      </div>
    </div>
  </div>
  )
}

export default layout