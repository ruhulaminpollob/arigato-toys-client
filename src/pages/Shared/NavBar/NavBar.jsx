import React from 'react';
import Swal from 'sweetalert2'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Loading from '../Loading/Loading';

const NavBar = () => {

    const { user, loading, logOut } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }

    const unknownUser = "https://i.ibb.co/f4B3L41/user21.png"
    const unknownName = "Unknown"
    // logout 

    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: " You want to be loged out",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Log out'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire({
                            title: 'Successful',
                            text: 'Log out successful',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        })



        
    }
    console.log(user?.photoURL)

    const navLink = <>
        {/* All Toys, My Toys, Add A Toy, Blogs, and User profile picture */}

        <li className='hover:text-cyan-400'><Link to="/">Home</Link></li>
        <li className='hover:text-cyan-400'><Link to="/alltoys">All Toys</Link></li>
        {
            user?.email && <>
                <li className='hover:text-cyan-400'><Link to="/mytoys">My Toys</Link></li>
                <li className='hover:text-cyan-400'><Link to="/addtoys">Add A Toy</Link></li>
            </>
        }

        <li className='hover:text-cyan-400'><Link to="/blogs">Blogs</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown z-20">
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
                {
                    user ?
                        <div className='flex gap-3'>
                            <div className='border-2 border-cyan-400 h-10 w-10 rounded-full overflow-hidden'>
                                <img className='' src={user?.photoURL ? user?.photoURL : unknownUser} title={user?.displayName ? user?.displayName : unknownName} alt="" />
                            </div>
                            <button onClick={handleLogOut}><ArrowRightOnRectangleIcon className='text-yellow-400 h-6 w-6'></ArrowRightOnRectangleIcon></button>
                        </div> :
                        <Link className='hover:text-cyan-400' to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;