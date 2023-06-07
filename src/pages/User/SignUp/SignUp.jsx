import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';

const SignUp = () => {
    const { createUser, userDetails, logOut } = useContext(AuthContext)

    const [error, setError] = useState('')
    const navigate=useNavigate()

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;


        // create user
        createUser(email, password)
            .then(result => {
                userDetails(result.user, name, photo)
                    .then(results => {
                        Swal.fire({
                            title: 'Success',
                            text: 'Account Created Successfully Now Login',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })

                    })
                    .catch(err => {
                        setError(err.message)
                    })


                logOut()
                    .then(() => { 
                        navigate('/login')
                    })
                    .then(err => {})

            })
            .catch(error => {
                setError(error.message)
            })

    }

    return (
        <div className=" md:w-96 mx-auto my-10 md:my-20">
            <h1 className='text-3xl font-bold text-cyan-400 text-center underline'>SignUp</h1>

            <form onSubmit={handleSignUp} className="">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" required className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" required className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" name='password' placeholder="password" required className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='photo' placeholder="https://demo-photo.jpg" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-cyan-400">SignUP</button>
                </div>
            </form>
            <div className='pb-10 text-center'>
                <p>Already Have An Account? <Link to="/login" className='text-yellow-400'>Login</Link></p>
            </div>
            <div className='text-red-600 text-center'>
                <p>{error}</p>
            </div>
        </div>
    );
};

export default SignUp;