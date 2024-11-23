import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const DetailsBody = () => {
    const adventures = useLoaderData();
    const params = useParams()
    const id = (params.id);
    const selectedAdventure = adventures.find(adventure => adventure.ID === id)
    const { AdventureTitle, Image, ShortDescription, AdventureCost, Location, Duration, IncludedItems, SpecialInstructions } = selectedAdventure;
    console.log(selectedAdventure);


    const GoogleLink = 'https://meet.google.com/kqq-jpon-ayc';

    const checkConsultation = () => {
        const now = new Date();
        const currentHours = now.getHours();
        const currentMinutes = now.getMinutes();
        const start = 10;
        const end = 20;
        if (currentHours > start && currentHours < end) {
            window.open(GoogleLink, '_blank');

        }
        else {
            document.getElementById('my_modal_5').showModal()
        }
    }

    return (
        <div>
            <div className=" bg-base-100  shadow-xl">

                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Consultation Session</h3>
                        <h1 className='flex justify-center'> <img src='https://i.ibb.co.com/M64wD7L/vector-design-no-stopping-icon-style-822882-9625.jpg' className='w-40 text-center' /></h1>
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

                <div className='md:flex gap-5'>
                    <div>
                        <figure>
                            <img
                                src={Image}
                                alt="Shoes" />
                        </figure>
                    </div>

                    <div className="">
                        <h2 className="text-xl font-semibold">
                            {AdventureTitle}

                        </h2>
                        <p className='text-justify'>{ShortDescription}</p>

                        <div className='flex justify-around mt-5'>

                        <div className='text-justify list-decimal'>
                            <p className='text-lg font-bold'>
                                Included Items:
                            </p>

                            {
                                IncludedItems.map((item, indx) => <li key={indx}>{item}</li>)
                            }
                        </div>
                           

                            <div>

                                <p className='text-lg font-semibold text-justify'>Adventure Cost: <div className="badge badge-accent badge-outline">{AdventureCost}</div></p>
                                <p className='text-lg font-semibold text-justify'>{Location}</p>
                                <div className="badge badge-outline text-justify">Duration:{Duration}</div>

                            </div>
                        </div>


                        <div className='text-justify list-decimal'>
                                <p className='text-lg font-bold'>
                                    Instructions
                                </p>

                                {
                                    SpecialInstructions.map((item, indx) => <li key={indx}>{item}</li>)
                                }
                            </div>


                        


                        
                        <button onClick={checkConsultation} className='btn '>Talk With Expert</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsBody;