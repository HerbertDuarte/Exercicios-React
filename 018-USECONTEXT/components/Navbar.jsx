import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <NavLink to="/" >
        Home
      </NavLink >

      <NavLink to="/about" >
        About
      </NavLink>

      <NavLink to="/contacts" >
        Contacts
      </NavLink>
    </div>
  )
}

export default Navbar