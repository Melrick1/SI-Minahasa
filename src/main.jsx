import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import LoginAdmin from './components/login/LoginAdmin.jsx'
import LoginMasyarakat from './components/login/LoginMasyarakat.jsx'
import Register from './components/login/Register.jsx'
import NotFoundPage from './components/Homepage/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/login-admin',
    element: <LoginAdmin/>
  },
  {
    path: '/login-masyarakat',
    element: <LoginMasyarakat/>
  },
  {
    path: '/register',
    element: <Register/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
