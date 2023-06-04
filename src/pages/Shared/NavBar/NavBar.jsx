import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navLink = <>
    {/* All Toys, My Toys, Add A Toy, Blogs, and User profile picture */}
        <li className='hover:text-cyan-400'><Link to="/">Home</Link></li>
        <li className='hover:text-cyan-400'><Link to="/alltoys">All Toys</Link></li>
        <li className='hover:text-cyan-400'><Link to="/mytoys">My Toys</Link></li>
        <li className='hover:text-cyan-400'><Link to="/addtoys">Add A Toy</Link></li>
        <li className='hover:text-cyan-400'><Link to="/blogs">Blogs</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="font-bold menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLink
                        }

                    </ul>
                </div>

                <Link className='text-center w-fit' to="/"><img className='h-10 w-auto mx-auto' src="https://i.ibb.co/fxn1PrB/toylogo.png" alt="" />
                    <h2 className='text-2xl font-bold text-cyan-400'>Arigato <span className='text-yellow-400'>Toys</span></h2>
                </Link>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="font-f menu menu-horizontal px-1">
                        {
                            navLink
                        }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">user</a>
            </div>
        </div>
    );
};

export default NavBar;