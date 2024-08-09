export const statusColors = {
    'activo': 'bg-[#FE8D32]',
    'pendiente': 'bg-[#5023A7]',
    'inactivo': 'bg-[#3F3D56]'
  };
  
  export const getStyleByEstado = (estado) => {
    return {
      Background: statusColors[estado],
      icon: statusColors[estado],
      borderColor: statusColors[estado]
    };
  };

  import React from 'react';
  const StatusCard = () => {
    const items = [
      { id: 1, text: "Activo", color: "border-yellow-600", textColor: "text-white", bg: "bg-[#FE8D32]" },
      { id: 2, text: "Pendiente", color: "border-purple-600", textColor: "text-white", bg: "bg-[#5023A7]" },
      { id: 3, text: "Inactivo", color: "border-gray-600", textColor: "text-white", bg: "bg-[#3F3D56]" }
    ];
  
    return (
      <div className="w-[68%] flex ml-[10%] justify-start mb-10">
        <div className='flex items-center gap-4'>
          <h3 className='text-lg text-black whitespace-nowrap'>Tipos de Estado:</h3>
          <div className="flex gap-2">
            {items.map((item) => (
              <p
                key={item.id}
                className={`h-16 w-8 overflow-hidden rounded-md transition-all duration-700 ease-in-out border ${item.color} ${item.bg} flex justify-center items-center hover:w-32 group`}
              >
                <span className={`p-2 text-center uppercase ${item.textColor} tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out whitespace-nowrap`}>
                  {item.text}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default StatusCard;