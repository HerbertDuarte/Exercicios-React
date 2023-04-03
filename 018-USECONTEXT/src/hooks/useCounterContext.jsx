import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext = () =>{

  const {counter, setCounter} = useContext(CounterContext)
  const context  = {counter, setCounter}

  
  if(!context){
    console.log('Counter Context fail')
  }

  return context

}
