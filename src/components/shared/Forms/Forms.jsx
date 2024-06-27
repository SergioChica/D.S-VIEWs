import React from 'react'

import { InputForms } from '../InputForms/InputForms';
import { Button } from '../Button/Button';

import { FaUserCircle } from "react-icons/fa";

export const Forms = ({ }) => {
  return (
    <form className='absolute w-[600px] flex flex-col top-[50px] right-[190px] gap-[60px] items-center '>
      <div className='flex flex-col items-center gap-[20px] '>
        <h2 className='text-[#692FDB] font-medium text-[62px] '>Register</h2>
        <FaUserCircle className='text-[80px] text-[#692FDB] ' />
      </div>
      <div className='flex flex-col items-center gap-[40px]'>
        <label className='flex flex-wrap justify-between gap-y-[20px] '>
          <InputForms placeholder='Pon tu correo' />
          <InputForms placeholder='Pon tu local' />
          <InputForms placeholder='Pon tu local' />
          <InputForms placeholder='Pon tu direccion' />
          <InputForms placeholder='Pon tu direccion' />
          <InputForms placeholder='Pon tu direccion' />
        </label>
        <Button Text={'Contactanos'} />
      </div>
    </form>
  )
}
