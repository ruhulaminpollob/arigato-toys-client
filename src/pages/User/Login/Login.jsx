import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const { googleLogin, login } = useContext(AuthContext)
    const [error, setError] = useState('')

    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from.pathname || '/'
    

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        login(email,password)
        .then(result=>{
           navigate(from, {replace: true})
        })
        .catch(err=>{
            setError(err.message)
        })
    }
    

    // google login

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                navigate(from, {replace: true})
            })
            .catch(error => {
                setError(error.message)
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
            <div className='text-red-600 text-center'>
                <p>{error}</p>
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