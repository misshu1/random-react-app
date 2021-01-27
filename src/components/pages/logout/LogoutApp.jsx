import React from 'react';
import { useNavigate } from 'react-router-dom';

import { asyncLocalStorage, ROUTES } from 'components/common';
import { PrimaryButton } from 'components/common/Buttons';
import { Container } from './style';
import { useUserDataContext } from 'contexts';

export function LogoutApp() {
    const navigate = useNavigate();
    const { setIsLoggedIn } = useUserDataContext();

    const handleLogout = () => {
        asyncLocalStorage.setItem('is_logged_in', false).then(() => {
            setIsLoggedIn(false);
            navigate(ROUTES.ROOT);
        });
    };

    return (
        <Container>
            <PrimaryButton
                aria-label='logout'
                onClick={handleLogout}
                fontIcon={['fas', 'power-off']}
            >
                Logout
            </PrimaryButton>
        </Container>
    );
}
