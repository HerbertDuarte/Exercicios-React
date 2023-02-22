import './Game.css'
import { useState, useRef } from 'react'

const Game = ({word, category, setStage}) => {

  const [letter, setLetter] = useState('')
  const letterInputRef = useRef(null)
  const [chances, setChances] = useState(5)
  const [storageLetter, setStorageLetter] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [hits, setHits] = useState([])
  const [stateGame, setStateGame] = useState(false)
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    verifyLetter(letter)
    if (chances == 0){
      setStage('end')
    }
  }

  const verifyLetter = (letter) =>{

    if(hits.includes(letter) || wrongLetters.includes(letter)){
      alert('Essa letra já foi digitada!')
      setLetter('')
      letterInputRef.current.focus()
      return;

    }
    else if(letter.length == 0 || letter == ' '){
      alert('Digite apenas caracteres válidos!')
      setLetter('')
      return;
    }
    else{
      if(word.includes(letter)){
        setHits([
          ...hits,
        letter
        ])

        setChances(chances - 1)

      }else{
        setWrongLetters([
          ...wrongLetters,
          letter
        ])
      }
    }

    setLetter('')
    letterInputRef.current.focus()
  }

  if (wrongLetters.length == 5){
    setStage('end')
  }

  console.log('wrong letters : ' + wrongLetters)
  console.log('hits : ' + hits)
  console.log('word : ' + word)
  return (
    <div className='gamescreen'>
      <h1 className='adv'>Secret Word</h1>
      <h2 className='tip'>Dica : <span className="category">{category}</span></h2>

      <div className='container'>

        <h4 className='instruction'>Tente adivinhar uma letra da palavra:</h4>

        <div className='word'>
          {word.map((wordLetter, i) =>{
            let wordClass = ''
            hits.includes(wordLetter) ? (wordClass = 'letter') : (wordClass = 'letter blankLetter')
            return(
            <div
            key={i} 
            className={wordClass}
            >
              {wordLetter}
            </div>
            )
          })}
        </div>

        <form onSubmit={(e)=> handleSubmit(e)}>
          <input 
          maxLength={1} 
          autoComplete='off' 
          type="text" 
          name="letter" 
          id="letter"
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          ref={letterInputRef} />
        <button>Confirmar</button>
        </form>

        <div className="wrongLetters">
          <span>Letras erradas :</span>
          {wrongLetters.map((wrong, i) => {
            return (
              <span key={i} className='wl'>{wrong}</span>
            )})
            }
           
        </div>
      </div>

      <p className='points'>
        Pontuação: 000
      </p>

    </div>
  )
}

export default Game