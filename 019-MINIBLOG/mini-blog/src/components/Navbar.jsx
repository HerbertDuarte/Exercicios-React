import {NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {

  return (
    <header>

      <span translate='no'>
        Mini<b>Blog</b>
      </span>

      <nav>
        <NavLink translate='no' to='/'>
          Home
        </NavLink>
        <NavLink to='/login'>
          Login
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar