import React from 'react';

import { asyncLocalStorage, ROUTES } from 'components/common';
import { useNavigate } from 'react-router-dom';

export function LoginApp() {
    const navigate = useNavigate();

    const handleLogin = () => {
        asyncLocalStorage.setItem('is_logged_in', true).then(() => {
            navigate(ROUTES.FORM);
        });
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
