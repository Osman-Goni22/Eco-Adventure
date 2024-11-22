import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const DetailsBody = () => {
    const adventures = useLoaderData();
    const params = useParams()
    const id = (params.id);
    const selectedAdventure = adventures.find(adventure => adventure.ID === id)
    const { AdventureTitle, Image, ShortDescription, AdventureCost, Location, Duration, IncludedItems } = selectedAdventure;
    console.log(selectedAdventure);


    const GoogleLink = 'https://meet.google.com/kqq-jpon-ayc';

    const checkConsultation = () => {
        const now = new Date();
        const currentHours = now.getHours();
        const currentMinutes = now.getMinutes();
        const start = 10;
        const end = 8;
        if (currentHours > start && currentHours < end) {
            window.open(GoogleLink, '_blank');

        }
        else {
            document.getElementById('my_modal_5').showModal()
        }
    }

    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Consultation Session</h3>
                       <h1 className='flex justify-center'> <img src='https://i.ibb.co.com/M64wD7L/vector-design-no-stopping-icon-style-822882-9625.jpg' className='w-40 text-center'  /></h1>
                        <p className="py-4 text-lg font-bold">Consultation session is not going on</p>
                        <h2 className='text-lg font-bold'>Session Time is 10am to 8pm</h2>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
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

                    <button onClick={checkConsultation} className='btn '>Talk With Expert</button>

                </div>
            </div>
        </div>
    );
};

export default DetailsBody;