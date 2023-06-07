import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='relative '>
            <div className='absolute left-0 right-0'>
                <h1 className='text-7xl text-red-500 font-bold text-center pt-20'>404</h1>
                <h1 className='text-4xl font-bold text-center pt-5 md:pt-20'>Page Not Found :(</h1>
            </div>
            <img className='w-fit mx-auto' src="https://i.ibb.co/BsH6DDm/anime.gif" alt="" />
            <p className='text-center bottom-0 font-bold'>Go Back To  <Link to="/" className='btn'>Home</Link> </p>
        </div>
    );
};

export default NotFound;