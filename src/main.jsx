import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MyRoutes } from './MyRoutes.jsx'
import './index.css'
import { PageStateProvider } from './MyContext.jsx'

const router = createBrowserRouter(MyRoutes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageStateProvider>
      <RouterProvider router={router}/>
    </PageStateProvider>
  </React.StrictMode>,
)
