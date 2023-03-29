import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../pages/loginPage';
import { isAuthenticated } from './auth';

const ProtectedRoute = (props) => (
    localStorage.getItem('login') == true
        ? <Outlet />
        : <Login type={props.type} />
);

export default ProtectedRoute;