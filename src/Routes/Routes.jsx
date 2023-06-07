import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";
import ToyDetails from "../pages/Home/ToyCollections/ToyDetails";
import MyToys from "../pages/MyToys/MyToys";
import NotFound from "../pages/NotFound/NotFound";
import Update from "../pages/Update/Update";
import Login from "../pages/User/Login/Login";
import LogOut from "../pages/User/LogOut/LogOut";
import SignUp from "../pages/User/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch(`https://arigatou-toys-server.vercel.app/toys`)
      },
      {
        path:'/alltoys',
        element:<AllToys></AllToys>,
        loader:()=>fetch(`https://arigatou-toys-server.vercel.app/toys`)
        
      },
      {
        path:'/mytoys',
        element:<PrivateRoute><MyToys /></PrivateRoute>,
        // loader: ()=>fetch("")
      },
      {
        path:'/addtoys',
        element:<PrivateRoute><AddToys /></PrivateRoute>
      },{
        path:'/blogs',
        element:<Blogs />
      },
      {
        path:'/signup',
        element:<SignUp />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/update/:id',
        element:<Update />,
        loader:({params})=>fetch(`https://arigatou-toys-server.vercel.app/toys/${params.id}`)
      },
      {
        path:'/toydetails/:id',
        element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader:async({params})=>fetch(`https://arigatou-toys-server.vercel.app/toys/${params.id}`)
      }
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);
export default router;