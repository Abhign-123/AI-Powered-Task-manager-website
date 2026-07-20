import { createContext, useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../api/authApi";

interface AuthContextType {
    isLoggedIn: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children } : { children: ReactNode }) {

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const saved = sessionStorage.getItem('isLoggedIn');
        return saved ? JSON.parse(saved) : false;
    });

    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    const login = async (email: string, password: string) => {
        try {
            await authApi.login({email, password});
            setIsLoggedIn(true);
        } catch (error) {
            setIsLoggedIn(false);
            throw error;
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        navigate('/', { replace: true });
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext };