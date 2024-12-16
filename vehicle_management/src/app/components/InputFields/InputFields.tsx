'use client'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const InputFields = ({information}:{information:string[]}) => {
    const [id,setID]=useState(information[0])
    const [name,setName]=useState(information[1].replaceAll("%20",' '))
    const [status,setStatus]=useState(information[2])
    const [newButton,setNewButton]=useState('active')
    const [updateButton,setUpdateButton]=useState('active')
    const [deleteButton,setDeleteButton]=useState('active')
    const new_vehicle=async()=>{
        setNewButton('loading')
        try {
            // Send data to your API endpoint
            const response = await fetch("/api/new", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ 
                "name": name,
                "status": status}),
            });
      
            if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
            }
            const result = await response.json();
            if(result.status===200)
                toast.success('Success!', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light",});
            else  
                toast.error('Error Pleas try again?', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light",});
            setUpdateButton('active')
            setName('')
            setStatus('')
            setNewButton('active')
          } catch (error) {
            toast.error('Error Pleas try again?', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light",});
            setNewButton('active')
          }
       }
       const update_vehicle=async()=>{
        try {
            // Send data to your API endpoint
            const response = await fetch("/api/update", {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ "id":id, "name": name,"status": status}),
            });
      
            if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
            }
            const result = await response.json();
            if(result.status===200)
                toast.success('Success!', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light",});
            else  
                toast.error('Error Pleas try again?', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light",});
            setUpdateButton('active')
        } catch (error) {
            console.error("Error sending data:", error);
            toast.error('Error Pleas try again?', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light",});
            setUpdateButton('active')
          }
       }
       const delete_vehicle=async()=>{
        try {
            // Send data to your API endpoint
            const response = await fetch("/api/delete", {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ "id":id}),
            });
      
            if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
            }
            const result = await response.json();
            if(result.status===200)
                toast.success('Success!', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light",});
            else  
                toast.error('Error Pleas try again?', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light",});
            setUpdateButton('active')
            
          } catch (error) {
            console.error("Error sending data:", error);
          }
       }
  return (
    <div className="w-[95%] flex flex-wrap p-5 shadow-md rounded-md bg-gray-100 m-2 text-gray-500 text-xl">
                 <ToastContainer/>

                <label className="input flex items-center gap-2 m-2 outline-none focus:border-0 ">
                    Vehicle Name
                    <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="grow" placeholder="name..." />
                </label>
                <select onChange={(e)=>setStatus(e.target.value)} className="select select-bordered w-full max-w-xs m-2">
                    <option disabled={true} selected={status===''}>Vehicle Status?</option>
                    <option value='Pending' selected={status==='Pending'}>Pending</option>
                    <option value='Active' selected={status==='Active'}>Active</option>
                </select>
                <div className="w-full pl-4">
                    {information[0]==="" ? 
                    <button disabled={newButton==='loading'} onClick={new_vehicle} className="btn btn-success text-white">Add new {newButton==='loading'&&<span className="loading loading-spinner loading-xs"></span>}</button>:
                    <div className=" flex flex-row gap-4"> 
                            <button onClick={update_vehicle} className="btn btn-warning text-white">Update {updateButton==='loading'&&<span className="loading loading-spinner loading-xs"></span>}</button>
                            <button onClick={delete_vehicle} className="btn btn-error text-white">Delete {deleteButton==='loading'&&<span className="loading loading-spinner loading-xs"></span>}</button>
                    </div>}
            </div>
        </div>
  )
}

export default InputFields