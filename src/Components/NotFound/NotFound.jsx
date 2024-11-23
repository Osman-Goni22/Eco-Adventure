import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
           <div className='flex justify-center'>
           <img src="https://i.ibb.co.com/M64wD7L/vector-design-no-stopping-icon-style-822882-9625.jpg" alt="" className='w-24 text-center' />
           </div>
            <p className='text-2xl font-bold text-purple-500'>Page Not Found</p>
            <Link to='/' className="btn btn-outline btn-accent mt-2">Back to Home</Link>
        </div>
    );
};

export default NotFound;