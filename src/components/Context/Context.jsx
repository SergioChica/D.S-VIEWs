import React, { createContext, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [createUser, setCreateUser] = useState(true);
  const [modalverificate, setmodalverificate] = useState(false);
  return (
    <StateContext.Provider value={{ createUser, setCreateUser, modalverificate, setmodalverificate}}>
      {children}
    </StateContext.Provider>
  );
};
