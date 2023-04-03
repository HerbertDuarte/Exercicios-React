import { createContext, useReducer } from "react";

export const ColorContext = createContext()

export const ColorContextProvider = ({children}) => {

  const colorReducer = (input) =>{
    
  }

  const [state, dispatch] = useReducer( colorReducer, {color : 'purple'})

  return(
    <ColorContext.Provider value={{...state}} >
      {children}
    </ColorContext.Provider>
  )
}