import React from 'react';
import { NavLink } from 'react-router-dom';
const LeftNavBar = () => {
    return (
        <div className='grid grid-cols-1 gap-3'>
            <NavLink to='/' className='btn'>ALL Adventure</NavLink>
            <NavLink to={`/adventure/MountainTrek`} className='btn '>MountainTrek</NavLink>
            <NavLink to={`/adventure/OceanDives`} className='btn '>OceanDives</NavLink>
            <NavLink to={`/adventure/WildlifeSafaris`} className='btn '>WildlifeSafaris</NavLink>
            <NavLink to={`/adventure/ForestExpeditions`} className='btn '>ForestExpeditions</NavLink>
            <NavLink to={`/adventure/DesertExploration`} className='btn '>DesertExploration</NavLink>
            <NavLink to={`/adventure/MangroveExpeditions`} className='btn '>MangroveExpeditions</NavLink>
        </div>
    );
};

export default LeftNavBar;