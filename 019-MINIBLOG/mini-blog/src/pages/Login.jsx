import { Outlet } from "react-router-dom"
import SwitchNavLogin from "../components/SwitchNavLogin"

const Login = () => {
  return (
    <div className="forms">
      <SwitchNavLogin/>
      <Outlet/>
    </div>
  )
}

export default Login