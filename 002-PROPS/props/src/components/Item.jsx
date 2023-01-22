import { ReactPropTypes } from "react"

export default function Item({marca, ano}){
  return(
    <>
      <p>{marca} - ano : {ano}</p>
    </>
  )
}
Item.defaultProps = {
  marca: 'marca indefinida',
  ano : NaN,
}