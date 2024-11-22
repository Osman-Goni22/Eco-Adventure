import React, { useContext } from 'react';
import NavBar from '../NavBar/NavBar';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const {LoginUser}=useContext(AuthContext)

    const handleLogin=(e)=>{
        e.preventDefault();
        const email =e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        LoginUser(email,password)
        .then(result=>{
            console.log(result.user);
        })

        .catch(error=>console.log(error.message)

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
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p>New to this website? please <NavLink className='text-red-400' to='/register'>Register</NavLink></p>
            </div>
        </div>
    );
};

export default Login;