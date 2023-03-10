import "./App.css";
import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

function App() {
  const url = "http://localhost:3000/products";
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 4 - custom hook
  
  const { data : products } = useFetch(url)
  
  // 1 - fecth dos dadosda API

  // useEffect(() => {
  //   async function fetchApi() {
  //     const res = await fetch(url);  
  //     const data = await res.json();

  //     setProducts(data);
  //   }
  //   fetchApi();
  // }, []);

  // 2 - adicionando produtos à API 

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newProduct = {
      name,
      price
    }  
    console.log(newProduct)
    console.log(products)

    const response = await fetch( url, {
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json'
      },  
      body: JSON.stringify(newProduct)
    })  

    // 3 - carregamento dinâmico

    const addedProduct = await response.json()

    setProducts(previewState => [...previewState, newProduct])
    setName('') 
    setPrice('')
  };  


  return (
    <div className="App">
      <h1>Produtos</h1>
      {products && products.map((product) => (
        <p key={product.id}>
          Produto : {product.name} - preço : R${" "}
          {product.price.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
        </p>
      ))}

      <form onSubmit={handleSubmit}>
        <label>
          Nome do Produto
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            value={name}
          />
        </label>

        <label>
          Preço
          <input
            onChange={(e)=> setPrice(Number(e.target.value))}
            type="number"
            name="price"
            id="price"
            value={price}
          />
        </label>

        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default App;
