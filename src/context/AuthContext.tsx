import { UserDTO } from '@dtos/UserDTO'
import { createContext, ReactNode } from 'react'

export interface AuthContextDataProps {
  user: UserDTO
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

interface Props {
  children: ReactNode
}

export function AuthContextProvider({ children }: Props) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: '1',
          name: 'Igor',
          email: 'igor@gmail.com',
          avatar: 'rodrigo.png',
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
