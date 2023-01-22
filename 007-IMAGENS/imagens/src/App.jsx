import './App.css'
import DarkReact from './assets/darkreact.png'

function App() {

  return (
    <div className="App">
      {/* Importando imagem do Public => geralmente usado em imagens estáticas como logos, que não tem pretenção de serem alteradas */}
      <img src="/publicimg.png" alt="react" />
      {/* Importando imagem do src/assets => geralmente usado para ter a imagem como uma variavel e poder reutilizála. Também é mais prática na hora de trocar essa imagem por outra*/}
      <img src={DarkReact} alt="darkreact" />
    </div>
  )
}

export default App
