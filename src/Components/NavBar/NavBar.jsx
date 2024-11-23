import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import userLogo from '../../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const NavBar = () => {

  const navigate = useNavigate();

  const { LogOutUser } = useContext(AuthContext)
  const handleLogOut = () => {
    console.log('logged out');
    LogOutUser()
      .then(() => {
        navigate('/')
      })

      .catch(error => console.log(error.message))
  }

  const { user } = useContext(AuthContext);

  const links = <div className='flex md:flex-row flex-col gap-3 text-lg font-semibold '>

    <NavLink className='btn  ' to='/'>Home</NavLink>
    <NavLink className='btn ' to='/register'>Sign Up</NavLink>

    {
      user && <>

        <NavLink className='btn' to='/update'>Update Profile</NavLink>
        <NavLink className='btn' to='/user'>User Profile</NavLink>
        <NavLink className='btn' to='/wishlist'>WishList</NavLink>
      </>
    }

  </div>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {
              links
            }
          </ul>
        </div>
        <a className=" hidden md:flex btn btn-ghost text-xl">Eco Adventure</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end">



        {
          user ? <div className='flex m-5 gap-5'>
            <img src={user.photoURL} alt="" className='w-12 rounded-full' />  <NavLink className='btn' onClick={handleLogOut}>Logout</NavLink>
          </div> : <div className='flex gap-5'><img src={userLogo} alt="" /><NavLink to='/login' className="btn">Login</NavLink></div>
        }

      </div>
    </div>
  );
};

export default NavBar;

