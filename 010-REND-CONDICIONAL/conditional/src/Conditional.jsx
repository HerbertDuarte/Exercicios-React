const Conditional = () => {

  const x = false
  const y = true
  return (
    <div>
      <h2>Condicional &&</h2>
      {x && <p>renderização true</p>}
      {!x && <p>renderização false</p>}
      <h2>Usando ternário</h2>
      {y == true ? <p>ternário True</p> : <p>ternário False</p>}
    </div>
  )
}

export default Conditional