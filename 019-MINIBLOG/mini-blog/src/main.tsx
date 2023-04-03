import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

const routes = createBrowserRouter([
  {
    path: '/',
    element : <App/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/login",
        element: <Login/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
)
