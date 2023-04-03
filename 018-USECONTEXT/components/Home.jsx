import { useContext } from 'react'
// import {CounterContext} from '../src/context/CounterContext'

// usando hook

import { useCounterContext } from "../src/hooks/useCounterContext"
import { useColorContext } from '../src/hooks/useColorContext'

const Home = () => {
  // const {counter, setCounter} = useContext(CounterContext)
  const {counter, setCounter} = useCounterContext()
  const {color, dispatch} = useColorContext()

  const setColor = (color) =>{
    dispatch({type:color})
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>contador : {counter}</p>
      <button onClick={()=>setCounter(counter + 1)} >Add</button>
      <p>cor = {color}</p>
      <button onClick={()=>setColor('RED')} >Red</button>
      <button onClick={()=>setColor('BLUE')} >Blue</button>
    </div>
  )
}

export default Home