import React from 'react';
import { useNavigate } from 'react-router-dom';

import { asyncLocalStorage, ROUTES } from 'components/common';

export function LogoutApp() {
    const navigate = useNavigate();

    const handleLogout = () => {
        asyncLocalStorage.setItem('is_logged_in', false).then(() => {
            navigate(ROUTES.ROOT);
        });
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
