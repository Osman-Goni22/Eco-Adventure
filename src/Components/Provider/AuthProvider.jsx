import React, { createContext } from 'react';
export const AuthContext =createContext(null);
import { auth } from '../Firebase_init/Firebase_Init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const LoginUser =(email,password)=>{
      return signInWithEmailAndPassword(auth, email,password)
    }


    const createNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }


    const AuthInfo ={
           LoginUser,
           createNewUser,
    }

    return (
       <AuthContext.Provider value={AuthInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;