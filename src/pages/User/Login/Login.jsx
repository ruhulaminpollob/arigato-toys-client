import React from 'react';
import { Link } from 'react-router-dom';
import { BeakerIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const {googleLogin}=useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault()
        const form=event.target;

        const name=form.name.value;
        const email=form.email.value;

        console.log(name,email);
    }

    // google login

    const handleGoogleLogin=()=>{
        googleLogin()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error);
        })

    }

    return (
        <div className=" md:w-96 mx-auto my-10 md:my-20">
            <h1 className='text-3xl font-bold text-cyan-400 text-center underline'>Login</h1>

            <form onSubmit={handleLogin} className="">
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-cyan-400">Login</button>
                </div>
            </form>
            <div className='pb-10 text-center'>
                <p>New to Arigato Toys? Please<Link to="/signup" className='text-yellow-400'>SignUP</Link></p>
            </div>
            <div className='text-center'>
                <hr />
                <p>Or</p>
                <button onClick={handleGoogleLogin} className='btn'>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;