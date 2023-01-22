import React from 'react'

const valid = x =>{
  if(x) return <h1>Retorno verdadeiro</h1>
  else return <h1>Retorno falso</h1>
}

const Render = () => {
  
  return(
    <>
    {valid(true)}
    {valid(false)}
    </>
  )

}

export default Render