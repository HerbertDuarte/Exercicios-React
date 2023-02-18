import './App.css'
import { Titulo } from './components/Titulo'

function App() {

  return (
    <div className="App">
        <h1>CSS no React</h1>
        <ul>
          <li>CSS components = css para cada component porém devem ser estabelecidas classes para que o css não vaze</li>
          <li>CSS inline = Deve se atentar de por os estilos entre {`{{}}`} e em camelCase </li>
          <li>A seguir um component usando css module que permite atribuir estilos em escopo aos components</li>
        </ul>
        <Titulo/>
    </div>
  )
}

export default App
