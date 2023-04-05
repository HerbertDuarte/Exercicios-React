import {NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to='/login'>
        Enter
      </NavLink>
    </header>
  )
}

export default Navbar