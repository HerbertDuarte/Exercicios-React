import {useState} from 'react'

const ListaObjeto = () => {

  const [users] = useState([
    {id: 1134, name: 'Herbert', age:20},
    {id: 3124, name: 'Beatriz', age:19}
  ])

  return (
    <>
      <ul>
        <h2>Lista Users</h2>
        {users.map(item =>(
          <li key={item.id}>{item.name} - idade : {item.age}</li>
        ))}
      </ul>
    </>
  )
}

export default ListaObjeto