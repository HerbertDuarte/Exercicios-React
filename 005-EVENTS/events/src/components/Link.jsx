export default function Link({endereco}){
  return(
    <a target={"_blank"} href={endereco}>
      <i className="fa-brands fa-react"></i> Acesse o link
    </a>
  )
}