import React, { useState } from 'react';
import { useLocation } from 'wouter';

const statusColors = {
  'activo': 'bg-[#FE8D32]',
  'pendiente': 'bg-[#5023A7]',
  'inactivo': 'bg-[#3F3D56]'
};

const AsistenceTable = ({ users }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [, setLocation] = useLocation();

  return (
    <div className="w-[70%] max-h-80 overflow-y-auto mb-[1rem]">
      <div className="flex justify-between mb-2">
        <div className="flex-1 sticky text-center rounded-xl shadow-xl py-2">Estado</div>
        <div className="flex-1 sticky text-center rounded-lg shadow-xl py-2">Documento</div>
        <div className="flex-1 sticky text-center rounded-lg shadow-xl py-2">Nombre</div>
        <div className="flex-1 text-center rounded-lg shadow-xl py-2">Teléfono</div>
      </div>
      <div className="border-t border-black">
        {users.map((user, index) => (
          <div key={index} className="flex justify-between py-4 border-b border-gray-400">
            <div
              className="flex-1 text-center relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`w-4 h-8 rounded-[20px] mx-auto ${statusColors[user.status]} transition-all duration-200`}
                style={{
                  width: hoveredIndex === index ? '120px' : '12px',
                  height: '36px'
                }}
                title={user.status}
              >
                {hoveredIndex === index && (
                  <button
                    className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold"
                    onClick={() => setLocation(`/perfil/${user.document}`)}
                  >
                    Ver mas
                  </button>
                )}
              </div>
            </div>
            <div className="flex-1 text-center">{user.document}</div>
            <div className="flex-1 text-center">{user.name}</div>
            <div className="flex-1 text-center">{user.phone}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsistenceTable;