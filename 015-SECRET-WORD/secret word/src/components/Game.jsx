import './Game.css'

const Game = ({word, category}) => {
  return (
    <div className='gamescreen'>
      <h1 className='adv'>Secret Word</h1>
      <h2 className='tip'>Dica : <span className="category">{category}</span></h2>

      <div className='container'>

        <h4 className='instruction'>Tente adivinhar uma letra da palavra:</h4>

        <div className='word'>
          {word.map((w, i) => <div key={i} className='letter'>{w}</div>)}
        </div>

        <form>
          <input maxLength={1} autoComplete='off' type="text" name="letter" id="letter" />
        <button>Confirmar</button>
        </form>

        <div className="wrongLetters">
          <span>Letras erradas : </span>
          <span>u</span>
          <span>d</span>
        </div>
      </div>

      <p className='points'>
        Pontuação: 000
      </p>

    </div>
  )
}

export default Game