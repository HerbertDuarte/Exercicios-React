import {useState} from 'react'
import { NavLink} from 'react-router-dom'

const SwitchNavLogin = () => {
  
  const active = {
    backgroundColor : '#2e2e2e',
    color : "#e0e0e0"
  }
  
  const inActive = {
    backgroundColor : '#e0e0e0',
    color : "#2e2e2e"
  }
  
    const [style, setStyle] = useState(active)
  
  return (
    <nav className='switchLogin'>
      <NavLink onClick={()=>{setStyle(active)}} style={{...style }} id='log' to="/login/enter">
        Login
      </NavLink>
      <NavLink onClick={()=>{setStyle(inActive)}} id='sign' to="/login/sign">
        Register
      </NavLink>      
    </nav>
  )
}

export default SwitchNavLogin