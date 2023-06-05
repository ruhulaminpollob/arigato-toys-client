import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Loading from '../pages/Shared/Loading/Loading';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;