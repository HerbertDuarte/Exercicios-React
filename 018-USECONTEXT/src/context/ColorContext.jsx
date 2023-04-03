import { createContext, useReducer } from "react";

export const ColorContext = createContext()

export const colorReducer = (state, action) =>{
  //switch
  switch(action.type){
    // o state em spread no retorno é para caso tenha outros elementos no objeto, nesse caso foi usado apenas por convenção
    case 'RED':
      return {...state, color : 'red'}
    case 'BLUE':
      return{...state, color : 'blue'}
    default:
      return state
  }
}
export const ColorContextProvider = ({children}) => {

  const [state, dispatch] = useReducer( colorReducer, {color : 'purple'})

  console.log('color => ' + state.color)

  return(
    <ColorContext.Provider value={{...state, dispatch}} >
      {children}
    </ColorContext.Provider>
  )
}