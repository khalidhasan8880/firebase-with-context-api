import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import app from './firebase/firebase.init';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email,password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if (user) {
                console.log('on state change :', user)
                setUser(user)
            }
        })
        return unsubscribe()
    },[])

    const data = {name: "khalid", createUser, signIn, user}

    return (
        <AuthContext.Provider value={data}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;