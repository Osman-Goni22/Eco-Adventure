import React, { createContext, useEffect, useState } from 'react';
export const AuthContext =createContext(null);
import { auth } from '../Firebase_init/Firebase_Init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import Aos from 'aos';
const AuthProvider = ({children}) => {
    useEffect(()=>{
        Aos.init();
    },[])

    const [user, setUser]=useState(null)
    const [loading, setLoading]= useState(true)
    const LoginUser =(email,password)=>{
      return signInWithEmailAndPassword(auth, email,password)
    }

    const [wished , setWished] =useState([])

    const LogOutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }


    const createNewUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        } )
        return ()=>{
            unsubscribe();
        }
    },[])


    const updateUserProfile=(updatedUserData)=>{
        return updateProfile(auth.currentUser,updatedUserData);
    }

    const provider =new GoogleAuthProvider();

    const LoginWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }

    const [email, setEmail]=useState(null)


    const resetEmail= (email)=>{
        setLoading(true)
      return  sendPasswordResetEmail(auth,email);
    }


    const AuthInfo ={
           LoginUser,
           createNewUser,
           user,
           LogOutUser,
           updateUserProfile,
           loading,
           LoginWithGoogle,
           email,
           setEmail,
           resetEmail,
           wished,
           setWished
    }



    

    return (
       <AuthContext.Provider value={AuthInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;