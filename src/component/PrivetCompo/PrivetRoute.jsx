import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    console.log(user);
    if (loading) {
        return <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to='/login' replace={true}></Navigate>
    );
};

export default PrivetRoute;