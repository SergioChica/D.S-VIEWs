import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from 'wouter'



export const Home = () => {
  const [location, setLocation] = useLocation();
  return (
    <div className=' bg-[#F0ECE3] w-full h-full flex flex-col flex-1 items-center relative'>
      <div className=' w-[50rem] flex items-center justify-between mt-[3rem]'>
<div >
  <ul className='flex items-center justify-around   my-[1.5rem] '>
<li><svg className='cursor-pointer' width="62" height="71" viewBox="0 0 62 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6914 47.3145C13.4375 47.3145 10.8105 49.5703 10.8105 54.082C10.8105 58.8672 13.5547 62.0508 19.043 63.6328C21.2695 64.2969 23.7891 64.6484 26.6016 64.6875V70.1953C19.6484 70.1953 14.1992 68.5645 10.2539 65.3027C6.71875 62.3535 4.95117 58.6133 4.95117 54.082C4.95117 49.4531 6.93359 46.1328 10.8984 44.1211C12.4219 43.3398 14.3457 42.8906 16.6699 42.7734V39.1699H21.6504V47.4316C20.8691 47.3535 19.8828 47.3145 18.6914 47.3145ZM22.998 31.9922C22.998 33.125 22.6367 33.9941 21.9141 34.5996C21.1914 35.2051 20.2734 35.5078 19.1602 35.5078C18.0469 35.5078 17.1191 35.2051 16.377 34.5996C15.6348 33.9941 15.2637 33.125 15.2637 31.9922C15.2637 30.8594 15.6348 29.9902 16.377 29.3848C17.1191 28.7793 18.0469 28.4766 19.1602 28.4766C20.2734 28.4766 21.1914 28.7793 21.9141 29.3848C22.6367 29.9902 22.998 30.8594 22.998 31.9922Z" fill="#FE7A36"/>
<path d="M42.8906 41.8652C48.1445 41.8652 50.7715 39.6094 50.7715 35.0977C50.7715 30.3125 48.0273 27.1289 42.5391 25.5469C40.3125 24.8828 37.793 24.5312 34.9805 24.4922V18.9844C41.9336 18.9844 47.3828 20.6152 51.3281 23.877C54.8633 26.8262 56.6309 30.5664 56.6309 35.0977C56.6309 39.7266 54.6484 43.0469 50.6836 45.0586C49.1602 45.8398 47.2363 46.2891 44.9121 46.4062V50.0098H39.9316V41.748C40.7129 41.8262 41.6992 41.8652 42.8906 41.8652ZM38.584 57.1875C38.584 56.0547 38.9453 55.1855 39.668 54.5801C40.3906 53.9746 41.3086 53.6719 42.4219 53.6719C43.5352 53.6719 44.4629 53.9746 45.2051 54.5801C45.9473 55.1855 46.3184 56.0547 46.3184 57.1875C46.3184 58.3203 45.9473 59.1895 45.2051 59.7949C44.4629 60.4004 43.5352 60.7031 42.4219 60.7031C41.3086 60.7031 40.3906 60.4004 39.668 59.7949C38.9453 59.1895 38.584 58.3203 38.584 57.1875Z" fill="#692FDB"/>
</svg></li>
<li onClick={() => setLocation("/asitencia")}>
  <p className=' text-[35px] cursor-pointer text-[#1E1E1E]  '>Asistencia</p>
</li>
<li onClick={() => setLocation("/registeredlist")}>
<p className=' text-[35px] cursor-pointer text-[#1E1E1E] '>Registros</p>
</li>
<li>
<p className=' text-[35px] cursor-pointer text-[#F0ECE3]   '>Inventario</p>
</li>
<li>
  <FaUserCircle className='text-[70px] text-[#F0ECE3]  cursor-pointer' />
</li>
  </ul>
</div>
<div />
<svg className='fixed z-0 top-0 right-0' width="850" height="717" viewBox="0 0 457 569" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="385" cy="407" rx="385" ry="460" fill="url(#paint0_linear_694_3541)"/>
<defs>
<linearGradient id="paint0_linear_694_3541" x1="385" y1="-53" x2="385" y2="867" gradientUnits="userSpaceOnUse">
<stop stop-color="#692FDB"/>
<stop offset="1" stop-color="#381975"/>
</linearGradient>
</defs>
</svg>

<div className='fixed top-[9rem] left-[9rem] w-[30rem] text-center'>
  <p className='text-[35px] text-[#1E1E1E] '>Hola!!, <b className='text-[#FE7A36] text-[45px]'>D</b>.<b className='text-[#692FDB] text-[45px]'>S</b> (Data Sport) te da las gracias por confiar en nuestros servicios </p>
</div>


    </div>
    </div>
        

  )
}
