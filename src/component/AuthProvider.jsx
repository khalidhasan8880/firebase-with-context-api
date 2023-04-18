import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from './firebase/firebase.init';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    
    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email,password)
    }
    const data = {name: "khalid", createUser, signIn}

    return (
        <AuthContext.Provider value={data}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;