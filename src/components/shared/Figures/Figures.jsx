import React from 'react'
import { useLocation } from 'wouter'



export const Namelocal = () => {
    const [location, setLocation] = useLocation();
    return (
        <div className='bg-gradient-to-r from-[#1E1E1E]  to-[#444444] w-[14rem] h-[13rem] rounded flex justify-center items-center  '>
            <div className='bg-[#D2D2D2] w-[11.5rem] h-[10.5rem] rounded flex justify-center items-center' >
                <svg width="105" height="112" viewBox="0 0 105 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51 13L51 99" stroke="#1E1E1E" stroke-width="25" stroke-linecap="round" />
                    <path d="M92 53L13 53.9997" stroke="#1E1E1E" stroke-width="25" stroke-linecap="round" />
                </svg>

            </div>
        </div>
    )
}