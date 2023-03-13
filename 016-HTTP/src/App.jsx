import "./App.css";
import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import Products from "./components/Products";
import Form from "./components/Form";

function App() {
  const url = "http://localhost:3000/products";

  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [img, setImg] = useState("");

  // 4 - custom hook

  const { data: products, httpConfig , loading , err } = useFetch(url);

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
      <h2 className="subtitle">Produtos</h2>
      
      <Products products={products} loading={loading} err={err}/>

      <h2 className="subtitle">Novo produto</h2>

      <Form 
      price = {price}
      setPrice = {setPrice}
      name = {name}
      setName = {setName}
      img = {img}
      setImg = {setImg}
      loading = {loading}
      func = {handleSubmit}/>
    </div>
  );
}

export default App;
