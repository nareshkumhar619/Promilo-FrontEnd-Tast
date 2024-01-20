import React, { createContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [authToken, setAuthToken] = useState(localStorage.getItem('access_token') || null);
    const [data, setData] = useState([]);

    return (
        <AuthContext.Provider value={{ data, setData, authToken, setAuthToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
