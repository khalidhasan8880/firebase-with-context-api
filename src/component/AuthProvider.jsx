import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from './firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
// external variable
const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null)
const auth = getAuth(app)
// component
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true)
    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email,password)
    }
    
    const googleSignIn =()=>{
        return signInWithPopup(auth, provider)
       
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            console.log(user);
            if (user) {
                console.log('on state change :', user)
                setUser(user)
                setLoading(false)
            }else{
                setUser(null)
            }
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    function logOut() {
        return signOut(auth)
    }
    const data = {createUser, signIn, user, logOut, loading, googleSignIn}

    return (
        <AuthContext.Provider value={data}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;