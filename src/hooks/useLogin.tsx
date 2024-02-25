import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { AuthContextType } from "@/context/AuthContext"



export const useLogin = () => {
    const [error, setError] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {dispatch} = useAuthContext()

    const login = async(email: string, password: string) => {
        setIsLoading(true)
        setError("")
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()
        console.log(json);
        

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        } else {
            // save the user to local storage
            localStorage.setItem('auth', JSON.stringify({
                token: json.accessToken,
                user: json.user
            }))
            // update the auth context
            dispatch({type: 'LOGIN', payload: {
                token: json.accessToken,
                user: json.user
            }})
            setIsLoading(false)
        }
    }

    return {login, isLoading, error}
}