import './App.css'
import Render from './Render'
import Challenge from './Challenge'
function App() {

  return (
    <div className="App">
      <Render/>
      <Challenge a={3} b={5}/>
    </div>
  )
}

export default App
