import React from 'react';

import { GlobalStyles } from 'components/style';
import { RoutesApp } from 'components/routes/Routes';
import { UserDataProvider } from 'contexts';

export function App() {
    return (
        <>
            <UserDataProvider>
                <GlobalStyles />
                <RoutesApp />
            </UserDataProvider>
        </>
    );
}
