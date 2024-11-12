import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './MainLayout/Roots.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Orders from './Pages/Orders.jsx';
import PrivateProvider from './privateRoute/PrivateProvider.jsx';
import Profile from './Pages/Profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/order",
        element:<PrivateProvider><Orders></Orders></PrivateProvider>
      },
      {
        path:"/profile",
        element:<PrivateProvider> <Profile></Profile> </PrivateProvider>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
