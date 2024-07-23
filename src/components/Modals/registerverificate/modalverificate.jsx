import React from 'react'
// import { IoClose } from "react-icons/io5"
import { IoCloseOutline } from "react-icons/io5";

export const Modalverificate = ({ closeIcon, closeButton, visibility }) => {
    return (
        <div className={visibility ? ' w-screen h-screen flex justify-center items-center fixed top-0 left-0 bg-[#00000080] z-[9999999999] ' : 'hidden'}>
            <div className='w-[40%] h-[85%] bg-[#F0ECE3] flex flex-col justify-center items-center rounded-[10px] pb-[10px] animate-modal relative'>
                <IoCloseOutline fontSize={50} onClick={closeIcon} className='cursor-pointer absolute right-4 top-3 text-[#2F2E41] ' />
                <div className='w-[90%] h-[85%] flex flex-col items-center justify-between relative '>
                    <div className='w-[100%] h-[25%] flex flex-col items-center justify-end pr-[5px] pl-[5px] relative'>
                        
                    <svg width="495" height="453" viewBox="0 0 495 453" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_242_169)">
<path d="M240.088 430.794C186.797 387.842 241.425 329.211 121.347 380.609C1.26943 432.008 -28.0562 272.965 40.3359 208.845C108.728 144.726 -23.329 6.05728 126.489 50.7436C276.307 95.43 198.148 -3.03328 271.495 0.549879C334.673 3.63624 351.015 72.2379 354.332 91.2015C354.868 94.262 356.516 96.924 359.071 98.579C385.418 115.646 531.16 213.969 479.189 268.433C463.235 285.152 450.872 291.171 428.442 297.956C393.428 308.548 332.425 290.833 349.529 349.498C366.632 408.163 293.379 473.747 240.088 430.794Z" fill="url(#paint0_linear_242_169)"/>
</g>
<defs>
<filter id="filter0_dd_242_169" x="0.132812" y="0.454102" width="494.168" height="452.164" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_242_169"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_242_169" result="effect2_dropShadow_242_169"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_242_169" result="shape"/>
</filter>
<linearGradient id="paint0_linear_242_169" x1="-10.511" y1="95.8592" x2="422.589" y2="361.195" gradientUnits="userSpaceOnUse">
<stop offset="0.307562" stop-color="#503A7A"/>
<stop offset="0.76" stop-color="#692FDB"/>
</linearGradient>
</defs>
</svg>


                    </div>


                </div>
            </div>
        </div>
    )
}
