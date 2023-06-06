import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllToysCard = ({ singleToy }) => {

    const { _id, name, quantity, category, price, description, photo, rating, supplierName, supplierEmail } = singleToy || {}
    const navigate = useNavigate()
    const handelViewDetails = id => {
        Swal.fire(
            'Sorry',
            'You have to login first',
            'warning'
          )
        navigate(`/toydetails/${id}`)
    }
    return (
        <div className="card  lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-60' src={photo} alt="Album" /></figure>
            <div className="card md:w-3/4 card-body">
                <div className='border-l-4 border-cyan-400 pl-3'>
                    <h2 className="card-title">{name}</h2>
                    <p>Category: {category}</p>
                    <p>Price: $ {price}</p>
                    <p>Available Quantity: {quantity}</p>
                    <p>Ratings: {rating}</p>
                    <p>Seller: {supplierName ? supplierName : "Unknown"}</p>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => handelViewDetails(_id)} className="btn bg-cyan-400 text-white hover:text-black">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AllToysCard;