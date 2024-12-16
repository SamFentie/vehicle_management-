import Link from 'next/link'
import React from 'react'
import { IoCaretBackOutline } from 'react-icons/io5'

const page = async ({params}) => {
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
            <div className="w-[95%] flex flex-wrap p-5 shadow-md rounded-md bg-gray-100 m-2 text-gray-500 text-xl">
                <label className="input flex items-center gap-2 m-2 outline-none focus:border-0 ">
                    Vehicle Name
                    <input defaultValue={information[1]} type="text" className="grow" placeholder="name..." />
                </label>
                <select className="select select-bordered w-full max-w-xs m-2">
                    <option disabled={true} selected={vehicle.id==='new'}>Vehicle Status?</option>
                    <option selected={information[2]==='Pending'}>Pending</option>
                    <option selected={information[2]==='Active'}>Active</option>
                </select>
                <div className="w-full pl-4">
               {vehicle.id==="new" ? <button className="btn btn-success text-white">Add new</button>:<button className="btn btn-error text-white">Update</button>}
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default page