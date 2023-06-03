import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-7xl text-red-500 font-bold text-center pt-20'>404</h1>
            <h1 className='text-4xl font-bold text-center pt-20'>Page Not Found :(</h1>
            <p className='text-center '>Go Back To  <Link to="/" className='btn'>Home</Link> </p>
        </div>
    );
};

export default NotFound;