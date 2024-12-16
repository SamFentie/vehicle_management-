import React, { ReactNode } from 'react'
type Props={
    children:ReactNode
}
const SectionHeader = ({children}:Props) => {
  return (
    <div className='px-4 w-fit h-10 bg-white rounded-md flex flex-row justify-around text-xl items-center text-gray-500'>{children}</div>
  )
}

export default SectionHeader