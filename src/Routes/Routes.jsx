import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";
import MyToys from "../pages/MyToys/MyToys";
import NotFound from "../pages/NotFound/NotFound";

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
      }
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);
export default router;