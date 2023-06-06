import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer  p-10 bg-base-100 text-base-content">
        <Link className='text-center md:ml-10 w-fit' to="/"><img className='h-10 w-auto mx-auto' src="https://i.ibb.co/fxn1PrB/toylogo.png" alt="" />
          <h2 className='text-2xl font-bold text-cyan-400'>Arigato <span className='text-yellow-400'>Toys</span></h2>
        </Link>
        <div className='md:w-6/12 mx-auto'>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>

        {/* <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div> */}
      </footer>
      <p className='text-center text-sm text-gray-400 pb-10'>All Copyright Reserved By Ruhul Amin &copy;2023</p>
    </div>
  );
};

export default Footer;