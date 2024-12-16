'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaCar, FaFileAlt, FaHome } from 'react-icons/fa'
import { GoOrganization, GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go'
import { GrChapterAdd } from 'react-icons/gr'
import { IoIosArrowForward, IoMdContact, IoMdPersonAdd } from 'react-icons/io'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { TbNetwork, TbPasswordUser } from 'react-icons/tb'

import { CiLogout } from 'react-icons/ci'
import { BsStack } from 'react-icons/bs'
import { GiOrganigram } from 'react-icons/gi'


const NavigationBar = ({username=''}:{username:string}) => {
  const [sideMenu,setSideMenu]=useState(true)
  const [page,setPage]=useState("")
  function getFirstSegment(url:string) {
    const match = url.match(/^https?:\/\/[^\/]+\/([^\/?]+)/);
    return match ? match[1] : null;
 }
 useEffect(() => {
    if (typeof window !== "undefined") {
      const getFirstSegment = (url: string) => {
        const path = url.split("/")[3];
        return path ? path.split(/[/?]/)[0] : "";
      };
      setPage(getFirstSegment(window.location.href));
    }
  }, []);
  return (
    <div className={`${sideMenu?'min-w-[20vw]':'w-14'} bg-white shadow-lg m-3 rounded-md`}>
            {/* Menu icon */}
            
            <button onClick={()=>setSideMenu((prev)=>!prev)}>
                  {sideMenu?
                        <GoSidebarExpand className="w-10 h-10 bg-slate-200 rounded-br-md p-1"/>
                     
                  :<GoSidebarCollapse className="w-10 h-10 bg-slate-200 rounded-br-md p-1"/>  
                  }
                    </button>
                    
            
            
            {/* Pages */}
            <div  className="flex flex-col gap-2 mt-3 justify-center w-[100%] p-2 cursor-pointer">
                
                < div className='flex flex-row w-full justify-between text-gray-500 border-[1.5px] border-gray-400 rounded-md items-center'>
                    {sideMenu?
                        <a href="" target="_blank" className="p-1 flex flex-row gap-1 items-center cursor-pointer">
                                <div className="tooltip" data-tip="Profile">
                                    <IoMdContact className="w-5 h-5"/>
                                </div>
                                <p className='text-gray-500'>{username}</p>
                        </a>:<></>}
                        <div className="tooltip" data-tip="Logout"><CiLogout  className='w-5 h-5'/></div>
                    
                    
                </div>
                {/* Page */}
                <Link href={'/vehicle'} onClick={()=>setPage('vehicle')} className="text-gray-500 flex flex-row justify-between items-center rounded-md hover:bg-slate-100 min-h-[5vh]">
                    <div className="flex flex-row rounded-md gap-4 items-center w-[80%] mx-2 ">
                        <FaCar className='w-5 h-5'/> {sideMenu&&<span>Vehicles</span>}
                    </div>
                    {page==='vehicle'?<MdKeyboardDoubleArrowRight className='w-6 h-6'/>:<IoIosArrowForward className='w-5 h-5'/>}
                </Link>
                

            </div>
          </div>
  )
}

export default NavigationBar