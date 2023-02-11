import './App.css'
import ExecFunction from './components/ExecFunction'
import { useState } from 'react'
import StateLift from './components/StateLift'

function App() {

  const showMsg = () => {
    console.log('Função executada')
  }

  const [mensagem, setMensagem] = useState('Nenhuma mensagem selecionada')

  return (
    <div className="App">
      <ExecFunction myFunction={showMsg}/>
      <h3> mensagem : {mensagem}</h3>
      <StateLift funct={setMensagem} />
    </div>
  )
}

export default App
