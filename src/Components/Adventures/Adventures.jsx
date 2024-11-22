import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Adventure from '../Adventure/Adventure';
const Adventures = () => {
    const params =useParams();
   console.log(params);
    const category = (params?.category);
    console.log(category);
    let adventures =useLoaderData();
   console.log(adventures);

   if(category){
    adventures= adventures.filter(adventure=>adventure.CategoryName===category)
   }

   console.log(adventures);

    return (
        <div className='grid grid-cols-2 gap-2'>
            {
                adventures.map(adventure=><Adventure adventure={adventure} key={adventure.ID}></Adventure>)
            }
        </div>
    );
};

export default Adventures;