import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to='/login'>
        Login
      </NavLink>
    </header>
  )
}

export default Navbar