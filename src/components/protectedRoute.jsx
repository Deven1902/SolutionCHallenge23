import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import Login from '../auth/Login';
import { auth } from "../auth/firebase";

const ProtectedRoute = (props) => {

    const [user, loading, error] = useAuthState(auth);

    if (loading) return <div>Loading User</div>
    return (
        user
            ? <Outlet />
            : <Login />
    )

}

export default ProtectedRoute;