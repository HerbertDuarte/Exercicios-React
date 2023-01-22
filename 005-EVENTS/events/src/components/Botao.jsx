export default function Botao(){
  const handleClick = e =>{
    console.log(e)
  }
  return(
    // não é chamado com () pois senão o js executa assim que carregar o component
    <>
    <button onClick={handleClick}>
      Clique aqui
    </button>

  {/* inline-functions em eventos html são usadas apenas para funções simples, não como a seguir*/}

    <button onClick={() =>{
      const mensagem = 'isso não deveria existir'

      if(true){
        console.log(mensagem)
      }
    }}>
      Clique aqui também
    </button>
    </>
  )
}