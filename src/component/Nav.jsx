import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Nav = () => {
    const {user}= useContext(AuthContext)
    return (
        <div className="navbar bg-primary text-primary-content flex justify-between">
            <a className="btn btn-ghost normal-case text-xl">FireBase-Auth</a>
            <div>
                <Link  className="btn btn-ghost normal-case text-xl" to='home'>Home</Link>
                <Link  className="btn btn-ghost normal-case text-xl" to='register'>Register</Link>
                <Link  className="btn btn-ghost normal-case text-xl"  to='login'>Login</Link>
            </div>
        </div>
    );
};

export default Nav;