import React from 'react';

const AddToys = () => {




    const handleAddToys = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.toyname.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const addedToys = { name, quantity, category, description, photo }

        console.log(addedToys);
        // send data to the server 
        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <div>

            <h1 className='text-4xl font-bold text-center my-5 text-yellow-400 underline'>Add Toys</h1>
            <form onSubmit={handleAddToys}>
                {/* form row  */}
                <div className='md:flex'>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='toyname' placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full" />
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

                            <input type="text" name='category' placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='price' placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='photo' placeholder="https://demotoy.png" className="input input-bordered w-full" />
                    </label>
                </div>


                {/* form row  */}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Description</span>
                    </label>
                    <label className="input-group">
                        <textarea name='description' placeholder="Toy Description" className="input  textarea textarea-bordered textarea-sm h-5 w-full max-w-full" ></textarea>
                    </label>
                </div>



                <input type="submit" className='btn bg-cyan-400 text-white font-bold hover:bg-cyan-300 w-full  my-4' value="Add Toys" />
            </form>
        </div>
    );
};

export default AddToys;