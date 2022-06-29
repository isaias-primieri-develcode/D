/* eslint-disable quotes */
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  setUser: React.Dispatch<React.SetStateAction<UserContext>>;
  // signIn() : Promise<void>
  logOut(): void;
  authState: PropContext;
  setCostumerId: React.Dispatch<React.SetStateAction<CostumerId>>;
  costumerId: CostumerId;
  setAuthState: React.Dispatch<React.SetStateAction<PropContext>>;
  setSigned: React.Dispatch<React.SetStateAction<boolean>>;
}
interface PropContext {
  token: string;
  type: string;
}

interface CostumerId {
  id: number;
}
interface UserContext {
  email: string;
  password: string;
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [authState, setAuthState] = useState({} as PropContext);
  const [costumerId, setCostumerId] = useState<CostumerId>({ id: 0 });
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    async function LoadedStoragedData() {
      const storagedUser = await AsyncStorage.getItem("@Develfood-IV:user");
      const storagedToken = await AsyncStorage.getItem("@Develfood-IV:token");
      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
    }
    LoadedStoragedData();
  }, []);
  function logOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }
  // async function signIn() {
  //   const response = await user;
  //   AsyncStorage.setItem("@Develfood-IV:user", JSON.stringify(response));
  // }
  return (
    <AuthContext.Provider
      value={{
        costumerId,
        setCostumerId,
        signed,
        setSigned,
        user,
        logOut,
        authState,
        setAuthState,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export default AuthContext;
