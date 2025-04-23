import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

type User = {
    name: string;
    role: string;
};


interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (token: string, user: User) => void;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem("auth-token");
        if (storedToken) {
            fetch(`${import.meta.env.VITE_API_URL}/me`, {
            headers: {
                Authorization: `Bearer ${storedToken}`,
            },
            })
            .then(res => {
                if (!res.ok) throw new Error("Invalid token");
                return res.json();
            })
            .then(data => {
                setUser(data.user);
                setToken(storedToken);
            })
            .catch(() => {
                localStorage.removeItem("auth-token");
            })
            .finally(() => setIsLoading(false));
        } else {
            setIsLoading(false);
        }
    }, []);

    const login = (token: string, user: User) => {
        localStorage.setItem("auth-token", token);
        setToken(token);
        setUser(user);
        window.location.href = '/';
    };

    const logout = () => {
        localStorage.clear();
        setToken(null);
        setUser(null);
        window.location.href = '/';
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
    return ctx;
};