import React from 'react';
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

import Loading from '../Shared/Loading/Loading';


const Update = () => {
    

    const toyData=useLoaderData()
    const {user,loading}=useContext(AuthContext)

    if (loading) {
        return <Loading></Loading>
    }
    
    const navigate=useNavigate()

    const {_id, name, quantity, category, price, description, photo}=toyData || {}
    

    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.toyname.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const supplierEmail=user?.email
        const supplierName=user?.displayName;
        // demo rating
        const rating=4.5;
        const addedToys = { name, quantity, category,price, description, photo ,rating ,supplierName,supplierEmail}

        // console.log(addedToys);
        // send data to the server 
        fetch(`https://arigatou-toys-server.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    
                    Swal.fire({
                        title: 'Success',
                        text: 'Successfully Updated a Toy',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate('/mytoys')
                }
                else{
                    Swal.fire({
                        title: 'Opps!',
                        text: 'Nothing changed',
                        icon: 'warning',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }
    

    return (
        <div>

            <h1 className='text-4xl font-bold text-center my-5 text-yellow-400 underline'>Update Toys</h1>
            <form onSubmit={handleUpdate}>
                {/* form row  */}
                <div className='md:flex'>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='toyname' defaultValue={name} placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form row  */}
                <div className='md:flex'>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='category' defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='photo' defaultValue={photo} placeholder="https://demotoy.jpg" className="input input-bordered w-full" />
                    </label>
                </div>


                {/* form row  */}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Description</span>
                    </label>
                    <label className="input-group">
                        <textarea name='description' defaultValue={description} placeholder="Toy Description" className="input  textarea textarea-bordered textarea-sm h-5 w-full max-w-full" ></textarea>
                    </label>
                </div>



                <input type="submit" className='btn bg-cyan-400 text-white font-bold hover:bg-cyan-300 w-full  my-4' value="Update" />
            </form>
        </div>
    );
};

export default Update;