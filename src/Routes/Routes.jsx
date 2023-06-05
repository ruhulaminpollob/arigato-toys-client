import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";
import MyToys from "../pages/MyToys/MyToys";
import NotFound from "../pages/NotFound/NotFound";
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
        element: <Home></Home>
      },
      {
        path:'/alltoys',
        element:<AllToys></AllToys>,
      },
      {
        path:'/mytoys',
        element:<MyToys />
      },
      {
        path:'/addtoys',
        element:<AddToys />
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
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);
export default router;