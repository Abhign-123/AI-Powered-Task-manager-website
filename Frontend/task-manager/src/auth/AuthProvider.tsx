import axios from "axios";
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children } : { children: React.ReactNode }) {

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const saved = sessionStorage.getItem('isLoggedIn');
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        sessionStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    const login = async (email: string, password: string) => {
        try {
            const response=await axios.post('http://localhost:8080/auth/login', {
                email,
                password
            });
            console.log('Login successful', response);
            setIsLoggedIn(true);
            return response.data;
        } catch (error) {
            setIsLoggedIn(false);
            console.error('There was an error!', error);
            throw error;
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                login,
                logout
            }}
        >{children}</AuthContext.Provider>
    );
}
