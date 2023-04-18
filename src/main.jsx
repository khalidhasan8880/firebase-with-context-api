import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';
import AuthProvider from './component/AuthProvider';
import PrivetRoute from './component/PrivetCompo/PrivetRoute';
import Profile from './component/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: <PrivetRoute><Profile></Profile></PrivetRoute>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
