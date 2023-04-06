import {NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {

  return (
    <header>

      <span translate='no'>
        Mini<b>Blog</b>
      </span>

      <nav>
        <NavLink translate='Início' to='/'>
          Home
        </NavLink>
        <NavLink to='/login'>
          Sign In
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar