import React from 'react'

export const ButtonUsers = ({Text, width="38%", onClick}) => {
  return (
    <>
    <button type='submit' className={` w-[${width}] text-[33px] text-white bg-gradient-to-r from-[#FE7A36]  to-[#FF9F2E] px-9 py-1 rounded-[10px] shadow-md `} onClick={onClick}>{Text}</button>
    </>
  )
}

export const Buttonlog = ({Text, width}) => {
  return (
    <>
    <button onClick={() => onClick && onClick()} className={` w-[${width}] mb-[2rem] mt-[1rem] text-[30px] text-white bg-gradient-to-r from-[#FF9F2E]  to-[#FE7A36] px-[3rem] py-[0.5rem] rounded-[10px] shadow-md `}>{Text}</button>
    </>
  )
}

export const Buttonlog2 = ({onClick,Text, width}) => {
  return (
    <div >
    <button type='button'  onClick={onClick} className={` w-[${width}] mb-[2rem] mt-[1rem] text-[30px] text-white bg-gradient-to-r from-[#692FDB]  to-[#381975] px-[3rem] py-[0.5rem] rounded-[10px] shadow-md `}>{Text}</button>
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


export const Buttonhome = ({Text,customClassName}) => {
  return (
    <div>
      <button className={`${customClassName} w-[20rem] text-[30px] rounded-[20px] py-[0.5rem]`}>{Text}</button>
    </div>
  )
}


