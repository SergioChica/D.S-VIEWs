import React from 'react'

export const Button = ({Text, width="38%"}) => {
  return (
    <>
    <button className={` w-[${width}] text-[33px] text-white bg-gradient-to-r from-[#381975]  to-[#692FDB] p-1 rounded-[10px] shadow-md `}>{Text}</button>
    </>
  )
}
