import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=' bg-indigo-950 text-white'>
      <div className="footer  grid grid-cols-2 md:grid-cols-4 p-10">
        <Link className='text-center md:ml-10 w-fit' to="/"><img className='h-10 w-auto mx-auto' src="https://i.ibb.co/rbq6w3S/toylogo2.png" alt="" />
          <h2 className='text-2xl font-bold text-cyan-400'>Arigato <span className='text-yellow-400'>Toys</span></h2>
        </Link>
        <div className=''>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Arigato Toys</span>
          <a className="link link-hover">All Toys</a>
          <a className="link link-hover">MyToys</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">Login</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>


      </div>
      <div className='flex gap-3 justify-center mb-5'>
        <FaFacebookF className='link w-8 h-8'></FaFacebookF>
        <FaTwitter className='link w-8 h-8'></FaTwitter>
        <FaLinkedinIn className='link w-8 h-8'></FaLinkedinIn>

      </div>
      <p className='text-center text-sm text-gray-400 pb-10'>All Copyright Reserved By Ruhul Amin &copy;2023</p>
    </footer>
  );
};

export default Footer;