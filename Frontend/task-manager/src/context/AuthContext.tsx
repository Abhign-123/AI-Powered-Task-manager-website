// import { createContext, useEffect, useState, type ReactNode } from "react";
// import { useNavigate } from "react-router-dom";
// import { authApi } from "../api/authApi";

// interface AuthContextType {
//     isLoggedIn: boolean;
//     login: (email: string, password: string) => Promise<void>;
//     logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// export function AuthProvider({ children } : { children: ReactNode }) {

//     const [isLoggedIn, setIsLoggedIn] = useState(() => {
//         const saved = sessionStorage.getItem('isLoggedIn');
//         return saved ? JSON.parse(saved) : false;
//     });

//     const navigate = useNavigate();

//     useEffect(() => {
//         sessionStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
//     }, [isLoggedIn]);

//     const login = async (email: string, password: string) => {
//         try {
//             await authApi.login({email, password});
//             setIsLoggedIn(true);
//         } catch (error) {
//             setIsLoggedIn(false);
//             throw error;
//         }
//     };

//     const logout = () => {
//         setIsLoggedIn(false);
//         navigate('/', { replace: true });
//     }

//     return (
//         <AuthContext.Provider
//             value={{
//                 isLoggedIn,
//                 login,
//                 logout
//             }}
//         >
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export { AuthContext };

import { createContext, useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../api/authApi";

interface AuthContextType {
    isLoggedIn: boolean;
    loading:boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children } : { children: ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true); // ⏱️ Holds the UI until verification finishes
    const navigate = useNavigate();

    // Verifies if a valid JWT cookie exists on application boot
    useEffect(() => {
    const verifyUserSession = async () => {
        console.log("Checking session...");

        try {
             await authApi.checkSession();

            // console.log("Session valid:", response.data);

            setIsLoggedIn(true);
        } catch (error) {
            // console.log("Session invalid:", error);

            setIsLoggedIn(false);
        } finally {
            setLoading(false);
        }
    };

    verifyUserSession();
}, []);

    const login = async (email: string, password: string) => {
        try {
            await authApi.login({ email, password });
            setIsLoggedIn(true);
        } catch (error) {
            setIsLoggedIn(false);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await authApi.logout(); 
        } catch (error) {
            console.error("Server logout failed", error);
        } finally {
            setIsLoggedIn(false);
            navigate('/', { replace: true });
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                loading,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext };

