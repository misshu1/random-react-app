import React from 'react';

import { asyncLocalStorage, ROUTES } from 'components/common';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from 'components/common/Buttons';

export function LoginApp() {
    const navigate = useNavigate();

    const handleLogin = () => {
        asyncLocalStorage.setItem('is_logged_in', true).then(() => {
            navigate(ROUTES.FORM);
        });
    };

    return (
        <PrimaryButton
            aria-label='login'
            onClick={handleLogin}
            fontIcon={['fas', 'sign-in-alt']}
        >
            Login
        </PrimaryButton>
    );
}
