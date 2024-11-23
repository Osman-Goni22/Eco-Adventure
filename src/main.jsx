import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "aos/dist/aos.css";

import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Adventures from './Components/Adventures/Adventures.jsx';
import Details from './Components/Details/Details.jsx';
import DetailsBody from './Components/DetailsBody/DetailsBody.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import Update from './Components/Update/Update.jsx';
import User from './Components/User/User.jsx';
import Reset from './Components/Reset/Reset.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import PageTitle from './Components/PageTitle/PageTitle.jsx';
import Wishlist from './Components/WishList/Wishlist.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
    children:[
      {
        path:'',
        element:<Adventures></Adventures>,
        loader:()=>fetch('/Data.json')
      },
      {
        path:'/adventure/:category',
        element:<Adventures></Adventures>,
        loader:()=>fetch('/Data.json')
      }
    ]
  },
  {
    path:'/details',
    element:<Details></Details>,
    children:[
      {
        path:'/details/:id',
        element:<PrivateRoute><DetailsBody></DetailsBody></PrivateRoute>,
        loader:()=>fetch('/Data.json')
      }
    ]
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/update',
    element:<Update></Update>
  },
  {
    path:'/user',
    element:<PrivateRoute><User></User></PrivateRoute>
  },
  {
    path:'/reset',
    element:<Reset></Reset>
  },
  {
    path:'*',
    element:<NotFound></NotFound>
  },
  {
    path:'/wishlist',
    element:<Wishlist></Wishlist>,
    loader:()=>fetch('/Data.json')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   <ToastContainer position='top-center' />
   
   </AuthProvider>
  </StrictMode>,
)
