import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const loadedToyData=useLoaderData()
    const [toyData,setToyData]=useState(loadedToyData)
    const { name, quantity, category, price, description, photo, rating, supplierName, supplierEmail } = toyData || {}
    return (
        <div className="card  lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-60' src={photo} alt="Album" /></figure>
            <div className="card -ml-5 card-body">
                <div className='border-l-4 border-cyan-400 pl-3'>
                    <h2 className="card-title">{name}</h2>
                    <p>Category: {category}</p>
                    <p>Price: ${price}</p>
                    <p>Ratings: {rating} 
                    {/* <StarIcon className='h-5 w-5 inline-block text-yellow-400'></StarIcon> */}
                    </p>
                    <p>Available Quantity: {quantity}</p>
                    <p>Supplier :{supplierName ? supplierName : "Unknown"}</p>
                    <p>Contact :{supplierEmail} </p>
                    <h1 className='text-2xl font-bold text-center text-cyan-400 underline'>Toy Description</h1>
                    <p className='max-w-2xl mx-auto text-gray-400'>{description}</p>
                </div>
                
            </div>
        </div>
    );
};

export default ToyDetails;