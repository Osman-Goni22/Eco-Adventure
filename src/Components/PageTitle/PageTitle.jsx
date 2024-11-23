import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
    const location = useLocation();
    useEffect(()=>{

        const  titleOF = TitleSetter(location.pathname);
        document.title=titleOF;


    }
    ,[location.pathname])

    const TitleSetter =(pathname)=>{
           switch(pathname){
            case '/':
                return 'Home Page';
            case '/login':
                return 'Login Page';
            case '/register':
                 return 'Sign Up Page';
            case '/update':
                return 'Profile Update Page';
            case '/user':
                return 'User Details Page'  ; 
            case '/reset':
                return 'Reset Password page' ;           

            default:
                return 'My page';    
           }
    }
   
    return  null;
};

export default PageTitle;