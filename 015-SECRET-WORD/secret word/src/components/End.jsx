import './End.css'

const End = ({click}) => {
  return (
    <div className='endscreen'>
      <h1>Fim de jogo!</h1>
      <p>sua pontuação de X acertos</p>
      <button onClick={click}>
        Reiniciar o jogo
      </button>
    </div>
  )
}

export default End