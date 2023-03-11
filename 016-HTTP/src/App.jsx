import "./App.css";
import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

function App() {
  const url = "http://localhost:3000/products";

  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [img, setImg] = useState("");

  // 4 - custom hook

  const { data: products, httpConfig } = useFetch(url);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      price : Number(price),
      img,
    };
    console.log(newProduct);
    console.log(products);

    // const response = await fetch( url, {
    //   method: 'POST',
    //   headers:{
    //     'Content-Type' : 'application/json'
    //   },
    //   body: JSON.stringify(newProduct)
    // })

    // // 3 - carregamento dinâmico

    // const addedProduct = await response.json()

    // POST com o hook

    httpConfig(newProduct, "POST");

    setName("");
    setPrice("");
    setImg("");
  };

  return (
    <div className="App">
      <h1 className="title">⚡Fast Store</h1>
      <h2 className="sutitle">Produtos</h2>
      <div className="products">
        {products &&
          products.map((product) => (
            <div key={product.id} className="product">
              <p className="description">{product.name}</p>

              <div className="image">
                <img src={product.img} alt={product.name} srcSet={product.img} />
              </div>

              <span className="price">
                R${" "}
                {product.price.toLocaleString("pt-br", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
          ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Digite o nome do Produto"
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          value={name}
        />

        <input
          placeholder="Digite o preço"
          type="number"
          step={0.01}
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice((e.target.value))}
        />

        <input
          type="text"
          name="img"
          id="img"
          placeholder="url"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />

        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default App;
