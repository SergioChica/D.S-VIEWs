import React from "react";
import {
  InputFormsreg,
  InputFormslog,
  InputFormslog2,
  Inputrecuerdame,
  InputFormsUsers,
  Inputolvi,
} from "../InputForms/InputForms";
import { Buttonlog, Buttonlog2, ButtonUsers } from "../Button/Buttons";
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from 'wouter'

export const FormsUsers = ({ }) => {

  return (
    <form className='absolute w-[600px] flex flex-col justify-center top-[10%] right-[30%] gap-[60px] items-center '>
      <div className='flex flex-col items-center gap-[20px] '>
        <h2 className='text-[#381975] font-medium text-[62px] '>Inscripción</h2>
      </div>
      <div className='flex flex-col items-center gap-[40px]'>
        <label className='flex flex-wrap justify-between gap-y-[20px] '>
          <InputFormsUsers type={'text'} placeholder='Pon tu Nombre'  />
          <InputFormsUsers type={'text'} placeholder='Pon tu Apellido' />
          <InputFormsUsers type={'email'} placeholder='Pon tu Correo' />
          <InputFormsUsers type={'text'} placeholder='Pon tu Telefono' />
          <InputFormsUsers type={'text'} placeholder='Pon tu Direccion' />
          <InputFormsUsers type={'text'} placeholder='Pon tu Asistencia' />
          <InputFormsUsers type={'text'} placeholder='Pon tu Numero de Centro' />
        </label>
        <ButtonUsers Text={'Crear Usuario'}  />
      </div>
    </form>
  )
}


export const Formsreg = ({}) => {
  const [location, setLocation] = useLocation();
  return (
    <form className="absolute w-[500px] flex flex-col top-[60px] right-[300px] gap-[40px] items-center ">
      <div className="flex flex-col items-center gap-[20px] ">
        <h2 className="text-[#692FDB] font-medium text-[50px] ">Registrate</h2>
        <FaUserCircle className="text-[70px] text-[#692FDB] " />
      </div>
      <div className="flex flex-col items-center gap-[5px]">
        <div className="">
          <label className="flex flex-wrap justify-between gap-y-[20px] ">
            <InputFormsreg placeholder="Pon tu correo..." />
            <InputFormsreg placeholder="Pon tu direccion..." />
            <InputFormsreg placeholder="Pon tu local..." />
            <InputFormsreg placeholder="Pon tu numero..." />
            <InputFormsreg placeholder="Pon tu nombre..." />
            <InputFormsreg placeholder="Pon tu documento..." />
            <InputFormsreg placeholder="Pon tu deporte..." />
            <InputFormsreg placeholder="Servicios..." />
          </label>
          <div className="w-full flex justify-end pt-1">
            <Inputolvi
              onClick={() => setLocation("/loginempleados")}
              placeholder="¿Ya estas registrado en la app?"
            />
          </div>
        </div>
        <Buttonlog2 onClick= {() => setLocation("/loginempleados")} Text={"Contactanos"} width={"6rem"} />
      </div>
    </form>
  );
};

export const Formslogempleado = () => {
  const [location, setLocation] = useLocation();
  return (
    <form className="absolute w-[600px] flex flex-col top-[100px] left-[450px] gap-[40px] items-center ">
      <div className="flex flex-col items-center gap-[20px] ">
        <h2 className="text-[#FE7A36] font-medium text-[50px] ">Login</h2>
        <FaUserCircle className="text-[70px] text-[#FE7A36] " />
      </div>
      <div className="flex flex-col items-center gap-[8px]">
        <label className="flex flex-col items-center justify-center gap-y-[20px] ">
          <InputFormslog placeholder="Pon tú ID..." />
          <InputFormslog placeholder="Pon tú codigo..." />
        </label>
        <div className="w-full px-2 flex flex-col gap-0 items-start">
          <Inputolvi
            onClick={() => setLocation("/register")}
            placeholder="¿Estas registrado en la app?"
            textsize={"10px"}
            
          />
          <Inputrecuerdame placeholder="recuerdame" />

        </div>
        <div onClick={() => setLocation("/")}>
        <Buttonlog Text={"Iniciar"} />
        </div>
      </div>
    </form>
  );
};

export const Formslogadmin = () => {
  const [location, setLocation] = useLocation();
  return (
    <form className="absolute w-[600px] flex flex-col top-[100px] left-[450px] gap-[40px] items-center ">
      <div className="flex flex-col items-center gap-[20px] ">
        <h2 className="text-[#692FDB] font-medium text-[50px] ">Login</h2>
        <FaUserCircle className="text-[70px] text-[#692FDB] " />
      </div>
      <div className="flex flex-col items-center gap-[8px]">
        <label className="flex flex-col items-center justify-center gap-y-[20px] ">
          <InputFormslog2 placeholder="Pon tú ID..." />
          <InputFormslog2 placeholder="Pon tú codigo..." />
        </label>
        <div className="w-full px-2 flex flex-col gap-0 items-start">
          <Inputolvi
            onClick={() => setLocation("/register")}
            placeholder="¿Estas registrado en la app?"
            textsize={"10px"}
            
          />
          <Inputrecuerdame placeholder="recuerdame" />

        </div>
        <Buttonlog2 Text={"Iniciar"} />
      </div>
    </form>
  );
};
