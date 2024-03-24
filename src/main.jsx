import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MyRoutes } from './MyRoutes.jsx'
import './index.css'
import { PageContext } from './MyContext.jsx'

const router = createBrowserRouter(MyRoutes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageContext>
      <RouterProvider router={router}/>
    </PageContext>
  </React.StrictMode>,
)
