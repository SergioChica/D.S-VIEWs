import React from 'react'
import { Buttonfilter } from '../../shared/Button/Buttons'
import { FaUserCircle } from "react-icons/fa";
import { Perfilcontenedor } from '../../shared/InputForms/InputForms';
import { useLocation } from 'wouter'


export const Home = () => {
  const [location, setLocation] = useLocation();
  return (
    <div className=' bg-[#F0ECE3] w-full h-full flex flex-col flex-1 items-center relative'>
      <div className=' w-[50rem] flex items-center justify-between mt-[3rem]'>
        <div className='w-[4.6rem] h-[4.6rem] bg-[#FE7A36] flex items-center justify-center rounded-full cursor-pointer'>
        <FaUserCircle className="text-[60px] text-white " />
        </div>
      <svg className='cursor-pointer' width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6914 29.3145C9.4375 29.3145 6.81055 31.5703 6.81055 36.082C6.81055 40.8672 9.55469 44.0508 15.043 45.6328C17.2695 46.2969 19.7891 46.6484 22.6016 46.6875V52.1953C15.6484 52.1953 10.1992 50.5645 6.25391 47.3027C2.71875 44.3535 0.951172 40.6133 0.951172 36.082C0.951172 31.4531 2.93359 28.1328 6.89844 26.1211C8.42188 25.3398 10.3457 24.8906 12.6699 24.7734V21.1699H17.6504V29.4316C16.8691 29.3535 15.8828 29.3145 14.6914 29.3145ZM18.998 13.9922C18.998 15.125 18.6367 15.9941 17.9141 16.5996C17.1914 17.2051 16.2734 17.5078 15.1602 17.5078C14.0469 17.5078 13.1191 17.2051 12.377 16.5996C11.6348 15.9941 11.2637 15.125 11.2637 13.9922C11.2637 12.8594 11.6348 11.9902 12.377 11.3848C13.1191 10.7793 14.0469 10.4766 15.1602 10.4766C16.2734 10.4766 17.1914 10.7793 17.9141 11.3848C18.6367 11.9902 18.998 12.8594 18.998 13.9922Z" fill="#FE7A36"/>
<path d="M38.8906 23.8652C44.1445 23.8652 46.7715 21.6094 46.7715 17.0977C46.7715 12.3125 44.0273 9.12891 38.5391 7.54688C36.3125 6.88281 33.793 6.53125 30.9805 6.49219V0.984375C37.9336 0.984375 43.3828 2.61523 47.3281 5.87695C50.8633 8.82617 52.6309 12.5664 52.6309 17.0977C52.6309 21.7266 50.6484 25.0469 46.6836 27.0586C45.1602 27.8398 43.2363 28.2891 40.9121 28.4062V32.0098H35.9316V23.748C36.7129 23.8262 37.6992 23.8652 38.8906 23.8652ZM34.584 39.1875C34.584 38.0547 34.9453 37.1855 35.668 36.5801C36.3906 35.9746 37.3086 35.6719 38.4219 35.6719C39.5352 35.6719 40.4629 35.9746 41.2051 36.5801C41.9473 37.1855 42.3184 38.0547 42.3184 39.1875C42.3184 40.3203 41.9473 41.1895 41.2051 41.7949C40.4629 42.4004 39.5352 42.7031 38.4219 42.7031C37.3086 42.7031 36.3906 42.4004 35.668 41.7949C34.9453 41.1895 34.584 40.3203 34.584 39.1875Z" fill="#692FDB"/>
</svg>
      </div>
    <div className='flex items-center justify-center  w-[80rem] h-full mt-[5px]'>
    <Buttonfilter Text={'Horario'} customClassName={'m-[1rem] text-[30px] text-white bg-gradient-to-r from-[#FF9F2E]  to-[#FE7A36] px-[3rem] py-[0.5rem] rounded-[10px] shadow-md '}/>
    <Buttonfilter Text={'Categoria'} customClassName={'m-[1rem] text-[30px] text-white bg-gradient-to-r from-[#692FDB]  to-[#381975] px-[2rem] py-[0.5rem] rounded-[10px] shadow-md '}/>
    <Buttonfilter Text={'Membresia'} customClassName={'m-[1rem] text-[30px] text-white bg-gradient-to-r from-[#1E1E1E]  to-[#3F3D56] px-[1.5rem] py-[0.5rem] rounded-[10px] shadow-md '}/>
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

