import styles from './Pessoa.module.css'

export default function Pessoa({nome, idade, foto, nat, altura, peso}){
  return(
    <div className={styles.pessoa}>
      <h3>Nome: {nome}</h3>
      <img src={foto} alt={nome} />
      <p>Idade: {idade}</p>
      <p>Naturalidade: {nat}</p>
      <p>Peso: {peso}</p>
      <p>altura: {altura}</p>
    </div>
  )
}

// export default function Pessoa({props}){
//   return(
//     <div className={styles.pessoa}>
//       <h3>Nome: {props.nome}</h3>
//       <img src={props.foto} alt={props.nome} />
//       <p>Idade: {props.idade}</p>
//       <p>Naturalidade: {props.nat}</p>
//       <p>Peso: {props.peso}</p>
//       <p>altura: {props.altura}</p>
//     </div>
//   )
// }