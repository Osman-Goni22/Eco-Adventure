import React, { createContext, useEffect, useState } from 'react';
export const AuthContext =createContext(null);
import { auth } from '../Firebase_init/Firebase_Init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null)
    const LoginUser =(email,password)=>{
      return signInWithEmailAndPassword(auth, email,password)
    }

    const LogOutUser =()=>{
        return signOut(auth)
    }


    const createNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        } )
        return ()=>{
            unsubscribe();
        }
    },[])


    const updateUserProfile=(updatedUserData)=>{
        return updateProfile(auth.currentUser,updatedUserData);
    }


    const AuthInfo ={
           LoginUser,
           createNewUser,
           user,
           LogOutUser,
           updateUserProfile
    }

    return (
       <AuthContext.Provider value={AuthInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;