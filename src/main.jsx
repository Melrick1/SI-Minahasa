import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import LoginAdmin from './components/login/SigninAdmin.jsx'
import LoginMasyarakat from './components/login/SigninMasyarakat.jsx'
import Register from './components/login/Register.jsx'
import NotFoundPage from './components/Homepage/NotFound.jsx'
import MasyarakatAirmBawah from './components/LandingPageM/M-AirmBawah.jsx'
import MasyarakatWatutumouDua from './components/LandingPageM/M-WatutumouDua.jsx'
import AdminAirmBawah from './components/LandingPageA/A-AirmBawah.jsx'
import AdminWatutumouDua from './components/LandingPageA/A-WatutumouDua.jsx'

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
  {
    path: '/Masyarakat-AirmBawah',
    element: <MasyarakatAirmBawah/>
  },
  {
    path: '/Masyarakat-WatutumouDua',
    element: <MasyarakatWatutumouDua/>
  },
  {
    path: '/Admin-AirmBawah',
    element: <AdminAirmBawah/>
  },
  {
    path: '/Admin-WatutumouDua',
    element: <AdminWatutumouDua/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
