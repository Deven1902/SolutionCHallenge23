import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../auth/Login';

const ProtectedRoute = (props) => (
    localStorage.getItem('login') === 'true'
        ? <Outlet />
        : <Login />
);

export default ProtectedRoute;