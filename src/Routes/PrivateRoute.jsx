import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if (loading) {
        return <div className='text-4xl font-bold text-center my-10'>Loading...</div>
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;