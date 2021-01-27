import React from 'react';

import { asyncLocalStorage, ROUTES } from 'components/common';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from 'components/common/Buttons';
import { Container } from './style';
import { useUserDataContext } from 'contexts';

export function LoginApp() {
    const navigate = useNavigate();
    const { setIsLoggedIn } = useUserDataContext();

    const handleLogin = () => {
        asyncLocalStorage.setItem('is_logged_in', true).then(() => {
            setIsLoggedIn(true);
            navigate(ROUTES.FORM);
        });
    };

    return (
        <Container>
            <PrimaryButton
                aria-label='login'
                onClick={handleLogin}
                fontIcon={['fas', 'sign-in-alt']}
            >
                Login
            </PrimaryButton>
        </Container>
    );
}
