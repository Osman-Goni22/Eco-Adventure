import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Details = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Details;