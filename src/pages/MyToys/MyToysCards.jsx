import { data } from 'autoprefixer';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysCards = ({ singleToy, deleteClick, setDeleteClick }) => {

    const { _id, name, quantity, price, category, description, photo } = singleToy || {}



    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://arigatou-toys-server.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {


                            setDeleteClick(!deleteClick)
                        }
                    })

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }
    return (
        <div className="card my-5 lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-40' src={photo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='md:w-10/12'>
                    <small>Category: {category}</small>
                    <p>Quantity: {quantity}</p>
                    <p>Price: ${price}</p>
                    <small>{description}</small>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/update/${_id}`} className="btn btn-success text-white">Update</Link>
                    <button className="btn btn-error text-white" onClick={() => handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyToysCards;