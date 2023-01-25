import {useState} from 'react'

const PrevState = () => {
  
  let [users, setUsers] = useState([
    {id: 0 , user: 'Herbert' },
    {id: 1 , user: 'Bia' },
    {id: 2 , user: 'Celma' },
    {id: 3 , user: 'José' }
  ])

  console.log(users)
  let removeRandom = () =>{

      // let randomNumber = Math.floor(Math.random() * 4)

      let randomNumber = Math.floor(Math.random() * users.length)
    setUsers(prevUser => {
      
      // return prevUser.filter((user)=>randomNumber !== user.id)

      return prevUser.filter((user, indice)=> randomNumber !== indice)
    })
  }
  return (
    <div>
      <h2>Prev State</h2>
      <ul>
        {users.map((e)=>(
           <li key={e.id}>Usuário : {e.user}</li> 
        ))}
      </ul>

      <button onClick={removeRandom}>Remove random user</button>
    </div>
  )
}

export default PrevState