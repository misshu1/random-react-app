import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from 'components/common';
import { FormApp } from 'components/pages/form/FormApp';
import { LoginApp } from 'components/pages/login/LoginApp';
import { LogoutApp } from 'components/pages/logout/LogoutApp';
import { HomeApp } from 'components/pages/home/HomeApp';

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path={ROUTES.FORM} element={<FormApp />} />
            <Route path={ROUTES.LOGIN} element={<LoginApp />} />
            <Route path={ROUTES.LOGOUT} element={<LogoutApp />} />
            <Route path={ROUTES.ROOT} element={<HomeApp />} />
        </Routes>
    );
};
