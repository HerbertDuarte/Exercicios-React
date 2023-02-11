import React from 'react'

const StateLift = ({funct}) => {

  const msg = ['Hello world', 'Olá, mundo', 'Onichan']

  return (
    <div>
      <button onClick={() => funct(msg[0])}>msg 1</button>
      <button onClick={() => funct(msg[1])}>msg 2</button>
      <button onClick={() => funct(msg[2])}>msg 3</button>
    </div>
  )
}

export default StateLift