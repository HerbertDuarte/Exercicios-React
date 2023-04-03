import React from 'react'
import { useContext } from 'react'
import {CounterContext} from '../src/context/CounterContext'

const Contacts = () => {
  const {counter, setCounter} = useContext(CounterContext)
  return (
    <div>
      <h1>Contacts</h1>
      <p>Counter : {counter}</p>
      <button onClick={()=>setCounter(counter + 1)} >Add</button>
    </div>
  )
}

export default Contacts