import React from 'react'
import { Buttonfilter, ButtomHome } from '../../Shared/Button/Buttons'
import { Perfilcontenedor } from '../../Shared/InputForms/InputForms';
import { useLocation } from 'wouter'
import { IoMdArrowRoundBack } from "react-icons/io";


export const Registerlist = () => {
  const [location, setLocation] = useLocation();
  return (
    <div className=' bg-[#F0ECE3] w-full h-full flex flex-col flex-1 items-center relative py-[2.5%]'>
    <label className="flex flex-col items-start justify-start ">
      <input className='w-[40rem] h-[4rem] bg-white text-[25px]  placeholder-[#3F3D56] px-5 border-[3px] border-[#3F3D56] rounded-[10px]' type="text" placeholder='Ingresa tu documento...'/>
    </label>

    <div className='flex items-center justify-center w-[80rem] h-full mt-[3rem]'>
  <div onClick={() => setLocation("/")}>
  <ButtomHome Text={'Regresar'} customClassName={'m-[0.5rem] text-[30px] absolute left-[12rem] top-[3%] text-black bg-[#F0ECE3] px-[1.5rem] py-[0.5rem] rounded-[10px] shadow-xl border-2 border-transparent transition-transform transform hover:-translate-y-2 hover:border-[#3B3A50] duration-1000'} />
  </div>

  <Buttonfilter Text={'Horario'} customClassName={'m-[1rem] text-[30px] text-black bg-[#F0ECE3] px-[1.5rem] py-[0.5rem] rounded-[10px] shadow-xl border-2 border-transparent transition-transform transform hover:-translate-y-3 hover:border-[#3B3A50] duration-1000'} />
  <Buttonfilter Text={'Categoria'} customClassName={'m-[1rem] text-[30px] text-black bg-[#F0ECE3] px-[1.5rem] py-[0.5rem] rounded-[10px] shadow-xl border-2 border-transparent transition-transform transform hover:-translate-y-3 hover:border-[#3B3A50] duration-1000'} />
  <Buttonfilter Text={'Estado'} customClassName={'m-[1rem] text-[30px] text-black bg-[#F0ECE3] px-[1.5rem] py-[0.5rem] rounded-[10px] shadow-xl border-2 border-transparent transition-transform transform hover:-translate-y-3 hover:border-[#3B3A50] duration-1000'} />
</div>

    <h1 className='text-[3rem] mt-[20px]'>Usuarios Registrados</h1>
    <div className=' m-2 h-[full] w-[90%] flex flex-wrap justify-center items-center mb-[15px] '>
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
          customClassName={'m-[1rem] text-[14px] text-black bg-[#F0ECE3] pr-[0.5rem] py-[0.5rem] rounded-[10px] shadow-md border-2 border-[#3F3D56]'}
          Background={'bg-gradient-to-t from-[#3F3D56]  to-[#3F3D56]  to-[#381975] rounded-l-[10px]'}
          icon={'text-[#3F3D56]'}
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
          customClassName={'m-[1rem] text-[14px] text-black bg-[#F0ECE3] pr-[0.5rem] py-[0.5rem] rounded-[10px] shadow-md border-2 border-[#3F3D56]'}
          Background={'bg-gradient-to-t from-[#3F3D56]  to-[#3F3D56]  to-[#381975] rounded-l-[10px]'}
          icon={'text-[#3F3D56]'}
        />
    </div>

    <button className='bg-[#FE7A36] rounded-[5px] w-[4rem] h-[4rem] absolute bottom-[3rem] right-[5rem]' >
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

