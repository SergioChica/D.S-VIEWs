import React from 'react'
import { ButtomHome } from '../../Shared/Button/Buttons'
import { Perfilcontenedor } from '../../Shared/InputForms/InputForms';
import { useLocation } from 'wouter'
import { IoMdArrowRoundBack } from "react-icons/io";


export const Asistence = () => {
  const [location, setLocation] = useLocation();
  return (
    <div className=' bg-[#F0ECE3] w-full h-full flex flex-col flex-1 items-center relative '>

      <div className='flex items-center justify-center   w-full h-full mt-[4rem]'>

        <div onClick={() => setLocation("/")} >
        <ButtomHome Text={'Regresar'} customClassName={'m-[0.5rem] text-[30px] absolute left-[12rem] top-[3%] text-black bg-[#F0ECE3] px-[1.5rem] py-[0.5rem] rounded-[10px] shadow-xl border-2 border-transparent transition-transform transform hover:-translate-y-2 hover:border-[#3B3A50] duration-1000'} />
        </div>
      </div>
      <label className="flex flex-col items-center justify-center">
        <input className='w-[40rem] h-[4rem] bg-white text-[25px] placeholder-[#3F3D56] px-5 border-[6px] border-[#3F3D56] rounded-[10px]' type="text" placeholder='Ingresa tu documento...' />
      </label>
      <h1 className='text-[3rem] m-[4rem]'>Asistencia del dia</h1>
      <div className=' h-full w-[80%] flex flex-wrap justify-evenly '>
        <Perfilcontenedor
          nombre={'Jeronimo Arias Mosquera'}
          documento={'CC:1092456050'}
          customClassName={'m-[1rem] text-[14px] text-black bg-[#F0ECE3] pr-[0.5rem] py-[0.5rem] rounded-[10px] shadow-md border-2 border-[#FE8D32]'}
          Background={'bg-gradient-to-t from-[#FF9F2E]  to-[#FE7A36] rounded-l-[10px]'}
          icon={'text-[#FE8D32]'}
        />

        <Perfilcontenedor
          nombre={'Jeronimo Arias Mosquera'}
          documento={'CC:1092456050'}
          customClassName={'m-[1rem] text-[14px] text-black bg-[#F0ECE3] pr-[0.5rem] py-[0.5rem] rounded-[10px] shadow-md border-2 border-[#5023A7]'}
          Background={'bg-gradient-to-t from-[#692FDB]  to-[#381975] rounded-l-[10px]'}
          icon={'text-[#5023A7]'}
        />
        <Perfilcontenedor
          nombre={'Jeronimo Arias Mosquera'}
          documento={'CC:1092456050'}
          customClassName={'m-[1rem] text-[14px] text-black bg-[#F0ECE3] pr-[0.5rem] py-[0.5rem] rounded-[10px] shadow-md border-2 border-[#5023A7]'}
          Background={'bg-gradient-to-t from-[#692FDB]  to-[#381975] rounded-l-[10px]'}
          icon={'text-[#5023A7]'}
        />
        <Perfilcontenedor
          nombre={'Jeronimo Arias Mosquera'}
          documento={'CC:1092456050'}
          customClassName={'m-[1rem] text-[14px] text-black bg-[#F0ECE3] pr-[0.5rem] py-[0.5rem] rounded-[10px] shadow-md border-2 border-[#3F3D56]'}
          Background={'bg-gradient-to-t from-[#3F3D56]  to-[#3F3D56]  to-[#381975] rounded-l-[10px]'}
          icon={'text-[#3F3D56]'}
        />
        <Perfilcontenedor
          nombre={'Jeronimo Arias Mosquera'}
          documento={'CC:1092456050'}
          customClassName={'m-[1rem] text-[14px] text-black bg-[#F0ECE3] pr-[0.5rem] py-[0.5rem] rounded-[10px] shadow-md border-2 border-[#3F3D56]'}
          Background={'bg-gradient-to-t from-[#3F3D56]  to-[#3F3D56]  to-[#381975] rounded-l-[10px]'}
          icon={'text-[#3F3D56]'}
        />
        <Perfilcontenedor
          nombre={'Jeronimo Arias Mosquera'}
          documento={'CC:1092456050'}
          customClassName={'m-[1rem] text-[14px] text-black bg-[#F0ECE3] pr-[0.5rem] py-[0.5rem] rounded-[10px] shadow-md border-2 border-[#FE8D32]'}
          Background={'bg-gradient-to-t from-[#FF9F2E]  to-[#FE7A36] rounded-l-[10px]'}
          icon={'text-[#FE8D32]'}
        />
        <Perfilcontenedor
          nombre={'Jeronimo Arias Mosquera'}
          documento={'CC:1092456050'}
          customClassName={'m-[1rem] text-[14px] text-black bg-[#F0ECE3] pr-[0.5rem] py-[0.5rem] rounded-[10px] shadow-md border-2 border-[#FE8D32]'}
          Background={'bg-gradient-to-t from-[#FF9F2E]  to-[#FE7A36] rounded-l-[10px]'}
          icon={'text-[#FE8D32]'}
        />
        <Perfilcontenedor
          nombre={'Jeronimo Arias Mosquera'}
          documento={'CC:1092456050'}
          customClassName={'m-[1rem] text-[14px] text-black bg-[#F0ECE3] pr-[0.5rem] py-[0.5rem] rounded-[10px] shadow-md border-2 border-[#FE8D32]'}
          Background={'bg-gradient-to-t from-[#FF9F2E]  to-[#FE7A36] rounded-l-[10px]'}
          icon={'text-[#FE8D32]'}
        />
      </div>
    </div>

  )
}

