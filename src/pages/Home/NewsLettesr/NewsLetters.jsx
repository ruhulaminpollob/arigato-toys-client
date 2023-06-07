import React from 'react';

const NewsLetters = () => {
    return (
        <div className='mt-10 p-5'>
            <h1 className='text-4xl text-cyan-400 underline font-bold'>NewsLetters</h1>
            <div className='py-20 space-y-10 text-center'>
                <span className="footer-title">SUBSCRIBE OUR NewsLetters TO STAY UPDATED TO NEW OFFERS AND DISCOUNTS </span>
                <div className="form-control mx-auto w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn bg-cyan-400 text-white hover:bg-cyan-500 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsLetters;