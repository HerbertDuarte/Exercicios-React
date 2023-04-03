import { useContext } from 'react'
import {CounterContext} from '../src/context/CounterContext'


const Counter = () => {

  const {counter, setCounter} = useContext(CounterContext)

  return (
    <>
      <p>Counter : {counter}</p>
      <button onClick={()=>setCounter(counter + 1)} >Add</button>
    </>
  )
}

export default Counter