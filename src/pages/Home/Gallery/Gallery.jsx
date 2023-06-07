import React from 'react';
import { useState } from 'react';

const Gallery = ({ singleToy }) => {


    const { _id, name, quantity, price, category, rating, description, photo } = singleToy || {}
    return (

        <div className="card card-compact bg-base-100 ml-5  shadow-xl">
            <figure><img className='w-40' src={photo} alt="Toys" /></figure>
            <div className="card-body text-center">
                <h2 className="text-lg font-bold w-96 md:card-title">{name}</h2>
                <small>Category: {category}</small>
                <p>Quantity: {quantity}</p>
                <p>Price: ${price}</p>
                <p>Ratings: {rating}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div> */}
            </div>
        </div>
    );
};

export default Gallery;