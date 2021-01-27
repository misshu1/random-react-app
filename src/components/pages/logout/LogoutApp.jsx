import React from 'react';
import { useNavigate } from 'react-router-dom';

import { asyncLocalStorage, ROUTES } from 'components/common';
import { PrimaryButton } from 'components/common/Buttons';
import { Container } from './style';

export function LogoutApp() {
    const navigate = useNavigate();

    const handleLogout = () => {
        asyncLocalStorage.setItem('is_logged_in', false).then(() => {
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
