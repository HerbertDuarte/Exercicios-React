import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contacts from '../components/Contacts'


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"/",
        element : <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contacts",
        element: <Contacts/>
      }
    ]
  }   
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
