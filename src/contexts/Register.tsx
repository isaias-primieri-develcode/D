/* eslint-disable quotes */
import React, { createContext, ReactNode, useContext } from "react";

interface RegisterProps {
  children: ReactNode;
}

interface idProps {
  id: number;
}

interface PhotoProps {
  code: string;
}

interface CostumerProps {
  firstName: string;
  lastName: string;
  cpf: string;
  phone: string;
  photo: PhotoProps;
  address: AddressProps[];
}

interface AddressProps {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  zipCode: string;
  state: string;
  nickname: string;
}

interface BodyProps {
  email: string;
  password: string;
  creationDate: string;
  role: idProps;
  costumer: CostumerProps;
}

interface RegisterData {
  body: BodyProps;
}
export const registerContext = createContext({} as RegisterData);
export function RegisterProvider({ children }: RegisterProps) {
  const body = {
    email: "",
    password: "",
    creationDate: "",
    role: {
      id: 2,
    },
    costumer: {
      firstName: "",
      lastName: "",
      cpf: "",
      phone: "",
      photo: {
        code: "",
      },
      address: [
        {
          street: "",
          number: "",
          neighborhood: "",
          city: "",
          zipCode: "",
          state: "",
          nickname: "",
        },
      ],
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
