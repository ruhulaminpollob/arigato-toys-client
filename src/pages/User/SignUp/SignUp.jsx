import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSignUp = event => {
        event.preventDefault()
    }

    return (
        <div className=" md:w-96 mx-auto my-10 md:my-20">
            <h1 className='text-3xl font-bold text-cyan-400 text-center underline'>SignUp</h1>

            <form onSubmit={handleSignUp} className="">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
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
        </div>
    );
};

export default SignUp;