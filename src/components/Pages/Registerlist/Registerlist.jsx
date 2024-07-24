import React from 'react'
import { Buttonfilter } from '../../Shared/Button/Buttons'
import { Perfilcontenedor } from '../../Shared/InputForms/InputForms';
import { useLocation } from 'wouter'
import { IoMdArrowRoundBack } from "react-icons/io";


export const Registerlist = () => {
  const [location, setLocation] = useLocation();
  return (
    <div className=' bg-[#F0ECE3] w-full h-full flex flex-col flex-1 items-center relative '>

    <div className='flex items-center justify-center   w-[80rem] h-full mt-[4rem]'>

    <div onClick= {() => setLocation("/Register")} >
<IoMdArrowRoundBack className='cursor-pointer text-[40px] text-[#1E1E1E] fixed left-[15rem] top-[6rem]' />
</div>


    <Buttonfilter Text={'Horario'} customClassName={'m-[1rem] text-[30px] text-white bg-gradient-to-r from-[#1E1E1E]  to-[#3F3D56] px-[1.5rem] py-[0.5rem] rounded-[10px] shadow-md '}/>
    <Buttonfilter Text={'Categoria'} customClassName={'m-[1rem] text-[30px] text-white bg-gradient-to-r from-[#1E1E1E]  to-[#3F3D56] px-[1.5rem] py-[0.5rem] rounded-[10px] shadow-md '}/>
    <Buttonfilter Text={'Estado'} customClassName={'m-[1rem] text-[30px] text-white bg-gradient-to-r from-[#1E1E1E]  to-[#3F3D56] px-[1.5rem] py-[0.5rem] rounded-[10px] shadow-md '}/>
    </div>
    <label className="flex flex-col items-center justify-center">
      <input className='w-[40rem] h-[4rem] bg-white text-[25px] placeholder-[#3F3D56] px-5 border-[6px] border-[#3F3D56] rounded-[10px]' type="text" placeholder='Ingresa tu documento...'/>
    </label>
    <h1 className='text-[3rem] mt-[20px]'>Asistencia del dia</h1>
    <div className=' h-[22rem] w-[34rem] overflow-y-scroll '>
    <Perfilcontenedor nombre={'Jeronimo arias msoquera'} documeto={'CC:1092456050'} customClassName={'m-[1rem] text-[18px] text-white bg-gradient-to-r from-[#FF9F2E]  to-[#FE7A36] px-[3rem] py-[0.5rem] rounded-[10px] shadow-md '} />   
    <Perfilcontenedor nombre={'Jeronimo arias msoquera'} documeto={'CC:1092456050'} customClassName={'m-[1rem] text-[18px] text-white bg-gradient-to-r from-[#692FDB]  to-[#381975] px-[3rem] py-[0.5rem] rounded-[10px] shadow-md '} /> 
    <Perfilcontenedor nombre={'Jeronimo arias msoquera'} documeto={'CC:1092456050'} customClassName={'m-[1rem] text-[18px] text-white bg-gradient-to-r from-[#3F3D56]  to-[#3F3D56] px-[3rem] py-[0.5rem] rounded-[10px] shadow-md '} />  
    <Perfilcontenedor nombre={'Jeronimo arias msoquera'} documeto={'CC:1092456050'} customClassName={'m-[1rem] text-[18px] text-white bg-gradient-to-r from-[#692FDB]  to-[#381975] px-[3rem] py-[0.5rem] rounded-[10px] shadow-md '} />
    <Perfilcontenedor nombre={'Jeronimo arias msoquera'} documeto={'CC:1092456050'} customClassName={'m-[1rem] text-[18px] text-white bg-gradient-to-r from-[#3F3D56]  to-[#3F3D56] px-[3rem] py-[0.5rem] rounded-[10px] shadow-md '} />  
    <Perfilcontenedor nombre={'Jeronimo arias msoquera'} documeto={'CC:1092456050'} customClassName={'m-[1rem] text-[18px] text-white bg-gradient-to-r from-[#FF9F2E]  to-[#FE7A36] px-[3rem] py-[0.5rem] rounded-[10px] shadow-md '} /> 
    <Perfilcontenedor nombre={'Jeronimo arias msoquera'} documeto={'CC:1092456050'} customClassName={'m-[1rem] text-[18px] text-white bg-gradient-to-r from-[#FF9F2E]  to-[#FE7A36] px-[3rem] py-[0.5rem] rounded-[10px] shadow-md '} /> 
    </div>

    <button className='bg-[#FE7A36] rounded-full w-[4rem] h-[4rem] absolute bottom-[3rem] right-[22rem]' >
      <div className='flex justify-center' onClick={() => setLocation("/createusers")}>
      <svg width="40" height="40" viewBox="0 0 105 112" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M51 13L51 99" stroke="#F0ECE3" stroke-width="25" stroke-linecap="round"/>
<path d="M92 53L13 53.9997" stroke="#F0ECE3" stroke-width="25" stroke-linecap="round"/>
</svg>
      </div>
    </button>

    </div>
  
  )
}

