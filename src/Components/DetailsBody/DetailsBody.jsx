import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DetailsBody = () => {
    const adventures = useLoaderData();
    const params = useParams()
    const id = (params.id);
    const selectedAdventure = adventures.find(adventure => adventure.ID === id)
    const {AdventureTitle,Image,ShortDescription,AdventureCost,Location,Duration,IncludedItems}=selectedAdventure;
    console.log(selectedAdventure);
    return (
       <div>
         <div className="card bg-base-100  shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-semibold">
                    {AdventureTitle}
                   
                </h2>
                <p>{ShortDescription}</p>
                <p>Adventure Cost:{AdventureCost}</p>
                
            </div>
        </div>
       </div>
    );
};

export default DetailsBody;