import React from 'react'

export const Button = ({Text}) => {
  return (
    <>
    <button className={` w-[38%] text-[33px] text-white bg-gradient-to-r from-[#381975]  to-[#692FDB] p-1 rounded-[10px] shadow-md `}>{Text}</button>
    </>
  )
}
