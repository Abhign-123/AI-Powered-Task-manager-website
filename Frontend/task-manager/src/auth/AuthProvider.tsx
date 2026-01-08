import axios from "axios";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children } : { children: React.ReactNode }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async (email: string, password: string) => {
        try {
            await axios.post('http://localhost:8080/auth/login', {
                email,
                password
            });
            setIsLoggedIn(true);
        } catch (error) {
            setIsLoggedIn(false);
            console.error('There was an error!', error);
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