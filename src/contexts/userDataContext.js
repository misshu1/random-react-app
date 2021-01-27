import React, { createContext, useContext, useState, useEffect } from 'react';

import { asyncLocalStorage } from 'components/common';

const UserDataContext = createContext(null);
export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        asyncLocalStorage.getItem('data').then((data) => {
            !!data && setUserData(JSON.parse(data));
        });
    }, []);

    const updateUserData = (data) => {
        setUserData(data);
    };

    return (
        <UserDataContext.Provider value={{ userData, updateUserData }}>
            {children}
        </UserDataContext.Provider>
    );
};

export const useUserDataContext = () => {
    return useContext(UserDataContext);
};
