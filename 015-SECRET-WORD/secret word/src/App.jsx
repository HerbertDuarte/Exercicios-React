// CSS
import './App.css'
// COMPONENTS
import Start from './components/Start'
import End from './components/End'
import Game from './components/Game'
// LIBS
import { useState, useCallback, useEffect } from 'react'
// DATA
import { wordsList } from './data/words.js'

function App() {
  // CONSTS
  const words = wordsList  
  const [stage, setStage] = useState('start')
  const [pickedword, setPickedword] = useState('')
  const [pickedcategory, setpickedcategory] = useState('')
  const [letters, setLetters] = useState('')

  // NAVIGATION FUNCTIONS
  const startGame = () => {
    const [word, category] = pickWordAndCategoy()
    const wordLetters = word.toLowerCase().split('')
    setPickedword(word)
    setpickedcategory(category)
    setLetters(wordLetters)
    setStage('game')
  }
  const verifyLetter = () => setStage('end')
  const retry = () => setStage('start')

  const pickWordAndCategoy = () =>{
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return[ word , category ]
  }

  return (
    
    <div className="App">
      {stage == 'start' && <Start click={startGame}/>}
      {stage == 'game' && <Game word={letters} category={pickedcategory}/>}
      {stage == 'end' && <End click={retry}/>}
    </div>
  )
}

export default App
