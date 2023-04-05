import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import FormSignIn from './components/FormSignIn'
import FormLogin from './components/FormLogin'

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
        element: <Login/>,
        children: [
          {
            path: "/login",
            element: <FormLogin/>,
          },
          {
            path: "/login/sign",
            element: <FormSignIn/>,
          },
          {
            path: "/login/enter",
            element: <FormLogin/>
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
)
