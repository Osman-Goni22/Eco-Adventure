import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import userLogo from '../../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const NavBar = () => {

  const { LogOutUser}= useContext(AuthContext)
  const handleLogOut=()=>{
    console.log('logged out');
    LogOutUser()
    .then(()=>console.log('logged Out successfully'))

    .catch(error=>console.log(error.message))
  }

  const {user}=useContext(AuthContext);

    const links =<div className='flex text-lg font-semibold gap-5'>

    <NavLink to='/'>Home</NavLink>
   {
     user&& <>
     
     <NavLink to='/update'>Update Profile</NavLink>
     <NavLink to='/user'>User Profile</NavLink>
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
          <a className="btn btn-ghost text-xl">Eco Adventure</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
                links
            }
          </ul>
        </div>
        <div className="navbar-end">
          
            <img src={userLogo} alt="" />
          
            {
              user?<NavLink className='btn' onClick={handleLogOut}>Logout</NavLink>: <NavLink to='/login' className="btn">Login</NavLink>
            }
         
        </div>
      </div>
    );
};

export default NavBar;