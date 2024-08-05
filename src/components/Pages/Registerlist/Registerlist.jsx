import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { ButtomHome } from '../../Shared/Button/Buttons';
import TableComponent from '../../Shared/userTable/userTable';
import Buscador from '../../Shared/InputForms/InputForms';
import StatusDropdown from '../../Shared/DropDowns/StatusFilter';
import RegisterDropdown from '../../Shared/DropDowns/RegisterDropDown/RegisterDropDown';

export const Registerlist = () => {
  const [, setLocation] = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('Filtrar');

  const users = [
    { status: 'Activo', document: '12345678', name: 'Juan Pérez', phone: '555-1234' },
    { status: 'Inactivo', document: '87654321', name: 'María López', phone: '555-5678' },
    { status: 'Activo', document: '78945612', name: 'Laura Martínez', phone: '+56 9 8765 4321' },
    { status: 'Pendiente', document: '65432198', name: 'Carlos Ruiz', phone: '+52 1 2345 6789' },
    { status: 'Inactivo', document: '32165487', name: 'Ana López', phone: '+34 912 345 678' },
    { status: 'Activo', document: '98765432', name: 'Jorge Silva', phone: '+55 11 9876 5432' },
    { status: 'Pendiente', document: '45678912', name: 'Isabel Torres', phone: '+44 20 7946 0958' },
  ];

  useEffect(() => {
    filterUsers();
  }, [searchTerm, selectedStatus]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const filterUsers = () => {
    let results = users;
    
    if (searchTerm !== '') {
      results = results.filter(user =>
        user.document.includes(searchTerm) || user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedStatus !== 'Filtrar') {
      results = results.filter(user => user.status === selectedStatus);
    }
    
    setFilteredUsers(results);
  };

  return (
    <div className='bg-[#F0ECE3] w-full h-full flex flex-col flex-1 items-center relative py-[2.5%]'>
      <div className='absolute left-[5%] py-3' onClick={() => setLocation("/")}>
        <ButtomHome customClassName={''} />
        <IoMdArrowRoundBack className="hidden sm:inline-block sm:text-[3rem] sm:top-[1%] text-[#000000] bg-[#F0ECE3] p-[0.5rem] rounded-[10px] shadow-xl border-2 border-transparent" />
      </div>
      <label className="flex flex-row justify-evenly mt-[1.4%] items-center">
        <Buscador onChange={handleSearch} value={searchTerm} />
        <StatusDropdown onStatusChange={handleStatusChange} />
        <RegisterDropdown />
      </label>
      <h1 className='text-[2rem] mt-[5rem] 2xl:text-[2rem] xl:text-[1.5rem] lg:text-[1.7rem]'>Usuarios Registrados</h1>
      <div className='m-2 h-full w-[90%] flex flex-wrap justify-center items-center mb-[15px] lg:w-[92%]'>
        {filteredUsers.length > 0 ? (
          <TableComponent users={filteredUsers} />
        ) : (
          <p>No se encontró ningún usuario con ese documento.</p>
        )}
      </div>
    </div>
  );
};