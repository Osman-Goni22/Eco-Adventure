import React from 'react';

import { NavLink } from 'react-router-dom';
const Adventure = ({ adventure }) => {
    const { AdventureTitle, Image, EcoFriendlyFeatures,ID } = adventure;
    return (
        <div className="card bg-base-100 ">
            <figure className="px-10 pt-10">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{AdventureTitle}</h2>
                <h2 className='font-semibold text-lg'>Available EcoFriendly Features:</h2>
                <div className='text-justify'>
                {
                    EcoFriendlyFeatures.map((feature,idx)=><li className='list-decimal' key={idx}>{feature}</li>)

                }
                </div>
                <div className="card-actions">
                    <NavLink to={`/details/${ID}`} className="btn btn-primary">Explore Now</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Adventure;