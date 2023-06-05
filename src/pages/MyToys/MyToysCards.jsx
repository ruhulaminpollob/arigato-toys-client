import React from 'react';

const MyToysCards = ({singleToy}) => {

    const {_id, name, quantity, category, description, photo}=singleToy || {}
    const handleUpdate=id=>{
        console.log(id);
    }
    const handleDelete=id=>{
        console.log(id);
    }
    return (
        <div className="card my-5 lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-40' src={photo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='md:w-10/12'>
                    <small>Category: {category}</small>
                    <p>Price: ${quantity}</p>
                    <small>{description}</small>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-success text-white" onClick={()=>handleUpdate(_id)}>Update</button>
                    <button className="btn btn-error text-white" onClick={()=>handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyToysCards;