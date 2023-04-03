import { useContext } from 'react'
// import {CounterContext} from '../src/context/CounterContext'

// usando hook

import { useCounterContext } from "../src/hooks/useCounterContext"

const Home = () => {
  // const {counter, setCounter} = useContext(CounterContext)
  const {counter, setCounter} = useCounterContext()

  return (
    <div>
      <h1>Home</h1>
      <p>contador : {counter}</p>
      <button onClick={()=>setCounter(counter + 1)} >Add</button>
    </div>
  )
}

export default Home