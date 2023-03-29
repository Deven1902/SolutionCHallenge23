import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import Login from '../auth/Login';
import { auth } from "../auth/firebase";
import AllPostsPage from '../pages/AllPosts';

const ProtectedRoute = (props) => {

    const [user, loading, error] = useAuthState(auth);

    if (loading) return <div>Loading User</div>


    if (props.reverse) {
        return (user
            ? <AllPostsPage />
            : <Outlet />
        )
    }

    return (
        user
            ? <Outlet />
            : <Login />
    )

}

export default ProtectedRoute;