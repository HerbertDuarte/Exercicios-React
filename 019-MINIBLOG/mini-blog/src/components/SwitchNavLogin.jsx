import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useMatch } from 'react-router-dom';

const SwitchNavLogin = () => {

  const match = useMatch('/login/sign');
  const isActive = !!match; 

  const active = {
    backgroundColor: "#2e2e2e",
    color: "#e0e0e0",
  };

  const inActive = {
    backgroundColor: "#e0e0e0",
    color: "#2e2e2e",
  };
    const [style, setStyle] = useState();
    const [style2, setStyle2] = useState();

    useEffect(()=>{
      if(isActive){
        setStyle(inActive);
        setStyle2(active);
      }else{
        setStyle2(inActive);
        setStyle(active);
      }
    },[])
 
  return (
    <nav className="switchLogin">
      <NavLink
        onClick={() => {
          setStyle(active);
          setStyle2(inActive);
        }}
        style={{ ...style }}
        id="log"
        to="/login/enter"
      >
        Login
      </NavLink>
      <NavLink
        onClick={() => {
          setStyle(inActive);
          setStyle2(active);
        }}
        style={{ ...style2 }}
        id="sign"
        to="/login/sign"
        
      >
        Sign Up
      </NavLink>
    </nav>
  );
};

export default SwitchNavLogin;
