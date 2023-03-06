import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const url = 'http://localhost:3000/products'

  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function fetchApi(){
      const res = await fetch(url)
      const data = await res.json()

      setProducts(data)
    }
    fetchApi();
  }, [])

  console.log(products) 

  return (
    <div className="App">
      <h1>Produtos</h1>
      {products.map((product)=>(
        <p key={product.id}>Produto : {product.name} - preço : R${product.price}</p>
      ))}
    </div>
  )
}

export default App
