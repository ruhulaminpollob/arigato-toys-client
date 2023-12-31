import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext=createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState();
    const [loading,setLoading]=useState(true);

    //create user with email and password
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // update user details 
    const userDetails=(user,name,photo)=>{
        setLoading(true)
        return updateProfile(user, {
            
            displayName:name,
            photoURL:photo
        })
    }

    // sign in with email and password
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    // google login
    const googleProvider=new GoogleAuthProvider()
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // log out
    const logOut=()=>{
        return signOut(auth)
    }

    // manage users
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        }
    },[])
    const authInfo={

        user,
        loading,
        createUser,
        userDetails,
        login,
        googleLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;