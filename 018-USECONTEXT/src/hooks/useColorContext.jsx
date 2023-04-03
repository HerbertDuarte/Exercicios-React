import { ColorContext } from "../context/ColorContext";
import { useContext} from "react";

export const useColorContext = () =>{

  const context = useContext(ColorContext)
  if(!context){
    console.log('Color Context fail')
  }
  else{
  }
  return {...context}
  
}