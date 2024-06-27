import React from 'react'

export const InputForms = ({placeholder}) => {
  return (
    <>
    <div className='w-[272px] h-[64px]  p-1 rounded-[4px] bg-gradient-to-r from-[#FE7A36]  to-[#692FDB] '>
      <div className=' w-full h-full bg-[#efeeee] flex items-center justify-center'>
            <input type="text" placeholder={placeholder} className='w-full h-full text-[#3f3d56] placeholder-[#3f3d56] bg-[#efeeee] text-[25px] indent-[20px] rounded-[4px] ' />
      </div>
    </div>
    </>
  )
}


