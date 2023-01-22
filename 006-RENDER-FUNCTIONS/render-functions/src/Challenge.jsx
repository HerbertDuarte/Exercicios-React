import React from 'react'

const Challenge = ({a,b}) => {
  return (
    <div>
      <p>{a} + {b}</p>
      <button onClick={() => console.log(a+b)}>somar</button>
    </div>
  )
}

export default Challenge