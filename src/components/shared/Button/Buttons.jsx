import React from 'react'

export const Buttonlog = ({Text, width}) => {
  return (
    <>
    <button className={` w-[${width}] mb-[2rem] mt-[1rem] text-[30px] text-white bg-gradient-to-r from-[#FF9F2E]  to-[#FE7A36] px-[3rem] py-[0.5rem] rounded-[10px] shadow-md `}>{Text}</button>
    </>
  )
}

export const Buttonlog2 = ({Text, width}) => {
  return (
    <div >
    <button onClick={() => onClick()} className={` w-[${width}] mb-[2rem] mt-[1rem] text-[30px] text-white bg-gradient-to-r from-[#692FDB]  to-[#381975] px-[3rem] py-[0.5rem] rounded-[10px] shadow-md `}>{Text}</button>
    </div>
  )
}

export const Buttonfilter = ({Text, width, customClassName }) => {
  return (
    <>
    <button className={`${customClassName} w-[${width}] mb-[2rem] mt-[1rem] text-[30px] text-white px-[3rem] py-[0.5rem] rounded-[10px] shadow-md `}>{Text}</button>
    </>
  )
}

