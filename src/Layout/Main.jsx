import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation();

  useEffect(() => {
    // Get the route path and set the appropriate title
    const path = location.pathname;
    let title = '';

    switch (path) {
      case '/':
        title = 'Home Page';
        break;
      case '/alltoys':
        title = 'All Toys';
        break;
      case '/mytoys':
        title = 'My Toys';
        break;
      case '/addtoys':
        title = 'Add Toys';
        break;
      case '/blogs':
        title = 'Blogs';
        break;
      case '/signup':
        title = 'Sign Up';
        break;
      case '/update':
        title = 'Update';
        break;
      case '/login':
        title = 'Login';
        break;
      // Add more cases for other routes as needed
      default:
        title = '';
        break;
    }

    document.title = "Arigato Toys | "+title;
  }, [location]);

    return (
        <div>
            <div className='md:max-w-7xl mx-auto'>
                <NavBar></NavBar>
                
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;