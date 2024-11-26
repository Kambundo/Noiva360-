import React, { createContext, useState, useEffect } from 'react';
// import moment from 'moment';
// import 'moment/locale/pt-br';

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {


  return (
    <CustomerContext.Provider
      value={{
        
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

