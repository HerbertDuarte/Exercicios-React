import React from "react";
import { useContext } from 'react'
import {CounterContext} from '../src/context/CounterContext'

const About = () => {
  const {counter, setCounter} = useContext(CounterContext)
  return (
    <div>
      <h1>About</h1>
      <p>Counter : {counter}</p>
      <button onClick={()=>setCounter(counter + 1)} >Add</button>
    </div>
  );
};

export default About;
