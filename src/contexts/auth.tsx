/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage'

interface AuthContextData{
  signed: boolean,
  user: object | null,
  setUser: React.Dispatch<React.SetStateAction<UserContext>>
  // signIn() : Promise<void>
  logOut() : void
  authState: PropContext
  setAuthState: React.Dispatch<React.SetStateAction<PropContext>>
  setSigned: React.Dispatch<React.SetStateAction<boolean>>

}
interface PropContext {
  token: string
  type: string
}

interface UserContext {
  email: string
  password: string
  token: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null)
  const [authState, setAuthState] = useState({} as PropContext)
  const [signed, setSigned] = useState(false)

  useEffect(() => {
    async function LoadedStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@Develfood-IV:user')
      const storagedToken = await AsyncStorage.getItem('@Develfood-IV:token')
      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser))
      }
    }
    LoadedStoragedData()
  }, [])
  function logOut() {
    AsyncStorage.clear().then(
      () => {
        setUser(null)
      },
    )
  }
  // eslint-disable-next-line no-unused-vars
  async function signIn() {
    const response = await user
    AsyncStorage.setItem('@Develfood-IV:user', JSON.stringify(response))
  }
  return (
    <AuthContext.Provider value={{
      signed, setSigned, user, logOut, authState, setAuthState, setUser,
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export default AuthContext
