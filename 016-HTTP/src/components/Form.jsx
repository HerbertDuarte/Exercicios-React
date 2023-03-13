import React from 'react'
import Loading from './Loading'

const Form = ({price, setPrice, name, setName, img, setImg, func, loading }) => {
  return (
    !loading && (<form onSubmit={func}>

      <input className='area'
        placeholder="Digite o nome do Produto"
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        id="name"
        value={name}
      />

      <input className='area'
        placeholder="Digite o preço"
        type="number"
        step={0.01}
        name="price"
        id="price"
        value={price}
        onChange={(e) => setPrice((e.target.value))}
      />

      <input className='area'
        type="text"
        name="img"
        id="img"
        placeholder="url"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />

      <input  className='button'
        type="submit"
        value="adicionar"
      />
  </form>)
      
    )}


export default Form