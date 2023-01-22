import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Item from './components/Item'

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName name="Herbert"/>
      <SayMyName name="Duarte"/>
      <SayMyName name="Santos"/>

      <div className="pessoas">
        <Pessoa
        idade="20"
        nome="Herbert"
        nat="baiano"
        peso="74kg"
        altura="1.72m"
        foto="https://via.placeholder.com/100"
        />
        <Pessoa
        idade="19"
        nome="Beatriz"
        nat="baiana"
        peso="60kg"
        altura="1.69m"
        foto="https://via.placeholder.com/100"
        />
      </div>

      <div>
        <Item marca={'Honda'} ano={1987}/>
        <Item marca={'Chevrolet'} ano={1976}/>
        <Item/>
      </div>
    </div>
  )
}

export default App
