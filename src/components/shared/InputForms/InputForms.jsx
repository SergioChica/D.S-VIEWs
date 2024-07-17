import React from 'react'

export const InputFormsreg = ({placeholder}) => {
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

export const InputFormslog = ({placeholder}) => {
  return (
    <>
    <div className='w-[380px] h-[64px]  p-1 rounded-[5px] bg-[#FE7A36]'>
      <div className=' w-full h-full bg-[#efeeee] flex items-center justify-center'>
            <input type="text" placeholder={placeholder} className='w-full h-full text-[#3f3d56] placeholder-[#3f3d56] bg-[#efeeee] text-[25px] indent-[20px] rounded-[4px] ' />
      </div>
    </div>
    </>
  )
}

export const InputFormslog2 = ({placeholder}) => {
  return (
    <>
    <div className='w-[380px] h-[64px]  p-1 rounded-[5px] bg-[#692FDB]'>
      <div className=' w-full h-full bg-[#efeeee] flex items-center justify-center'>
            <input type="text" placeholder={placeholder} className='w-full h-full text-[#3f3d56] placeholder-[#3f3d56] bg-[#efeeee] text-[25px] indent-[20px] rounded-[4px] ' />
      </div>
    </div>
    </>
  )
}

export const Inputrecuerdame = ({placeholder}) => {
  return (
    <>
      <div className='flex w-[50px] h-[30px] content-between'>
        <div className='w-[30px] h-[25px] rounded-[5px] border-[3px] border-[#3f3d56] '>
        <input type="checkbox" className='w-[20px] h-full rounded-[5px] ' />
        </div>
        <div className=' justify-center'>
        <p className='mx-2 text-[15px] placeholder-[#3f3d56] '>{placeholder}</p>
        </div>
      </div>
    </>
  )
}

export const Inputolvi = ({placeholder, onClick}) => {
  return (
      <div onClick={() => onClick && onClick()} className=' w-[220px] cursor-pointer'>
        <p className='w-[230px] placeholder-[#3f3d56] text-[15px]' >{placeholder}</p>
        <hr className='h-[4px] bg-[#3f3d56] rounded-[1px]' />
      </div>
      
  )
}



