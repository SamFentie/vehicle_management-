import React from 'react'
import SectionHeader from '../components/SectionHeader/SectionHeader'


const layout = ({ children }) => {
 
  return (
    <div className="ml-5 w-full">
    <SectionHeader>Vehicles</SectionHeader>
    <div className="mt-5 flex flex-wrap w-full h-full">
      {children}
    </div>
  </div>
  )
}

export default layout