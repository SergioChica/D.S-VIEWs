import React from 'react'
import { InputFormsreg, InputFormslog, Inputrecuerdame, Inputolvi} from '../InputForms/InputForms';
import { Buttonlog, Buttonreg } from '../Button/Buttons';
import { FaUserCircle } from "react-icons/fa";

export const Formsreg = ({ }) => {
  return (
    <form className='absolute w-[600px] flex flex-col top-[50px] right-[190px] gap-[60px] items-center '>
      <div className='flex flex-col items-center gap-[20px] '>
        <h2 className='text-[#692FDB] font-medium text-[62px] '>Registrate</h2>
        <FaUserCircle className='text-[80px] text-[#692FDB] ' />
      </div>
      <div className='flex flex-col items-center gap-[40px]'>
        <label className='flex flex-wrap justify-between gap-y-[20px] '>
          <InputFormsreg placeholder='Pon tu correo' />
          <InputFormsreg placeholder='Pon tu numero' />
          <InputFormsreg placeholder='Pon tu local' />
          <InputFormsreg placeholder='Pon tu direccion' />
          <InputFormsreg placeholder='Pon tu deporte' />
          <InputFormsreg placeholder='Pon tu ciudad' />
        </label>
        <Buttonreg Text={'Contactanos'} />
      </div>
    </form>
  )
}

export const Formslog = () => {
  return (
    <form className='absolute w-[600px] flex flex-col top-[50px] left-[450px] gap-[60px] items-center '>
      <div className='flex flex-col items-center gap-[20px] '>
        <h2 className='text-[#FE7A36] font-medium text-[62px] '>Login</h2>
        <FaUserCircle className='text-[80px] text-[#FE7A36] ' />
      </div>
      <div className='flex flex-col items-center gap-[40px]'>
        <label className='flex flex-col justify-center gap-y-[20px] '>
          <InputFormslog placeholder='Pon tú ID' />
          <InputFormslog placeholder='Pon tú codigo' />
          <div className='w-[360px] flex justify-between'>
          <Inputrecuerdame placeholder='recuerdame'/>
          <Inputolvi  placeholder='¿Olvidaste tu contraseña?'/>
          </div>    
        </label>
        <Buttonlog Text={'Iniciar'} />
      </div>
    </form>
  )
}
