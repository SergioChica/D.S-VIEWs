import React from 'react'

export const Buttonlog = ({Text, width="38%"}) => {
  return (
    <>
    <button className={` w-[${width}] text-[33px] text-white bg-gradient-to-r from-[#FF9F2E]  to-[#FE7A36] px-[6.5rem] py-2 rounded-[10px] shadow-md `}>{Text}</button>
    </>
  )
}

export const Buttonlog2 = ({Text, width="38%"}) => {
  return (
    <>
    <button className={` w-[${width}] mb-[3rem] mt-0 text-[33px] text-white bg-gradient-to-r from-[#692FDB]  to-[#381975] px-[6.5rem] py-2 rounded-[10px] shadow-md `}>{Text}</button>
    </>
  )
}

