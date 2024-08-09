import React, { useState } from 'react';
import { ButtomHome } from '../../Shared/Button/Buttons';
import { useLocation } from 'wouter';
import asistence from '../../../assets/asistence.png';
import AsistenceTable from '../../Shared/userTable/asistenceTable';
import Buscador from '../../Shared/InputForms/InputForms';
import AsistenceCarrusel from '../../Carrusel/AsistenceCarrusel/carrusel2';
import StatusCard from '../../Shared/utils/utils';

export const Asistence = () => {
  const [location, setLocation] = useLocation();
  const [asistencia, setAsistencia] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [possibleMatch, setPossibleMatch] = useState(null);

  const statusColors = {
    'activo': 'bg-[#FE8D32]',
    'pendiente': 'bg-[#5023A7]',
    'inactivo': 'bg-[#3F3D56]'
  };

  const datosSimulados = [
    { status: 'activo', document: '1092456050', name: 'Jeronimo Arias Mosquera', phone: '555-1234' },
    { status: 'pendiente', document: '1234567890', name: 'María Fernanda Gómez', phone: '555-5678' },
    { status: 'inactivo', document: '9876543210', name: 'Carlos Eduardo Perez', phone: '+56 9 8765 4321' },
    { status: 'activo', document: '1122334455', name: 'Ana Lucía Ramírez', phone: '+52 1 2345 6789' },
    { status: 'pendiente', document: '2233445566', name: 'Juan David Torres', phone: '+34 912 345 678' },
    { status: 'inactivo', document: '3344556677', name: 'Luisa Fernanda Ortiz', phone: '+55 11 9876 5432' },
    { status: 'activo', document: '4455667788', name: 'Mateo Hernández', phone: '+44 20 7946 0958' },
    { status: 'pendiente', document: '5566778899', name: 'Valentina López', phone: '555-1234' },
  ];

  const verificarDocumento = (documento) => {
    const datosEncontrados = datosSimulados.find(dato => dato.document === documento);
    if (datosEncontrados) {
      if (!asistencia.some(a => a.document === datosEncontrados.document)) {
        setAsistencia([...asistencia, datosEncontrados]);
        setShowTable(true);
      }
    } else {
      // Mostrar mensaje de error o alguna indicación visual
    }
  };

  const handleInputChange = (value) => {
    setInputValue(value);
    if (value.trim() === '') {
      setPossibleMatch(null);
    } else {
      const possibleMatch = datosSimulados.find(dato =>
        dato.document.includes(value)
      );
      setPossibleMatch(possibleMatch);
    }
  };

  const handleRegisterAttendance = () => {
    if (possibleMatch) {
      verificarDocumento(possibleMatch.document);
      setInputValue('');
      setPossibleMatch(null);
    }
  };

  const getStyleByEstado = (estado) => {
    return {
      Background: statusColors[estado],
      icon: statusColors[estado],
      borderColor: statusColors[estado]
    };
  };

  return (
    <div className='bg-[#F0ECE3] w-full h-full flex flex-col flex-1 items-center relative'>
      <div className='flex items-center justify-center w-full h-full mt-[4rem]'>
        <div className='absolute left-[20%] top-[6.9%]' onClick={() => setLocation("/")}>
          <ButtomHome
            Text={'Regresar'}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly ">
        <div className="flex  justify-evenly w-full "> {/* Asegúrate de que el contenedor sea de ancho completo */}
          <Buscador
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        {possibleMatch && (
          <div
            className='bg-white border border-gray-300 rounded-b-md shadow- p-2 max-w-max  cursor-pointer w-full text-center relative' // Añadido w-full y text-center
            onClick={() => verificarDocumento(possibleMatch.document)}
          >
            <p>¿Buscabas a {possibleMatch.name}?</p>
            <button
              className="bg-[#3F3D56] text-white font-bold py-1 px-2 rounded-[10px] ml-4"
              onClick={handleRegisterAttendance}
            >
              Registrar Asistencia
            </button>
          </div>
        )}
      </div>
      <div className='my-[3rem] w-[50%] flex-row justify-evenly border-2 border-[#444444] rounded-md shadow-xl'>
        <AsistenceCarrusel />
      </div>

      <h1 className='text-[3rem] my-[4rem]'>Asistencia del día</h1>
      <StatusCard/>
      {!showTable ? (
        <img className='w-[300px] h-[300px]' src={asistence} alt="No hay asistencia" />
      ) : (
        <div className='mb-16 w-[85%] flex flex-wrap justify-evenly'>
          <AsistenceTable users={asistencia} />
        </div>
      )}
    </div>
  );
};
