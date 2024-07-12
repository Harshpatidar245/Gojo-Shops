import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = useCallback((token) => {
        sessionStorage.setItem('token', token);
        setIsAuthenticated(true);
        console.log('Token set, isAuthenticated:', isAuthenticated);
    }, [isAuthenticated]);

    const logout = useCallback(() => {
        sessionStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/');
        console.log('Token removed, isAuthenticated:', isAuthenticated);
    }, [navigate]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
