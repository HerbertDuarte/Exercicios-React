import {useState} from 'react'

const ListaNomes = () => {

  const [lista] = useState(['Matheus', 'Herbert','Beatriz', 'Patrick'])
  // Devemos sempre usar o método key para renderização de listas, pois o próprio react gera um WARNING no console sugerindo essa prática. Geralmente a renderização de lista é feita a partir de um array de objetos que já contém keys, mas quando não houver podemos usar o próprio índice do array.
  return (
    <>
      <ul>
        <h2>Lista Nomes</h2>
{/* map executa uma função para cada elemento de um array e retorna algo em cada execução */}
        {lista.map((item, indice)=> (
          <li key={indice} >{item}</li>
        ))}
      </ul>
    </>
  )
}

export default ListaNomes