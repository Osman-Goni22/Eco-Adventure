import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
        element:<DetailsBody></DetailsBody>,
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
