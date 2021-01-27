import React, { createContext, useContext, useState, useEffect } from 'react';

import { asyncLocalStorage } from 'components/common';

const UserDataContext = createContext(null);
export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        asyncLocalStorage.getItem('data').then((data) => {
            !!data && setUserData(JSON.parse(data));
        });
        asyncLocalStorage.getItem('is_logged_in').then((data) => {
            data ? setIsLoggedIn(JSON.parse(data)) : setIsLoggedIn(false);
        });
    }, []);

    const updateUserData = (data) => {
        setUserData(data);
    };

    return (
        <UserDataContext.Provider
            value={{ userData, updateUserData, isLoggedIn, setIsLoggedIn }}
        >
            {children}
        </UserDataContext.Provider>
    );
};

export const useUserDataContext = () => {
    return useContext(UserDataContext);
};
