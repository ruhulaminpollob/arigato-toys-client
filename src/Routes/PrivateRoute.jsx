import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../pages/Shared/Loading/Loading';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    const location = useLocation();

    if (user) {
        return children;
    }

    Swal.fire(
        'Sorry',
        'You have to login first',
        'warning'
    )

    return <Navigate state={{ from: location }} to="/login" replace></Navigate>

    
};

export default PrivateRoute;