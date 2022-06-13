/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, ReactNode, useContext,
} from 'react';

interface RegisterProps {
  children: ReactNode;
}
interface RegisterData {
  body: any;
}
export const registerContext = createContext({} as RegisterData);
export function RegisterProvider({ children }: RegisterProps) {
  const body = {
    email: '',
    password: '',
    creationDate: '',
    role: {
      id: 2,
    },
    costumer: {
      firstName: '',
      lastName: '',
      cpf: '',
      phone: '',
      photo: {
        code: '',
      },
      address: [
        {
          street: '',
          number: '',
          neighborhood: '',
          city: '',
          zipCode: '',
          state: '',
          nickname: '',
        }],
    },
  };

  return (
    <registerContext.Provider value={{ body }}>
      {children}
    </registerContext.Provider>
  );
}

export function useRegister() {
  const context = useContext(registerContext);
  return context;
}
