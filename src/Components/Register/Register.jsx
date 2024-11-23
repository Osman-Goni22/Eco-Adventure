import React, { useContext, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import PageTitle from '../PageTitle/PageTitle';
const Register = () => {

    const navigate = useNavigate()
    const [error, setError]=useState(null)

    const {createNewUser ,user} =useContext(AuthContext)
    console.log(user?.email);

    const handleRegister=(e)=>{
        e.preventDefault();
        const email =e.target.email.value;
        const password = e.target.password.value;
        const regREX=/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/
          setError(null)
        if(!regREX.test(password)){
            setError('password should contain at least one upper case at least lower case and length at least 6')
            return;
        }
       
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name,email,photo,password);
        createNewUser(email,password)
        .then(result=>{
            toast(`Hi,${name} welcome to our new website`);
            navigate('/')
        })

        .catch(err=>{
            setError(err.message)
        })
    }

    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
            <PageTitle></PageTitle>
            <div className='mx-auto mb-6'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto py-5">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="photo URL" name='photo' className="input input-bordered" required />
                        </div>
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
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>

                        <p>Already have an account? <Link className='text-red-400' to='/login'>Login</Link></p>
                        {
                            error&& <p className='text-red-200'>{error}</p>
                        }
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;