'use client'
import { ReactNode, createContext, useReducer } from "react";

interface User {
    id: number
    name: string
    email: string
}

export type AuthContextType = {
    user: User | null,
    token: string,
}

const initialState = {
    user: null,
    token: ""
}

export const AuthContext = createContext<{
    state: AuthContextType,
    dispatch: React.Dispatch<any>
}>({
    state: initialState,
    dispatch: () => {}
})

export const authReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return {auth: action.payload}
        case 'LOGOUT':
            return {auth: null}
        default:
            return state
    }
}

export const AuthContextProvider = ({children}:{children: ReactNode}) => {
    const [state, dispatch] = useReducer(authReducer, initialState)
    console.log('AuthContext state:', state);
    
    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
