'use client'
import { ReactNode, createContext, useEffect, useReducer } from "react";

interface User {
    id: number
    name: string
    email: string
}

export type AuthContextType = {
    user: User | null,
    token: string,
    dispatch: React.Dispatch<any>
}



export const AuthContext = createContext<AuthContextType|null>(null)

export const authReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload
        case 'LOGOUT':
            return null
        default:
            return state
    }
}

export const AuthContextProvider = ({children}:{children: ReactNode}) => {
    const [state, dispatch] = useReducer(authReducer, null)
    console.log('AuthContext state:', state);

    useEffect(() => {
        const item = localStorage.getItem('auth')
        const auth = item ? JSON.parse(item) : null
        console.log('payload', auth);
        
        if (auth) {
            dispatch({type: 'LOGIN', payload: auth})
        }
    }, [])
    
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
