import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Nav = () => {
    const {user, logOut}= useContext(AuthContext)
    const signOutHandler=()=>{
        logOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.log(error);
          });
    }
    return (
        <div className="navbar bg-primary text-primary-content flex justify-between">
            <a className="btn btn-ghost normal-case text-xl">FireBase-Auth</a>
            <div>
                <Link  className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
                <Link  className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                <Link  className="btn btn-ghost normal-case text-xl"  to='/login'>Login</Link>
                {
                    user?<><span>{user.email}</span>  <button onClick={signOutHandler} className="btn btn-sm">sign out</button></>: <Link  className="btn btn-ghost normal-case text-xl"  to='/login'>Sign in</Link>
                }
            </div>
        </div>
    );
};

export default Nav;