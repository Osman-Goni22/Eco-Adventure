import React, { useContext } from 'react';
import NavBar from '../NavBar/NavBar';
import { NavLink, useLocation, useNavigate ,Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { useState , useEffect ,useRef } from 'react';
const Login = () => {
    const navigate =useNavigate()
    const [loginError, setLoginError]=useState('')
    const location = useLocation();

    const emailRef =useRef();

    const {LoginUser, LoginWithGoogle,setEmail}=useContext(AuthContext)

    const handleForget=(e)=>{
       e.preventDefault();
     
       console.log(emailRef.current.value);
       if(emailRef.current.value){
         setEmail(emailRef.current.value)
       }
       else{
        setEmail(null)
       }

       navigate('/reset')

    }

    const login = ()=>{
        setLoginError('')
        LoginWithGoogle()
        .then(result=>{
            toast(` logged in successfully`);
            {
              navigate(location?.state?location.state:'/');
            }
        })

        .catch(error=>{
            setLoginError('Google error')
            toast(error.message)
        })
    }

    const handleLogin=(e)=>{
        setLoginError('')
        e.preventDefault();
        const email =e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        LoginUser(email,password)
        .then(result=>{
           toast(` logged in successfully`);
           {
             navigate(location?.state?location.state:'/');
           }
          
        })

        .catch(error=>{
           setLoginError('login error')
           toast(error.message)
        }

        )
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <h2 className='text-center text-xl font-semibold'>Login Now</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input ref={emailRef} name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link onClick={handleForget} className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    
                </form>
                <NavLink onClick={login} className='btn flex justify-around items-center'> <FcGoogle className='text-2xl' />  SignIn With Google</NavLink>
                <p>New to this website? please <NavLink className='text-red-400' to='/register'>Register</NavLink></p>
               
               
            </div>
        </div>
    );
};

export default Login;

