import React from 'react';

import { NavLink } from 'react-router-dom';
const Adventure = ({ adventure }) => {


   
    

    const { AdventureTitle, Image, EcoFriendlyFeatures,ID } = adventure;
    return (
        <div data-aos="fade-down"  className=" bg-base-100 shadow-lg">
            <figure className="md:px-10 md:pt-10">
                <img
                    src={Image}
                    alt="Shoes"
                    className="md:rounded-xl" />
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

