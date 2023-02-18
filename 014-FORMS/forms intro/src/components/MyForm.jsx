import {useState} from 'react'
import './MyForm.css'

const MyForm = ({prop}) => {

  // Gerenciando dados de forms com react e useState
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pro, setPro] = useState(prop? prop.pro:'')

  const handleName = (e) =>{
    // evento de mudança onde o this é o element que chama a function, logo o target é o próprio elemento e o value seu valor
    const input = e.target.value
    setName(input)
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(`email : ${email} \nname : ${name}`)
    console.log('formulario enviado')
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        {/* pode-se usar o htmlFor ou envelopar o input com o label */}
        <input onChange={handleName} type="text" name="name" id="name" placeholder='Digite seu nome' />
        <label>
        <input onChange={(e)=> setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Digite seu email' />
        </label>
        <label>
          <input value={pro} type="text" name="pro" id="pro" placeholder='Digite sua profissão' />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm