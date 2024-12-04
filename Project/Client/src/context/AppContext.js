import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [state, setState] = useState({
        user: null,  // Starts as null
        token: "",
    });

    useEffect(() => {
        // Retrieve token and user from localStorage on initial load
        const token = window.localStorage.getItem('authToken');
        const user = window.localStorage.getItem('authUser');
        
        if (token && user) {
            setState({
                user: JSON.parse(user),  // Parse the user data from localStorage
                token: token,            // Set the token directly
            });
        }
    }, []);

    return (
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
