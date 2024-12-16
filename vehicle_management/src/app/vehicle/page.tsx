import React from 'react'
import DynamicTable from '../components/TableWithSearch/TableWithSearch'
import Link from 'next/link'
import { VscAdd } from 'react-icons/vsc'


const page = () => {
    const thing=[
        {'ID':'1','Name':'BMW-89','Status':'Pending','Last update':'Department'},
        {'ID':'1','Name':'KARET','Status':'Pending','Last update':'Department'},
        {'ID':'1','Name':'JKKL','Status':'Active','Last update':'Department'},
        {'ID':'1','Name':'mJKJ','Status':'Active','Last update':'Department'},
        {'ID':'1','Name':'ENTO','Status':'Pending','Last update':'Department'}
    ]
  return (
    <div className="mt-5 flex flex-wrap w-full">
        <div className="flex flex-row gap-2 w-full">
            <div className="tooltip w-20" data-tip="Add new vehicle">
                <Link href={'/vehicle/new/new'} className="btn btn-outline btn-success hover:text-white "><VscAdd className='w-4 h-4'/></Link>
            </div>
        </div>
        <div className="flex w-full">
            <DynamicTable data={thing} path={"vehicle/new/"}/>
        </div>
    </div>
  )
}

export default page