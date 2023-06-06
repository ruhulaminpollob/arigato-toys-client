import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToyCollectionsCard = ({ singleToy }) => {
    const { _id, name, quantity, category, price, description, photo, rating, supplierName, supplierEmail } = singleToy || {}
    const navigate = useNavigate()
    const handelViewDetails = id => {
        navigate(`/toydetails/${id}`)
    }
    return (
        <div className="card  lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-60' src={photo} alt="Album" /></figure>
            <div className="card -ml-5 card-body">
                <div className='border-l-4 border-cyan-400 pl-3'>
                    <h2 className="card-title">{name}</h2>
                    <p>Price: $ {price}</p>
                    <p>Ratings: {rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => handelViewDetails(_id)} className="btn bg-cyan-400 text-white hover:text-black">View Details</button>
                </div>
            </div>
        </div>

    );
};

export default ToyCollectionsCard;