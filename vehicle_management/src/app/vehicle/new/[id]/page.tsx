import React from 'react'

const page = async ({params}) => {
    const vehicle=await params
  return (
    <div className="w-[95%] flex flex-wrap p-5 shadow-md rounded-md bg-gray-100 m-2 text-gray-500 text-xl">
        <label className="input flex items-center gap-2 m-2 outline-none focus:border-0 ">
            Vehicle Name
            <input type="text" className="grow" placeholder="name..." />
        </label>
        <label className="input flex items-center gap-2 m-2 outline-none focus:border-0 ">
            Vehicle Type
            <input type="text" className="grow" placeholder="type..." />
        </label>
        <select className="select select-bordered w-full max-w-xs m-2">
            <option disabled={true} selected>Vehicle Status?</option>
            <option>Pending</option>
            <option>Active</option>
        </select>
        <div className="w-full pl-4">
        <button className="btn btn-success text-white">Add new</button>
        </div>
    </div>
  )
}

export default page