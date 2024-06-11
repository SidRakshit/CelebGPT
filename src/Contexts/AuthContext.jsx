import React, { createContext, useContext, useState, useEffect } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "../configs/UserPool";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedSession = localStorage.getItem("session");
        if (storedSession) {
            const session = JSON.parse(storedSession);
            const cognitoUser = new CognitoUser({
                Username: session.username,
                Pool: UserPool,
            });

            cognitoUser.getSession((err, session) => {
                if (err) {
                    console.error("getSession error:", err);
                    setIsAuthenticated(false);
                    setUser(null);
                } else if (session.isValid()) {
                    setIsAuthenticated(true);
                    setUser(cognitoUser);
                }
            });
        }
    }, []);

    const logout = () => {
        if (user) {
            user.signOut();
            localStorage.removeItem("session");
            setIsAuthenticated(false);
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
