import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const url = "http://localhost:3000/products";

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newProduct = {
      name,
      price
    }
    console.log(newProduct)
    console.log(products)

    await fetch( url, {
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newProduct)
    })

  };

  // 1 - fecth dos dadosda API

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch(url);
      const data = await res.json();

      setProducts(data);
    }
    fetchApi();
  }, []);

  // 2 - Add products

  console.log(products);

  return (
    <div className="App">
      <h1>Produtos</h1>
      {products.map((product) => (
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
