import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { ButtomHome } from '../../Shared/Button/Buttons';
import TableComponent from '../../Shared/userTable/registerTable';
import Buscador from '../../Shared/InputForms/InputForms';
import StatusDropdown from '../../Shared/DropDowns/StatusFilter';
import RegisterDropdown from '../../Shared/DropDowns/RegisterDropDown/RegisterDropDown';
import StatusCard from '../../Shared/utils/utils';
import SearchVector from '../../../assets/Searching.png'

const SearchWithSuggestion = ({ onChange, value, possibleMatch, onSelectMatch }) => {
  return (
    <div className="relative">
      <Buscador onChange={onChange} value={value} />
      {possibleMatch && (
        <div className='absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-md shadow-md p-2 text-center z-10'>
          <p>¿Buscabas a {possibleMatch.name}?</p>
          <button
            className="bg-[#3F3D56] text-white font-bold py-1 px-2 rounded-[10px] mt-2"
            onClick={() => onSelectMatch(possibleMatch)}
          >
            Seleccionar
          </button>
        </div>
      )}
    </div>
  );
};

export const Registerlist = () => {
  const [, setLocation] = useLocation();
  const [inputValue, setInputValue] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [possibleMatch, setPossibleMatch] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('Filtrar');

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

  useEffect(() => {
    filterUsers();
  }, [inputValue, selectedStatus]);

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
    setSelectedUser(null);
  };

  const handleSelectMatch = (user) => {
    setSelectedUser(user);
    setInputValue('');
    setPossibleMatch(null);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    setSelectedUser(null);
  };

  const filterUsers = () => {
    let results = datosSimulados;
    
    if (inputValue !== '') {
      results = results.filter(user =>
        user.document.includes(inputValue) || user.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    
    if (selectedStatus !== 'Filtrar') {
      results = results.filter(user => user.status === selectedStatus.toLowerCase());
    }
    
    setFilteredUsers(results);
  };

  return (
    <div className='bg-[#F0ECE3] w-full h-full flex flex-col flex-1 items-center relative py-[2.5%]'>
      <div className='absolute left-[5%] py-[rem]' onClick={() => setLocation("/")}>
        <ButtomHome customClassName={''} />
        <IoMdArrowRoundBack className="hidden sm:inline-block sm:text-[3rem] sm:top-[1%] text-[#000000] bg-[#F0ECE3] p-[0.5rem] rounded-[10px] shadow-xl border-2 border-transparent" />
      </div>
      <div className="flex justify-between w-60% items-center">
        <SearchWithSuggestion 
          onChange={handleInputChange} 
          value={inputValue} 
          possibleMatch={possibleMatch}
          onSelectMatch={handleSelectMatch}
        />
        <StatusDropdown onStatusChange={handleStatusChange} />
        <RegisterDropdown />
      </div>
      <div className='w-[50%] flex h-[14rem] border border-[#3F3D56] m-6 rounded-md items-center shadow-xl'>
        <img src={SearchVector} alt="SearchingVector" className='w-[200px] p-1'/>
        <p className='text-center m-[0.5rem]'>Aquí, podrás encontrar todos los usuarios registrados del establecimiento. Además, tendrás la opción de registrar nuevos usuarios de manera sencilla y rápida. ¡Explora y gestiona tu lista de usuarios con facilidad!</p>
      </div>
      <StatusCard/>
      <div className='m-2 h-full w-[90%] flex flex-wrap justify-center items-center mb-[15px] lg:w-[92%]'>
        {selectedUser ? (
          <TableComponent users={[selectedUser]} />
        ) : filteredUsers.length > 0 ? (
          <TableComponent users={filteredUsers} />
        ) : (
          <p>No se encontró ningún usuario con ese documento o estado.</p>
        )}
      </div>
    </div>
  );
};